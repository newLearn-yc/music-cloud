<template>
  <div class="player">
    <div class="box-left-disk">
      <img @click="click_stop" src="../assets/images/needle.png" class="box-left-disk-img-top" />
      <img src="../assets/images/disc.png" alt class="box-left-disk-img" />
    </div>

    <div class="box-right-content">
      <h3 class="box-right-content-h3">{{song_name}}</h3>
      <h3 class="box-right-content-h33" @click="handleToMv">{{song_name_new}}MV</h3>
      <h3 class="box-right-content-h333">{{songId_new}}</h3>

      <div class="player-body">
        <img :src="song_img || song_img_2" class="img-songs" />

        <audio
          class="audio-play"
          ref="refaduio"
          controls="controls"
          loop="loop"
          autoplay="autoplay"
        >
          <source :src="songUrl" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
// 取消vue的规则，驼峰命名
export default {
  data() {
    return {
      isPlay: false,
      id: "",
      song_name: "",
      song_img: "",
      song_img_2: "",
      // 歌曲url
      songUrl: "",
      // 歌曲名字
      song_name_new: "",
      // 歌曲id
      songId_new: ""
    };
  },
  created() {
    this.getMessage();
    this.getsongs();
  },
  methods: {
    click_stop() {
      var img = document.querySelector(".box-left-disk-img-top");
      var disk = document.querySelector(".box-left-disk-img");

      if (this.isPlay === true) {
        img.style.transform = "rotate(" + 0 + "deg" + ")";
        img.style.transition = "all 0.3s ease";
        disk.style.animation = "";
        this.isPlay = false;
      } else if (this.isPlay === false) {
        img.style.transform = "rotate(" + -30 + "deg" + ")";
        img.style.transition = "all 0.3s ease";
        this.isPlay = true;
        disk.style.animation = "move 5s ease infinite";
      }
    },
    async getMessage() {
      const id = sessionStorage.getItem("id");
      console.log(id);
      this.id = id;

      const re = await this.$http.get(`/artists?id=${id}`);
      this.song_name = re.data.artist.name;
      this.song_img = re.data.artist.img1v1Url;
    },
    // 获取歌url
    async getsongs() {
      // 拿取存储数据
      const songId = sessionStorage.getItem("songId");
      this.songId_new = songId;
      const songName = sessionStorage.getItem("song_name");
      this.song_name_new = songName;
      const img_1 = sessionStorage.getItem("img_1");
      this.song_img = img_1;
      const img_2 = sessionStorage.getItem("img_2");
      this.song_img_2 = img_2;

      const re = await this.$http.get(`/song/url?id=${songId}`);
      this.songUrl = re.data.data[0].url;
      this.$refs.refaduio.src = re.data.data[0].url;
    },
    // 跳转mv页面
    handleToMv() {
      console.log(213);
    }
  }
};
</script>

<style scoped>
.box-right-content-h33:hover {
  background: linear-gradient(
    rgb(223, 223, 223),
    rgb(194, 194, 194),
    rgb(158, 158, 158)
  );
  transition: all 0.3s ease;
  border-radius: 10px;
}
.player {
  width: 100%;
  height: 721px;
  background: linear-gradient(
    rgb(223, 223, 223),
    rgb(151, 149, 149),
    rgb(121, 118, 118),
    rgb(88, 82, 82)
  );
  position: relative;
}
.box-left-disk {
  width: 350px;
  height: 350px;
  background: linear-gradient(rgb(168, 167, 167), rgb(80, 80, 80));
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  margin-right: 10px !important;
}
.box-left-disk-img-top {
  float: left;
  position: absolute;
  top: -97px;
  left: 133px;
  z-index: 999;
  transform: rotate(0deg);
}
.box-left-disk-img {
  width: 300px;
  height: 300px;
  margin: 25px 25px;
  animation: move 5s ease infinite;
}
@keyframes move {
  to {
    transform: rotate(360deg);
  }
}
.box-right-content {
  width: 650px;
  height: 600px;
  /* background-color: chartreuse; */
  position: absolute;
  top: 50px;
  left: 750px;
}
.box-right-content-h3 {
  float: left;
  height: 50px;
  width: 150px;
  /* background-color: coral; */
  font-weight: normal;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 3px;
}
.box-right-content-h33 {
  float: left;
  height: 50px;
  width: 380px;
  /* background-color: cyan; */
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  letter-spacing: 3px;
  line-height: 50px;
}
.box-right-content-h333 {
  float: left;
  height: 50px;
  width: 120px;
  /* background-color: darkcyan; */
  font-weight: normal;
  text-align: center;
  line-height: 50px;
}
.player-body {
  width: 500px;
  height: 500px;
  /* background-color: red; */
  float: left;
  margin: 20px 75px;
}
.audio-play {
  width: 480px;
  margin: 10px 5px;
}
.img-songs {
  width: 450px;
  margin: 10px 20px;
  height: 380px;
}
</style>
