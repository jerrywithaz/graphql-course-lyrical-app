import React from 'react';
import {
    Link
  } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useGetSongsQuery } from '../../graphql/objects/song/hooks';
import { SimpleSong } from '../../graphql/objects/song/types';

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
        <List>
            {data.getSongs.map((song: SimpleSong) => (
                <ListItem key={song.id} component={Link} to={`/songs/${song.id}`}>
                    {song.title}
                </ListItem>
            ))}
        </List>
    );

}  

export default SongList;