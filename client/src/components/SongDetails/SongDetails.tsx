import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useGetSongAndLyricsQuery, useDeleteSongMutation } from '../../graphql/objects/song/hooks';
import { useLikeLyricMutation } from '../../graphql/objects/lyrics/hooks';
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
            }
        }).then((result) => {
            if (result.data) {
                onSongDeleted(result.data.deleteSong.id)
            }
        });
    }

    function onLikeIconClicked(id: string, likes: number) {
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
                    <List>
                        {data.getSong.lyrics.map((lyric) => {
                            return (
                                <ListItem key={lyric.id}>
                                    {lyric.content}
                                    <ListItemIcon 
                                        onClick={() => onLikeIconClicked(lyric.id, lyric.likes)}>
                                            <ThumbUpIcon/>
                                    </ListItemIcon>
                                    {lyric.likes}
                                </ListItem>
                            );
                        })}
                    </List>
                </Styled.SongLyrics>
                <Styled.AddLyricToSong>
                    <AddLyricToSong songId={data.getSong.id}/>
                </Styled.AddLyricToSong>
            </Styled.StyledContent>
        </Styled.SongDetails>
    );

};

export default SongDetails;