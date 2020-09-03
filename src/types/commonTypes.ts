import { Action } from "redux";

export interface UrlParams {
  category?: string;
  subCategorySelected?: string;
  subCategory?: string;
  search?: string;
  Stockcode?: string;
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload: T;
}
