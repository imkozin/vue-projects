<template>
    <v-col cols="4">
        <v-card :key="user.id" class="card-box">
            <v-card-text>
                <router-link :to="`/user/${user.id}`" class="card-box__image">
                    <v-img :src="`https://i.pravatar.cc/300?img=${user.id}`"/>
                </router-link>
            </v-card-text>
            <v-card-title class="card-box__title">
                {{ user.name }}
            </v-card-title>
            <v-card-text class="links-container">
                <router-link :to="`/user/${user.id}/posts`" class="links-container__link">See posts</router-link>
                <router-link :to="`/user/${user.id}/albums`" class="links-container__link">See albums</router-link>
            </v-card-text>
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

<style lang="scss" scoped>
.links-container {
    display: flex;
    justify-content: flex-end;

    &__link {
        margin: 0 15px;
    }
}
</style>