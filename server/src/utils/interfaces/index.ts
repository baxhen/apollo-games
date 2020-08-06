import { WithId } from 'mongodb';
import { UserState } from 'models/User';
import { ObjectId } from 'mongodb';

export interface Database {
  insertOneEmailAndPassword<T extends UserState>(
    insertObject: object
  ): Promise<T>;

  fetchOneForLogIn<T extends UserState>(insertObject: {
    email: string;
    password: string;
  }): Promise<T>;

  fetchOneById<T>(_id: ObjectId): Promise<T>;
  insertOne<T>(insertObject: T): Promise<WithId<T>>;
}

export interface MyCallback<T> {
  (error: MyError, result: T): void;
}
export type MyError = Error | null;

export interface TeamState {
  team: string;
  name: string;
  img?: string;
  desc: string;
  contacts?: Contacts;
}

export interface Profile {
  name: string;
  img?: string;
  desc: Desc | string;
  contacts?: Contacts;
}

export interface Contacts {
  linkedin?: string;
  soundcloud?: string;
  site?: string;
  git?: string;
  twitter?: string;
  artstation?: string;
  instagram?: string;
}

enum Desc {
  CODE_LEAD = 'Code Lead',
  DESENVOLVEDOR = 'Desenvolvedor',
  ART_LEAD = 'Art Lead',
  ARTISTA = 'Artista',
  SOUND_LEAD = 'Sound Lead',
  SOUND_DESIGNER = 'Sound Designer',
  HEAD_TEAM = 'Head Team',
  D_LEAD = '3D Lead',
  D_MODELER = '3D Modeler',
  GAMER_DESIGNER = 'Game Designer',
}
enum TeamNames {
  dev = 'dev',
  sound = 'sound',
  prod = 'prod',
  art = 'art',
  game = 'game',
}
