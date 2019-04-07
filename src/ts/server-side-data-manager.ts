import * as axios from 'axios';
// ???: "path.d.ts" is exists in node_modules/@types/node, but not recognized
// @ts-ignore
import * as path from 'path';
import Game from './game';

export default class ServerSideDataManager {
  public static async getGameList(): Promise<Game[]> {
    return new Promise((resolve, reject) => {
      const url = 'http://' + path.join(location.host, 'games.json');
      axios.default.get(url).then((res) => {
        resolve(res.data as Game[]);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
