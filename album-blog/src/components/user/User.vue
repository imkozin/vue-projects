<template>
    <v-container>
        {{user.id}}
        {{ user.name }}
    </v-container>
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