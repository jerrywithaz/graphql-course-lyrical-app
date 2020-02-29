import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../../graphql/objects/song/queries';

const Songs = () => {

    const { loading, error, data } = useQuery(GET_SONGS);

    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            {data.getSongs.map((song: any) => (<div key={song.id}>{song.title}</div>))}
        </>
    );

}  

export default Songs;