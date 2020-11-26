<template>
  <div class="header clearfix">
        <div class="branding"><img src="../../assets/img/logo.png"></div>
        
        <ul class="gnb">
            <li v-for="menu in menuList" :key="menu.title"><menu-item :text="menu.title" :link="menu.link"></menu-item></li>
        </ul>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
    name: "Header",
    components: { 
        MenuItem 
    },
    data(){
        return {
            menuList:[
                {title:'HOME', link:"/#/"},
                {title:'STUDY', link:"#"},
                {title:'TEAM', link:"#"},
                {title:'RESOURCE', link:"#"},
                {title:'GUIDE', link:"#"},
                {title:'DOWNLOAD', link:"#"},
                {title:'NOTICE', link:"/#/notice"},
            ]
        }
    },
}
</script>

<style>

</style>