import { createRouter, createWebHistory } from "vue-router"
import { useMainStore } from "@/store/mainStore";

const PostsView = () => import("@/views/PostsView.vue");
const CreatePostView = () => import("@/views/CreatePostView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "posts",
            component: PostsView,
            props: {
                isPersonalPage: false,
                isDetailsPage: false,
                isProfilePage: false
            }
        },
        {
            path: "/create-post",
            name: "createPost",
            component: CreatePostView,
            beforeEnter: (to, from) => {
                const mainStore = useMainStore();
                return mainStore.user != null;
            }
        },
        {
            path: "/my-content",
            name: "myContent",
            component: PostsView,
            props: {
                isPersonalPage: true,
                isDetailsPage: false,
                isProfilePage: false
            },
            beforeEnter: (to, from) => {
                const mainStore = useMainStore();
                return mainStore.user != null;
            }
        },
        {
            path: "/posts/:documentId",
            name: "singlePost",
            component: PostsView,
            props: {
                isPersonalPage: false,
                isDetailsPage: true,
                isProfilePage: false
            }
        },
        {
            path: "/profiles/:uid",
            name: "profiles",
            component: PostsView,
            props: {
                isPersonalPage: false,
                isDetailsPage: false,
                isProfilePage: true
            }
        }
    ]
})

export default router
