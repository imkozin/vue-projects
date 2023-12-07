<template>
    <v-col cols="4">
        <v-card :key="user.id">
            <v-card-text>
                <router-link :to="`/user/${user.id}`">
                    <v-img :src="`https://i.pravatar.cc/300?img=${user.id}`"/>
                </router-link>
                </v-card-text>
                <v-card-title>
                    {{ user.name }}
                    <router-link :to="`/user/${user.id}/posts`">See posts</router-link>
                    <router-link :to="`/user/${user.id}/albums`">See albums</router-link>
                </v-card-title>
            </v-card>
    </v-col>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>