import React from 'react';
import {
    Link
  } from "react-router-dom";
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
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                </Styled.Song>
            ))}
        </Styled.SongList>
    );

}  

export default SongList;