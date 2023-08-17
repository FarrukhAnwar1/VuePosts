<script lang = "ts">
    import { defineComponent } from "vue";
    import { collection, onSnapshot, query, orderBy, doc, deleteDoc, addDoc, getDocs, where, serverTimestamp, Timestamp } from "firebase/firestore";
    import type { Unsubscribe, QuerySnapshot } from "firebase/firestore";
    import type { PostLike, Post as PostType, PostTag, LikeDocumentId, TagDocumentId, PostWithAllData, PostDocumentId, CommentDocumentId, PostComment, PostMention, MentionDocumentId, ServerTimestamp } from "@/types/index";
    import Post from "@/components/Post.vue"
    import { useMainStore } from "@/store/mainStore";
    import Spinner from "@/components/Spinner.vue";
    import CreateComment from "@/components/CreateComment.vue";
    import Comment from "@/components/Comment.vue";
    import ChangeUsername from "@/components/ChangeUsername.vue";
    import AccountCreationDate from "@/components/AccountCreationDate.vue";
    import DeleteAccountModal from "@/components/DeleteAccountModal.vue";
    import { getAuth, signOut } from "firebase/auth";

    export default defineComponent({
        props: {
            isPersonalPage: {
                type: Boolean,
                required: true
            },
            isDetailsPage: {
                type: Boolean,
                required: true
            },
            isProfilePage: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                mainStore: useMainStore(),
                postsSnapshot: null as QuerySnapshot | null,
                tagsSnapshot: null as QuerySnapshot | null,
                likesSnapshot: null as QuerySnapshot | null,
                commentsSnapshot: null as QuerySnapshot | null,
                mentionsSnapshot: null as QuerySnapshot | null,
                postsUnsubscribe: null as Unsubscribe | null,
                likesUnsubscribe: null as Unsubscribe | null,
                commentsUnsubscribe: null as Unsubscribe | null,
                mentionsUnsubscribe: null as Unsubscribe | null,
                authorUsernameSearchString: "",
                contentSearchString: "",
                tagSearchString: "",
                sortPostsByNumLikes: false,
                accountCreationDate: "",
                auth: getAuth(),
                showDeleteAccountModal: false
            }
        },
        methods: {
            async deletePostFromFirestore(documentId: string) {
                const deleteOperations: Promise<void>[] = [];
                for (const [tagDocumentId, ] of this.posts.get(documentId)?.tags!) {
                    deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "tags", tagDocumentId)));
                }
                for (const [likeDocumentId, ] of this.posts.get(documentId)?.likes!) {
                    deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "likes", likeDocumentId)));
                }
                for (const [commentDocumentId, ] of this.posts.get(documentId)?.comments!) {
                    deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "comments", commentDocumentId)));
                }
                for (const [mentionDocumentId, mention] of this.mentions) {
                    if (mention.postDocumentId === documentId) {
                        deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "mentions", mentionDocumentId)));
                    }
                }
                deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "posts", documentId)));
                await Promise.all(deleteOperations);
                if (this.$route.name === "singlePost") {
                    this.$router.push({ name: "posts" });
                }
            },
            async deleteAccountFromFirestore() {
                let deleteOperations: Promise<void>[] = [];
                this.postDocumentIdsByAuthorUid.forEach(async (postDocumentId) => {
                    deleteOperations.push(this.deletePostFromFirestore(postDocumentId));
                });
                
                await Promise.all(deleteOperations);
                deleteOperations = [];
                for (const commentDocumentId of this.getCommentsByUserId.keys()) {
                    deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "comments", commentDocumentId)));
                }
                this.likesSnapshot?.forEach((likeDocument) => {
                    const likeDocumentData = likeDocument.data() as PostLike;
                    if (likeDocumentData.likerUid === this.mainStore.user?.uid) {
                        deleteOperations.push(deleteDoc(doc(this.mainStore.firestore, "likes", likeDocument.id)));
                    }
                });
                await Promise.all(deleteOperations);
                await deleteDoc(doc(this.mainStore.firestore, "userProfiles", this.mainStore.user?.uid!));
                this.showDeleteAccountModal = false;
                this.handleSignOutButtonClick();
            },
            clearFilters() {
                this.authorUsernameSearchString = "";
                this.contentSearchString = "";
                this.tagSearchString = "";
                this.sortPostsByNumLikes = false;
            },
            updateAuthorUsername(authorUsernameString: string) {
                this.authorUsernameSearchString = authorUsernameString
            },
            updateTag(tagString: string) {
                this.tagSearchString = tagString;
            },
            likePostFromFirestore(postDocumentId: string) {
                const likeData: PostLike = {
                    postDocumentId: postDocumentId,
                    likerUid: this.mainStore.user?.uid!,
                    createdAt: serverTimestamp()
                }
                addDoc(collection(this.mainStore.firestore, "likes"), likeData);
            },
            unlikePostFromFirestore(likeDocumentId: string) {
                deleteDoc(doc(this.mainStore.firestore, "likes", likeDocumentId));
            },
            postsSortedDescendingByLikes(posts: Map<PostDocumentId, PostWithAllData>, sortDescending: boolean): Map<PostDocumentId, PostWithAllData> {
                if (!sortDescending) {
                    return posts;
                }
                const postsArray = Array.from(posts);
                postsArray.sort(([, postA], [, postB]) => {
                    return postB.likes.size - postA.likes.size;
                });
                const sortedPosts = new Map(postsArray);
                return sortedPosts;
            },
            async getTagsForPost(postDocumentId: string) {
                const tags: PostTag[] = []
                const tagsQuery = query(collection(this.mainStore.firestore, "tags"), where("postDocumentId", "==", postDocumentId));
                const tagsSnapshot = await getDocs(tagsQuery);
                tagsSnapshot.forEach((document) => {
                    tags.push(document.data() as PostTag);
                });
                return tags;
            },
            postTagsContainSearchString(tags: Map<TagDocumentId, PostTag>, tagSearchString: string): boolean {
                let doesContain = false;
                for (const [, tagData] of tags) {
                    if (tagData.tag.toLowerCase().includes(tagSearchString.toLowerCase())) {
                        doesContain = true;
                        break;
                    }
                }
                return doesContain;
            },
            deleteCommentFromFirestore(commentDocumentId: string) {
                deleteDoc(doc(this.mainStore.firestore, "comments", commentDocumentId));
            },
            handleSignOutButtonClick() {
                signOut(this.auth);
            },
            serverTimestampToTimestamp(serverTimestamp: ServerTimestamp) {
                try {
                    return new Timestamp(serverTimestamp.seconds, serverTimestamp.nanoseconds);
                } catch {
                    return new Timestamp(0, 0);
                }
            },
            toggleDeleteAccountModal() {
                this.showDeleteAccountModal = !this.showDeleteAccountModal;
            },
        },
        components: { Post, Spinner, CreateComment, Comment, ChangeUsername, AccountCreationDate, DeleteAccountModal },
        mounted() {
            const postsQuery = query(collection(this.mainStore.firestore, "posts"), orderBy("createdAt", "desc"));
            this.postsUnsubscribe = onSnapshot(postsQuery, async (postsSnapshot) => {
                this.postsSnapshot = postsSnapshot;
                const tagsSnapshot = await getDocs(collection(this.mainStore.firestore, "tags"));
                this.tagsSnapshot = tagsSnapshot;
            });

            this.likesUnsubscribe = onSnapshot(collection(this.mainStore.firestore, "likes"), (likesSnapshot) => {
                this.likesSnapshot = likesSnapshot;
            });

            const commentsQuery = query(collection(this.mainStore.firestore, "comments"), orderBy("createdAt", "desc"));
            this.commentsUnsubscribe = onSnapshot(commentsQuery, (commentsSnapshot) => {
                this.commentsSnapshot = commentsSnapshot;
            })
            
            const mentionsQuery = query(collection(this.mainStore.firestore, "mentions"), orderBy("createdAt", "desc"));
            this.mentionsUnsubscribe = onSnapshot(mentionsQuery, (mentionsSnapshot) => {
                this.mentionsSnapshot = mentionsSnapshot;
            })
        },
        unmounted() {
            this.postsUnsubscribe && this.postsUnsubscribe();
            this.likesUnsubscribe && this.likesUnsubscribe();
            this.commentsUnsubscribe && this.commentsUnsubscribe();
            this.mentionsUnsubscribe && this.mentionsUnsubscribe();
        },
        computed: {
            posts(): Map<PostDocumentId, PostWithAllData> {
                const posts = new Map() as Map<PostDocumentId, PostWithAllData>;

                this.postsSnapshot?.forEach((postDocument) => {
                    const postData = postDocument.data() as PostType;
                    const tags = new Map() as Map<TagDocumentId, PostTag>;
                    const likes = new Map() as Map<LikeDocumentId, PostLike>;
                    const comments = new Map() as Map<CommentDocumentId, PostComment>;

                    posts.set(postDocument.id, {
                        ...postData,
                        tags: tags,
                        likes: likes,
                        comments: comments
                    });

                });

                this.tagsSnapshot?.forEach((tagDocument) => {
                    const tagData = tagDocument.data() as PostTag;
                    posts.get(tagData.postDocumentId)?.tags.set(tagDocument.id, tagData);
                });

                this.likesSnapshot?.forEach((likeDocument) => {
                    const likeData = likeDocument.data() as PostLike;
                    posts.get(likeData.postDocumentId)?.likes.set(likeDocument.id, likeData);
                });

                this.commentsSnapshot?.forEach((commentDocument) => {
                    const commentData = commentDocument.data() as PostComment;
                    posts.get(commentData.postDocumentId)?.comments.set(commentDocument.id, commentData);
                })

                return posts;
            },
            postsFilteredByDocIdAndAuthorUidAndAuthorUsernameAndContentAndTag(): Map<PostDocumentId, PostWithAllData> {
                const filteredMap = new Map();
                for (const [postDocumentId, postData] of this.posts) {
                    const postMatchesDocumentId = postDocumentId === this.documentIdForDetailsPage;
                    const postMatchesAuthorUid = postData.authorUid === this.mainStore.user?.uid;
                    const postContainsAuthorUsernameSearchString = postData.authorUsername.toLowerCase().includes(this.authorUsernameSearchString.toLowerCase());
                    const postContainsContentSearchString = postData.content.toLowerCase().includes(this.contentSearchString.toLowerCase());
                    const postContainsTagSearchString = (this.tagSearchString.length > 0 ? this.postTagsContainSearchString(postData.tags, this.tagSearchString) : true);
                    if (this.isDetailsPage && postMatchesDocumentId) {
                        filteredMap.set(postDocumentId, postData);
                    } else if (this.isPersonalPage && postMatchesAuthorUid && postContainsContentSearchString && postContainsTagSearchString) {
                        filteredMap.set(postDocumentId, postData);
                    } else if (!this.isDetailsPage && !this.isPersonalPage && postContainsAuthorUsernameSearchString && postContainsContentSearchString && postContainsTagSearchString) {
                        filteredMap.set(postDocumentId, postData);
                    }
                }
                return filteredMap;
            },
            documentIdForDetailsPage(): string {
                return this.$route.params.documentId as string;
            },
            getCommentsFromPostDocumentId(): Map<CommentDocumentId, PostComment> {
                if (this.isDetailsPage == true) {
                    return this.posts.get(this.documentIdForDetailsPage)?.comments!;
                }
                return new Map();
            },
            getCommentsByUserId(): Map<CommentDocumentId, PostComment> {
                const comments = new Map() as Map<CommentDocumentId, PostComment>;
                this.commentsSnapshot?.forEach((commentsDocument) => {
                    const commentsData = commentsDocument.data() as PostComment;
                    if (commentsData.commenterUid === this.mainStore.user?.uid) {
                        comments.set(commentsDocument.id, commentsData);
                    }
                });
                return comments;
            },
            mentions(): Map<MentionDocumentId, PostMention> {
                const mentions = new Map() as Map<MentionDocumentId, PostMention>;
                this.mentionsSnapshot?.forEach((mentionsDocument) => {
                    const mentionsData = mentionsDocument.data() as PostMention;
                    mentions.set(mentionsDocument.id, mentionsData);
                });
                return mentions;
            },
            mentionsByMentionedUid(): Map<PostDocumentId, PostMention>  {
                const mentionsByUid = new Map() as Map<PostDocumentId, PostMention>;
                for (const [, mention] of this.mentions) {
                    if (mention.mentionedUid === this.mainStore.user?.uid) {
                        mentionsByUid.set(mention.postDocumentId, mention);
                    }
                }
                return mentionsByUid;
            },
            postDocumentIdsByAuthorUid(): PostDocumentId[] {
                const postDocumentIdsByAuthorUsername: PostDocumentId[] = [];
                for (const [postDocumentId, post] of this.posts) {
                    if (post.authorUid === this.mainStore.user?.uid) {
                        postDocumentIdsByAuthorUsername.push(postDocumentId);
                    }
                }
                return postDocumentIdsByAuthorUsername;
            },
            postsByMentionedUid(): Map<PostDocumentId, PostWithAllData> {
                const postsByMentionedUid = new Map() as Map<PostDocumentId, PostWithAllData>;
                for (const [postDocumentId, post] of this.posts) {
                    if (this.mentionsByMentionedUid.has(postDocumentId)) {
                        postsByMentionedUid.set(postDocumentId, post);
                    }
                }
                return postsByMentionedUid;
            },
            newPostsByMentionedUid(): Map<PostDocumentId, PostWithAllData> {
                const newPostsByMentionedUid = new Map as Map<PostDocumentId, PostWithAllData>;
                for (const [postDocumentId, post] of this.postsByMentionedUid) {
                    if (this.serverTimestampToTimestamp(post.createdAt).toDate() > this.mainStore.userLastLogin!) {
                        newPostsByMentionedUid.set(postDocumentId, post);
                    }
                }
                return newPostsByMentionedUid;
            },
            oldPostsByMentionedUid(): Map<PostDocumentId, PostWithAllData> {
                const oldPostsByMentionedUid = new Map as Map<PostDocumentId, PostWithAllData>;
                for (const [postDocumentId, post] of this.postsByMentionedUid) {
                    if (this.serverTimestampToTimestamp(post.createdAt).toDate() < this.mainStore.userLastLogin!) {
                        oldPostsByMentionedUid.set(postDocumentId, post);
                    }
                }
                return oldPostsByMentionedUid;
            },
        }
    })
</script>

<template>
    <div v-if = "!isProfilePage">
        <div class = "text-center">
            <h1 v-if = "!isPersonalPage && !isDetailsPage">Posts</h1>
            <h1 v-if = "isPersonalPage && !isDetailsPage">My Posts</h1>
            <div class = "filters" v-if = "!isDetailsPage">
                <template v-if = "!isPersonalPage">
                    <h3>Filter by Author</h3>
                    <input type = "text" placeholder = "Author" v-model = "authorUsernameSearchString">
                </template>
                <h3>Filter by Content</h3>
                <input type = "text" placeholder = "Content" v-model = "contentSearchString">
                <h3>Filter by Tag</h3>
                <input type = "text" placeholder = "Tag" v-model = "tagSearchString">
                <h3>Sort by Likes</h3>
                <input type = "checkbox" class = "checkbox" placeholder = "false" v-model = "sortPostsByNumLikes">
                <button type = "button" class = "btn btn-secondary d-block mx-auto mt-2 large-button-text" @click = "clearFilters()">Clear Filters</button>
            </div>
        </div>
        <div class = "d-flex justify-content-center" v-if = "posts.size === 0">
            <Spinner />
        </div>
        <div v-for = "[postDocumentId, postData] in postsSortedDescendingByLikes(postsFilteredByDocIdAndAuthorUidAndAuthorUsernameAndContentAndTag, sortPostsByNumLikes)">
            <Post
                :post = "postData"
                :postDocumentId = "postDocumentId"
                :showHomeButton = "documentIdForDetailsPage ? true : false" 
                @authorUsernameClicked = "updateAuthorUsername" 
                @tagClicked = "updateTag" 
                @deletePost = "deletePostFromFirestore" 
                @postLiked = "likePostFromFirestore" 
                @postUnliked = "unlikePostFromFirestore"
            />
        </div>
        <div v-if = "isDetailsPage">
            <CreateComment v-if = "mainStore.user != null" />
            <div v-for = "[commentDocumentId, commentData] in posts.get(documentIdForDetailsPage)?.comments">
                <Comment
                    :comment = "commentData"
                    :postDocumentId = "documentIdForDetailsPage"
                    :commentDocumentId = "commentDocumentId"
                    :includePostDocumentLink = "false"
                    @deleteComment = "deleteCommentFromFirestore"
                />
            </div>
        </div>
        <div v-if = "isPersonalPage && getCommentsByUserId.size > 0">
            <h1 class = "text-center">My Comments</h1>
            <div v-for = "[commentDocumentId, commentData] in getCommentsByUserId">
                <Comment
                    :comment = "commentData"
                    :postDocumentId = "commentData.postDocumentId"
                    :commentDocumentId = "commentDocumentId"
                    :includePostDocumentLink = "true"
                    @deleteComment = "deleteCommentFromFirestore"
                />
            </div>
        </div>
    </div>
    <div v-else>
        <ChangeUsername 
            :userPostDocumentIds = "postDocumentIdsByAuthorUid"
            :userCommentDocumentIds = "getCommentsByUserId.keys()"
        />
        <div v-if = "postsByMentionedUid.size > 0">
            <h1 class = "text-center">My Mentions</h1>
            <div v-if = "newPostsByMentionedUid.size > 0">
                <h2 class = "ms-3">New</h2>
                <div v-for = "[postDocumentId, postData] in newPostsByMentionedUid">
                    <Post
                        :post = "postData"
                        :postDocumentId = "postDocumentId"
                        :showHomeButton = "documentIdForDetailsPage ? true : false" 
                        @authorUsernameClicked = "updateAuthorUsername" 
                        @tagClicked = "updateTag" 
                        @deletePost = "deletePostFromFirestore" 
                        @postLiked = "likePostFromFirestore" 
                        @postUnliked = "unlikePostFromFirestore"
                    />
                </div>
            </div>
            <div v-if = "oldPostsByMentionedUid.size > 0">
                <h2 class = "ms-3">Old</h2>
                <div v-for = "[postDocumentId, postData] in oldPostsByMentionedUid">
                    <Post
                        :post = "postData"
                        :postDocumentId = "postDocumentId"
                        :showHomeButton = "documentIdForDetailsPage ? true : false" 
                        @authorUsernameClicked = "updateAuthorUsername" 
                        @tagClicked = "updateTag" 
                        @deletePost = "deletePostFromFirestore" 
                        @postLiked = "likePostFromFirestore" 
                        @postUnliked = "unlikePostFromFirestore"
                    />
                </div>
            </div>
        </div>
        <AccountCreationDate />
        <div class = "d-flex flex-column align-items-center">
            <button type = "button" class = "btn btn-secondary large-button-text w-100" @click = "handleSignOutButtonClick()">Sign Out</button>
            <button type = "button" class = "btn btn-danger large-button-text w-100 mt-2" @click = "toggleDeleteAccountModal()">Delete Account</button>
        </div>
        <DeleteAccountModal @closeModal = "toggleDeleteAccountModal()" @deleteAccount = "deleteAccountFromFirestore()" v-if = "showDeleteAccountModal" />
    </div>
</template>

<style>
    .filters input {
        border-radius: 20px;
        padding: 6px;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }
    .checkbox{
        height: 25px;
        width: 25px;
    }
</style>
