import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
{
    getSongs {
        id,
        title
    }
}`;

export const GET_SONGS_AND_LYRICS = gql`
{
    getSongs {
        id,
        title,
        lyrics {
            id,
            content,
            likes
        }
    }
}`;