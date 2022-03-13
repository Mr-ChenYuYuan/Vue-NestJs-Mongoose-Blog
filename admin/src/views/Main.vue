<template>

  <el-container>
    <!-- 头部 -->
    <!-- <el-header>
      CYY - 后台管理界面
    </el-header> -->
    <!-- 身体 -->
    <el-container >
      <!-- 侧边栏 -->
      <el-aside width="200px" >
        <!-- 侧边栏 -->
        <el-menu mode="vertical" :default-active="$route.path" router style="height:100vh;">
          
          <el-submenu v-for="(submenus,index) in menu.items" 
          :key="index" :index="index +'1'">
            <template slot="title">{{submenus.title}}</template>
            <el-menu-item v-for="(item,i) in submenus.items" 
              :index="item.path" 
              :key="i"
            >
                {{item.title}}
            </el-menu-item>
          </el-submenu>

        </el-menu>
        
        

      </el-aside>
      
      <!-- 内容 -->
      <el-container >
        <el-main height="">
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>

  </el-container>


 
  
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { },
})
export default class Main extends Vue {

  menu = {
    items : [
      {
        title: '内容管理',
        items: [
          { title: '首页',path: '/' },
          { title: '帖子管理',path: '/posts/list' },
          { title: '帖子创建',path: '/posts/create' }
        ]
      },
    ]
  }
    
}
</script>
