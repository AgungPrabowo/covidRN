import { ActionsType } from './actionsType'
import { Dispatch } from 'redux'
import { casesByCountry } from '../utils/Api';
import { Summary, Convert, Map } from '../models/ApiData';

export const getSummary = () => async (dispatch: Dispatch) => {
  const response = await casesByCountry(true);
  let result: Summary;
  if (response) {
    result = Convert.toSummary(JSON.stringify(response));
  } else {
    result = Convert.initialSummary();
  };
  dispatch({ type: ActionsType.SetSummary, payload: { ...result, Loading: false } })
}

export const getMap = () => async (dispatch: Dispatch) => {
  let initialMap: Map = {
    success: false,
    message: [],
    Loading: false
  };

  initialMap.Loading = true;
  dispatch({ type: ActionsType.SetLoading, payload: { ...initialMap } })
  const response = await casesByCountry(false);
  let result: Map;
  if (response) {
    result = Convert.toMap(JSON.stringify(response));
  } else {
    initialMap.Loading = false;
    result = initialMap;
  };

  dispatch({ type: ActionsType.SetMAP, payload: { ...result, Loading: false } })
}
