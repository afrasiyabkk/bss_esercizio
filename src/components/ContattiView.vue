<template>
    <div>
        <main-layout v-if="page == 'Contatti'">
            <div slot="body" class="main_div">{{ $t("Contatti_Page") }}</div>
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
    }
}
</script>