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
            <tr v-for="(news, idx) in newsList" :key="news.id">
                <td> {{ idx + 1}}</td>
                <td> <a href="#" @click="newsClick(news)">{{ news.title }}</a></td>
                <td> {{ news.company }}</td>
                <td> {{ news.date }}</td>
                <td> {{ news.count }} </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Notice",
    data(){
        return {
            newsList:[
                {id:1, title:"한국언론진흥재단-인천항만공사, 빅카인즈 뉴스빅데이터 활용", company:"서울신문", date:"2020-11-27", count:0},
                {id:2, title:"IPA, 인천항에 뉴스 빅데이터 분석기술 도입", company:"서울신문", date:"2020-11-27", count:0},
                {id:3, title:"국감 덮어버린 언론보도 키워드 윤석열·게임·막말", company:"서울신문", date:"2020-11-27", count:0},
                {id:4, title:"조정래 발언 왜곡 논란, '진중권 저널리즘'이 키웠다", company:"서울신문", date:"2020-11-27", count:0},
                {id:5, title:"한국언론진흥재단-인천항만공사, 빅카인즈 뉴스빅데이터 활용", company:"서울신문", date:"2020-11-27", count:0},
                {id:6, title:"IPA, 인천항에 뉴스 빅데이터 분석기술 도입", company:"서울신문", date:"2020-11-27", count:0},
                {id:7, title:"국감 덮어버린 언론보도 키워드 윤석열·게임·막말", company:"서울신문", date:"2020-11-27", count:0},
                {id:8, title:"조정래 발언 왜곡 논란, '진중권 저널리즘'이 키웠다", company:"서울신문", date:"2020-11-27", count:0},
                {id:9, title:"한국언론진흥재단-인천항만공사, 빅카인즈 뉴스빅데이터 활용", company:"서울신문", date:"2020-11-27", count:0},
                {id:10, title:"IPA, 인천항에 뉴스 빅데이터 분석기술 도입", company:"서울신문", date:"2020-11-27", count:0},
                {id:11, title:"국감 덮어버린 언론보도 키워드 윤석열·게임·막말", company:"서울신문", date:"2020-11-27", count:0},
                {id:12, title:"언론은 왜 '방역 훼방꾼' 됐나? '정권 비판에 재난 이용'", company:"서울신문", date:"2020-11-27", count:0},
            ]
        }
    },
    methods:{
        newsClick(news){
            news.count += 1
        }
    }
}
</script>

<style>

</style>