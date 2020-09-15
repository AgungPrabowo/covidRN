import { Convert, Summary } from '../models/ApiData';
import { ActionsType, IAction } from './actionsType';

// initial state
const initialState: Summary = Convert.initialSummary();

// reducer
export const rootReducer = (state = initialState, action: IAction<Summary>) => {
  switch (action.type) {
    case ActionsType.SetSummary:
      return { ...state, ...action.payload };

    case ActionsType.SetMAP:
      return { ...state, ...action.payload };

    case ActionsType.SetLoading:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
