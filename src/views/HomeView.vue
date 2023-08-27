<template>
  <main class="home">
    <h1>Home</h1>
    <div v-if="error"> {{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostsList v-if="showPosts" :posts="posts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else> 
      <spinner/>
      <span>Loding...</span>
    </div><br>
    <button @click="showPosts = !showPosts">toggle postes</button>
    <button @click="posts.pop()">delete a Post</button>

    <!-- .... -->
    <!-- <input type="text" v-model="search">
    <p>search trem - {{ search }}</p>
    <div v-for="name in MatchingNames" :key="name">{{ name }}</div> -->
    <!-- ...... -->
    <!-- <p ref="p">my Name is {{ name }} and my age is {{ age }}</p>
    <button @click="handeleClick">click me</button>
    <button @click="age++"> Age + 1</button>
    <input type="text" v-model="name"> -->
  </main>
</template>

<script>
import PostsList from '../components/PostsList.vue'
import getposts from '../composables/getPosts'
import { computed, ref, watch, watchEffect } from 'vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default{
  name: 'Home',
  components: {PostsList, Spinner, TagCloud},
  setup(){
    const {posts, error, load} = getposts()

    load()
    const showPosts = ref (true)
    return{posts, showPosts, error}
  },
    // const search = ref('')
    // const names = ref (['Bassam', 'Ahmad', 'Mahmmod', 'Mohammad', 'Osama'])

    // watch(search, () => {
    //   console.log('Watch is run')
    // })

    // watchEffect(() => {
    //   console.log('WatchEffect is run', search.value)
    // })

    // const MatchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })

    // return { names, search, MatchingNames}
    //.......................................................
    // console.log('Setup')

    // const p = ref("Hallo")
    // console.log(p, p.value)

    // let name = ref ('mario')
    // let age = ref (35)

    // const handeleClick = () => {
    //   name.value = 'Bassam'
    //   age.value= 30
    //   // console.log(p, p.value)
    //   // p.value.classList.add('test')
    //   // p.value.textContent = 'Hallo Bassam'
    // // }

    // return{name, age, handeleClick, p}
  // },
  data(){
    return{
      // age: 40
    }
  },
  // created(){
  //   console.log('created')
  // },
  // mounted(){
  //   console.log('mounted')
  // }
}
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
.loding{
  margin: 10px auto;
}
</style>
