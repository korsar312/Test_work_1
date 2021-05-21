<template>
    <v-app id="inspire">

        <Header/>

        <div v-if="downloading">
            <div class="back"></div>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

        <router-view>

        </router-view>

    </v-app>
</template>

<script>
import Header from "./components/Header";
import axios from "axios";


export default {
    name: 'App',
    data: () => ({
        downloading: false
    }),
    computed:{},
    components: {
        Header
    },
    mounted() {
        this.downloading = true
        let arrDownload = []
            for(let i = 1; i<=this.$store.state.amountImg; i++){
                arrDownload.push(axios.get(`https://jsonplaceholder.typicode.com/photos/${i}`))
            }
        axios.all(arrDownload)
            .then(responseArr => {
                setTimeout(()=>{
                    responseArr.forEach(i=>this.$store.state.img.push(i.data))
                    this.downloading = false
                }, 500)
            })
            .catch(error => {
                alert(error);
                this.downloading = false
            })
    },
    methods:{

    }
};
</script>

<style scoped lang="scss">

    .back{
        background: #000;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 5;
        opacity: .7;
    }
    .lds-ring {
        display: inline-block;
        position: fixed;
        width: 80px;
        height: 80px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


</style>