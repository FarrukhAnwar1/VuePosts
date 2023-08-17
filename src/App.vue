<script setup lang="ts">
    import { RouterView } from "vue-router";
    import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Navbar />
    <RouterView />
</template>

<style>
    body {
        background-color: black;
        color: white;
    }
    .large-button-text {
        font-size: 20px;
        font-weight: bold;
    }
</style>
