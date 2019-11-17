<template>
    <el-table ref="multipleTable" :data="tableData"  style="width: 100%">
    <el-table-column type="selection" width="55">
      
    </el-table-column>
    <el-table-column prop="_id" label="_id" width="260">
    </el-table-column>
    <el-table-column prop="username" label="username" width="220">
    </el-table-column>
    <el-table-column prop="password" label="password" show-overflow-tooltip>
    </el-table-column>
    
     <el-table-column label="操作">
      <template>
        <el-button
          size="mini"
          >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          >删除</el-button>
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
        loading: true,
        pages:this.$route.query.url
      }
    },
    async created() {
    //slideshow
/*     console.log(activeName); */

    this.$emit("listenToChildEvent",this.$route.query.url)
    let {
      data: { data: user }
    } = await this.$axios.get(mainUrl + "/goods", {
      params: {
        gather: "user"
      }
    });
    this.tableData = user.map(item => {
      return item;
    });
    }
}
</script>
<style lang="scss">

</style>