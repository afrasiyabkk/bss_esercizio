<template>
    <div>
        <main-layout v-if="page == 'Contatti'">
            <div slot="body" class="main_div">
                {{ $t("Contatti_Page") }}
                <br>
                <v-btn class="green white--text" @click="contactDataCollect" :disabled="loading">
                    <span v-if="!loading">Fetch Data</span>
                    <span v-if="loading">Loading.. Please Wait!</span>
                </v-btn>
                <br><br>
                <ul v-if="!is_contact_data_error">
                    <li v-for="(d, index) in contact_data" :key="index" class="contact_data">
                        {{d.id}}
                        <br>{{d.title}}
                        <br><br>
                    </li>
                </ul>
                <div v-if="is_contact_data_error">
                    <span class="contact_data" style="color: red">{{ contact_data_error }}</span>
                </div>
            </div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from './MainLayout.vue'
export default {
    name: 'contatti-view',
    components: {
        MainLayout
    },
    computed: {
        page(){
            return this.$store.state.page
        },
        loading(){
            return this.$store.state.loading
        },
        contact_data(){
            return this.$store.state.contact_data
        },
        is_contact_data_error(){
            return this.$store.state.is_contact_data_error
        },
        contact_data_error(){
            return this.$store.state.contact_data_error
        }
    },
    methods: {
        contactDataCollect(){
            this.$store.dispatch('contactDataCollectButton')
            this.$store.dispatch('contactDataCollect')
        }
    }
}
</script>

<style scoped>
.contact_data {
    font-size: 18px;
}
</style>