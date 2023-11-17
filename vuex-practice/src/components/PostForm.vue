<template>
    <form @submit.prevent="submit">
        <input class='input' type="text" name="" id="" placeholder="title" v-model="title">
        <input class='input' type="text" name="" id="" placeholder="body" v-model="body">
        <button type="submit">Create Post</button>
        <hr>
    </form>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                title: '',
                body: ''
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            submit() {
                this.createPost({
                    id: Date.now(),
                    title: this.title,
                    body: this.body,
                })
                this.title = this.body = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>