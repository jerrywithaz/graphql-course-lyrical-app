import React from 'react';
import { SongPageProps } from './types';
import SongDetails from '../SongDetails';

const SongPage = ({ match }: SongPageProps) => {

    return (
        <div>
            {match && (
                <SongDetails id={match.params.id}/>
            )}
        </div>
    );

};

export default SongPage;