<template>
    <div>
        <main-layout v-if="page == 'Home'">
            <div slot="body" class="main_div">{{ $t("Home_Page") }}</div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from './MainLayout.vue'
export default {
    name: 'home-view',
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