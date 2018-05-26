import { setToken, removeToken } from '@/utils/auth';
import { login } from '@/api/login';

const user = {
  state: {
    userPhone: '',
    userName: '',
    token: '',
    avatar: '',
  },

  mutations: {
    SET_USER_PHONE: (state, userPhone) => {
      state.userPhone = userPhone;
    },
    SET_USER_NAME: (state, userName) => {
      state.userName = userName;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
  },

  actions: {
    // 登录
    loginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(({ data }) => {
          if (data.code === '200') {
            commit('SET_TOKEN', data.data);
            setToken(data.data);
          }
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
