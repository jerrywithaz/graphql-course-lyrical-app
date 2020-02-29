export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AddLyricOutput = {
   __typename?: 'AddLyricOutput',
  lyric: LyricType,
  song: SongType,
};

export type AddLyricToSongInput = {
  songId: Scalars['String'],
  content: Scalars['String'],
};

export type AddSongInput = {
  title: Scalars['String'],
  lyrics: Array<LyricInput>,
};

export type LyricInput = {
  id: Scalars['ID'],
  likes: Scalars['Int'],
  content: Scalars['String'],
  songId: Scalars['String'],
  song: SongInput,
};

export type LyricType = {
   __typename?: 'LyricType',
  id: Scalars['ID'],
  likes: Scalars['Int'],
  content: Scalars['String'],
  songId: Scalars['String'],
  song: SongType,
};

export type Mutation = {
   __typename?: 'Mutation',
  like: LyricType,
  addSong: SongType,
  deleteSong: SongType,
  addLyricToSong: AddLyricOutput,
};


export type MutationLikeArgs = {
  id: Scalars['ID']
};


export type MutationAddSongArgs = {
  data: AddSongInput
};


export type MutationDeleteSongArgs = {
  id: Scalars['String']
};


export type MutationAddLyricToSongArgs = {
  data: AddLyricToSongInput
};

export type Query = {
   __typename?: 'Query',
  getLyrics?: Maybe<Array<LyricType>>,
  getLyric?: Maybe<LyricType>,
  getSongs: Array<SongType>,
  getSong?: Maybe<SongType>,
};


export type QueryGetLyricsArgs = {
  songId: Scalars['ID']
};


export type QueryGetLyricArgs = {
  id: Scalars['ID']
};


export type QueryGetSongArgs = {
  id: Scalars['ID']
};

export type SongInput = {
  id: Scalars['ID'],
  title: Scalars['String'],
  lyrics: Array<LyricInput>,
};

export type SongType = {
   __typename?: 'SongType',
  id: Scalars['ID'],
  title: Scalars['String'],
  lyrics: Array<LyricType>,
};

