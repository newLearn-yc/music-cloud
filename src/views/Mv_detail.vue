<template>
  <div class="big">
    <div class="box">
      <h2 class="box-h2">
        <p class="box-h2-p">{{song_data}}</p>
        <p class="box-p">{{spid_data}}</p>
      </h2>

      <div class="video">
        <video id="video1" loop controls autoplay ref="refvideo">
          <source :src="UrlData" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song_data: "",
      spid_data: "",
      UrlData: ""
    };
  },
  created() {
    this.getData();
    this.getDataUrl();
  },
  methods: {
    getData() {
      const song = sessionStorage.getItem("songName");
      const spid = sessionStorage.getItem("sp_id");
      this.song_data = song;
      this.spid_data = spid;
    },
    async getDataUrl() {
      const re = await this.$http.get(`/mv/url?id=${this.spid_data}`);
      this.UrlData = re.data.data.url;
      console.log(this.UrlData);
      this.$refs.refvideo.src = re.data.data.url;
    }
  }
};
</script>

<style scoped>
.big {
  width: 100%;
  height: 720px;
  background: linear-gradient(rgb(212, 210, 210), rgb(150, 138, 138));
}

.box {
  width: 1200px;
  height: 500px;
  background: linear-gradient(
    rgb(179, 177, 177),
    rgb(158, 157, 157),
    rgb(194, 191, 191),
    rgb(175, 173, 173)
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box-h2 {
  width: 100%;
  height: 50px;
  /* background-color: slateblue; */
  float: left;
  line-height: 50px;
  font-weight: normal;
  box-sizing: border-box;
  border-bottom: 2px solid #f05526;
}
.box-h2-p {
  float: left;
  font-size: 20px;
  margin-left: 10px;
}
.box-p {
  float: right;
  color: #c5c2c2;
  font-weight: normal;
  font-size: 16px;
  margin-right: 10px;
}
.video {
  width: 1160px;
  height: 420px;
  float: left;
  margin: 10px 20px;
  /* background-color: springgreen; */
}
#video1 {
  width: 100%;
  height: 100%;
}
</style>
