<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看歌单</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swipe"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in state.musicList" :key="item">
        <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
          <img :src="item.picUrl" alt="" />
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaishi"></use>
            </svg>
            {{ changeCount(item.playCount)}}
          </span>
          <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { getMusicList } from "@/request/api/home.js";
//vue2写法
export default {
  // data() {
  //     return {
  //         musicList:[]
  //     }
  // },
  // methods: {
  //    anync getGendan(){
  //        let res=await getMusicList();
  //        this.musicList=res.data.result;
  //        console.log(res)
  //    },
  //  changeCount：function (num){
  //       if(num>=100000000){
  //         return (num/10000000).toFixed(1)+'亿'
  //     }else if(num>=10000){
  //          return (num/10000).toFixed(1)+'万'
  //     }
  //       }
  // },
  // mounted() {
  //     this.getGendan()
  //    
  // },

  //vue3写法
  setup() {
    
    const state = reactive({  //reactive响应式可以修改
      musicList: [],
    });
    onMounted(async() => {
      let res = await getMusicList();
      state.musicList = res.data.result;
      // console.log(res);
    
    });
     function changeCount(num){
        if(num>=100000000){
          return (num/10000000).toFixed(1)+'亿'
      }else if(num>=10000){
           return (num/10000).toFixed(1)+'万'
      }
        }
        
    return { state,changeCount };
  },
};
</script>

<style lang="less">
.musicList {
  width: 100%;
  height: 0.6rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 4rem;
    .my-swipe {
      height: 100%;
      img {
        width: 100%;
        height: 3rem;
      }
      .playCount{
      font-size: 0.2rem;
      display: flex;
      margin-top: -3rem;
      margin-left: 1.8rem;
      color: #fff;
      align-items: center;
	justify-content: center;
    }
    .name{
      display: flex;
       margin-top: 2.5rem;
       font-size: 0.35rem;
       
    }
    }
    
  }
}
</style>
