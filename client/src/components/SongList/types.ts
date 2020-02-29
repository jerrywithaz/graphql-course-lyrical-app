import { ApolloError } from "apollo-boost";
import { GetSongsSong } from "../../graphql/objects/song/types";

export type SongsListProps = {
    loading: boolean,
    error: ApolloError | undefined,
    songs: GetSongsSong[] | undefined
};