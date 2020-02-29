import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../../graphql/objects/song/queries';
import { GetSongsData } from '../../graphql/objects/song/types';
import SongList from '../../components/SongList';

const SongListContainer = () => {

    const { 
        loading, 
        error, 
        data 
    } = useQuery<GetSongsData>(GET_SONGS);

    return (
        <SongList 
            loading={loading} 
            error={error} 
            songs={data?.getSongs}/>
    );

}

export default SongListContainer;