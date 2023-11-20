import {ref, computed} from 'vue';

export default function useSortedAndSearchedPosts(sortedPosts) {
    const searchQuery = ref('')
    
    const sortedAndSearchedPosts = computed(() => {

    })

    return {
        searchQuery, sortedAndSearchedPosts
    }
}