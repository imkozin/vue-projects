<template>
    <a
    :href="href"
    target="_blank"
    class="px-3 py-2 text-white rounded border-2 bg-red-500 border-red-600 hover:bg-red-600 transition-colors"
    ><slot>YouTube</slot></a>
</template>

<script setup>


const props = defineProps({
    href: String
})
</script>

