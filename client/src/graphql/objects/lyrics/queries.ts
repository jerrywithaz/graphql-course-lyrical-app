import { gql } from 'apollo-boost';

export const GET_LYRICS = gql`
    query GetLyrics {
        getLyrics {
            id,
            content,
            likes
        }
    }
`;