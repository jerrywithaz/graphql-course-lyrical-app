import React from 'react';
import Button from '@material-ui/core/Button';
import { useGetSongAndLyricsQuery, useDeleteSongMutation } from '../../graphql/objects/song/hooks';
import { updateSongsListAfterDeleteSong } from '../../graphql/objects/song/updaters';
import { useLikeLyricMutation } from '../../graphql/objects/lyrics/hooks';
import { SimpleLyric } from '../../graphql/objects/lyrics/types';
import SimpleLyricList from '../SimpleLyricList';
import AddLyricToSong from '../AddLyricToSong';
import { SongDetailsProps } from './types';

import * as Styled from './styles';

const SongDetails = ({ id, onSongDeleted }: SongDetailsProps) => {

    const { loading, error, data } = useGetSongAndLyricsQuery({
        variables: {
            id
        }
    });

    const [ deleteSong ] = useDeleteSongMutation();
    const [ likeLyric ] = useLikeLyricMutation();

    function onDeleteButtonClick() {
        deleteSong({
            variables: {
                id
            },
            update: updateSongsListAfterDeleteSong
        }).then((result) => {
            if (result.data) {
                onSongDeleted(result.data.deleteSong.id)
            }
        });
    }

    function onLyricLike({ id, likes }: SimpleLyric) {
        likeLyric({
            variables: {
                id
            },
            optimisticResponse: {
                like: {
                    __typename: "LyricType",
                    id: id,
                    likes: likes + 1
                }
            }
        });
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
                <h1>{data.getSong.title}</h1>
                <Button 
                    color="secondary" 
                    onClick={onDeleteButtonClick} 
                    variant="contained">
                        Delete Song
                </Button>
            </Styled.SongHeader>
            <Styled.StyledContent>
                <Styled.SongLyrics>
                    <SimpleLyricList 
                        lyrics={data.getSong.lyrics} 
                        onLyricLike={onLyricLike}/>
                </Styled.SongLyrics>
                <Styled.AddLyricToSong>
                    <AddLyricToSong 
                        songId={data.getSong.id}/>
                </Styled.AddLyricToSong>
            </Styled.StyledContent>
        </Styled.SongDetails>
    );

};

export default SongDetails;