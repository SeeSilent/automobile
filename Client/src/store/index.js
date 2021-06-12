import { createStore } from 'vuex'

export default createStore({
  state: {
    userState:{
      Login : "NoLogin",
      userID : "",
    },
    userGouwu:[]
  },
  mutations: {
    changeUserState(state,str2){
      state.userState.Login ="Login";
      state.userState.userID =str2;
    },
    inputShopCar(state,str1){
      state.userGouwu.push(str1)
    },
    tuichudenglu(state){
      state.userState.Login ="NoLogin";
      state.userState.userID ="";
      state.userGouwu = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
