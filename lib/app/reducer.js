// @flow
import type { Action, State } from '../../types';

// import { assoc, lensPath, set } from 'ramda';

const initialState: State = {
  navigation: {
    level1: {},
  },
  prefs: {},
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // case 'SUBSCRIBE_TO_BUS_SUCCESS': {
    //   return assoc('isSubscribedToBus', true, state);
    // }

    // case 'TOGGLE_SHOW_ONLY_ACTIVE': {
    //   const valueLens = lensPath(['prefs', 'showOnlyActive']);
    //   const newValue = action.toggleValue;

    //   return set(valueLens, newValue, state);
    // }

    default:
      return state;
  }
};

export default reducer;
