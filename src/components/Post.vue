<script lang = "ts">
    import { defineComponent } from "vue";
    import type { PropType } from "vue";
    import type { PostWithAllData, ServerTimestamp } from "@/types/index";
    import { useMainStore } from "@/store/mainStore";
    import { Timestamp } from "firebase/firestore";

    export default defineComponent({
        data() {
            return {
                mainStore: useMainStore()
            }
        },
        props: {
            post: {
                type: Object as PropType<PostWithAllData>,
                required: true
            },
            postDocumentId: {
                type: String,
                required: true
            },
            showHomeButton: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            deletePost(documentId: string) {
                this.$emit("deletePost", documentId);
            },
            tagClicked(tagString: string) {
                this.$emit("tagClicked", tagString);
            },
            authorUsernameClicked(authorUsernameString: string) {
                this.$emit("authorUsernameClicked", authorUsernameString);
            },
            postLiked(documentId: string) {
                this.$emit("postLiked", documentId);
            },
            postUnliked(documentId: string) {
                this.$emit("postUnliked", documentId);
            },
            handleCommentButtonClick(documentId: string) {
                this.$router.push({ 
                    name: "singlePost", 
                    params: { documentId: documentId }
                });
            },
            handleHomeButtonClick() {
                this.$router.push({
                    name: "posts"
                });
            },
            splitContent(content: string): string[] {
                return content.split(/( +|\t+|\r?\n+|#\w+)/).filter(Boolean);
            },
            wordIsTag(word: string): boolean {
                return word.startsWith("#");
            },
            wordIsMention(word: string): boolean {
                return word.startsWith("@");
            },
            getFormattedDate(serverTimestampValue: ServerTimestamp): string {
                try {
                    const postTimestamp = new Timestamp(serverTimestampValue.seconds, serverTimestampValue.nanoseconds);
                    return postTimestamp.toDate().toLocaleString(undefined, {
                        dateStyle: "long",
                        timeStyle: "short"
                    });
                } catch {
                    return "";
                }
            }
        },
        computed: {
            getLikeDocumentIdFromUid(): string {
                for (const [likeDocumentId, likeData] of this.post.likes) {
                    if (likeData.likerUid === this.mainStore.user?.uid) {
                        return likeDocumentId;
                    }
                }
                return "";
            }
        },
        emits: ["deletePost", "tagClicked", "authorUsernameClicked", "postLiked", "postUnliked"]
    });
</script>

<template>
    <div class = "post">
        <div class = "d-flex justify-content-between">
            <h1 class = "author-display-name text-center text-break" @click = "authorUsernameClicked(post.authorUsername)">{{ post?.authorUsername }}</h1>
            <h4 class = "text-center text-white-50">{{ getFormattedDate(post.createdAt) }}</h4>
        </div>
        <h3>
            <span v-for = "word in splitContent(post.content)" :class = "{ tag: wordIsTag(word), mention: wordIsMention(word) }" @click = "tagClicked(word.slice(1))">
                {{ word }}
            </span>
        </h3>
        <div class = "container-fluid text-center">
            <div class = "row">
                <div class = "col-xs-12 col-md-4">
                    <div class = "d-flex justify-content-center align-items-center">
                        <span v-if = "mainStore.user != null">
                            <button type = "button" class = "btn btn-success d-inline large-button-text" @click = "postLiked(postDocumentId)" v-if = "!(getLikeDocumentIdFromUid.length > 0)">Like</button>
                            <button type = "button" class = "btn btn-warning d-inline large-button-text" v-else @click = "postUnliked(getLikeDocumentIdFromUid)">Unlike</button>
                        </span>
                        <h5 class = "d-inline-block ms-2 pt-2">Likes: {{ post.likes.size }}</h5>
                    </div>
                </div>
                <div class = "col-xs-12 col-md-4 mt-2 mt-md-0">
                    <div class = "d-flex justify-content-center align-items-center" v-if = "!showHomeButton">
                        <button type = "button" class = "btn btn-primary large-button-text" @click = "handleCommentButtonClick(postDocumentId)">Comments</button>
                        <h5 class = "d-inline-block ms-2 pt-2">Comments: {{ post.comments.size }}</h5>
                    </div>
                    <button type = "button" class = "btn btn-primary large-button-text" @click = "handleHomeButtonClick()" v-else>Home</button>
                </div>
                <div class = "col-xs-12 col-md-4 mt-2 mt-md-0">
                    <button type = "button" class = "btn btn-danger large-button-text" :class = "{ invisible: post.authorUid !== mainStore.user?.uid }" @click = "deletePost(postDocumentId)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    div.post {
        background-color: darkslategrey;
        margin: 10px;
        padding: 10px;
        border-radius: 20px;
    }
    .tag {
        color: aqua;
        cursor: pointer;
    }
    .mention {
        color: lime;
    }
    .author-display-name {
        cursor: pointer;
    }
    h1 {
        color: lightgrey;
    }
    h3 {
        word-wrap: break-word;
        white-space: pre-line;
    }
</style>