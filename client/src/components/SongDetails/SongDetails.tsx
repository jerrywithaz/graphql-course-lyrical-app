import React from 'react';
import Button from '@material-ui/core/Button';
import { useGetSongAndLyricsQuery, useDeleteSongMutation } from '../../graphql/objects/song/hooks';
import { SongDetailsProps } from './types';

import * as Styled from './styles';

const SongDetails = ({ id, onSongDeleted }: SongDetailsProps) => {

    const { loading, error, data } = useGetSongAndLyricsQuery({
        variables: {
            id
        }
    });

    const [ deleteSong ] = useDeleteSongMutation({
        onCompleted: (data) => onSongDeleted(data.deleteSong.id)
    });

    function onDeleteButtonClick() {
        deleteSong({
            variables: {
                id
            }
        })
    }

    if (loading) {
        return <div>Loading</div>
    }

    if (error || !data) {
        return <div>Error</div>
    }

    if (!data.getSong) {
        return <div>Could not find Song.</div>
    }

    return (
        <Styled.SongDetails>
            <Styled.SongHeader>
                <h2>{data.getSong.title}</h2>
                <Button color="secondary" onClick={onDeleteButtonClick}>Delete Song</Button>
            </Styled.SongHeader>
            <Styled.StyledContent>
                <Styled.SongLyrics>
                    {data.getSong.lyrics.map((lyric) => {
                        return (
                            <div key={lyric.id}>
                                {lyric.content}
                            </div>
                        );
                    })}
                </Styled.SongLyrics>
                <Styled.AddSongLyric>
                    
                </Styled.AddSongLyric>
            </Styled.StyledContent>
        </Styled.SongDetails>
    );

};

export default SongDetails;