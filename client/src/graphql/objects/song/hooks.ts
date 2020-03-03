import { useQuery, useMutation } from "@apollo/react-hooks";
import { MutationAddLyricToSongArgs } from './../../../types.d';
import { ADD_NEW_SONG, DELETE_SONG, ADD_LYRIC_TO_SONG } from './mutations';
import { GET_SONGS, GET_SONGS_AND_LYRICS, GET_SONG, GET_SONG_AND_LYRICS } from "./queries";
import { 
    GetSongsData, 
    GetSongsAndLyricsData, 
    GetSongsQueryHookOptions, 
    GetSongsAndLyricsQueryHookOptions, 
    GetSongQueryHookOptions,
    GetSongData,
    GetSongAndLyricsData,
    AddNewSongData,
    AddNewSongMutationHookOptions,
    DeleteSongMutationHookOptions,
    DeleteSongData,
    AddLyricToSongData,
    AddLyricToSongMutationHookOptions
} from "./types";
import { MutationAddSongArgs, MutationDeleteSongArgs } from '../../../types';

export function useGetSongsQuery(
    options?: GetSongsQueryHookOptions
) {
    return useQuery<GetSongsData>(GET_SONGS, options || {});
}

export function useGetSongsAndLyricsQuery(
    options?: GetSongsAndLyricsQueryHookOptions
) {
    return useQuery<GetSongsAndLyricsData>(GET_SONGS_AND_LYRICS, options || {});
}

export function useGetSongQuery(
    options?: GetSongQueryHookOptions
) {
    return useQuery<GetSongData>(GET_SONG, options || {});
}

export function useGetSongAndLyricsQuery(
    options?: GetSongQueryHookOptions
) {
    return useQuery<GetSongAndLyricsData>(GET_SONG_AND_LYRICS, options || {});
}

export function useAddNewSongMutation(
    options?: AddNewSongMutationHookOptions
) {
    return useMutation<AddNewSongData, MutationAddSongArgs>(ADD_NEW_SONG, options || {});
}

export function useDeleteSongMutation(
    options?: DeleteSongMutationHookOptions
) {
    return useMutation<DeleteSongData, MutationDeleteSongArgs>(DELETE_SONG, options || {});
}

export function useAddLyricToSongMutation(
    options?: AddLyricToSongMutationHookOptions
) {
    return useMutation<AddLyricToSongData, MutationAddLyricToSongArgs>(ADD_LYRIC_TO_SONG, options || {});
}