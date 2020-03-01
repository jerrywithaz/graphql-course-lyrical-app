import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
    query GetSongs {
        getSongs {
            id,
            title
        }
    }
`;

export const GET_SONGS_AND_LYRICS = gql`
    query GetSongsAndLyrics {
        getSongs {
            id,
            title,
            lyrics {
                id,
                content,
                likes
            }
        }
    }
`;

export const GET_SONG = gql`
    query GetSong($id: ID!) {
        getSong(id: $id) {
            id,
            title
        }
    }
`;

export const GET_SONG_AND_LYRICS = gql`
    query GetSongAndLyrics($id: ID!) {
        getSong(id: $id) {
            id,
            title,
            lyrics {
                id,
                content,
                likes
            }
        }
    }
`;