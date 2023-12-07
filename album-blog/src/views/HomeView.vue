<template>
    <v-container>
        <v-row>
            <UserList v-for="user in users" :user="user"/>
        </v-row>
    </v-container>
</template>

<script>
import UserList from '@/components/UserList'

    export default {
        components: {
            UserList
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