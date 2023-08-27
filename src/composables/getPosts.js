
import { ref } from 'vue'

import  { projectFirestore }  from '../firebase/config';
// import { collection , getDocs} from 'firebase/firestore/lite';

const getposts = () => {
    const posts = ref ([])
    const error = ref (null);
    const load = async () => {
      try{
        //FirebaseEinstellungen
        let res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .get();
        console.log(res)
        // const postSnapshot = await getDocs(res);
        // const postsList = postSnapshot.docs //.map(doc => doc.data());
        posts.value = res.docs.map(doc =>  { 
          return { ...doc.data(), id: doc.id }});
        // console.log(posts.value)
        // console.log(postsList)
        // return postsList;



      // JSON db Einstellungen
      //    //simulate delay
      //    await new Promise(resolve => {
      //     setTimeout(resolve, 2000)
      // })
      //   let data = await fetch('http://localhost:3000/posts')
      //   if(!data.ok){
      //     throw Error ('no data avilable')
      //   }
      //   posts.value = await data.json()
      }catch (err){
        error.value = err.message
        console.log(err.message)
      }
    }
    return { posts, error, load  }
}

export default getposts