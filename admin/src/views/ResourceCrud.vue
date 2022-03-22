<template>
    <div>
       <avue-crud 
        v-if="option.column"
        :data="data.data" 
        :option="option"
        :page="page"
        @row-save="save"
        @row-update="update"
        @row-del="dele"
        @on-load="changPage"
        @sort-change="changSort"
        @search-change="changSearch"
       ></avue-crud>
        
    </div>
</template>
<script lang="ts">
import { Vue,Component, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class ResourceCrud extends Vue {
    @Prop(String) resource!: string
    // 数据
    data = {}
    // 配置
    option = {}
    // 分页
    page = { 
        "total": 10, 
        "pagerCount": 5, 
        "currentPage": 1, 
        "pageSize": 2, 
        "pageSizes": [2,5,10,20] 
    }
    // 接口传值
    query:any = {}

    
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
        const res = await this.$http.get(this.resource,{
            params: {
                query: this.query
            }
        })
        this.page.total = res.data.total
        this.data = res.data
    }

    async fetchOption(){
        const res = await this.$http.get(`${this.resource}/option`)
        this.option = res.data
    }
    // 控制分页事件
    async changPage({currentPage,pageSize}:any){
        this.query.page = currentPage
        this.query.limit = pageSize
        this.fetch()
    }
    // 控制排序事件
    async changSort({order,prop}:any){
        if(order !== null){
            this.query.sort = null
        }else{
            this.query.sort = {
                [prop]: order === 'ascending' ? -1 : 1
            }
        }
        this.fetch()
    }
    // 控制搜索事件
    async changSearch(where:any,done:any){
        for(let k in where){
            const field = this.option.column.find((v:any)=>v.prop === k)
            if(field.regex){
                where[k] = { $regex: where[k] }
            }
        }
        this.query.where = where
        this.fetch()
        done()
    }

    created() {
        console.log(this.resource)
        this.fetch()
        this.fetchOption()
    }
    
    // 监听属性 这里是监听路由 跳转 所有路由都是一个页面 ，就会产生跳了不刷新数据，让路由每次跳转的实时跟新数据
    @Watch('$route')
    route(to:any, from:any) {
    //   console.log(to,from)
      this.query.where = null
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