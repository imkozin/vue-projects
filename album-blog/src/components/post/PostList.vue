<template>
    <div>
      <h2>User Posts:</h2>
      <div v-for="post in $store.getters.getAllPosts(id)" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            // posts: {
            //     type: Object,
            //     required: true
            // },
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>