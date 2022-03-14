<template>
    <div>
       <avue-crud 
        v-if="option.column"
        :data="data.data" 
        :option="option"
        @row-save="save"
        @row-update="update"
        @row-del="dele"
       ></avue-crud>
        
    </div>
</template>
<script lang="ts">
import { Vue,Component, Prop } from 'vue-property-decorator'

@Component({})
export default class ResourceCrud extends Vue {
    @Prop(String) resource!: string

    data = {}
    option = {}

    
    // 增
    async save(data:any,done:any){
        await this.$http.post(this.resource,data)
        this.$message.success('保存成功')
        this.fetch()
        done()
    }
    // 删
    async dele(row:any){
        try{
            await this.$confirm(`是否删除“${row.title}”`)
        }catch(e){
            return
        }
        await this.$http.delete(`${this.resource}/${row._id}`)
        this.$message.success('删除成功')
        this.fetch()
        
    }
    // 改
    async update(row:any,index:number,done:any){
        var data = JSON.parse(JSON.stringify(row))
        delete data.$index
        await this.$http.put(`${this.resource}/${data._id}`,data)
        this.$message.success('修改成功')
        this.fetch()
        done()
    }
    // 查
    async fetch(){
        const res = await this.$http.get(this.resource)
        this.data = res.data
    }

    async fetchOption(){
        const res = await this.$http.get(`${this.resource}/option`)
        this.option = res.data
    }

    created() {
        console.log(this.resource)
        this.fetch()
        this.fetchOption()
    }
}
</script>
<style>
   .mx-1{
       margin: 15px 0;
   } 
</style>