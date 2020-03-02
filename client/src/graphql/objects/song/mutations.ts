import { gql } from 'apollo-boost';

export const ADD_NEW_SONG = gql`
    mutation AddNewSong($data: AddSongInput!) {
        addSong(data: $data) {
            id,
            title
        }
    }
`;

export const DELETE_SONG = gql`
    mutation DeleteSong($id: ID!) {
        deleteSong(id: $id) {
            id,
            title
        }
    }
`;

export const ADD_LYRIC_TO_SONG = gql`
    mutation AddLyricToSong($data: AddLyricToSongInput!) {
        addLyricToSong(data: $data) {
            lyric {
                id,
                content,
                likes
            },
            song {
                id,
                lyrics {
                    id
                }
            }
        }
    }
`;