import React from 'react';
import Button from '@material-ui/core/Button';
import SongList from '../../components/SongList';
import { SongsPageProps } from './types';
import { Link } from 'react-router-dom';

const SongsPage = (props: SongsPageProps) => {

    return (
        <div>
            <div>
                <Button 
                    component={Link} 
                    to="/songs/add" 
                    color="primary" 
                    variant="contained">
                        Add New Song
                </Button>
            </div>
            <SongList/>
        </div>
    );

}

export default SongsPage;