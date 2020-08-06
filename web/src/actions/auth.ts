import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';
import { history } from '../history';

export interface User {
  password: string;
  email: string;
  _id?: string;
  message?: string;
}

export interface LogUserInAction {
  type: ActionTypes.logUserInAction;
  payload: User;
}

export const logUserIn = (userData: User) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post<User>('/api/fetch/user', userData);

    dispatch<LogUserInAction>({
      type: ActionTypes.logUserInAction,
      payload: response.data,
    });

    if (!response.data.message) {
      history.push('/backend/dashboard');
    }
  } catch (error) {
    console.log(error);
  }
};
