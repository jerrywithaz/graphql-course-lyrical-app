import { SongType, LyricType } from "../../../types";

export type GetSongsSong = Pick<SongType, "id" | "title" | "__typename">;

export type GetSongsData = {
    getSongs: GetSongsSong[]
};

export type GetSongsAndLyricsSong = {
    lyrics: Pick<LyricType, "id" | "content" | "likes" | "__typename">[]
} & SongType;

export type GetSongsAndLyricsData = {
    getSongs: GetSongsAndLyricsSong[]
};