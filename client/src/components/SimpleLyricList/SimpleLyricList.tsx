import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { SimpleLyric } from '../../graphql/objects/lyrics/types';
import { SimpleLyricListProps } from './types';

const SimpleLyricList = ({ lyrics, onLyricLike }: SimpleLyricListProps) => {
    return (
        <List>
            {lyrics.map((lyric: SimpleLyric) => {
                return (
                    <ListItem key={lyric.id}>
                        {lyric.content}
                        <ListItemIcon 
                            onClick={() => onLyricLike(lyric)}>
                                <ThumbUpIcon/>
                        </ListItemIcon>
                        {lyric.likes}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default SimpleLyricList;