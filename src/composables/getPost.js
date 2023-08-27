import {ref} from 'vue'
import  { projectFirestore }  from '../firebase/config';
// import { collection , getDocs, doc, getDoc} from 'firebase/firestore/lite';

const getpost = (id) => {
    const post = ref (null)
    const error = ref (null);
    const load = async () => {
      try{
        //Firebase Einstellungen
        let res = await projectFirestore.collection('posts').doc(id).get();
        console.log(res);
        // const docSnapshot = await getDoc(docRef);
        // console.log(docSnapshot ,' test');
        post.value = { ...res.data(), id: res.id };
        console.log(post.value);
        if( !res.exists){
          throw Error("This Post not exist")
        }
       

        // JSON db Einstellungen
        //simulate delay
        // await new Promise(resolve => {
        //     setTimeout(resolve, 2000)
        // })
        // let data = await fetch('http://localhost:3000/posts/' + id)
        // if(!data.ok){
        //   throw Error ('the post is not exist')
        // }
        // post.value = await data.json()
        // console.log(post.value)
      }catch (err){
        error.value = err.message
        console.log(error.value)
      }
    }
    return { post, error, load  }
}

export default getpost