<template>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>
  <el-table-column prop="_id" label="_id" width="220">
    </el-table-column>
    <el-table-column prop="src" label="src" width="260">
    </el-table-column>
    <el-table-column prop="title" label="title" width="120">
    </el-table-column>
    <el-table-column prop="first" label="first" width="220">
    </el-table-column>
    <el-table-column prop="continue" label="continue" width="100"  show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="type" label="type" width="100" show-overflow-tooltip>
    </el-table-column>
    
    
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
</template>

<script>
import { mainUrl } from '../config.json'
export default {
     data() {
      return {
        tableData: [],
        multipleSelection: []
      }
    },
  
    async created(){
      console.log(111111234);
      
      let {
        data:{data:ELSWORD_list_syzk}
      }=await this.$axios.get(mainUrl + "/goods",{
        params:{
          gether:"ELSWORD_list_syzk"
        }
      });
      this.tableData=ELSWORD_list_syzk.map(item=>{
        return item
      })
      console.log(ELSWORD_list_syzk);
      
    }
}
</script>
<style lang="scss">

</style>