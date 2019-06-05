import * as axios from 'axios';
// ???: "path.d.ts" is exists in node_modules/@types/node, but not recognized
// @ts-ignore
import * as path from 'path';
import Game from './game';
import * as firebase from './firebase-config';

export default class ServerSideDataManager {
  public static async getGameList(): Promise<Game[]> {
    return new Promise((resolve, reject) => {
      firebase
        .default
        .connect()
        .firestore()
        .collection('games')
        .get()
        .then((snapshot) => {
          const data: any[] = [];
          snapshot.forEach((doc) => data.push(doc.data()));
          resolve(data.sort((a, b) => a.id > b.id ? 1 : -1) as Game[]);
        }).catch((reason) => {
          reject(reason);
        });
    });
  }
}
