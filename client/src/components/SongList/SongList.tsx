import React from 'react';
import { GetSongsSong } from '../../graphql/objects/song/types';
import { SongsListProps } from './types';

import * as Styled from './style';

const SongList = ({ loading, error, songs }: SongsListProps) => {

    if (loading) {
        return <div>Loading</div>;
    }

    if (error || !songs) {
        return <div>Error</div>;
    }

    return (
        <Styled.SongList>
            {songs.map((song: GetSongsSong) => (
                <Styled.Song key={song.id}>
                    {song.title}
                </Styled.Song>
            ))}
        </Styled.SongList>
    );

}  

export default SongList;