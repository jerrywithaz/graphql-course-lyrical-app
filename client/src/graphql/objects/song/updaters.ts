import { FetchResult } from 'apollo-boost';
import { GetSongsData, DeleteSongData, AddNewSongData } from './types';
import { DataProxy } from 'apollo-cache';
import { GET_SONGS } from './queries';

export function updateSongsListAfterAddNewSong(
    store: DataProxy, 
    { data: result }: FetchResult<AddNewSongData>
) {

    try {

        const data = store.readQuery<GetSongsData>({ query: GET_SONGS });
    
        if (data && result) {
            
            data.getSongs.push(result.addSong);
    
            store.writeQuery({ query: GET_SONGS, data: data });
    
        }

    } catch(e) {
        console.warn("Could not update cache for getSongs query.", e);
    }

}

export function updateSongsListAfterDeleteSong(
    store: DataProxy, 
    { data: result }: FetchResult<DeleteSongData>
) {

    try {

        const data = store.readQuery<GetSongsData>({ query: GET_SONGS });
    
        if (data && result) {
            
            const index = data.getSongs.findIndex(s => s.id === result.deleteSong.id);

            if (index > -1) {

                data.getSongs.splice(index, 1);
    
                store.writeQuery({ query: GET_SONGS, data: data });

            }
    
        }

    } catch(e) {
        console.warn("Could not update cache for getSongs query.", e);
    }

}