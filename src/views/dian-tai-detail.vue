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
          <li>音乐人</li>
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

    <div class="box-body">
      <div class="box-body-left-box">
        <div class="box-body-left-box-head">
          <img :src="data.coverUrl" class="box-body-left-box-img" />
          <div class="box-inside-right">
            <h2 class="diantai_name">{{data.name}}</h2>
            <p class="p1">{{data.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      data: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleBandan() {
      this.$message.success("跳转成功");
      this.$router.push("/BangDan");
    },
    handleToMore_detail() {
      this.$message.success("跳转成功");
      this.$router.push("/more-detail");
    },
    handleToBack() {
      this.$message.success("跳转成功");
      this.$router.push("/");
    },
    handleToSonger() {
      this.$message.success("跳转成功");
      this.$router.push("/Songer");
    },
    async getData() {
      this.id = sessionStorage.getItem("diantai_id");
      const re = await this.$http.get(`/dj/program/detail?id=${this.id}`);
      console.log(re.data.program);
      this.data = re.data.program;
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

.box-body {
  width: 982px;
  height: 100%;
  background-color: #fff;
  margin: 0px auto;
}
.box-body-left-box {
  width: 710px;
  /* background-color: aqua; */
  border-top: 1px solid transparent;
  box-sizing: border-box;
  height: 270px;
  /* margin: 10px 0px; */
}
.box-body-left-box-head {
  width: 640px;
  height: 216px;
  /* background-color: red; */
  margin: 30px 10px 15px 20px;
  /* float: left; */
}
.box-body-left-box-img {
  width: 208px;
  height: 208px;
  float: left;
  margin: 4px;
}
.box-inside-right {
  width: 410px;
  height: 216px;
  float: right;
  /* background-color: rgb(177, 177, 177); */
}
.diantai_name {
  width: 380px;
  height: 30px;
  /* background-color: turquoise; */
  float: left;
  line-height: 30px;
  font-weight: normal;
  margin-left: 30px;
  margin-top: 20px;
  margin: 20px 10px 10px 20px;
}
.p1 {
  width: 380px;
  height: 120px;
  /* background-color: violet; */
  float: right;
  margin: 20px 10px;
  color: rgb(175, 174, 174);
  font-size: 10px;
}
.box-list {
  width: 640px;
  height: 500px;
  background-color: rgb(130, 238, 148);
  margin-top: 20px;
  float: left;
}
.box-list-li {
  width: 640px;
  height: 55px;
  background-color: yellow;
}
.box-list-li-index {
  width: 50px;
  height: 55px;
  background-color: yellowgreen;
  line-height: 55px;
  text-align: center;
  float: left;
}
.box-list-li-song {
  width: 400px;
  background-color: #9b0909;
  height: 55px;
  float: left;
  text-align: center;
  line-height: 55px;
}
.box-list-li-last {
  width: 190px;
  height: 55px;
  float: left;
  background-color: aquamarine;
  text-align: center;
  line-height: 55px;
}
</style>
