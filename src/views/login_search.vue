<template>
  <div class="home">
    <div class="login_search">
      <input @change="handle" type="text" name id class="input-1" placeholder="请输入歌曲" />
      <el-button type="info" class="btn" @click="search">搜索歌曲</el-button>
    </div>

    <el-card>
      <li
        @click="handlePlay_song(item.id,item.name,song)"
        class="el-card-item"
        v-for="(item,index) in search_data"
        :key="item.id"
      >
        <div class="box-index">{{index+1}}</div>
        <div class="box-song">
          <img :src="item.album.artist.img1v1Url" class="box-song-img" />
          <h3 class="box-song-h3">{{item.name}}</h3>
        </div>
        <div class="box-zuozhe">{{item.album.name}}</div>
        <div class="box-by">{{item.id}}</div>
      </li>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_data: []
    };
  },
  methods: {
    handle() {},
    async search() {
      var value = document.querySelector(".input-1");
      // console.log(value.value);
      const re = await this.$http.get(`/search?keywords= ${value.value}`);
      console.log(re.data.result.songs);
      this.search_data = re.data.result.songs;
    },
    handlePlay_song(id, name) {
      sessionStorage.setItem("songId", id);
      sessionStorage.setItem("song_name", name);
      this.$router.push(`/PlaySong?songid=${id}`);
      this.$message.success("跳转成功");
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(204, 204, 204), rgb(124, 123, 123));
}
.login_search {
  width: 500px;
  height: 80px;
  /* background-color: cadetblue; */
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input-1 {
  width: 500px;
  height: 60px;
  outline: none;
  border-radius: 20px;
  text-indent: 2em;
}
.btn {
  margin: 10px 200px;
}
.el-card {
  margin-top: 200px;
  margin: 200px 100px 10px 200px;
}

.el-card-item {
  width: 100%;
  height: 50px;
  /* background-color: chartreuse; */
  margin: 2px auto;
}
.box-index {
  height: 50px;
  width: 100px;
  /* background-color: coral; */
  float: left;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
}
.box-song {
  height: 50px;
  width: 500px;
  /* background-color: cyan; */
  line-height: 50px;
  text-indent: 2em;
  float: left;
  box-sizing: border-box;
}
.box-by {
  height: 50px;
  width: 200px;
  /* background-color: red; */
  line-height: 50px;
  text-align: center;
  float: left;
  box-sizing: border-box;
}
.box-song-img {
  width: 50px;
  height: 50px;
}
.box-song-h3 {
  float: right;
  text-align: center;
  width: 410px;
  font-weight: normal;
  font-size: 14px;
  /* background-color: red; */
}
.el-card-item:nth-child(2n-1) {
  background-color: #eeeeee;
}
.box-zuozhe {
  height: 50px;
  width: 100px;
  /* background-color: royalblue; */
  float: left;
  line-height: 50px;
  font-weight: normal;
  font-size: 12px;
  color: #aaaaaa;
  overflow: hidden;
}
</style>
