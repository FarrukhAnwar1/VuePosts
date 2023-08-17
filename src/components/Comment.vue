<script lang = "ts">
    import type { PropType } from "vue";
    import type { PostComment, ServerTimestamp } from '@/types';
    import { getFirestore, Timestamp } from "firebase/firestore";
    import { useMainStore } from "@/store/mainStore";

    export default {
        props: {
            comment: {
                type: Object as PropType<PostComment>,
                required: true
            },
            postDocumentId: {
                type: String,
                required: true
            },
            commentDocumentId: {
                type: String,
                required: true
            },
            includePostDocumentLink: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                mainStore: useMainStore(),
            }
        },
        methods: {
            handleDeleteCommentButtonClick() {
                this.$emit("deleteComment", this.commentDocumentId);
            },
            handleGoToPostButtonClick() {
                this.$router.push({ 
                    name: "singlePost",
                    params: { documentId: this.postDocumentId }
                });
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
            },
            splitContent(content: string): string[] {
                return content.split(/( +|\t+|\r?\n+|#\w+)/).filter(Boolean);
            },
            wordIsTag(word: string): boolean {
                return word.startsWith("#");
            },
            wordIsMention(word: string): boolean {
                return word.startsWith("@");
            }
        },
        emits: ["deleteComment"]
    }
</script>

<template>
    <div class = "comment bg-dark">
        <div class = "d-flex justify-content-between">
            <h3 class = "text-center">{{ comment.commenterUsername }}</h3>
            <h5 class = "text-center text-white-50">{{ getFormattedDate(comment.createdAt) }}</h5>
        </div>
        <h4>
            <span v-for = "word in splitContent(comment.content)" :class = "{ tag: wordIsTag(word), mention: wordIsMention(word) }">
                {{ word }}
            </span>
        </h4>
        <div class = "d-flex justify-content-center" v-if = "mainStore.user?.uid === comment.commenterUid">
            <button type = "button" class = "btn btn-danger large-button-text" @click = "handleDeleteCommentButtonClick()">Delete</button>
        </div>
        <div class = "d-flex justify-content-center mt-2" v-if = "includePostDocumentLink">
            <button type = "button" class = "btn btn-success large-button-text" @click = "handleGoToPostButtonClick()">Go to Post</button>
        </div>
    </div>
</template>

<style scoped>
    div.comment {
        margin: 10px;
        padding: 10px;
        border-radius: 20px;
    }
    h3 {
        color: lightgrey;
    }
    h4 {
        word-wrap: break-word;
        white-space: pre-line;
    }
    .tag {
        color: aqua;
    }
    .mention {
        color: lime;
    }
</style>