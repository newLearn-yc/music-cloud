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
        <li @click="handleDianTai">主播电台</li>
        <li>歌手</li>
        <li>新碟上架</li>
      </ul>
    </div>

    <div class="box-main">
      <h2 class="box-main-h2">入驻歌手</h2>
      <div class="inside">
        <template>
          <li
            @click="handle(item.id)"
            class="box-main-li"
            v-for="item in getSonger_data"
            :key="item.id"
          >
            <img :src="item.img1v1Url" class="box-main-img" />
            <p class="box-main-p">{{item.name}} |</p>
            <p class="box-main-p1">{{item.alias[0]}}</p>
          </li>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getSonger_data: [],
      new_id: ""
    };
  },
  created() {
    // 获取歌手
    this.getSonger();
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
    handleToBack() {
      this.$message.success("跳转成功");
      this.$router.push("/");
    },
    handleDianTai() {
      this.$message.success("跳转成功");
      this.$router.push("/dianTai");
    },
    // 获取数据
    async getSonger() {
      const re = await this.$http.get("/artist/list");
      this.getSonger_data = re.data.artists;
      console.log(this.getSonger_data);
    },
    handle(id) {
      console.log(id);
      this.$router.push(`/SongerDetail?id=${id}`);
      this.new_id = id;
      sessionStorage.setItem("id", this.new_id);
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
.box-main {
  width: 765px;
  height: 100%;
  background-color: #fff;
  margin: 0px auto;
  border-top: 1px solid transparent;
}
.box-main-h2 {
  width: 725px;
  height: 50px;
  border-bottom: 2px solid #c20c0c;
  box-sizing: border-box;
  margin: 30px 20px 10px 20px;
  font-weight: normal;
  line-height: 50px;
}
.inside {
  width: 725px;
  margin: 0px 20px;
}
.box-main-li {
  width: 130px;
  height: 155px;
  /* background-color: thistle; */
  display: inline-block;
  margin-right: 5px;
  padding: 5px;
  overflow: hidden;
}
.box-main-img {
  width: 130px;
  height: 130px;
  float: left;
}
.box-main-p {
  font-size: 10px;
  font-weight: normal;
  color: rgb(87, 87, 87);
  float: left;
  margin: 8px 0;
}
.box-main-p1 {
  float: left;
  font-size: 6px;
  color: rgb(167, 164, 164);
  margin: 8px 0px 0px 5px;
}
</style>
