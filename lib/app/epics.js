// @flow
import type { Action, Dependencies } from '../../types';
import { Observable } from 'rxjs';

import logger from 'debug';

const debug = logger('smtApp:appEpic');

export const startApp = (action$: any) => {
  return action$.ofType('APP_START').switchMap(() => Observable.of());
};
