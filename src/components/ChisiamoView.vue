<template>
    <div>
        <main-layout v-if="page == 'Chisiamo'">
            <div slot="body" class="main_div">{{ $t("Chisiamo_Page") }}</div>
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