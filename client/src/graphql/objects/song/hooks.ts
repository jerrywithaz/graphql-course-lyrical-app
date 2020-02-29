import { useQuery } from "@apollo/react-hooks";
import { GET_SONGS, GET_SONGS_AND_LYRICS, GET_SONG } from "./queries";
import { 
    GetSongsData, 
    GetSongsAndLyricsData, 
    GetSongsQueryHookOptions, 
    GetSongsAndLyricsQueryHookOptions, 
    GetSongQueryHookOptions
} from "./types";

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
    return useQuery<GetSongsData>(GET_SONG, options || {});
}