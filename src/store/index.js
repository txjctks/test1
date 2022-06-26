import { createStore } from "vuex";
import { getMusicLyric } from "@/request/api/item";
import { getPhoneLogin } from "@/request/api/home";
export default createStore({
  state: {
    playList: [
      {
        al: {
          id: 75378630,
          name: "未来茶屋 vol.0",
          pic: 109951164647211710,
          picUrl:
            "https://p2.music.126.net/mog628G4JLNEMi-GpWxccQ==/109951164647211717.jpg",
          pic_str: "109951164647211717",
        },
        id: 1343016814,
        name: "白猫海賊船",
        ar: [
          {
            name: "白猫海賊船",
          },
        ],
      },
    ],
    playListIndex: 0, //默认为0
    isbtnShow: true, //暂停按钮
    detailShow: false, //歌曲详情页的显示
    lyricList: {}, //歌词
    currentTime: 0, //当前时间
    duration: 0, //歌曲总时长
    isLogin: false, //判断是否登录
    isFooterMusic: true, //判断底部组件显示
    token: "",
    user:{},//用户信息
  },
  getters: {},
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    updatePlayList: function (state, value) {
      state.playList = value;
      console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value;
    },
    updatedetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updatelyricList: function (state, value) {
      state.lyricList = value;
    },
    updateCurrentTime: function (state, value) {
      // console.log(state.currentTime);
      state.currentTime = value;
    },
    updateDuration: function (state, value) {
      state.duration = value;
    },
    pushPlayList: function (state, value) {
      state.playList.push(value);
    },
    updateIsLogin: function (state, value) {
      state.isLogin = true;
    },
    updateToken: function (state, value) {
      state.token=value
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state, value){
      state.user=value
    }
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      console.log(res);
      context.commit("updatelyricList", res.data.lrc);
    },
    getLogin: async function (context, value) {
      let res = await getPhoneLogin(value);
      console.log(res);
      return res;
    },
  },
  modules: {},
});
