import { defineStore } from "pinia";
import type { User } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import type { UserProfile, PostDocumentId, ServerTimestamp, CommentDocumentId } from "@/types/index";

export const useMainStore = defineStore("main", {
    state: () => {
        return { 
            user: null as User | null,
            username: null as string | null,
            userLastLogin: null as Date | null,
            firestore: getFirestore()
        }
    },
    actions: {
        setUser(user: User | null) {
            this.user = user;
            if (user != null) {
                this.setUsername(user.displayName?.replace(/\s/g, "")!);
            } else {
                this.username == "";
            }
        },
        async setUsername(username: string, updateUsername: boolean = false, 
                          postDocumentIdsToUpdate: PostDocumentId[] = [],
                          commentDocumentIdsToUpdate: CommentDocumentId[] = [],  
                         ) {
            if (updateUsername) {
                setDoc(doc(this.firestore, "userProfiles", this.user?.uid!), { username: username }, { merge: true });
                postDocumentIdsToUpdate.forEach(postDocumentId => {
                    setDoc(doc(this.firestore, "posts", postDocumentId), { authorUsername: username }, { merge: true });
                });
                commentDocumentIdsToUpdate.forEach(commentDocumentId => {
                    setDoc(doc(this.firestore, "comments", commentDocumentId), { commenterUsername: username }, { merge: true });
                });
                this.username = username;
            } else {
                const userProfileDocumentSnapshot = await getDoc(doc(this.firestore, "userProfiles", this.user?.uid!));
                if (userProfileDocumentSnapshot.exists()) {
                    const userProfileData = userProfileDocumentSnapshot.data() as UserProfile;
                    this.username = userProfileData.username;
                } else {
                    this.username = username;
                    const userProfileData: UserProfile = {
                        username: username,
                        createdAt: serverTimestamp() as ServerTimestamp,
                    }
                    setDoc(doc(this.firestore, "userProfiles", this.user?.uid!), userProfileData);
                }
            }
        },
        generateRandomString(length: number) {
            const characters = "0123456789";
            let randomString = "";
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              randomString += characters[randomIndex];
            }
            return randomString;
        }
    }
});