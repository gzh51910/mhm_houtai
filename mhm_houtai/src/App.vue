<template>
  <div id="app">
    <el-tabs @tab-click="gotoroute" v-model="activeName">
      <el-tab-pane  v-for="(item,item_index) in dblist" :key="item_index" :label="item.title" :name="item.name">
       <main >
         {{activeName}}
        <!-- <router-view v-on:listenToChildEvent="showMsgFromChild"/> -->
        <el-table ref="multipleTable" :data="tableData"  style="width: 100%" >
         
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column v-for="(list,list_index) in tableData_list" :key="list_index" :prop="list" :label="list">
    </el-table-column>
     <el-table-column label="操作">
      <template  slot-scope="scope">
        <el-button
          size="mini"
          >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteButton(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      </main>
      </el-tab-pane>
     
    </el-tabs>
     
  </div>
</template>

<script>
import { mainUrl } from './config.json'
export default {
  name: "app",
  data() {
    return {
      activeName:"dbClient",
      tableData: [],
      tableData_list:[],

      dblist: [
        {
          title: "Client",
          name: "Client",
          path: "/dbClient"
        },
        {
          title: "Phone",
          name: "Phone",
          path: "/dbPhone"
        },
        {
          title: "user",
          name: "user",
          path: "/dbuser"
        },
        {
          title: "ELSWORD_list",
          name: "ELSWORD_list",
          path: "/dbELSWORD_list"
        },
        {
          title: "ELSWORD_list_jywc",
          name: "ELSWORD_list_jywc",
          path: "/dbELSWORD_list_jywc"
        },
        {
          title: "ELSWORD_list_syzk",
          name: "ELSWORD_list_syzk",
          path: "/dbELSWORD_list_syzk"
        },
        {
          title: "Game_nav",
          name: "Game_nav",
          path: "/dbGame_nav"
        }
        ,
        {
          title: "HearthStone",
          name: "HearthStone",
          path: "/dbHearthStone"
        },
        {
          title: "HomeList",
          name: "HomeList",
          path: "/dbHomeList"
        },
        {
          title: "Honor",
          name: "Honor",
          path: "/dbHonor"
        },
        {
          title: "Molder3rd",
          name: "Molder3rd",
          path: "/dbMolder3rd"
        },
        {
          title: "Skin",
          name: "Skin",
          path: "/dbSkin"
        }, {
          title: "fn_nav",
          name: "fn_nav",
          path: "/dbfn_nav"
        }, {
          title: "notice",
          name: "notice",
          path: "/dbnotice"
        }, {
          title: "slideshow",
          name: "slideshow",
          path: "/dbslideshow"
        }
      ],
      
    };
  },
  methods: {
    async gotoroute() {
/*       let url = this.activeName     
      this.$router.push({name:url,query:{url}}); */
      let {
      data: { data: Client }
    } = await this.$axios.get(mainUrl + "/goods", {
      params: {
        gather: this.activeName
      }
    });
    this.tableData = Client.map(item => {
      return item;
    })
    this.tableData_list=Object.keys(this.tableData[0]);
    
    } ,
/*     showMsgFromChild(data){
      this.activeName = data;     
    } */
    async deleteButton(obj){
     let id = obj._id
      try {
        await this.$axios.delete(mainUrl+"/goods",{
      params:{
        gather:this.activeName,
        _id:id
      }
        });
        this.tableData.forEach((ele,idx) => {
          if(ele["_id"]==id){
            this.tableData.splice(idx,1);
          }
        });
      } catch (error) {
        console.log(error);
      }

    

  },
  },
  
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
