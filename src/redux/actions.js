import { ADD_ARTICLE, CHANGE_MODO, CHANGE_DATA } from './actionTypes';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function changeModo(payload) {
  return { type: CHANGE_MODO, payload }
};

export function changeData(payload) {
  return { type: CHANGE_DATA, payload }
};
