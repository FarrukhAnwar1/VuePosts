<script lang = "ts">
    import { defineComponent } from "vue";
    import { collection, addDoc, serverTimestamp, getDocs, onSnapshot, type QuerySnapshot, type Unsubscribe } from "firebase/firestore"
    import { useMainStore } from "@/store/mainStore";
    import type { Post, ServerTimestamp, PostTag, PostMention, UserProfile } from "@/types/index";
    import DOMPurify from "dompurify";
    
    export default defineComponent({
        data() {
            return {
                mainStore: useMainStore(),
                content: "",
                maxContentLength: 2000,
                sendingData: false,
                userProfilesSnapshot: null as QuerySnapshot | null,
                userProfilesUnsubscribe: null as Unsubscribe | null,
            }
        },
        mounted() {
            this.userProfilesUnsubscribe = onSnapshot(collection(this.mainStore.firestore, "userProfiles"), (userProfilesSnapshot) => {
                this.userProfilesSnapshot = userProfilesSnapshot;
            });
        },
        unmounted() {
            this.userProfilesUnsubscribe && this.userProfilesUnsubscribe();
        },
        methods: {
            async handlePostButtonClick() {
                this.sendingData = true;

                const tagRegex = /#(\w+)/g;
                const tagMatches = this.content.match(tagRegex);
                const tags = tagMatches ? tagMatches.map(match => match.slice(1)) : [];

                const mentionRegex = /@([\w().]+)/g;
                const mentionMatches = this.content.match(mentionRegex);
                const mentions = mentionMatches ? mentionMatches.map(match => match.slice(1)) : [];

                const postData: Post = {
                    authorUid: this.mainStore.user?.uid!,
                    authorUsername: this.mainStore.username!,
                    content: DOMPurify.sanitize(this.trimmedContent).toString(),
                    createdAt: serverTimestamp() as ServerTimestamp
                }
                const postDocRef = await addDoc(collection(this.mainStore.firestore, "posts"), postData);
                
                if (tags.length > 0) {
                    tags.forEach(async (tag) => {
                        const tagData: PostTag = {
                            postDocumentId: postDocRef.id,
                            tag: tag,
                            createdAt: serverTimestamp()
                        }
                        await addDoc(collection(this.mainStore.firestore, "tags"), tagData);
                    });
                }

                let mentionedUid = "";
                const userProfilesSnapshot = await getDocs(collection(this.mainStore.firestore, "userProfiles"));
                if (mentions.length > 0) {
                    mentions.forEach(async (mention) =>  {
                        for (const userProfileDocument of userProfilesSnapshot.docs) {
                            const userProfileData = userProfileDocument.data() as UserProfile;
                            if (userProfileData.username === mention) {
                                mentionedUid = userProfileDocument.id;
                            }
                        }
                        const mentionData: PostMention = {
                            postDocumentId: postDocRef.id,
                            mentionedUid: mentionedUid,
                            mentionerUid: this.mainStore.user?.uid!,
                            createdAt: serverTimestamp() as ServerTimestamp
                        }
                        await addDoc(collection(this.mainStore.firestore, "mentions"), mentionData);
                    })
                }

                this.content = "";
                this.sendingData = false;
            },
            handleTabPress(event: KeyboardEvent) {
                const postContentInputRef = this.$refs.postContentInput as HTMLTextAreaElement;
                const start = postContentInputRef.selectionStart || 0;
                const end = postContentInputRef.selectionEnd || 0;
                
                if (start !== undefined && end !== undefined) {
                    if (this.suggestedMentionUsernames.size > 0) {
                        const suggestedUsernameSelectRef = this.$refs.suggestedUsernameSelect as HTMLSelectElement;
                        const newUsernameLength = suggestedUsernameSelectRef.value.length;
                        this.content = this.content.substring(0, start - this.extractMention.length) + suggestedUsernameSelectRef.value + this.content.substring(end);
                        this.$nextTick(() => {
                            postContentInputRef.selectionStart = postContentInputRef.selectionEnd = start + newUsernameLength;
                        });
                    } else {
                        const spacesToAdd = "    ";
                        this.content = this.content.substring(0, start) + spacesToAdd + this.content.substring(end);
                        this.$nextTick(() => {
                            postContentInputRef.selectionStart = postContentInputRef.selectionEnd = start + spacesToAdd.length;
                        });
                    }
                }
            },
            handleVerticalKeyPress(event: KeyboardEvent, key: "up" | "down") {
                if (this.suggestedMentionUsernames.size > 0) {
                    event.preventDefault();
                    const suggestedUsernameSelectRef = this.$refs.suggestedUsernameSelect as HTMLSelectElement;
                    const currentUsernameValue = suggestedUsernameSelectRef.value;
                    const suggestedMentionUsernamesArray = Array.from(this.suggestedMentionUsernames);
                    const currentUsernameIndex = suggestedMentionUsernamesArray.findIndex((element) => element === currentUsernameValue);
                    if (key === "up") {
                        suggestedUsernameSelectRef.value = suggestedMentionUsernamesArray[Math.max(currentUsernameIndex - 1, 0)];
                    } else if (key === "down") {
                        suggestedUsernameSelectRef.value = suggestedMentionUsernamesArray[Math.min(currentUsernameIndex + 1, suggestedMentionUsernamesArray.length - 1)];
                    }
                }
            }
        },
        computed: {
            trimmedContent(): string {
                return this.content.trim();
            },
            isPostTooLong():boolean {
                return this.trimmedContent.length > this.maxContentLength;
            },
            isPostTooShort():boolean {
                return this.trimmedContent.length === 0;
            },
            existingUsernames(): Set<string> {
                const existingUsernames = new Set<string>();
                this.userProfilesSnapshot?.forEach((userProfileDocument) => {
                    const userProfileData = userProfileDocument.data() as UserProfile;
                    existingUsernames.add(userProfileData.username);
                });
                return existingUsernames;
            },
            suggestedMentionUsernames(): Set<string> {
                const suggestedMentionUsernames = new Set<string>();
                const extractedMention = this.extractMention;
                if (extractedMention.length > 0) {
                    for (const username of this.existingUsernames) {
                        if (username.toLowerCase().startsWith(extractedMention.toLowerCase())) {
                            suggestedMentionUsernames.add(username);
                        }
                    }
                    for (const username of this.existingUsernames) {
                        if (username.toLowerCase().includes(extractedMention.toLowerCase())) {
                            suggestedMentionUsernames.add(username);
                        }
                    }
                }
                return suggestedMentionUsernames;
            },
            extractMention(): string {
                const mentionRegex = /@([\w().]+)/g;
                let cursorPosition = 0;
                const postContentInputRef = this.$refs.postContentInput as HTMLInputElement;
                if (postContentInputRef) {
                    cursorPosition = postContentInputRef.selectionStart || 0;
                }
                let match = null;
                while ((match = mentionRegex.exec(this.content)) !== null) {
                    const startIndex = match.index;
                    const endIndex = mentionRegex.lastIndex;
                    if (startIndex <= cursorPosition && cursorPosition <= endIndex) {
                        return match[1];
                    }
                }
                return "";
            },
            calculatedSelectOptionsSize(): number {
                return Math.max(2, Math.min(this.suggestedMentionUsernames.size, 6));
            }
        }
    })
</script>

<template>
    <div class = "text-center mb-2">
        <h1>Create Post</h1>
        <form @submit.prevent="handlePostButtonClick()" class = "d-flex flex-column mx-5">
            <textarea 
                type = "text" class = "mb-2" rows = "8" placeholder = "Enter content (CTRL + Enter for Submit Shortcut)" 
                ref = "postContentInput" v-model = "content"
                @keydown.up = "(event: KeyboardEvent) => handleVerticalKeyPress(event, 'up')" 
                @keydown.down = "(event: KeyboardEvent) => handleVerticalKeyPress(event, 'down')" 
                @keydown.tab.prevent = "handleTabPress" 
                @keyup.ctrl.enter = "handlePostButtonClick()">
            </textarea>
            <h3 :class = "{ redText: isPostTooLong }">Characters: {{ trimmedContent.length }} / {{ maxContentLength }}</h3>
            <h3 class = "redText" v-if = "isPostTooLong">Post content must be less than {{ maxContentLength }} characters</h3>
            <template v-if = "suggestedMentionUsernames.size > 0">
                <h3 class = "text-white-50">Suggested Usernames</h3>
                <select :size = "calculatedSelectOptionsSize" class = "text-center bg-black" ref = "suggestedUsernameSelect">
                    <option :value = "suggestMentionUsername" class = "usernameOption" v-for = "suggestMentionUsername in suggestedMentionUsernames">{{ suggestMentionUsername }}</option>
                </select>
            </template>
            <button type = "submit" class = "btn btn-primary mt-2 large-button-text" :disabled = "isPostTooLong || isPostTooShort || sendingData">Post</button>
        </form>
    </div>
</template>

<style scoped>
    textarea {
        border-radius: 10px;
        padding: 5px;
        font-size: 30px;
    }
    .redText {
        color: red;
    }
    .usernameOption {
        font-size: 30px;
        color: white;
        border-radius: 20px;
    }
    option.usernameOption:checked {
        background-image: linear-gradient(rgb(59, 58, 58), rgb(59, 58, 58));
    }
    select {
        border: none;
        outline: none;
    }
</style>