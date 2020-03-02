import { MutationHookOptions } from "@apollo/react-hooks";
import { LyricType, MutationLikeArgs } from "../../../types";

export type SimpleLyric = Pick<LyricType, "id" | "content" | "likes" | "__typename">;

export type DetailedLyric = Pick<LyricType, "id" | "content" | "likes" | "song" | "__typename">;

export type GetLyricsData = {
    getLyrics: SimpleLyric[]
};

export type LikeLyricData = {
    like: Omit<SimpleLyric, "content">
};

export type LikeLyricMutationHookOptions = MutationHookOptions<
    LikeLyricData, 
    MutationLikeArgs
>;