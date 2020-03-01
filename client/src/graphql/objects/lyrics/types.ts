import { LyricType } from "../../../types";

export type SimpleLyric = Pick<LyricType, "id" | "content" | "likes" | "__typename">;

export type DetailedLyric = Pick<LyricType, "id" | "content" | "likes" | "song" | "__typename">;

export type GetLyricsData = {
    getLyrics: SimpleLyric[]
};