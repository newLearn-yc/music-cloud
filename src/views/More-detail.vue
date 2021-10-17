<template>
  <div class="more">
    <div class="box-head">
      <div class="box-head-inside">
        <h2 class="h2-1">网易云-个人yc版</h2>
        <ul class="ul-1">
          <li @click="handleToBack">回到首页</li>
          <li>我的音乐</li>
          <li>朋友</li>
          <li>商城</li>
          <li>音乐Mv</li>
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
        <li>歌单</li>
        <li @click="handleDianTai">主播电台</li>
        <li @click="handleToSonger">歌手</li>
        <li>新碟上架</li>
      </ul>
    </div>

    <div class="box-main">
      <div class="box-main-head">
        <h1 class="h11">全部</h1>

        <li
          class="box-main-item"
          @click="handletoo(item.id)"
          v-for="item in getMuiscList_data"
          :key="item.id"
        >
          <img :src="item.coverImgUrl" alt class="box-main-item-img" />
          <h3 class="box-main-item-p">播放{{item.trackCount}}次数</h3>
          <h3 class="box-main-item-h2">{{item.description}}</h3>
          <h4 class="box-main-item-h2-h2">by {{item.creator.nickname}}</h4>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getMuiscList_data: []
    };
  },
  created() {
    this.getMuiscList();
  },
  methods: {
    async getMuiscList() {
      const re = await this.$http.get("/top/playlist");
      this.getMuiscList_data = re.data.playlists;
      this.getMuiscList_data.length = 35;
      console.log(this.getMuiscList_data);
    },
    handleToBack() {
      this.$message.info("回到首页!");
      this.$router.push("/");
    },
    // 跳转页面-2
    handleBandan() {
      this.$message.success("跳转成功");
      this.$router.push("/BangDan");
    },
    handleToSonger() {
      this.$message.success("跳转成功");
      this.$router.push("/Songer");
    },
    handleDianTai() {
      this.$message.success("跳转成功");
      this.$router.push("/dianTai");
    },
    handletoo(id) {
      console.log(id);
      sessionStorage.setItem("id", id);
      this.$router.push(`/moreDetailXq?id=${id}`);
    }
  }
};
</script>

<style scoped>
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
  margin: 7.5px 9px;
  border-radius: 15px;
}
.ul-2 li:hover {
  background-color: #9b0909;
  border-radius: 15px;
  transition: all 0.3s ease;
}

/* -------------------------- */
.more {
  background-color: #f5f5f5;
}
.box-main {
  width: 982px;
  height: 1540px;
  background-color: #fff;
  margin: 0px auto;
  border-top: 1px solid transparent;
}
.box-main-head {
  width: 900px;
  height: 42px;
  margin: 20px 40px 20px 40px;
  box-sizing: border-box;
  border-bottom: 2px solid #c20c0c;
}
.h11 {
  font-size: 20px;
  font-weight: normal;
  line-height: 42px;
}
.box-main-item {
  width: 140px;
  height: 185px;
  /* background-color: violet; */
  margin-top: 20px;
  display: inline-block;
  margin: 20px 20px 0 20px;
  position: relative;
}
.box-main-item-img {
  width: 100%;
  height: 125px;
  background-color: wheat;
  float: left;
}
.box-main-item-p {
  color: rgb(218, 218, 218);
  width: 100%;
  height: 30px;
  font-size: 12px;
  float: left;
  z-index: 999;
  font-weight: normal;
  background-color: rgb(129, 129, 129);
  opacity: 0.6;
  position: absolute;
  top: 95px;
  line-height: 30px;
  text-indent: 5em;
}
.box-main-item-h2 {
  width: 100%;
  height: 30px;
  float: left;
  font-weight: normal;
  font-size: 8px;
  margin: 5px 0px;
  overflow: hidden;
}
.box-main-item-h2-h2 {
  width: 100%;
  height: 30px;
  float: left;
  font-weight: normal;
  font-size: 4px;
  overflow: hidden;
}
</style>
