import { LyricType } from "../../../types";

export type GetLyricsLyric = Pick<LyricType, "id" | "content" | "likes" | "__typename">;

export type GetLyricsData = {
    getLyrics: GetLyricsLyric[]
};