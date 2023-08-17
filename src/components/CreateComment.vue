<script lang = "ts">
    import { defineComponent } from "vue";
    import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"
    import { useMainStore } from "@/store/mainStore";
    import type { PostComment, ServerTimestamp } from "@/types/index";
    import DOMPurify from "dompurify";

    export default defineComponent({

        data() {
            return {
                mainStore: useMainStore(),
                content: "",
                maxContentLength: 1000,
                sendingData: false
            }
        },
        methods: {
            async handleCommentButtonClick() {
                this.sendingData = true;
                const commentData: PostComment = {
                    postDocumentId: this.$route.params.documentId as string,
                    commenterUid: this.mainStore.user?.uid!,
                    commenterUsername: this.mainStore.username!,
                    content: DOMPurify.sanitize(this.content).toString(),
                    createdAt: serverTimestamp() as ServerTimestamp
                };
                await addDoc(collection(this.mainStore.firestore, "comments"), commentData);
                this.content = "";
                this.sendingData = false;
            }
        },
        computed: {
            trimmedContent(): string {
                return this.content.trim();
            },
            isCommentTooLong():boolean {
                return this.trimmedContent.length > this.maxContentLength;
            },
            isPostTooShort():boolean {
                return this.trimmedContent.length === 0;
            }
        }
    })
</script>

<template>
    <div class = "text-center mb-2">
        <form @submit.prevent="handleCommentButtonClick()" class = "d-flex flex-column mx-5">
            <textarea type = "text" class = "mb-2" rows = "3" placeholder = "Enter content (CTRL + Enter for Submit Shortcut)" v-model = "content" @keyup.ctrl.enter = "handleCommentButtonClick()"></textarea>
            <h3 :class = "{ redText: isCommentTooLong }">Characters: {{ trimmedContent.length }} / {{ maxContentLength }}</h3>
            <h3 class = "redText" v-if = "isCommentTooLong">Comment content must be less than {{ maxContentLength }} characters</h3>
            <button type = "submit" class = "btn btn-primary mt-2 large-button-text" :disabled = "isCommentTooLong || isPostTooShort || sendingData">Comment</button>
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
</style>