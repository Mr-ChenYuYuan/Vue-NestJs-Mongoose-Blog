<template>
    <div>
        <h3>课程列表</h3>
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
                    <el-button type="danger" plain size="default" @click="dele(row._id)">删除</el-button>
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

    async dele(id:any){
        
        if(confirm('是否删除')){
            await this.$http.delete(`posts/${id}`)
            this.$message.success('保存成功')
            this.fetch()
        }
        
    }

    created() {
        this.fetch()
    }
}
</script>
<style>
    
</style>