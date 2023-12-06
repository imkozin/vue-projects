<template>
    <v-container>
        <v-row>
            <User v-for="user in users" :user="user"/>
        </v-row>
    </v-container>
</template>

<script>
import User from '@/components/user/User'

    export default {
        components: {
            User
        },
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.fetchUsers()
        },
        methods: {
            async fetchUsers() {
                this.axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => this.users = response.data)
            }
        }
    }
</script>

<style scoped>

</style>