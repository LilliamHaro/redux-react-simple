import { ADD_ARTICLE, CHANGE_MODO, CHANGE_DATA } from './actionTypes';

const initialState = {
  articles: [{
    id: "1",
    title:"modo día"
  }, {
    id: "2",
    title:"modo nocturno"
  }],
  modo: true,
  data: 0
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === CHANGE_MODO) {
    return Object.assign({}, state, {
      modo: !state.modo
    });
  }

  if (action.type === CHANGE_DATA) {
    return Object.assign({}, state, {
      data: state.data + action.payload
    });
  }

  return state;
};
export default rootReducer;