import React, { useState } from 'react';
import { useAddLyricToSongMutation } from '../../graphql/objects/song/hooks';
import { AddLyricToSongProps } from './types';

const AddLyricToSong = ({ songId }: AddLyricToSongProps) => {

    const [ content, setContent ] = useState<string>("");
    const [ addLyricToSong ] = useAddLyricToSongMutation();
    
    function onFormSubmit(e: React.FormEvent<Element>) {

        e.preventDefault();

        addLyricToSong({
            variables: {
                data: {
                    songId,
                    content
                }
            }
        }).then(() => {
            setContent("");
        });

    }

    return (
        <div id="add-lyric">
            <h2>Add Lyric</h2>
            <form id="add-lyric-form" onSubmit={onFormSubmit}>
                <input name="content" value={content} onChange={e => setContent(e.target.value)}/>
                <button>Add Lyric</button>
            </form>
        </div>
    );

}

export default AddLyricToSong;