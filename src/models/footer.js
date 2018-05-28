import {query} from "../services/example"
import { routerRedux } from 'dva/router';
export default {
  namespace: 'footer',
  state: {
    isexit:false
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
    // *fetch(action, { call, put }) {  // eslint-disable-line
    //   let isexit = yield call(query,action.data)
    //   console.log(isexit)
    //   yield put({ type: 'save',payload:{ isexit: true } });
    // },
  },

  reducers: {
    save(state, action) {
      console.log(state);
      console.log(action);
      return { ...state, ...action.payload };
    },
  },

};
