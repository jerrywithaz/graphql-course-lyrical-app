import { useMutation } from '@apollo/react-hooks';
import { LIKE_LYRIC } from './mutations';
import { LikeLyricMutationHookOptions, LikeLyricData } from './types';
import { MutationLikeArgs } from '../../../types';


export function useLikeLyricMutation(
    options?: LikeLyricMutationHookOptions
) {
    return useMutation<LikeLyricData, MutationLikeArgs>(LIKE_LYRIC, {
        ...options
    });
}