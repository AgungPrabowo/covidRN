import { ActionsType } from './actionsType'
import { Dispatch } from 'redux'
import { casesByCountry } from '../utils/Api';
import { Summary, Convert } from '../models/ApiData';

export const getSummary = () => async (dispatch: Dispatch) => {
  const response = await casesByCountry();
  let result: Summary;
  if (response) {
    result = Convert.toSummary(JSON.stringify(response));
  } else {
    result = Convert.initialSummary();
  };
  dispatch({ type: ActionsType.SetSummary, payload: {...result, Loading: false} })
}

export const getMap = () => ({
  type: ActionsType.SetMAP
})