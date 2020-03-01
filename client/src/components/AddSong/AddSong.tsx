import React, { useState } from 'react';
import { useAddNewSongMutation } from '../../graphql/objects/song/hooks';
import { AddNewSongData } from '../../graphql/objects/song/types';
import { AddSongProps } from './types';

const AddSong = ({ onSongAdded }: AddSongProps) => {

    const [ songTitle, setSongTitle ] = useState<string>("");
    

    function onNewSongAdded(data: AddNewSongData) {
        onSongAdded(data.addSong.id);
    }

    function onSubmit(e: React.FormEvent<Element>) {

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
        onCompleted: onNewSongAdded
    });

    return (
        <div>
            <h3>Add a New Song</h3>
            <form onSubmit={onSubmit}>
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