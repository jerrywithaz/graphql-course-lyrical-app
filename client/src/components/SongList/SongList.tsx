import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../../graphql/objects/song/queries';

import * as Styled from './style';

const SongList = () => {

    const { loading, error, data } = useQuery(GET_SONGS);

    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        <Styled.SongList>
            {data.getSongs.map((song: any) => (<div key={song.id}>{song.title}</div>))}
        </Styled.SongList>
    );

}  

export default SongList;