import {query} from "../services/example"
export default {

  namespace: 'user',

  state: {
    isexit:false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch(action, { call, put }) {  // eslint-disable-line
      alert(1)
      let isexit = yield call(query,action.data)
      console.log(isexit)
      yield put({ type: 'save',data:isexit });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, isexit: action.data };
    },
  },

};
