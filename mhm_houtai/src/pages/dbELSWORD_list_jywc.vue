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
    <el-table-column prop="time" label="time" width="220">
    </el-table-column>
    <el-table-column prop="pirce" label="pirce" width="100"  show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="count" label="count" width="100" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="all_price" label="all_price" width="80" show-overflow-tooltip>
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
      let {
        data:{data:ELSWORD_list_jywc}
      } = await this.$axios.get(mainUrl + "/goods",{
        params:{
          gather:"ELSWORD_list_jywc"
        }
      });
       this.tableData = ELSWORD_list_jywc.map(item => {
      return item;
    });
    }
}
</script>
<style lang="scss">

</style>