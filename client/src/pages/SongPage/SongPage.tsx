import React from 'react';
import { SongPageProps } from './types';
import SongDetails from '../../components/SongDetails';

const SongPage = ({ match, history }: SongPageProps) => {

    function onSongDeleted(id: string) {
        history.push("/songs");
    }

    return (
        <div>
            {match && (
                <SongDetails id={match.params.id} onSongDeleted={onSongDeleted}/>
            )}
        </div>
    );

};

export default SongPage;