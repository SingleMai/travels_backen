<template>
  <div>
    <el-table
      :cell-style="textAlignCenter"
      :header-cell-style="textAlignCenter"
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="90">
      </el-table-column>
      <el-table-column
        prop="content"
        label="订单标题">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="price"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            @click="handleEdit(key, scope.$index, scope.row)">编辑</el-button> -->
          <!-- <el-button
            size="mini"
            @click="getDetail(scope.$index, scope.row)">详情</el-button> -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      textAlignCenter: {
        textAlign: 'center'
      },
      data: []
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
