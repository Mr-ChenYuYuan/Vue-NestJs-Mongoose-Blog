<template>
    <div>
        <h3>{{isNew ? '创建' : '编辑' }}课程</h3>
        <ele-form
            :form-data="data" 
            :form-desc="fields"
            :request-fn="submit"
        ></ele-form>
        
        
    </div>
</template>
<script lang="ts">
import { Vue,Component, Prop } from 'vue-property-decorator'

@Component({}) 
export default class PostEdit extends Vue {
    @Prop(String) id!:string
    data = {}


    fields = {
        title: { label: '帖子名称',type: 'input' },
        cover: { label: '帖子封面图',type: 'input' },
        body: { label: '帖子内容',type: 'input' },
    }

    get isNew(){
        return !this.id
    }

    async submit(data:any){
        const url = this.isNew ? 'posts' : `posts/${this.id}`
        const method = this.isNew ? 'post' : `put`
        this.data = {}
        await this.$http[method](url,data)
        this.$message.success('保存成功')
        this.$router.go(-1)
    }

    async fetch(){
        const res = await this.$http.get(`posts/${this.id}`)
        this.data = res.data
    }

    created() {
        !this.isNew && this.fetch()
    }
}
</script>
<style>
    
</style>