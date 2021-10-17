<template>
  <div class="home">
    <div class="box-head">
      <div class="box-head-inside">
        <h2 class="h2-1">网易云-个人yc版</h2>
        <ul class="ul-1">
          <li>发现音乐</li>
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
          <input type="text" name id="input-1" placeholder="歌曲搜索" @click="login_search" />
        </div>
      </div>
    </div>
    <div class="box-head-bottom">
      <ul class="ul-2">
        <li>推荐</li>
        <li @click="handleBandan">排行榜</li>
        <li @click="handleToMore_detail">歌单</li>
        <li @click="handleDianTai">主播电台</li>
        <li @click="handleToSonger">歌手</li>
        <li>新碟上架</li>
      </ul>
    </div>
    <!-- 轮播图 -->
    <div class="box-lbt">
      <el-carousel :interval="5000" arrow="always" autoplay>
        <el-carousel-item v-for="item in getLbt_data" :key="item.id">
          <h3 class="inside-h3">
            <img :src="item.imageUrl" alt class="img-lbt" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 主体区域 -->
    <div class="main">
      <div class="main-head">
        <h1 class="mian_h1-1">热门推荐</h1>

        <ul class="main_ul">
          <li>华语 |</li>
          <li>流行 |</li>
          <li>摇滚 |</li>
          <li>民谣 |</li>
          <li>电子</li>
        </ul>

        <div class="more" @click="handleToMore_detail">更多</div>
      </div>
      <div class="main-haed-two">
        <li class="ts" v-for="item in getMusicList_data" :key="item.id">
          <img :src="item.picUrl" alt class="head-img" />
          <p class="an">{{item.trackCount}}万播放</p>
          <h3 class="main-head-two-h3">{{item.name}}</h3>
        </li>
      </div>

      <div class="main-right-box-head">
        <div class="alert">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
        <button class="button1" @click="openDialog">用户登录</button>

        <div class="main-right-box-head-right">
          <div class="main-right-box-head-right-head-2">
            <div class="main-right-text1">入驻歌手</div>
            <div class="main-right-text1 text2">查看全部 ></div>
          </div>

          <div class="list">
            <div class="list_item">
              <img src="../assets/images/cs2.jpg" alt class="list_item_img" />
              <div class="box-wenz">
                <h2 class="h222">张惠妹aMEI</h2>
                <h4 class="h444">台湾歌手张惠妹</h4>
              </div>
            </div>

            <div class="list_item">
              <img src="../assets/images/cs2.jpg" alt class="list_item_img" />
              <div class="box-wenz">
                <h2 class="h222">张惠妹aMEI</h2>
                <h4 class="h444">台湾歌手张惠妹</h4>
              </div>
            </div>

            <div class="list_item">
              <img src="../assets/images/cs2.jpg" alt class="list_item_img" />
              <div class="box-wenz">
                <h2 class="h222">张惠妹aMEI</h2>
                <h4 class="h444">台湾歌手张惠妹</h4>
              </div>
            </div>

            <div class="list_item">
              <img src="../assets/images/cs2.jpg" alt class="list_item_img" />
              <div class="box-wenz">
                <h2 class="h222">张惠妹aMEI</h2>
                <h4 class="h444">台湾歌手张惠妹</h4>
              </div>
            </div>

            <div class="list_item">
              <img src="../assets/images/cs2.jpg" alt class="list_item_img" />
              <div class="box-wenz">
                <h2 class="h222">张惠妹aMEI</h2>
                <h4 class="h444">台湾歌手张惠妹</h4>
              </div>
            </div>

            <button class="sq">申请成为网易音乐人</button>
          </div>
        </div>
      </div>

      <!-- 第二层 -->
      <div class="main-head">
        <h1 class="mian_h1-1">新碟上架</h1>

        <div class="more">更多</div>
      </div>

      <div class="n-disk">
        <li class="n-disk_li">
          <img src="../assets/images/cs3.jpg" alt class="n-disk-img" />
          <h2 class="h22-disk">山川</h2>
          <h3 class="h33-disk">李荣浩</h3>
        </li>

        <li class="n-disk_li">
          <img src="../assets/images/cs3.jpg" alt class="n-disk-img" />
          <h2 class="h22-disk">山川</h2>
          <h3 class="h33-disk">李荣浩</h3>
        </li>

        <li class="n-disk_li">
          <img src="../assets/images/cs3.jpg" alt class="n-disk-img" />
          <h2 class="h22-disk">山川</h2>
          <h3 class="h33-disk">李荣浩</h3>
        </li>

        <li class="n-disk_li">
          <img src="../assets/images/cs3.jpg" alt class="n-disk-img" />
          <h2 class="h22-disk">山川</h2>
          <h3 class="h33-disk">李荣浩</h3>
        </li>

        <li class="n-disk_li">
          <img src="../assets/images/cs3.jpg" alt class="n-disk-img" />
          <h2 class="h22-disk">山川</h2>
          <h3 class="h33-disk">李荣浩</h3>
        </li>
      </div>

      <div class="extra">
        <li class="extra_li">
          <img src="../assets/images/cs4.jpg" alt class="extra_img" />

          <h3 class="h33-extra">陈立</h3>
          <h4 class="h44-extra">心理学家、美食家陈立教授</h4>
        </li>

        <li class="extra_li">
          <img src="../assets/images/cs4.jpg" alt class="extra_img" />

          <h3 class="h33-extra">陈立</h3>
          <h4 class="h44-extra">心理学家、美食家陈立教授</h4>
        </li>

        <li class="extra_li">
          <img src="../assets/images/cs4.jpg" alt class="extra_img" />

          <h3 class="h33-extra">陈立</h3>
          <h4 class="h44-extra">心理学家、美食家陈立教授</h4>
        </li>

        <li class="extra_li">
          <img src="../assets/images/cs4.jpg" alt class="extra_img" />

          <h3 class="h33-extra">陈立</h3>
          <h4 class="h44-extra">心理学家、美食家陈立教授</h4>
        </li>

        <li class="extra_li">
          <img src="../assets/images/cs4.jpg" alt class="extra_img" />

          <h3 class="h33-extra">陈立</h3>
          <h4 class="h44-extra">心理学家、美食家陈立教授</h4>
        </li>
      </div>

      <!-- 第三层 -->
      <div class="main-head">
        <h1 class="mian_h1-1">歌曲榜单</h1>

        <div class="more" @click="handleBandan">更多</div>
      </div>

      <div class="n-bilst">
        <div class="n-bilst-list">
          <div class="head-text">
            <img :src="getother_data[0].coverImgUrl" alt class="head-text-in-img" />
            <h2 class="head-text-in-text">{{getother_data[0].name}}</h2>

            <li class="head-text-item" v-for="(item,index) in getBangDang_2_data" :key="item.id">
              {{index+1}}
              <span>- {{item.name}}</span>
            </li>
            <li class="head-text-item item-ts">查看更多</li>
          </div>
        </div>

        <div class="n-bilst-list">
          <div class="head-text">
            <img :src="getother_data[1].coverImgUrl" alt class="head-text-in-img" />
            <h2 class="head-text-in-text">{{getother_data[1].name}}</h2>

            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item item-ts">查看更多</li>
          </div>
        </div>

        <div class="n-bilst-list">
          <div class="head-text">
            <img :src="getother_data[2].coverImgUrl" alt class="head-text-in-img" />
            <h2 class="head-text-in-text">{{getother_data[2].name}}</h2>

            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item">
              1
              <span>- 薛之谦</span>
            </li>
            <li class="head-text-item item-ts">查看更多</li>
          </div>
        </div>
      </div>
    </div>

    <div class="box-dialog">
      <div class="box-dialog-head">
        <h2 class="box-dialog-head-h2">手机号登录</h2>
        <h2 class="box-dialog-head-h3" @click="closeDialog">x</h2>
      </div>

      <div class="box-dialog-mian">
        <div class="box-dialog-mian-display">
          <input
            v-model="phone"
            @change="change_value"
            type="text"
            name
            id
            class="input_phone"
            placeholder="请输入手机号"
          />
          <input
            @change="change_code"
            v-model="code_yzm"
            type="text"
            name
            id
            class="input_code"
            placeholder="请输入验证码"
          />
          <el-button type="primary" size="mini" class="el-button-1" @click="code">发送验证码</el-button>

          <button class="button-2" @click="yanzhi_code">登录</button>
        </div>
      </div>

      <div class="box-dialog-bottom">
        <p class="cao">back</p>
        <p class="fuck">没有帐号？免费注册 ></p>
      </div>
    </div>

    <div class="box-2-dialog" v-show="display_dialog">
      <img :src="updata_data.avatarUrl" alt class="box-2-dialog-img" />
      <div class="box-2-dialog-name">{{updata_data.nickname}}</div>
      <div class="id">32953014</div>

      <button class="back_login" @click="back_logins">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getMusicList_data: [],
      getLbt_data: [],
      getother_data: [],
      phone: "",
      code_yzm: "",
      getBangDang_2_data: [],
      // 是否显示（未登录）
      display_dialog: false,
      // 用户信息
      updata_data: {},
      // 获取登录之后的token
      token_new: ""
    };
  },
  created() {
    this.getMusicList();
    this.getLbt();
    this.getother();
    this.getBangDang_2();
  },
  methods: {
    async getMusicList() {
      const re = await this.$http.get("/personalized");
      this.getMusicList_data = re.data.result;
      this.getMusicList_data.length = 8;

      // console.log(this.getMusicList_data);
    },
    // 跳转页面
    handleToMore_detail() {
      this.$message.success("跳转成功");
      this.$router.push("/more-detail");
    },
    // 跳转页面-2
    handleBandan() {
      this.$message.success("跳转成功");
      this.$router.push("/BangDan");
    },
    // 跳转页面-3
    handleToSonger() {
      this.$message.success("跳转成功");
      this.$router.push("/Songer");
    },
    // 跳转页面-4
    handleDianTai() {
      this.$message.success("跳转成功");
      this.$router.push("/dianTai");
    },
    // 获取数据
    async getLbt() {
      const re = await this.$http.get("/banner");
      this.getLbt_data = re.data.banners;
    },
    async getother() {
      const re = await this.$http.get("/toplist/detail");
      this.getother_data = re.data.list;
      console.log(this.getother_data);
    },
    // 页面普通事件
    closeDialog() {
      // var who = document.querySelector(".box-dialog-head-h3");
      var dialog = document.querySelector(".box-dialog");
      dialog.style.display = "none";
    },
    openDialog() {
      var dialog = document.querySelector(".box-dialog");
      // console.log(123);
      dialog.style.display = "block";
    },
    // 监听input电话
    change_value() {
      console.log(this.phone);
      console.log(typeof this.phone);
    },
    // 监听code验证码
    change_code() {
      // console.log(this.code_yzm);
    },
    // 发送验证码
    async code() {
      const re = await this.$http.get(`/captcha/sent?phone=${this.phone}`);
      console.log(re);
      this.$message.success("验证码已经发送");
    },
    // 验证验证码和关闭dialog
    async yanzhi_code() {
      this.$message.success("登录成功!");
      this.display_dialog = true;
      var dialog = document.querySelector(".box-dialog");
      dialog.style.display = "none";
      const re = await this.$http.get(
        `/captcha/verify?phone=${this.phone}&captcha=${this.code_yzm}`
      );
      const res = await this.$http.get(
        `/login/cellphone?phone=${this.phone}&captcha=${this.code_yzm}`
      );
      console.log(res.data);
      this.token_new = res.data;
      // sessionStorage.setItem("token", this.token_new.token);
      console.log(re);
      this.updata();
    },
    // 登录之后更新数据
    async updata() {
      // 这里没有拿到cookie和id选用静态资源
      const re = await this.$http.get("/user/detail?uid=32953014");
      console.log(re);
      this.updata_data = re.data.profile;
    },
    // 下方榜单数据
    async getBangDang_2() {
      const re = await this.$http.get("/toplist/artist");
      this.getBangDang_2_data = re.data.list.artists;
      this.getBangDang_2_data.length = 10;
      console.log(this.getBangDang_2_data);
    },
    // 跳转搜索页面
    login_search() {
      // console.log(123);
      this.$message.success("跳转成功!");
      this.$router.push("/loginSearch");
    },
    handleToMv_go() {
      this.$message.success("跳转mv页面成功");
      this.$router.push("/Mv");
    },
    async back_logins() {
      // console.log(123);
      const re = await this.$http.get("/logout");
      console.log(re);
      this.$message.info("退出登录成功!");
      var box = document.querySelector(".box-2-dialog");
      box.style.display = "none";
    }
  }
};
</script>

<style scoped>
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

.lbt {
  width: 100%;
  height: 285px;
  /* background-color: aqua; */
  background: url("../assets/images/lbt.jpg") no-repeat;
  background-size: cover;
}
.warp {
  width: 982px;
  height: 285px;
  margin: 0px auto;
  /* background-color: beige; */
}
.main {
  width: 982px;
  height: 1510px;
  margin: 0px auto;
  background-color: #ffffff;
  border: 1px solid transparent;
  box-sizing: border-box;
}

.mian_h1-1 {
  float: left;
  font-size: 20px;
  font-weight: normal;
  line-height: 35px;
}
.main-head {
  width: 700px;
  height: 35px;
  /* background-color: aqua; */
  margin-top: 30px;
  margin-left: 15px;
  box-sizing: border-box;
  border-bottom: 2px solid #c10d0c;
}

.main_ul {
  width: 239px;
  height: 20px;
  /* background-color: violet; */
  float: left;
  margin: 7px 20px;
}
.main_ul li {
  display: inline-block;
  margin: 0px 5px;
  color: rgb(153, 153, 153);
}
.more {
  float: right;
  width: 30px;
  height: 20px;
  margin: 7px 20px;
  color: rgb(231, 148, 148);
}
.main-haed-two {
  width: 700px;
  height: 468px;
  /* background-color: red; */
  float: left;
  margin-top: 15px;
  margin-left: 15px;
}
.ts {
  width: 162px;
  height: 214px;
  /* background-color: seagreen; */
  display: inline-block;
  margin: 0px;
  padding: 0px;
  margin: 10px 5px;
  position: relative;
}
.head-img {
  width: 100%;
  float: left;
  height: 145px;
}
.an {
  float: left;
  width: 162px;
  height: 20px;
  background-color: black;
  color: rgb(209, 209, 209);
  text-align: right;
  letter-spacing: 3px;
  position: absolute;
  top: 125px;
  opacity: 0.6;
}
.main-head-two-h3 {
  /* height: 17px; */
  width: 100%;
  /* background-color: springgreen; */
  float: left;
  margin-top: 10px;
  font-size: 15px;
  font-weight: normal;
}
.main-right-box-head {
  width: 250px;
  height: 126px;
  background: linear-gradient(#fbfbfb, #e3e3e3);
  display: inline-block;
  margin-left: 15px;
  margin-bottom: 10px;
}
.main-head {
  float: left;
}

.alert {
  width: 205px;
  height: 45px;
  /* background-color: steelblue; */
  float: right;
  line-height: 22px;
  font-size: 13px;
  margin: 17px 22px 5px 20px;
}
.button1 {
  width: 80px;
  height: 31px;
  background: linear-gradient(#e31820, #c8070d);
  outline: none;
  border: none;
  color: #fff;
  margin: 10px 80px;
  border-radius: 5px;
  overflow: hidden;
  font-size: 12px;
  letter-spacing: 2px;
}
.button1:hover {
  background: linear-gradient(#e72f39, #dc1b24);
  transition: all 0.3 ease;
}

.main-right-box-head-right {
  width: 250px;
  height: 455px;
  /* background-color: blueviolet; */
  border-bottom: 1px solid transparent;
  box-sizing: border-box;
}
.main-right-box-head-right-head-2 {
  width: 210px;
  height: 24px;
  /* background-color: burlywood; */
  line-height: 24px;
  margin: 0px 20px 20px 20px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.main-right-text1 {
  float: left;
  margin: 30px 10px 20px;
}
.text2 {
  float: right !important;
}

.list {
  width: 230px;
  height: 400px;
  /* background-color: aqua; */
  margin: 10px 10px;
}
.list_item {
  width: 210px;
  height: 62px;
  margin: 0px 10px;
  background-color: #fafafa;
  margin: 7px 0px;
  padding: 35px 0;
}

.box-wenz {
  height: 62px;
  float: right;
  width: 148px;
  border: 1px solid #eee;
  box-sizing: border-box;
}
.list_item_img {
  float: left;
}

.h222,
.h444 {
  margin-left: 10px;
  margin-top: 8px;
}
.h222 {
  font-size: 15px;
}
.h444 {
  font-size: 12px;
}
.sq {
  width: 210px;
  height: 31px;
  margin: 20px 10px 5px 10px;
  border: none;
  outline: none;
  font-weight: normal;
  text-align: center;
  letter-spacing: 2px;
  border-radius: 8px;
  background: linear-gradient(rgb(252, 250, 250), #f1f1f1);
}
.sq:hover {
  background: white;
}
.n-disk {
  width: 700px;
  height: 188px;
  background-color: #f5f5f5;
  float: left;
  margin: 20px 15px;
}
.n-disk_li {
  width: 116px;
  height: 150px;
  /* background-color: bisque; */
  display: inline-block;
  margin: 20px 10px;
}
.n-disk-img {
  width: 100%;
  height: 100px;
  float: left;
  box-shadow: 3px 3px 3px rgb(194, 190, 190);
}

.h22-disk {
  color: #000;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  /* margin-top: 10px; */
  /* float: left; */
}
.h33-disk {
  color: #000;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  margin-top: 5px;
}
.extra {
  width: 250px;
  height: 294px;
  /* background-color: antiquewhite; */
  float: right;
}
.extra_li {
  width: 210px;
  height: 50px;
  background-color: rgb(197, 197, 197);
  margin: 10px 20px;
}
.extra_img {
  width: 40px;
  height: 40px;
  float: left;
  margin: 5px;
}
.h33-extra,
.h44-extra {
  font-weight: normal;
  margin-top: 5px;
  float: left;
}
.h44-extra {
  font-size: 12px;
}
.h33-extra {
  font-size: 14px;
}

.n-bilst {
  float: left;
  width: 700px;
  height: 472px;
  background-color: #f4f4f4;
  margin: 30px 15px;
  display: flex;
}
.n-bilst-list {
  float: left;
  flex: 3;
  /* background-color: brown; */
}
.head-text {
  height: 120px;
  /* background-color: chartreuse; */
  border: 1px solid #b8b8b8;
  box-sizing: border-box;
}
.head-text-in-img {
  width: 80px;
  height: 80px;
  margin: 20px 5px 20px 20px;
  float: left;
}
.head-text-in-text {
  font-size: 18px;
  font-weight: normal;
  float: left;
  line-height: 120px;
  text-align: left;
  text-shadow: 3px 3px 3px rgb(197, 197, 197);
}

.head-text-item {
  height: 32px;
  box-sizing: border-box;
  border: 0.5px solid rgb(184, 184, 184);
  float: left;
  width: 232.333px;
  text-indent: 1.5em;
  line-height: 32px;
  font-size: 18px;
  color: rgb(240, 93, 93);
}
.head-text-item span {
  color: black;
  font-size: 15px;
}
.item-ts {
  float: left;
  color: black;
  font-size: 15px;
  text-align: center;
  background-color: #e8e8e8;
  width: 232px;
}
.box-lbt {
  width: 100%;
  height: 285px;
  background-color: rgb(226, 226, 226);
}
.inside-h3 {
  width: 100%;
  height: 100%;
}
.img-lbt {
  width: 100%;
  height: 285px;
}
.box-dialog {
  width: 530px;
  height: 313px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px rgb(0, 0, 0);
  display: none;
}
.box-dialog-head {
  width: 100%;
  height: 38px;
  background-color: #2d2d2d;
  float: left;
}
.box-dialog-head-h2 {
  font-size: 14px;
  line-height: 38px;
  margin-left: 15px;
  color: white;
  float: left;
}
.box-dialog-head-h3 {
  font-size: 16px;
  line-height: 38px;
  margin-right: 15px;
  color: white;
  float: right;
  width: 50px;
  height: 38px;
  text-align: center;
  line-height: 38px;
}
.box-dialog-head-h3:hover {
  background-color: rgb(145, 145, 145);
  transition: all 0.3s ease;
}
.box-dialog-bottom {
  width: 100%;
  height: 49px;
  background-color: #dddddd;
  float: left;
}
.box-dialog-mian {
  height: 266px;
  /* background-color: tomato; */
  border-top: 1px solid transparent;
  box-sizing: border-box;
}
.box-dialog-mian-display {
  width: 250px;
  height: 150px;
  /* background-color: rgb(206, 243, 239); */
  margin: 68px auto;
}
.cao {
  line-height: 49px;
  font-weight: normal;
  font-size: 12px;
  color: rgb(253, 85, 85);
  margin-left: 15px;
  float: left;
}
.fuck {
  line-height: 49px;
  font-weight: normal;
  font-size: 13px;
  color: rgb(146, 146, 146);
  margin-right: 15px;
  float: right;
}
.input_phone {
  width: 220px;
  height: 28px;
  font-weight: normal;
  outline: none;
  margin: 10px 25px 10px 15px;
  float: left;
}
.input_code {
  width: 100px;
  height: 28px;
  font-weight: normal;
  outline: none;
  margin: 0px 0px 10px 15px;
  float: left;
}
.el-button-1 {
  float: right;
  margin-top: 3px;
  text-align: center;
  letter-spacing: 2px;
  margin-right: 10px;
}
.button-2 {
  width: 220px;
  height: 35px;
  float: left;
  margin: 10px 15px;
  font-size: 13px;
  text-align: center;
  letter-spacing: 6px;
  color: #fff;
  background: linear-gradient(#4392db, #1e77c3);
  border-radius: 5px;
}
.button-2:hover {
  background: linear-gradient(#64a9e5, #3382ce);
}
.box-2-dialog {
  width: 250px;
  height: 126px;
  background-color: red;
  position: absolute;
  top: 390px;
  right: 268px;
  z-index: 999;
  background: linear-gradient(#f0f0f0, #dfdfdf);
}
.box-2-dialog-img {
  width: 80px;
  height: 80px;
  float: left;
  margin: 23px 20px;
}
.box-2-dialog-name {
  float: left;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  width: 100px;
  height: 30px;
  margin-top: 30px;
}
.id {
  float: left;
  font-size: 13px;
  font-weight: normal;
  color: rgb(184, 184, 184);
  text-align: left;
  width: 100px;
  height: 30px;
  margin-top: 15px;
}
.back_login {
  position: absolute;
  top: 25px;
  margin: 10px 0px;
  outline: none;
  background: linear-gradient(rgb(236, 174, 174), rgb(247, 114, 114));
}
</style>
