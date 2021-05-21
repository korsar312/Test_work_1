<template>
    <div>
        <v-system-bar app>
            <v-spacer></v-spacer>

            <v-icon>mdi-square</v-icon>

            <v-icon>mdi-circle</v-icon>

            <v-icon>mdi-triangle</v-icon>
        </v-system-bar>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
        >
            <v-navigation-drawer v-model="drawer">
                <v-list-item>
                    <v-list-item-content>
                        <div class="head">
                            <div>
                                <v-list-item-title class="title">
                                    Макеев Артем
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    kochebnic@gmail.com
                                </v-list-item-subtitle>
                            </div>
                            <v-avatar width="35px" height="35px">
                                <img
                                        :src="require('./master.jpg')"

                                        alt="Артём"
                                >
                            </v-avatar>
                        </div>


                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                        dense
                        nav
                >
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                            v-on:click="link(item.link)"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-navigation-drawer>
    </div>
</template>


<script>
    export default {
        name: "Header",
        data: () => ({
            drawer: false,
            items: [
                { title: 'Галерея', icon: 'mdi-view-dashboard', link: 'main'},
                { title: 'Обо мне', icon: 'mdi-help-box', link: 'aboutMe' },
            ],
            right: null,
        }),
        methods:{
            link(page){
                this.$router.push({ name: page}).catch(err=>console.log(err))
            }
        }
    }
</script>

<style scoped>
    .head{
        display: flex;
        align-items: center;
    }
</style>