import React from 'react';
import SongList from '../SongList';
import { SongsPageProps } from './types';

const SongsPage = (props: SongsPageProps) => {

    return (
        <div>
            <SongList/>
        </div>
    );

}

export default SongsPage;