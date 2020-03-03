import { SimpleLyric } from '../../graphql/objects/lyrics/types';

export type SimpleLyricListProps = {
    lyrics: SimpleLyric[],
    onLyricLike: (lyric: SimpleLyric) => void
};