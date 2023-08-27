<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <!-- <h3>{{ post.title }}</h3> -->
        <SinglePost :post="post"/>
        <!-- <h3>lorem</h3> -->
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
props: ['posts'],
components: {SinglePost},
setup(props){
  console.log(props)
    onMounted(() => console.log('Component mounted'))
    onUnmounted(() => console.log('Component onUnmounted'))
    onUpdated(() => console.log('Component onUpdated'))
    
},
}
</script>

<style>
/* .post-list{
  margin: 30px;
} */
</style>