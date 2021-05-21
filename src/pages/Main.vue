<template>
    <v-main class="grey lighten-2">
        <v-container>
            <v-row>
                <template v-for="n in amountRow">
                    <v-col :key="n" class="mt-2" cols="12">
                        <strong> Category {{n}} </strong>
                        <div class="img">
                            <Img v-for="j in imgArr(n * $store.state.row)" :key="j.id" :render_Item="j"/>
                        </div>

                    </v-col>

                </template>
            </v-row>
        </v-container>
    </v-main>


</template>

<script>
  import Img from "../components/Img";
  export default {
    name: 'Main',
    components: {Img},
    data: () => ({
    }),
    methods:{
        imgArr(n){
            let img = this.$store.state.img
            return img.slice(n-this.$store.state.row, n)
        }
    },
    computed:{
        amountRow(){
                return Math.ceil(this.$store.state.img.length/this.$store.state.row)
        }
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
    .img{
        display: flex;
    }

</style>