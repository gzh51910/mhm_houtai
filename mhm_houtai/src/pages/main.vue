<template>
  <div id="main">
    <el-tabs @tab-click="gotoroute" v-model="activeName">
      <el-tab-pane
        v-for="(item,item_index) in dblist"
        :key="item_index"
        :label="item.title"
        :name="item.name"
      >
        <main>
          {{activeName}}
          <el-button
            type="success"
            style="float:right"
            size="mini"
            @click="open_add()"
          >添加信息</el-button>
          <!-- <router-view v-on:listenToChildEvent="showMsgFromChild"/> -->
          <el-table ref="multipleTable" :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
              v-for="(list,list_index) in tableData_list"
              :key="list_index"
              :prop="list"
              :label="list"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger" @click="open(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </main>
      </el-tab-pane>
    </el-tabs>

    <!-- <el-dialog title="添加数据库信息" :visible.sync="dialogFormVisible">
      <el-form v-for="(add_list,add_index) in tableData_list" :key="add_index" :model="form">
        <el-form-item :label="add_list" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
    </el-form>-->

    <el-dialog title="添加数据库信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" v-for="(add_list,add_index) in form2" :key="add_index">
        <el-form-item :label="add_list" :label-width="formLabelWidth">
          <el-input v-model="form[`${add_list}`]" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="text_none(1)">取 消</el-button>
        <el-button type="primary" @click="text_none()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mainUrl } from "../config.json";
export default {
  name: "main",
  data() {
    return {
      activeName: "dbClient",
      tableData: [],
      tableData_list: [],
      dialogFormVisible: false,
      form: {},
      form2:[],
      formLabelWidth: "120px",
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
        },
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
        },
        {
          title: "fn_nav",
          name: "fn_nav",
          path: "/dbfn_nav"
        },
        {
          title: "notice",
          name: "notice",
          path: "/dbnotice"
        },
        {
          title: "slideshow",
          name: "slideshow",
          path: "/dbslideshow"
        },
        {
          title: "MMOARPG",
          name: "MMOARPG",
          path: "/dbMMOARPG"
        }
      ]
    };
  },
  methods: {
      open_add(){
          this.form2=[];
          this.dialogFormVisible=true;
          this.tableData_list.forEach((ele,idx)=>{
              if(idx>0){
                  this.form[ele];
                  this.form2.push(ele)
              }
          })
      },
   async text_none(quxiao) {
      if (quxiao == 1) {
        this.form = {};
        this.dialogFormVisible = false;
      }else {     
        //   let obj="{"
        //   for(let key in this.form){
        //       obj += `${key}:'${this.form[key]}',`
        //   }
        //   obj+="}"
          await this.$axios.get(mainUrl+'/goods/s',{
              params:{
                  gather:this.activeName,
                  info:this.form
              }
          })
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.form = {};
        this.dialogFormVisible = false;
      }
    },
    async gotoroute() {
      let {
        data: { data }
      } = await this.$axios.get(mainUrl + "/goods", {
        params: {
          gather: this.activeName
        }
      });
      this.tableData = data;
      this.tableData_list = Object.keys(this.tableData[0]);
    },
    async deleteButton(obj) {
      let id = obj._id;
      try {
        await this.$axios.delete(mainUrl + "/goods", {
          params: {
            gather: this.activeName,
            _id: id
          }
        });
        this.tableData.forEach((ele, idx) => {
          if (ele["_id"] == id) {
            this.tableData.splice(idx, 1);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    open(obj) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteButton(obj);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    addlist() {
      console.log(111);
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
