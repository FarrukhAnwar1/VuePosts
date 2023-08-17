<script lang = "ts">
    import { useMainStore } from "@/store/mainStore";
    import { type DocumentSnapshot, type Unsubscribe, onSnapshot, doc, Timestamp } from "firebase/firestore";
    import type { UserProfile } from "@/types/index.d.ts";

    export default {
        data() {
            return {
                mainStore: useMainStore(),
                userProfileSnapshot: null as DocumentSnapshot | null,
                userProfileUnsubscribe: null as Unsubscribe | null,
            }
        },
        mounted() {
            this.userProfileUnsubscribe = onSnapshot(doc(this.mainStore.firestore, "userProfiles", this.mainStore.user?.uid!), (userProfileSnapshot) => {
                this.userProfileSnapshot = userProfileSnapshot;
            });
        },
        unmounted() {
            this.userProfileUnsubscribe && this.userProfileUnsubscribe();
        },
        computed: {
            accountCreationDate(): string {
                try {
                    const { createdAt } = this.userProfileSnapshot?.data() as UserProfile;
                    return new Timestamp(createdAt.seconds, createdAt.nanoseconds).toDate().toLocaleString(undefined, {
                        dateStyle: "medium"
                    });
                } catch {}
                return "";
            }
        }
    }
</script>

<template>
    <h1 class = "text-center">Account Created</h1>
    <h2 class = "text-center text-white-50">{{ accountCreationDate }}</h2>
</template>

<style scoped>

</style>