<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { getBanner } from '@/request/api/home.js'
//vue3写法
export default {
  setup() {
    const state = reactive({
      images: [
        "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    onMounted(async() => {
    //   axios.get("http://localhost:3000/banner?type=2").then((res) => {
    //     console.log(res);
    //     
    //   });
    let res=await getBanner();
    state.images = res.data.banners;
    //  console.log(res)
    // console.log(state.images)

    });
    

    return { state };
  },
};
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indicators--active{
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>
