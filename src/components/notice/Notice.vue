<template>
  <div class="gridWrap">
        <h2>공지사항</h2>
        <table class="table">
<!--            <colgroup>-->
<!--                <col width="">-->
<!--                <col width="">-->
<!--                <col width="">-->
<!--            </colgroup>-->
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>등록날짜</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in newsList" :key="idx">
                <td> {{ idx + 1}}</td>
                <td> <a href="#" @click="newsClick(item)">{{ item.title }}</a></td>
                <td> {{ item.writer }}</td>
                <td> {{ item.registration_date }}</td>
                <td> {{ item.count }} </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { news } from '../../api';

export default {
    name: "Notice",
    data(){
        return {
            newsList: []
       }
    },
    methods:{
        newsClick(news){
            news.count += 1
        },
        fetchNews() {
            news.fetchNews().then(res => {
                this.newsList = res.data;
            });
        }
    },
    created(){
        this.fetchNews();
    }
}
</script>

<style>

</style>