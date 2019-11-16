<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane  v-for="item in dblist" :key="item.title" :label="item.title">
       {{item.title}}
       <main>
        <router-view/>
      </main>
      </el-tab-pane>
     
    </el-tabs>
     
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      dblist: [
        {
          title: "client",
          name:"client",
          path:"/client",

        },
        {
          title: "Phone"
        },
        {
          title: "user"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
