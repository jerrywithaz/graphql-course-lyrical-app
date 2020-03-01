import React from 'react';
import { AddSongPageProps } from './types';
import AddSong from '../../components/AddSong';
import { Link } from 'react-router-dom';

const AddSongPage = ({ history }: AddSongPageProps) => {

    function onSongAdded(id: string) {
        history.push(`/songs/${id}`);
    }

    return (
        <div>
            <div>
                <Link to="/songs">Back</Link>
            </div>
            <AddSong onSongAdded={onSongAdded}/>
        </div>
    );

};

export default AddSongPage;