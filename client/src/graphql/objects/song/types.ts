import { SongType, LyricType } from "../../../types";
import { QueryHookOptions } from "@apollo/react-hooks";

export type GetSong = Pick<SongType, "id" | "title" | "__typename">;

export type GetSongsQueryHookOptions = QueryHookOptions;

export type GetSongsData = {
    getSongs: GetSong[]
};

export type GetSongAndLyrics = {
    lyrics: Pick<LyricType, "id" | "content" | "likes" | "__typename">[]
} & SongType;

export type GetSongsAndLyricsData = {
    getSongs: GetSongAndLyrics[]
};

export type GetSongsAndLyricsQueryHookOptions = QueryHookOptions;

export type GetSongQueryHookOptions = QueryHookOptions<any, {
    id: string
}>;