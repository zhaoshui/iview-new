<template>
    <div id="app">
      <Menu  mode="horizontal" :theme="theme1" active-name="1">
        <Menu-item name="1">
          <router-link to="/">
            <Icon type="ios-paper"></Icon>
            系统首页
          </router-link>
        </Menu-item>
        <Menu-item name="2">
          <router-link to="/memberinfo">
            <Icon type="ios-people"></Icon>
            会员管理
          </router-link>
        </Menu-item>
        <!-- <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu> -->
        <Menu-item name="4">
          <router-link to="/keyaccount">
            <Icon type="settings"></Icon>
            客户管理
          </router-link> 
        </Menu-item>
        <Menu-item name="5">
          <router-link to="/returndata">
            <Icon type="settings"></Icon>
            回访管理
          </router-link> 
        </Menu-item>
        <Menu-item name="6">
          <router-link to="/smsanage">
            <Icon type="settings"></Icon>
            短信管理
          </router-link> 
        </Menu-item>
        <Menu-item name="7">
          <router-link to="/memberset">
            <Icon type="settings"></Icon>
            会员设置
          </router-link> 
        </Menu-item>
        <Menu-item name="8">
          <router-link to="/stareport">
            <Icon type="settings"></Icon>
            统计报表
          </router-link> 
        </Menu-item>
        <Menu-item name="9">
          <router-link to="/systemset">
            <Icon type="settings"></Icon>
            系统设置
          </router-link> 
        </Menu-item>
    </Menu>

    <router-view></router-view>
    <br>
    <!-- <p>切换主题</p>
    <Radio-group v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </Radio-group> -->
    </div>
    
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
