import { Action } from 'redux'

export enum ActionsType {
  SetSummary = "SET_SUMMARY",
  SetMAP = "SET_MAP",
  SetLoading = "SET_LOADING"
}

export interface IAction<T> extends Action {
  payload: T
}