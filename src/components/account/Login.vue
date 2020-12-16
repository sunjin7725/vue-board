<template>
  <div class="loginWrap">
        <h2>{{ msg }}</h2>
        <div class="login">
            <label><input type="text" placeholder="아이디" v-model="data.user.id"></label>
            <label><input type="password" placeholder="비밀번호" v-model="data.user.password"></label>
            <button class="btn-login" @click="doLogin">로그인</button>
        </div>
        <div class="findWrap clearfix">
            <a href="#">아이디 찾기</a>
            <a href="#">비밀번호 찾기</a>
        </div>
    </div>
</template>

<script>
import { account } from '../../api'

export default {
    name: "Login",
    data(){
        return {
            msg: "Login",
            data: {
                user: {
                    id: "",
                    password: ""
                }
            }
        }
    },
    methods:{
        doLogin(){
            account.login(this.data)
            .then(res=>{
                if(res.status == 200){
                      this.$router.push('/notice');  
                }
            })
            .catch(() => {
                alert("로그인에 실패했습니다.");
            })
        }
    }
}
</script>

<style>

</style>