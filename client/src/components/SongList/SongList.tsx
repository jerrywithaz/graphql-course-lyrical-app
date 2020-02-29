import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../../graphql/objects/song/queries';
import { GetSongsData, GetSongsSong } from '../../graphql/objects/song/types';

import * as Styled from './style';

const SongList = () => {

    const { loading, error, data } = useQuery<GetSongsData>(GET_SONGS);

    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    if (data) {
        return (
            <Styled.SongList>
                {data.getSongs.map((song: GetSongsSong) => (
                    <Styled.Song key={song.id}>
                        {song.title}
                    </Styled.Song>
                ))}
            </Styled.SongList>
        );
    }

    return null;

}  

export default SongList;