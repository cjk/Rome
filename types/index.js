// @flow
import type {
  Dispatch as ReduxDispatch,
  Middleware as ReduxMiddleware,
  Reducer as ReduxReducer,
  Store as ReduxStore,
} from 'redux';

import type { Observable } from 'rxjs';

type Navigation = {
  level1: Object,
};

// TODO: App-state
export type State = {
  navigation: Navigation,
  prefs: Object,
};
export type Dependencies = {};

// Actions
export type Action =
  | { type: 'APP_START' }
  | { type: 'SET_THEME', theme: string };

export type Middleware = Array<ReduxMiddleware<State, Action>>;
export type Reducers = { +[name: $Keys<State>]: ReduxReducer<State, Action> };
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;

// TODO: Bummer. There are no redux-observable flow definitions yet. Therefore,
// we have to use .filter instead of .ofType and we have to use
// https://flow.org/en/docs/lang/refinements.
export type Epic = (
  actions$: Observable<Action>
  //   dependencies: Dependencies
) => Observable<Action>;

export type Action$ = Observable<Action>;
