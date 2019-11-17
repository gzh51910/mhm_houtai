<template>
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="_id" label="_id" width="260">
    </el-table-column>
    <el-table-column prop="src" label="src" width="260">
    </el-table-column>
    <el-table-column prop="title" label="title" width="120">
    </el-table-column>
    <el-table-column prop="thumbs" label="thumbs" width="220">
    </el-table-column>
    <el-table-column prop="theme" label="theme" width="220"  show-overflow-tooltip>
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
     async created() {
    //slideshow
    let {
      data: { data: Client }
    } = await this.$axios.get(mainUrl + "/goods", {
      params: {
        gather: "Client"
      }
    });
    console.log(Client);
    
    this.tableData = Client.map(item => {
      return item;
    });
    }
}
</script>
<style lang="scss">

</style>