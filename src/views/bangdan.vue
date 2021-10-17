<template>
  <div class="bangdan">
    <div class="box-head">
      <div class="box-head-inside">
        <h2 class="h2-1">网易云-个人yc版</h2>
        <ul class="ul-1">
          <li @click="handleToBack">回到首页</li>
          <li>我的音乐</li>
          <li>朋友</li>
          <li>商城</li>
          <li @click="handleToMv_go">音乐MV</li>
          <li>客户端</li>
        </ul>
        <div class="my-personal">
          <img src="../assets/images/1.jpg" alt class="img1" />
        </div>
        <h3 class="h3-1">创作者中心</h3>
        <div class="input_search">
          <input type="text" name id="input-1" placeholder="歌曲搜索" />
        </div>
      </div>
    </div>
    <div class="box-head-bottom">
      <ul class="ul-2">
        <li>推荐</li>
        <li>排行榜</li>
        <li @click="handleToMore_detail">歌单</li>
        <li @click="handleDianTai">主播电台</li>
        <li @click="handleToSonger">歌手</li>
        <li>新碟上架</li>
      </ul>
    </div>
    <div class="box-main">
      <div class="box-main-left">
        <h1 class="box-main-left-h1">云音乐特色榜</h1>

        <li class="box-main-left-li" v-for="item in getother_data" :key="item.id">
          <img :src="item.coverImgUrl" alt class="box-main-left-img" />
          <h3 class="box-main-left-h3">{{item.name}}</h3>
          <p class="box-main-left-p">刚刚更新</p>
        </li>

        <h1 class="box-main-left-h1">全球媒体榜</h1>

        <li class="box-main-left-li" v-for="item in getBangDang_data" :key="item.id">
          <img :src="item.picUrl" alt class="box-main-left-img" />
          <h3 class="box-main-left-h3">{{item.name}}</h3>
          <p class="box-main-left-p">刚刚更新</p>
        </li>
      </div>

      <!-- 右侧区域 -->
      <div class="box-main-right">
        <div class="box-main-right-display">
          <img
            src="https://p2.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg"
            class="box-main-right-display-img"
          />
          <h4 class="box-main-right-display-h4">飙升榜</h4>
        </div>

        <div class="display-song">
          <h3 class="display-song-h3">
            歌曲列表
            <p>(共199首)</p>
          </h3>

          <li
            class="songs"
            v-for="(item,index) in getBangDang_2_data"
            :key="item.id"
            @click="handleTosonger_detail(item.id)"
          >
            <p>{{index+1}}</p>
            <div class="tt">
              <img :src="item.img1v1Url" alt class="tt-in-img" />
              <h6>{{item.name}}</h6>
            </div>

            <div class="songer">{{item.id}}</div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getother_data: [],
      getBangDang_data: [],
      getBangDang_2_data: []
    };
  },
  created() {
    this.getother();
    this.getBangDang();
    this.getBangDang_2();
  },
  methods: {
    // 跳转页面
    handleToMore_detail() {
      this.$message.success("跳转成功");
      this.$router.push("/more-detail");
    },
    handleToBack() {
      this.$message.info("回到首页!");
      this.$router.push("/");
    },
    handleToSonger() {
      this.$message.success("跳转成功");
      this.$router.push("/Songer");
    },
    handleDianTai() {
      this.$message.success("跳转成功");
      this.$router.push("/dianTai");
    },
    // 获取数据
    async getother() {
      const re = await this.$http.get("/toplist/detail");
      this.getother_data = re.data.list;
      this.getother_data.length = 6;
      //   console.log(this.getother_data);
    },
    // 获取数据
    async getBangDang() {
      const re = await this.$http.get("/toplist/artist");
      this.getBangDang_data = re.data.list.artists;
      this.getBangDang_data.length = 20;
      //   console.log(this.getBangDang_data);
    },
    // 获取数据
    async getBangDang_2() {
      const re = await this.$http.get("/toplist/artist");
      this.getBangDang_2_data = re.data.list.artists;
      this.getBangDang_2_data.length = 35;
      console.log(this.getBangDang_2_data);
    },
    // 点击li跳转到歌手详情页面（带id）
    handleTosonger_detail(id) {
      console.log(id);
      sessionStorage.setItem("id", id);
      this.$router.push(`/SongerDetail?id=${id}`);
    },
    handleToMv_go() {
      this.$message.success("跳转mv页面成功");
      this.$router.push("/Mv");
    }
  }
};
</script>

<style scoped>
.bangdan {
  background-color: #eeeeee !important;
}
.more {
  width: 35px !important;
}
.main_ul {
  width: 255px !important;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.box-head {
  width: 100%;
  height: 70px;
  background-color: #242424;
}

.box-head .box-head-inside {
  height: 70px;
  width: 1100px;
  margin: 0px auto;
  /* background-color: brown; */
}

.h2-1 {
  font-size: 20px;
  font-weight: 450;
  line-height: 70px;
  color: #fff;
  width: 177px;
  height: 70px;
  margin-right: 10px;
  float: left;
}

.ul-1 {
  display: inline-block;
  /* background-color: chartreuse; */
  width: 508px;
  height: 70px;
}
.ul-1 li {
  display: inline-block;
  width: 80px;
  text-align: center;
  height: 70px;
  line-height: 70px;
  font-weight: 450;
  color: #fff;
  letter-spacing: 1.5px;
}

.ul-1 li:hover {
  background-color: black;
  transition: all 0.3s ease;
}
.my-personal {
  float: right;
  width: 30px;
  height: 30px;
  margin: 20px 10px;
  border-radius: 10px;
  overflow: hidden;
}
.img1 {
  width: 100%;
  height: 100%;
}
.h3-1 {
  width: 90px;
  height: 32px;
  float: right;
  font-size: 15px;
  margin: 20px auto;
  font-weight: 450;
  margin-right: 10px;
  border-radius: 23px;
  color: rgb(194, 194, 194);
  border: 1px solid #666666;
  text-align: center;
  line-height: 32px;
}

.h3-1:hover {
  color: #fff;
  border: 1px solid #858585;
}

.input_search {
  width: 158px;
  height: 32px;
  margin: 20px auto;
  float: right;
  background-color: #fff;
  margin-right: 25px;
  border-radius: 25px;
  overflow: hidden;
}
#input-1 {
  width: 155px;
  border: none;
  height: 30px;
  outline: none;
  margin: 0px;
  margin-left: 10px;
}
.box-head-bottom {
  width: 100%;
  background-color: #c20c0c;
  height: 35px;
}

.ul-2 {
  width: 700px;
  height: 35px;
  margin: 0px 200px;
  /* background: rgb(221, 155, 155); */
  margin-left: 400px;
}
.ul-2 li {
  display: inline-block;
  line-height: 20px;
  width: 63px;
  height: 20px;
  font-size: 13px;
  text-align: center;
  color: #fff;
  margin: 7.5px 9px !important;
  border-radius: 15px;
}
.ul-2 li:hover {
  background-color: #9b0909;
  border-radius: 15px;
  transition: all 0.3s ease;
}
.box-main {
  width: 700px;
  height: 2000px;
  margin: 0px auto;
  background-color: #fff;
}

.box-main-left {
  width: 180px;
  /* height: 2200px; */
  float: left;
  /* background-color: aqua; */
  background-color: #f9f9f9;
  box-sizing: border-box;
  border: 1px solid rgb(196, 196, 196);
}
.box-main-left-h1 {
  font-weight: normal;
  font-size: 14px;
  margin: 30px 0px 10px 10px;
}
.box-main-left-li {
  width: 150px;
  height: 50px;
  /* background-color: pink; */
  margin: 10px 15px;
}
.box-main-left-img {
  float: left;
  width: 40px;
  height: 40px;
  margin: 5px;
}
.box-main-left-h3 {
  float: left;
  font-size: 12px;
  color: black;
  width: 100px;
  font-weight: normal;
  margin-top: 5px;
}
.box-main-left-p {
  float: left;
  font-size: 10px;
  color: rgb(177, 177, 177);
  margin-top: 5px;
}
.box-main-right {
  float: right;
  width: 520px;
  /* height: 2200px; */
  border: 1px solid rgb(209, 209, 209);
  box-sizing: border-box;
  /* background-color: aqua; */
}
.box-main-right-display {
  width: 460px;
  height: 158px;
  /* background-color: beige; */
  margin: 20px 30px;
}
.box-main-right-display-img {
  width: 150px;
  height: 150px;
  margin: 4px 5px;
  float: left;
}
.box-main-right-display-h4 {
  float: left;
  font-weight: normal;
  font-size: 26px;
  margin: 30px 40px;
  box-shadow: 5px 5px 5px #c0c0c0;
}
.display-song {
  width: 460px;
  /* background-color: blueviolet; */
  float: left;
  margin: 10px 30px;
}

.display-song-h3 p {
  font-size: 12px;
  display: inline-block;
  color: rgb(179, 179, 179);
}
.display-song-h3 {
  height: 35px;
  width: 460px;
  display: inline-block;
  /* background-color: brown; */
  line-height: 35px;
  letter-spacing: 3px;
  font-weight: normal;
  box-sizing: border-box;
  border-bottom: 2px solid rgb(240, 85, 38);
}
.songs {
  height: 50px;
  width: 460px;
  margin: 0px 0px;
  /* background-color: rosybrown; */
}
.songs p {
  /* display: inline-block; */
  float: left;
  width: 50px;
  height: 50px;
  /* background-color: seagreen; */
  text-align: center;
  line-height: 50px;
}
.tt {
  display: inline-block;
  height: 40px;
  margin: 5px 10px;
  width: 250px;
  /* background-color: springgreen; */
}
.tt-in-img {
  width: 40px;
  height: 40px;
  float: left;
}

.tt h6 {
  display: inline-block;
  font-size: 12px;
  color: rgb(155, 155, 155);
  font-weight: normal;
  line-height: 40px;
  margin-left: 20px;
}
.songer {
  float: right;
  height: 40px;
  margin: 5px 10px;
  width: 80px;
  /* background-color: aqua; */
  line-height: 40px;
  font-weight: normal;
  text-align: left;
  font-size: 10px;
}
</style>
