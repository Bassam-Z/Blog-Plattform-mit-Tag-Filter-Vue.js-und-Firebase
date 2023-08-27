<template>
    <div>
        <div v-if="error">{{error}}</div>
        <div v-if="post" class="post">
            <h3>{{ post.title }}</h3>
            <p class="pre">{{ post.body }}</p>
            <button class="delete" @click="handelClick">Delete Post</button>
        </div>
        <div v-else>
            <Spinner/>
            <span>Loding...</span>
        </div>
    </div>
</template>

<script>

import getpost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
  components: { Spinner },
    props: ['id'],
    components: {Spinner},
    setup(props){ //props
       const route = useRoute()
       const router = useRouter()
       const {post, error, load } = getpost(route.params.id)

       load()

       const handelClick = async () => {
        await projectFirestore.collection('posts')
            .doc(props.id)
            .delete()
        router.push({ name:'Home'})

       }

       return {post, error, handelClick}

    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #5d5b5b;
    line-height: 1.5em;
    margin-top: 40px;
}
button.delete {
    margin: 20px auto;
}
.pre{
    white-space: nowrap;
}
</style>