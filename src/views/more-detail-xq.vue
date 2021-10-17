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

    <div class="box-main">
      <div class="box-main-left">
        <div class="box-main-display-head">
          <h2 class="box-main-display-head-h2">{{playlist_data.name}} |</h2>
          <p class="box-main-display-head-p">{{playlist_data.id}}</p>
          <img :src="playlist_data.coverImgUrl" class="box-main-display-head-img" />
        </div>

        <div class="box-main-display-body">
          <li
            class="the-song"
            v-for="(item,index) in privileges_data"
            :key="index"
            @click="getsongId(item.id)"
          >
            <p class="the-song-p1">{{index+1}}</p>
            <p class="the-song-p2">item.name</p>
            <p class="the-song-p3">{{item.id}}</p>
            <p class="mv" @click="handleToMv">MV</p>
          </li>
        </div>
      </div>

      <div class="box-main-right">
        <div class="box-main-right-inside-66">他/她的朋友有</div>
        <ul class="box-mian-insade">
          <li @click="hanldeAgain_songerDeatil(item.id)" class="box-main-right-inside-li">
            <img :src="playlist_data.creator.avatarUrl" class="box-main-right-inside-img" />
            <p class="box-main-right-inside-p">{{playlist_data.creator.nickname}}</p>
          </li>
        </ul>

        <!-- 第二行个人简介 -->
        <div class="box-main-right-inside-66 cao">个人简介</div>
        <p class="box-pp">{{playlist_data.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      getItem_song_data: {},
      getItem_songS: [],
      getLikeSonger_data: [],
      // 数据-1
      playlist_data: {},
      // 数据-2
      privileges_data: []
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
    handleToMv_go() {
      this.$message.success("跳转mv页面成功");
      this.$router.push("/Mv");
    },
    handleToMv() {
      // console.log(123);
    },
    hanldeAgain_songerDeatil(id) {
      sessionStorage.setItem("id", id);
      //   this.$router.push(`/SongerDetail?id=${id}`);
      this.$router.go(0);
    },
    async getData() {
      const id = sessionStorage.getItem("id");
      const re = await this.$http.get(`/playlist/detail?id=${id}`);
      //   console.log(re);
      //   console.log(re.data.playlist);
      //   console.log(re.data.privileges);
      this.playlist_data = re.data.playlist;
      this.privileges_data = re.data.privileges;
      sessionStorage.setItem("song_name", this.playlist_data.name);
      sessionStorage.setItem("img_2", this.playlist_data.coverImgUrl);
    },
    getsongId(id) {
      console.log(id);
      sessionStorage.setItem("songId", id);
      this.$router.push(`/PlaySong?songid=${id}`);
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
  width: 1000px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  border-top: 1px solid transparent;
  box-sizing: border-box;
}
.box-main-display-head {
  width: 640px;
  height: 333px;
  /* background-color: red; */
  margin: 30px 30px 0px 30px;
  box-sizing: border-box;
}
.box-main-display-head-h2 {
  font-weight: normal;
  font-size: 22px;
  float: left;
}
.box-main-display-head-p {
  float: left;
  font-size: 14px;
  font-weight: normal;
  margin-top: 10px;
  color: #c4a699;
  margin-left: 5px;
}
.box-main-display-head-img {
  width: 640px;
  height: 300px;
  float: left;
  padding: 5px 0px;
}
.box-main-left {
  width: 710px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(185, 185, 185);
  float: left;
}
.box-main-right {
  width: 290px;
  height: 100%;
  border: 1px solid rgb(185, 185, 185);
  box-sizing: border-box;
  float: right;
}
.box-main-display-body {
  width: 640px;
  height: 1500px;
  /* background-color: aqua; */
  float: left;
  margin: 20px 30px;
}
.the-song {
  width: 640px;
  height: 30px;
  /* background-color: blue; */
  float: left;
  box-sizing: border-box;
  border: 1px solid rgb(201, 201, 201);
}
.the-song:hover {
  background-color: rgb(179, 179, 179);
  transition: all 0.3s ease;
}
.the-song-p1 {
  height: 30px;
  width: 70px;
  /* background-color: blueviolet; */
  float: left;
  line-height: 30px;
  font-weight: normal;
  text-indent: 1.5em;
}
.the-song-p2 {
  height: 30px;
  width: 340px;
  /* background-color: chartreuse; */
  float: left;
  line-height: 30px;
  font-weight: normal;
  text-indent: 1em;
}
.the-song-p3 {
  height: 30px;
  float: left;
  line-height: 30px;
  font-weight: normal;
  width: 200px;
  /* background-color: cyan; */
}
.box-main-right-inside-66 {
  width: 230px;
  margin: 25px auto 10px auto;
  height: 25px;
  /* background-color: aqua; */
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
  line-height: 25px;
  font-weight: normal;
  font-size: 14px;
}
.box-main-right-inside-li {
  width: 70px;
  height: 90px;
  /* background-color: red; */
  float: left;
  margin: 10px 3px;
}
.box-mian-insade {
  width: 230px;
  margin: 0px auto;
  background-color: rgb(179, 179, 179);
}
.box-main-right-inside-img {
  width: 60px;
  height: 60px;
  margin: 5px 5px;
  float: left;
}
.box-main-right-inside-p {
  float: left;
  height: 40px;
  width: 100%;
  font-weight: normal;
  font-size: 14px;
  color: #929292;
  text-align: center;
  line-height: 20px;
}
.cao {
  float: left;
  margin: 10px 30px;
}
.box-pp {
  width: 230px;
  margin: 15px 30px 10px 30px;
  /* background-color: antiquewhite; */
  line-height: 25px;
  font-weight: normal;
  font-size: 14px;
  float: left;
}
</style>
