import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import Post from '../../components/Post/Post';
import MoonLoader from 'react-spinners/MoonLoader';
import Layout from '../../components/layout';


const Detail = () => {
    const [child , setChild] = useState(<MoonLoader size={50} color="black"/>);
    const router = useRouter()
    const { detail } = router.query;

    useEffect(async ()=>{
        const data = await fetch(`../api/posts/${detail}`)
        const result = await data.json();
        setChild(<Post data={result}/>)
    },[])

    return <Layout><article> {child}</article></Layout>
}

export default Detail