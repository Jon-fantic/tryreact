export default {

  namespace: 'homepage',

  state: {
    isexitdeds:false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(loc=>{
        console.log(loc,2323)
      })
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
    // save(state, action) {
    //   console.log(state);
    //   console.log(action);
    //   return { ...state, ...action.payload };
    // },
  },

};
