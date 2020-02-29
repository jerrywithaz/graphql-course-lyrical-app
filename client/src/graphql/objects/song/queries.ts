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