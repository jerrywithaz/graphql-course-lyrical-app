import { MutationAddLyricToSongArgs } from './../../../types.d';
import { QueryHookOptions, MutationHookOptions } from "@apollo/react-hooks";
import { SimpleLyric } from './../lyrics/types';
import { SongType, MutationAddSongArgs, MutationDeleteSongArgs } from "../../../types";

export type SimpleSong = Pick<SongType, "id" | "title" | "__typename">;

export type DetailedSong = {
    lyrics: SimpleLyric[]
} & SimpleSong;

export type GetSongsQueryHookOptions = QueryHookOptions;

export type GetSongsData = {
    getSongs: SimpleSong[]
};

export type GetSongsAndLyricsData = {
    getSongs: DetailedSong[]
};

export type GetSongsAndLyricsQueryHookOptions = QueryHookOptions;

export type GetSongData = {
    getSong: SimpleSong | null
};

export type GetSongQueryHookOptions = QueryHookOptions<any, {
    id: string
}>;

export type GetSongAndLyricsData = {
    getSong: DetailedSong | null
};

export type AddNewSongData = {
    addSong: SimpleSong
};

export type AddNewSongMutationHookOptions = MutationHookOptions<
    AddNewSongData, 
    MutationAddSongArgs
>;

export type DeleteSongData = {
    deleteSong: SimpleSong
};

export type DeleteSongMutationHookOptions = MutationHookOptions<
    DeleteSongData, 
    MutationDeleteSongArgs
>;

export type AddLyricToSongData = {
    addLyricToSong: {
        lyric: SimpleLyric,
        song: SimpleSong
    }
};

export type AddLyricToSongMutationHookOptions = MutationHookOptions<
    AddLyricToSongData, 
    MutationAddLyricToSongArgs
>;