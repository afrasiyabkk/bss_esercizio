<template>
    <div>
        <main-layout v-if="page == 'Chisiamo'">
            <div slot="body" class="main_div">Questa è la pagina chisiamo</div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from './MainLayout.vue'
export default {
    name: 'chisiamo-view',
    components: {
        MainLayout
    },
    computed: {
        page(){
            return this.$store.state.page
        },
    }
}
</script>