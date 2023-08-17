<script lang = "ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        methods: {
            closeModal() {
                this.$emit("closeModal");
            },
            deleteAccount() {
                this.$emit("deleteAccount");
            }
        },
        emits: ["closeModal", "deleteAccount"]
    })
</script>

<template>
    <div class = "modal-backdrop" @click.self = "closeModal()">
        <div class = "modal-custom bg-dark">
            <h1 class = "text-center">Deleting account will also result in all posts, comments, likes, tags, and mentions being deleted. Are you sure you want to continue?</h1>
            <div class = "d-flex justify-content-around">
                <button type = "button" class = "btn btn-secondary w-100 large-button-text me-4" @click = "closeModal()">Cancel</button>
                <button type = "button" class = "btn btn-danger w-100 large-button-text" @click = "deleteAccount()">Delete</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    div.modal-backdrop {
        z-index: 0;
        background-color: rgb(0, 0, 0, 0.5);
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    div.modal-custom {
        width: 800px;
        height: auto;
        margin: 100px auto;
        border-radius: 10px;
        padding: 20px;
    }
</style>