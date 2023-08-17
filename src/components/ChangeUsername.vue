<script lang = "ts">
    import { useMainStore } from "@/store/mainStore";
    import type { PropType } from "vue";
    import type { CommentDocumentId, PostDocumentId, UserProfile } from "@/types/index";
    import { collection, onSnapshot, type QuerySnapshot, type Unsubscribe } from "firebase/firestore";
    import DOMPurify from "dompurify";

    export default {
        props: {
            userPostDocumentIds: {
                type: Object as PropType<PostDocumentId[]>,
                required: true
            },
            userCommentDocumentIds: {
                type: Object as PropType<IterableIterator<CommentDocumentId>>,
                required: true
            }
        },
        data() {
            return {
                mainStore: useMainStore(),
                username: "",
                warningMessage: "Username must not contain spaces and must be between 1-15 characters long",
                userProfilesSnapshot: null as QuerySnapshot | null,
                userProfilesUnsubscribe: null as Unsubscribe | null,
                sendingData: false
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
            async handleChangeUsernameButtonClick() {
                this.sendingData = true;
                await this.mainStore.setUsername(DOMPurify.sanitize(this.username), true, this.userPostDocumentIds, [...this.userCommentDocumentIds]);
                this.username = "";
                this.sendingData = false;
            }
        },
        computed: {
            isValidUsername(): boolean {
                return !this.usernameAlreadyExists && this.username.length >= 1 && this.username.length <= 15 && !this.username.includes(" ");
            },
            existingUsernames(): Set<string> {
                const existingUsernames = new Set<string>();
                this.userProfilesSnapshot?.forEach((userProfileDocument) => {
                    const userProfileData = userProfileDocument.data() as UserProfile;
                    existingUsernames.add(userProfileData.username);
                });
                return existingUsernames;
            },
            usernameAlreadyExists(): boolean {
                return this.existingUsernames.has(this.username);
            }
        }
    }
</script>

<template>
    <div class = "d-flex flex-column align-items-center">
        <h1>Change Username</h1>
        <form @submit.prevent>
            <input type = "text" class = "text-center w-100" placeholder = "Enter username" v-model = "username">
            <h3 class = "text-danger text-center" v-if = "!isValidUsername && username.length > 0">{{ usernameAlreadyExists ? 'Username already exists' : warningMessage }}</h3>
            <button type = "submit" class = "btn btn-primary mt-2 large-button-text d-block w-100" :disabled = "!isValidUsername || sendingData" @click = "handleChangeUsernameButtonClick()">Change</button>
        </form>
    </div>
</template>

<style scoped>
    input[type = "text"] {
        border-radius: 10px;
        padding: 5px;
        font-size: 30px;
    }
</style>