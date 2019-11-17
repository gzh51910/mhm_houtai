<template>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="_id" label="_id" width="280">
    
    </el-table-column>
    <el-table-column prop="src" label="src" width="280">
    </el-table-column>
    <el-table-column prop="title" label="title" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="price" label="price" show-overflow-tooltip width="100">
    </el-table-column>
     <el-table-column prop="quantity" label="quantity" show-overflow-tooltip width="120">
    </el-table-column>
     <el-table-column prop="timer" label="timer" show-overflow-toolti>
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
        data:{data}
      } = await this.$axios.get(mainUrl + "/goods",{
        params:{
          gather:"HomeList"
        }
      });
       this.tableData = data.map(item => {
      return item;
    });
    }
}
</script>
<style lang="scss">

</style>