<template>
    <div>
        <h3>课程列表</h3>
        <div class="mx-1">
            <el-button type="primary" size="small" @click="$router.push('/posts/create')">创建帖子</el-button>
            
        </div>
        <el-table :data="data.data" border stripe>
            <el-table-column v-for="(field,index) in fields"
                :prop="index"
                :key="index"
                :label="field.label">
                
            </el-table-column>
            <!-- 编辑/操作 -->
            <el-table-column
                label="操作"
                :width="120">
                <template v-slot="{row}">
                    <el-button type="primary" plain size="default" @click="$router.push(`edit/${row._id}`)">操作</el-button>
                </template>
            </el-table-column>
            
            <!-- 删除 -->
            <el-table-column
                label="操作"
                :width="120">
                <template v-slot="{row}">
                    <el-button type="danger" plain size="default" @click="dele(row)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        
    </div>
</template>
<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'

@Component({})
export default class PostList extends Vue {
    data = {}
    fields = {
        _id: { label: 'ID' },
        title: { label: '帖子名称' },
        cover: { label: '帖子封面图' },
    }

    async fetch(){
        const res = await this.$http.get('posts')
        this.data = res.data
    }

    async dele(row:any){
        try{
            await this.$confirm(`是否删除“${row.title}”`)
        }catch(e){
            return
        }
        await this.$http.delete(`posts/${row._id}`)
        this.$message.success('删除成功')
        this.fetch()
        
    }

    created() {
        this.fetch()
    }
}
</script>
<style>
   .mx-1{
       margin: 15px 0;
   } 
</style>