import SongModel, { SongDocument } from './model';
import { SongType, AddLyricReturnType } from './types';
import { LyricType } from '../lyric';
import { LyricDocument } from '../lyric/model';
import { AddSongInput, AddLyricInput } from './inputs';

export async function addSong(
    data: AddSongInput
): Promise<SongDocument> {
    return new SongModel(data).save();
}

export async function deleteSong(
    id: SongType["id"]
): Promise<SongDocument> {
    return SongModel.findById(id).remove();
}

export async function addLyric(
    { songId, content }: AddLyricInput
): Promise<AddLyricReturnType> {
    return SongModel.addLyric(songId, content);
}

export async function getSongs(): Promise<SongDocument[]> {
    return await SongModel.find({}).exec();
}

export async function getSong(
    id: SongType["id"]
): Promise<SongDocument | null> {
    return SongModel.findById(id);
}

export async function getLyrics(
    id: LyricType["id"]
): Promise<LyricDocument[]> {
    return SongModel.findLyrics(id);
}