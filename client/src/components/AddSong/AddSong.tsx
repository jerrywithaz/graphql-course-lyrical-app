import React, { useState } from 'react';
import { useAddNewSongMutation } from '../../graphql/objects/song/hooks';
import { updateSongsListAfterAddNewSong } from '../../graphql/objects/song/updaters';
import { AddNewSongData } from '../../graphql/objects/song/types';
import { AddSongProps } from './types';

const AddSong = ({ onSongAdded }: AddSongProps) => {

    const [ songTitle, setSongTitle ] = useState<string>("");

    function onNewSongAdded(data: AddNewSongData) {
        onSongAdded(data.addSong.id);
    }

    function onFormSubmit(e: React.FormEvent<Element>) {

        e.preventDefault();

        addNewSong({
            variables: {
                data: {
                    title: songTitle,
                    lyrics: []
                }
            }
        });

    }

    const [ addNewSong ] = useAddNewSongMutation({
        onCompleted: onNewSongAdded,
        update: updateSongsListAfterAddNewSong
    });

    return (
        <div>
            <h3>Add a New Song</h3>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="songTitle">Song Title: </label>
                </div>
                <input 
                    name="songTitle" 
                    value={songTitle} 
                    onChange={(e) => setSongTitle(e.target.value)}/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

}

export default AddSong;