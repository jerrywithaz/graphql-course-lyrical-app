import LyricModel, { LyricDocument } from './model';
import { LyricType } from './types';

export async function getLyric(
    id: LyricType["id"]
): Promise<LyricDocument | null> {
    return LyricModel.findById(id);
}

export async function like(
    id: LyricType["id"]
): Promise<LyricDocument | null> {
    return LyricModel.like(id);
}