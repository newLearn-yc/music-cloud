<template>
  <div class="home">
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
        <li @click="handleBandan">排行榜</li>
        <li @click="handleToMore_detail">歌单</li>
        <li>主播电台</li>
        <li @click="handleToSonger">歌手</li>
        <li>新碟上架</li>
      </ul>
    </div>

    <div class="body-main">
      <div class="body-main-left-box-1">
        <h3 class="body-main-left-box-h3">推荐节目</h3>

        <li
          @click="handleToSongerDetail(item.id)"
          class="body-main-left-box-item"
          v-for="item in getDianTai_data"
          :key="item.id"
        >
          <img :src="item.coverUrl" class="body-main-left-box-item-img" />

          <p class="body-main-left-box-p1">{{item.name}}</p>
          <p class="body-main-left-box-p2">{{item.reason}}</p>
        </li>
      </div>

      <div class="body-main-left-box-1">
        <h3 class="body-main-left-box-h3">节目排行榜</h3>

        <li
          @click="handleToSongerDetail(item.id)"
          class="body-main-left-box-item"
          v-for="item in getJieMu_data"
          :key="item.id"
        >
          <img :src="item.picUrl" class="body-main-left-box-item-img" />

          <p class="body-main-left-box-p1">{{item.name}}</p>
          <p class="body-main-left-box-p2">{{item.copywriter}}</p>
        </li>
      </div>

      <!-- 电台布局 -->
      <div class="box-diantai-box">
        <h3 class="body-main-left-box-h3">音乐推荐·电台</h3>
        <li
          @click="handleToSongerDetail(item.id)"
          class="box-diantai-box-item"
          v-for="item in getDiantai_too_data"
          :key="item.id"
        >
          <img :src="item.picUrl" class="box-diantai-img" />
          <h2 class="box-diantai-box-h2">{{item.name}}</h2>
          <h2 class="box-diantai-box-h2 font-h2">{{item.copywriter}}</h2>
        </li>
      </div>

      <div class="box-diantai-box box-expend">
        <h3 class="body-main-left-box-h3">生活·电台</h3>
        <li
          @click="handleToSongerDetail(item.program.id)"
          class="box-diantai-box-item"
          v-for="item in getDiantai_too_1_data"
          :key="item.id"
        >
          <img :src="item.program.coverUrl" class="box-diantai-img" />
          <h2 class="box-diantai-box-h2">{{item.program.name}}</h2>
          <h2 class="box-diantai-box-h2 font-h2">{{item.program.name}}</h2>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取推荐电台
      getDianTai_data: [],
      // 获取推荐节目
      getJieMu_data: [],
      // 获取电台
      getDiantai_too_data: [],
      // 获取电台2
      getDiantai_too_1_data: []
    };
  },
  created() {
    // 获取推荐电台
    this.getDianTai();
    // 获取推荐节目
    this.getJieMu();
    // 获取电台数据
    this.getDiantai_too();
    // 获取电台数据-2
    this.getDiantai_too_1();
  },
  methods: {
    // 跳转页面
    handleBandan() {
      this.$message.success("跳转成功");
      this.$router.push("/BangDan");
    },
    handleToMore_detail() {
      this.$message.success("跳转成功");
      this.$router.push("/more-detail");
    },
    handleToSonger() {
      this.$message.success("跳转成功");
      this.$router.push("/Songer");
    },
    handleToBack() {
      this.$message.success("跳转成功");
      this.$router.push("/");
    },
    // 获取推荐电台
    async getDianTai() {
      const re = await this.$http.get(`/program/recommend`);
      //   console.log(re.data.programs);
      this.getDianTai_data = re.data.programs;
    },
    // 获取id下一个歌曲详情
    handleToSongerDetail(id) {
      console.log(id);
      this.$router.push(`/dianTaiDetail?=${id}`);
      sessionStorage.setItem("diantai_id", id);
    },
    // 获取推荐节目
    async getJieMu() {
      const re = await this.$http.get("/personalized?limit=10");
      //   console.log(re.data.result);
      this.getJieMu_data = re.data.result;
    },
    async getDiantai_too() {
      const re = await this.$http.get("/personalized/djprogram");
      console.log(re.data.result);
      this.getDiantai_too_data = re.data.result;
    },
    async getDiantai_too_1() {
      const re = await this.$http.get("/dj/program/toplist");
      console.log(re.data.toplist);
      this.getDiantai_too_1_data = re.data.toplist;
    },
    handleToMv_go() {
      this.$message.success("跳转mv页面成功");
      this.$router.push("/Mv");
    }
  }
};
</script>

<style scoped>
.home {
  background-color: #f5f5f5 !important;
}
.ul-2 {
  margin-left: 200px !important;
}
.home {
  background-color: #eeeeee;
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

.body-main {
  width: 980px;
  height: 100%;
  background-color: #fff;
  margin: 0px auto;
}
.body-main-left-box-1 {
  width: 425px;
  height: 645px;
  /* background-color: aqua; */
  display: inline-block;
  margin: 10px 30px;
}

.body-main-left-box-h3 {
  width: 100%;
  height: 42px;
  float: left;
  /* background-color: red; */
  box-sizing: border-box;
  line-height: 42px;
  letter-spacing: 2px;
  font-weight: normal;
  border-bottom: 2px solid #c20c0c;
}
.body-main-left-box-item {
  width: 100%;
  height: 60px;
  /* background-color: rosybrown; */
  float: left;
  overflow: hidden;
}
.body-main-left-box-item-img {
  width: 40px;
  height: 40px;
  float: left;
  margin: 10px 5px 10px 15px;
}
.body-main-left-box-p1 {
  width: 255px;
  height: 30px;
  font-size: 10px;
  margin-top: 10px;
  margin-left: 5px;
  float: left;
  /* overflow: hidden; */
}
.body-main-left-box-p2 {
  width: 255px;
  height: 30px;
  font-size: 10px;
  float: left;
  margin-left: 5px;
  color: rgb(161, 161, 161);
  /* overflow: hidden; */
}
.box-diantai-box {
  width: 900px;
  /* height: 500px; */
  /* background-color: rgb(201, 146, 146); */
  margin: 10px auto;
}
.expend {
  height: 100% !important;
}
.box-diantai-box-item {
  width: 405px;
  height: 130px;
  /* background-color: aqua; */
  /* float: left; */
  display: inline-block;
  margin: 10px 5px 5px 30px;
}
.box-diantai-img {
  width: 120px;
  height: 120px;
  float: left;
  margin: 5px;
}
.box-diantai-box-h2 {
  cursor: pointer;
  width: 200px;
  height: 40px;
  /* background-color: azure; */
  float: left;
  /* line-height: 40px; */
  font-size: 16px;
  margin: 10px 10px;
}
.font-h2 {
  color: rgb(177, 173, 173);
  font-weight: normal;
  font-size: 12px;
}
</style>
