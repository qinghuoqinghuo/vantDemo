<template>
    <div>
        <Navbar :title="title"></Navbar>
        <Live style="height:100vh;"></Live>
        <Tabbar :activeTabBottom="activeTabBottom" ::info="indexInfo"></Tabbar>
    </div>

</template>
<script>
    import Live from '@/components/live.vue'
    import Tabbar from '@/components/tabbar.vue'
    import Navbar from '@/components/navbar.vue'

    export default {
        name: 'live',
        created(){
            if(this.$router.currentRoute.query.title) {
                this.title = this.$router.currentRoute.query.title
            }
        },
        data(){
            return {
                title:'标题',
                activeTabBottom: 'b',
                indexInfo: 5
            }
        },
        components: {
            Live,
            Tabbar,
            Navbar
        }
    }
</script>