<template>
  <div>
    <div class="more">
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
          <li>歌单</li>
          <li @click="handleDianTai">主播电台</li>
          <li @click="handleToSonger">歌手</li>
          <li>新碟上架</li>
        </ul>
      </div>

      <div class="box-main-body">
        <div class="contanier">
          <h3 class="h33">推荐MV</h3>

          <li
            @click="handleToMvbyId(item.id,item.artistName)"
            class="list-item"
            v-for="item in getUpData_data"
            :key="item.artistId"
          >
            <img :src="item.cover" class="list-item-img" />
            <div class="alert-p">
              <p class="alert-p1">{{item.artistName}}</p>
              <p class="alert-p2">{{item.name}}</p>
            </div>

            <p class="checkMV">查看MV</p>
          </li>

          <!-- part-2 -->
          <h3 class="h33">最新MV</h3>

          <li
            @click="handleToMvbyId(item.id,item.artistName)"
            class="list-item"
            v-for="item in getUpData_data_2"
            :key="item.id"
          >
            <img :src="item.cover" class="list-item-img" />
            <div class="alert-p">
              <p class="alert-p1">{{item.artistName}}</p>
              <p class="alert-p2">{{item.name}}</p>
            </div>

            <p class="checkMV">查看MV</p>
          </li>

          <!-- part-3 -->
          <h3 class="h33">网易出品MV</h3>

          <li
            @click="handleToMvbyId(item.id,item.artistName)"
            class="list-item"
            v-for="item in getUpData_data_3"
            :key="item.id"
          >
            <img :src="item.cover" class="list-item-img" />
            <div class="alert-p">
              <p class="alert-p1">{{item.artistName}}</p>
              <p class="alert-p2">{{item.name}}</p>
            </div>

            <p class="checkMV">查看MV</p>
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
      getUpData_data: [],
      getUpData_data_2: [],
      getUpData_data_3: []
    };
  },
  created() {
    this.getUpData();
    this.getUpData_two();
    this.getUpData_three();
  },
  methods: {
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
    async getUpData() {
      const re = await this.$http.get("/mv/all");
      this.getUpData_data = re.data.data;
      console.log(this.getUpData_data);
    },
    async getUpData_two() {
      const re = await this.$http.get("/mv/first");
      this.getUpData_data_2 = re.data.data;
      //   console.log(this.getUpData_data_2);
    },
    async getUpData_three() {
      const re = await this.$http.get("/mv/exclusive/rcmd?limit=15");
      this.getUpData_data_3 = re.data.data;
      //   console.log(this.getUpData_data_2);
    },
    // 拿取id
    handleToMvbyId(id, songName) {
      //   console.log(id);
      sessionStorage.setItem("sp_id", id);
      sessionStorage.setItem("songName", songName);

      this.$router.push(`/MvDetail?=${id}`);
    }
  }
};
</script>

<style scoped>
.more {
  background: linear-gradient(
    rgb(218, 214, 214),
    rgb(185, 183, 183),
    rgb(145, 139, 139)
  );
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
  margin: 7.5px 9px;
  border-radius: 15px;
}
.ul-2 li:hover {
  background-color: #9b0909;
  border-radius: 15px;
  transition: all 0.3s ease;
}
.box-main-body {
  width: 1200px;
  height: 100%;
  background-color: #fff;
  margin: 0px auto;
  border-top: 1px solid transparent;
}
.contanier {
  width: 94%;
  height: 100%;
  margin: 3%;
  /* background-color: aqua; */
}
.h33 {
  width: 100%;
  height: 50px;
  /* background-color: red; */
  box-sizing: border-box;
  line-height: 50px;
  font-weight: normal;
  border-bottom: 2px solid #c20c0c;
  font-size: 18px;
  margin-top: 60px;
}

.list-item {
  width: 80%;
  height: 50px;
  /* background-color: royalblue; */
  margin-top: 5px;
}
.list-item:nth-child(2n-1) {
  background-color: rgb(230, 227, 227);
}
.list-item:hover {
  margin-left: 40px;
  background-color: rgb(230, 230, 230);
  border: 1px solid rgb(236, 103, 103);
  box-sizing: border-box;
  transition: all 0.2s ease;
}
.list-item-img {
  height: 40px;
  width: 40px;
  margin: 5px;
  float: left;
}
.alert-p {
  line-height: 50px;
  width: 620px;
  height: 50px;
  /* background-color: salmon; */
  float: left;
}
.alert-p1,
.alert-p2 {
  float: left;
}
.alert-p1 {
  margin-left: 15px;
  width: 300px;
  height: 50px;
  font-size: 14px;
}
.alert-p2 {
  width: 300px;
  height: 50px;
  margin-left: 5px;
  font-size: 12px;
  color: #b6b3b3;
}
.checkMV {
  line-height: 50px;
  height: 50px;
  /* background-color: rgb(114, 250, 182); */
  width: 100px;
  float: right;
  text-align: center;
}
</style>
