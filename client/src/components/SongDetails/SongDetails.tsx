import React from 'react';
import { useGetSongAndLyricsQuery } from '../../graphql/objects/song/hooks';
import { SongDetailsProps } from './types';

const SongDetails = ({ id }: SongDetailsProps) => {
    
    const { loading, error, data } = useGetSongAndLyricsQuery({
        variables: {
            id
        }
    });

    if (loading) {
        return <div>Loading</div>
    }

    if (error || !data) {
        return <div>Error</div>
    }

    return (
        <div>
            <h2>{data.getSong.title}</h2>
            <div>
                {data.getSong.lyrics.map((lyric) => {
                    return (
                        <div key={lyric.id}>
                            {lyric.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );

};

export default SongDetails;