<template>
    <div>
      <input v-model="colorCode" type="text" placeholder="Enter color code" />
    </div>
</template>

<script>
    export default {
        computed: {
            colorCode: {
            get() {
                return this.$store.state.colorCode
            },
            set(newColor) {
                this.$store.dispatch('setColorCode', newColor)
            },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>