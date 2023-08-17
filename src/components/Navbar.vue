<script lang = "ts">
    import { RouterLink } from "vue-router";
    import{ defineComponent } from "vue";
    import { useMainStore } from "@/store/mainStore";
    import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
    
    export default defineComponent({

        data() {
            return {
                mainStore: useMainStore(),
                auth: getAuth(),
                provider: new GoogleAuthProvider()
            }
        },
        methods: {
            handleSignInButtonClick() {
                signInWithPopup(this.auth, this.provider);
            },
            handleSignOutButtonClick() {
                signOut(this.auth);
            }
        },
        mounted() {
            onAuthStateChanged(this.auth, (user) => {
                this.mainStore.setUser(user);
                this.mainStore.userLastLogin = new Date();
                if (user == null) {
                    this.mainStore.username = "";
                    this.$router.push({ name: "posts" });
                }
            })
        }
    });
</script>

<template>
    <div class = "container-fluid bg-dark navbar-custom sticky-md-top py-2">
        <template v-if = "mainStore.user == null">
            <button type = "button" class = "btn btn-dark" @click = "handleSignInButtonClick()">
                <div>
                    Sign In With
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class = "google-logo">
                </div>
            </button>
        </template>
        <template v-else>
            <div class = "container-fluid text-center px-0">
                <div class = "row align-items-center">
                    <div class = "col-xs-12 col-md-2">
                        <img :src = "mainStore.user.photoURL || ``">
                    </div>
                    <div class = "col-xs-12 col-md-2 text-break">
                        <button type = "button" class = "btn btn-dark" @click = "handleSignOutButtonClick()">Sign Out</button>
                    </div>
                    <div class = "col-xs-12 col-md-2">
                        <router-link class = "btn btn-dark" :to = "{ name: 'profiles', params: { uid: mainStore.user.uid } }">Profile</router-link>
                    </div>
                    <div class = "col-xs-12 col-md-2">
                        <router-link class = "btn btn-dark" :to = "{ name: 'posts' }">Posts</router-link>
                    </div>
                    <div class = "col-xs-12 col-md-2">
                        <router-link class = "btn btn-dark" :to = "{ name: 'createPost' }">Create Post</router-link>
                    </div>
                    <div class = "col-xs-12 col-md-2">
                        <router-link class = "btn btn-dark" :to = "{ name: 'myContent' }">My Content</router-link>
                    </div>
                </div>
            </div>
        </template>
        
    </div>
</template>

<style scoped>
    .navbar-custom {
        font-size: 25px;
        color: white;
    }
    button {
        width: 100%;
        font-size: 25px;
    }
    a {
        color: white;
        text-decoration: none;
        display: inline-block;
        width: 100%;
        font-size: 25px;
    }
    a.router-link-exact-active {
        background-color: black;
    }
    .google-logo {
        width: 40px;
    }
</style>