<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
        <PostsList :posts="postWithTag"/>
        <TagCloud :posts="posts"/>
    </div>
    <div v-else>
        <Spinner/>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue';
import PostsList from '../components/PostsList.vue';
import TagCloud from '../components/TagCloud.vue';
import getposts from '../composables/getPosts';
import { useRoute } from 'vue-router'
import { computed } from 'vue';

export default {
    components: { PostsList, Spinner, TagCloud},
    setup(){
        const route = useRoute()
        console.log(route)
        const { posts, error, load } = getposts()

        load()

        const postWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })
        return { error, posts, postWithTag}
    }

}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>