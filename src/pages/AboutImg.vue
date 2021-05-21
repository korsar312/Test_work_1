<template>
    <v-main class="grey lighten-2">
        <v-container>
                <div v-for="n in entries" :key="n[0]" >
                    {{n[0]}}: {{n[1]}}
                </div>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: "AboutImg",
        data: () => ({

        }),
        computed:{
            item(){
                return this.$store.state.img.find((a)=>a.id == this.$route.params.id)
            },
            entries(){
                return Object.entries(this.item)
            }
        },
    }
</script>

<style scoped>


</style>