import axios from 'axios/index';
import qs from 'qs';
import {
  TODO_ADD,
  TODO_INIT,
  TODO_TOGGLE,
  TODO_DELETE,
  TODO_FILTER
} from './todoActionTypes';

export const initTodo = () => {
  return (dispatch) => {
    axios.get('/todo/').then((response) => {
      dispatch({
        type: TODO_INIT,
        payload: response.data.todos
      });
    });
  };
};

export const addTodo = (text) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: '/todo/new',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        text
      })
    }).then((response) => {
      dispatch({
        type: TODO_ADD,
        ...response.data.todo
      });
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios.delete(`/todo/${id}/delete`).then(() => {
      dispatch({
        type: TODO_DELETE,
        id
      });
    });
  };
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    axios.post(`/todo/${id}/toggle`).then(() => {
      dispatch({
        type: TODO_TOGGLE,
        id
      });
    });
  };
};

export const filterTodo = (filter) => {
  return {
    type: TODO_FILTER,
    filter
  };
};
