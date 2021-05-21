<template>
    <div class="wrapper">

        <v-img contain max-height="150" max-width="150" :src="render_Item.url" class="img center">
            <v-btn  elevation="2" class="about" v-on:click="aboutImg(render_Item.id)">
                    Подробнее
            </v-btn>
        </v-img>

    </div>
</template>

<script>
    export default {
        name: "Img",
        methods:{
            aboutImg(n){
                this.$router.push({ name: 'aboutImg', params: {id: n}}).catch(err=>console.log(err))
            }
        },
        props:{
            render_Item:{
                type: Object,
                default(){
                    return {}
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        margin:5px;
        position: relative;

        .img{
        }
        .center{
            display: flex;
            align-items: center;
            text-align: center;
        }
        .about{
            opacity: 0;
            transition: ease-in-out 0.3s;
        }
        &:hover{
            .about{
                opacity: 1;
            }
        }
    }


</style>