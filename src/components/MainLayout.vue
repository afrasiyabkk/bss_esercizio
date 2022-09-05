<template>
    <div>
        <v-app>
            <div class="grey lighten-5">
                <v-row no-gutters>
                    <v-col
                        cols="12"
                        md="3"
                        class= "d-block d-sm-none pa-7"
                        style="height: 100px"
                    >
                        <!-- <v-btn class="deep-purple lighten-3"><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
                        <v-list>
                            <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list> -->

                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon>mdi-format-list-bulleted</v-icon>
                                </v-btn>
                            </template>
                            <v-list style="width: 250px" class="d-sm-none deep-purple darken-3">
                                <center>
                                    <br>
                                    <button @click="homeClicked" :class="{active: home, inactive: !home}" class="link">
                                        <v-list-item-title class="title pt-2 pb-2"><v-icon color="white">mdi-home</v-icon> {{ $t("Home_Button") }}</v-list-item-title>
                                    </button>
                                    <br><br>
                                    <button @click="chisiamoClicked" :class="{active: chisiamo, inactive: !chisiamo}" class="link">
                                        <v-list-item-title class="title pt-2 pb-2"><v-icon color="white">mdi-information-outline</v-icon> {{ $t("Chisiamo_Button") }}</v-list-item-title>
                                    </button>
                                    <br><br>
                                    <button @click="contattiClicked" :class="{active: contatti, inactive: !contatti}" class="link">
                                        <v-list-item-title class="title pt-2 pb-2"><v-icon color="white">mdi-phone</v-icon> {{ $t("Contatti_Button") }}</v-list-item-title>
                                    </button>
                                    <br><br><br>
                                </center>
                            </v-list>
                        </v-menu>
                        
                        <br><br>
                    </v-col>

                    <v-col
                        cols="12"
                        xs = "6"
                        sm = "4"
                        md="3"
                        class= "deep-purple darken-3 d-none d-sm-block"
                        style="height: 100vh"
                    >
                        <center>
                            <br><br>
                            <button @click="homeClicked" :class="{active: home, inactive: !home}" class="link">
                                <v-list-item-title class="title pt-2 pb-2"><v-icon color="white">mdi-home</v-icon> {{ $t("Home_Button") }}</v-list-item-title>
                            </button>
                            <br><br>
                            <button @click="chisiamoClicked" :class="{active: chisiamo, inactive: !chisiamo}" class="link">
                                <v-list-item-title class="title pt-2 pb-2"><v-icon color="white">mdi-information-outline</v-icon> {{ $t("Chisiamo_Button") }}</v-list-item-title>
                            </button>
                            <br><br>
                            <button @click="contattiClicked" :class="{active: contatti, inactive: !contatti}" class="link">
                                <v-list-item-title class="title pt-2 pb-2"><v-icon color="white">mdi-phone</v-icon> {{ $t("Contatti_Button") }}</v-list-item-title>
                            </button>
                        </center>
                        
                        <br><br>
                    </v-col>
                    
                    <v-col
                        cols="12"
                        xs = "6"
                        sm = "8"
                        md="9"
                        class= ""
                    >
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-col>
                                <br><br>
                                <select class="language" v-model="lang" @change="langChange($event)">
                                    <option value="it">Italiano</option>
                                    <option value="en">English</option>
                                    <option value="fr">Francese</option>
                                </select>
                            </v-col>
                        </v-row>
                        <slot name="body"></slot>
                    </v-col>
                </v-row>
            </div>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'main-layout',
    components: {
        
    },
    data(){
        return{
            style: "height: 100vh",
            lang: localStorage.getItem("lang"),
        }
    },
    computed: {
        page(){
            // if (this.$store.state.page == "Home"){
            //     this.isHome = true;
            // } else if (this.$store.state.page == "Chisiamo"){
            //     this.isHome = true;
            // } 
            return this.$store.state.page
        },
        home(){
            return this.$store.state.home
        },
        chisiamo(){
            return this.$store.state.chisiamo
        },
        contatti(){
            return this.$store.state.contatti
        }
    },
    methods: {
        homeClicked() {
            this.$store.dispatch('homeClicked')
        },

        chisiamoClicked() {
            this.$store.dispatch('chisiamoClicked')
        },

        contattiClicked() {
            this.$store.dispatch('contattiClicked')
        },

        langChange(event){
            localStorage.setItem("lang", event.target.value)
            this.lang = localStorage.getItem("lang")
            window.location.reload()
        }
    },
    created(){
        this.lang = localStorage.getItem("lang")
    }
}
</script>

<style scoped>
.active{
    background: green;
    border-radius: 5px;
}

.inactive{
    background: grey;
    border-radius: 5px;
}

.inactive:hover{
    background: lightgreen;
    color: black;
}

.link{
    /* height: 50px; */
    width: 80%;
    color: white;
}

.language {
    border: 1px solid green;
    padding: 10px;
    text-align: center;
}

.language:hover{
    background: green;
    color: white;
    cursor: pointer;
}
</style>

<style>
.main_div{
    color: green;
    font-size: 40px;
    font-weight: bold;
    padding: 35px;
}
</style>