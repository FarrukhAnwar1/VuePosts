import type { FieldValue } from "firebase/firestore";

export interface ServerTimestamp extends FieldValue {
    seconds: number,
    nanoseconds: number
}

export interface PostTag {
    postDocumentId: string
    tag: string
    createdAt: FieldValue
}

export interface PostLike {
    postDocumentId: string
    likerUid: string
    createdAt: FieldValue
}

export interface PostComment {
    postDocumentId: string
    commenterUid: string
    commenterUsername: string
    content: string
    createdAt: ServerTimestamp
}

export interface Post {
    authorUid: string
    authorUsername: string
    content: string
    createdAt: ServerTimestamp
}

export interface PostWithAllData extends Post {
    tags: Map<TagDocumentId, PostTag>
    likes: Map<LikeDocumentId, PostLike>
    comments: Map<CommentDocumentId, PostComment>
}

export type PostDocumentId = string;
export type TagDocumentId = string;
export type LikeDocumentId = string;
export type CommentDocumentId = string;

export interface UserProfile {
    username: string
    createdAt: ServerTimestamp
}

export type UserProfileDocumentId = string;

export interface PostMention {
    postDocumentId: string
    mentionedUid: string
    mentionerUid: string
    createdAt: ServerTimestamp
}
export type MentionDocumentId = string;
