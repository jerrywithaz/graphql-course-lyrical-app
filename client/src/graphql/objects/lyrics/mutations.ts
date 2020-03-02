import { gql } from 'apollo-boost';

export const LIKE_LYRIC = gql`
    mutation LikeLyric($id: ID!) {
        like(id: $id) {
            id,
            likes
        }
    }
`;