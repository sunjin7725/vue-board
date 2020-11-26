<template>
    <div>
        <a :href="link">{{ text }}</a>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props:{
        text:{
            type:String
        },
        link:{
            type:String
        }
    }
}
</script>

<style>

</style>