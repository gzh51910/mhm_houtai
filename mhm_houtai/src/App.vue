<template>
  <div id="app">
    <el-tabs @tab-click="gotoroute" v-model="number">
      <el-tab-pane  v-for="item in dblist" :key="item.id" :label="item.title">
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
          title: "dbClient",
          name: "dbClient",
          path: "/dbClient"
        },
        {
          title: "dbPhone",
          name: "dbPhone",
          path: "/dbPhone"
        },
        {
          title: "dbuser",
          name: "dbuser",
          path: "/dbuser"
        },
        {
          title: "dbELSWORD_list",
          name: "dbELSWORD_list",
          path: "/dbELSWORD_list"
        },
        {
          title: "dbELSWORD_list_jywc",
          name: "dbELSWORD_list_jywc",
          path: "/dbELSWORD_list_jywc"
        },
        {
          title: "dbELSWORD_list_syzk",
          name: "dbELSWORD_list_syzk",
          path: "/dbELSWORD_list_syzk"
        },
        {
          title: "dbGame_nav",
          name: "dbGame_nav",
          path: "/dbGame_nav"
        }
        ,
        {
          title: "dbHearthStone",
          name: "dbHearthStone",
          path: "/dbHearthStone"
        },
        {
          title: "dbHomeList",
          name: "dbHomeList",
          path: "/dbHomeList"
        },
        {
          title: "dbHonor",
          name: "dbHonor",
          path: "/dbHonor"
        },
        {
          title: "dbMolder3rd",
          name: "dbMolder3rd",
          path: "/dbMolder3rd"
        },
        {
          title: "dbSkin",
          name: "dbSkin",
          path: "/dbSkin"
        }, {
          title: "dbfn_nav",
          name: "dbfn_nav",
          path: "/dbfn_nav"
        }, {
          title: "dbnotice",
          name: "dbnotice",
          path: "/dbnotice"
        }, {
          title: "dbslideshow",
          name: "dbslideshow",
          path: "/dbslideshow"
        },{
          title:'dbuser',
          name:'dbuser',
          path:"/dbuser"
        }
      ]

    };
  },
  methods: {
    gotoroute() {
      this.$router.push(this.dblist[this.number].path)
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
