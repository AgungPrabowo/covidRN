import {Action} from 'redux'

export enum ActionsType {
  SetSummary = "SET_SUMMARY",
  SetMAP = "SET_MAP"
}

export interface IAction<T> extends Action {
  payload: T,
  loading: Boolean
}