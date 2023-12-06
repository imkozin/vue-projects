<template>
    <v-container>
        <User v-for="user in users" :user="user"/>
    </v-container>
</template>

<script>
import User from '@/components/user/User'

    export default {
        components: {
            User
        },
        data: () => ({
            users: []
        }),
        mounted() {
            
        }
    }
</script>

<style scoped>

</style>