import React from 'react';
import { useGetSongsQuery } from '../../graphql/objects/song/hooks';
import { GetSong } from '../../graphql/objects/song/types';

import * as Styled from './style';

const SongList = () => {

    const { 
        loading, 
        error, 
        data 
    } = useGetSongsQuery();

    if (loading) {
        return <div>Loading</div>;
    }

    if (error || !data) {
        return <div>Error</div>;
    }

    return (
        <Styled.SongList>
            {data.getSongs.map((song: GetSong) => (
                <Styled.Song key={song.id}>
                    {song.title}
                </Styled.Song>
            ))}
        </Styled.SongList>
    );

}  

export default SongList;