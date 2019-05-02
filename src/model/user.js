import { queryUsers, saveUser, userError, userBizError, queryUser } from '@/service/user';

export default {
  // `namespace` will be set as file name by default
  // namespace: 'user',

  state: {
    list: [],
    person: {},
  },

  effects: {
    *queryUsers({ payload }, { call, put }) {
      const data = yield call(queryUsers, payload);
      yield put({ type: 'queryUsersSuccess', payload: data });
    },
    *saveUser({ payload }, { call, put }) {
      const response = yield call(saveUser, payload);
      if (response) {
        yield put({ type: 'addUser', payload: response });
      }
    },
    *userError(_, { call }) {
      yield call(userError);
      // console.log('已统一处理错误, 不需捕获');
    },
    *userBizError(_, { call }) {
      try {
        yield call(userBizError);
      } catch (error) {
        // console.log('捕获业务错误, 进一步处理', error);
        // do something.
      }
    },
    *queryUser({ payload }, { call, put }) {
      const data = yield call(queryUser, { id: payload });
      yield put({ type: 'queryUserSuccess', payload: data });
    },
  },

  reducers: {
    queryUsersSuccess(state, { payload }) {
      return {
        ...state,
        list: payload || [],
      };
    },
    queryUserSuccess(state, { payload }) {
      return {
        ...state,
        person: payload || {},
      };
    },
    addUser(state, { payload }) {
      return {
        ...state,
        list: [...state.list, payload],
      };
    },
  },
};
