<template>
  <div class="loginWrap">
        <h2>{{ msg }}</h2>
        <div class="login">
            <label><input type="text" placeholder="아이디" v-model="id"></label>
            <label><input type="password" placeholder="비밀번호" v-model="password"></label>
            <button class="btn-login" @click="doClick">로그인</button>
        </div>
        <div class="findWrap clearfix">
            <a href="#">아이디 찾기</a>
            <a href="#">비밀번호 찾기</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            msg: "Login",
            id: "",
            password: "",
        }
    },
    methods:{
        doClick(){
            if(this.id === 'admin' && this.password === '1234') {
                this.$router.push('/notice');   
            }
        }
    }
}
</script>

<style>

</style>