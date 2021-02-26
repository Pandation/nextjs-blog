import Link from 'next/link';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import AdLayout from '../../../components/Admin/adminLayout';


export default function User() {
    const {query:{user}} = useRouter()
    const [data, setData] = useState("");
   
    useEffect(()=>{
        if(user)
            fetch(`http://localhost:3000/api/user/${user}`)
            .then(res => res.json())
            .then(setData)
    },[user])

    return (<>
        <AdLayout/>
        <h2>Coucou {data? data.firstname :""}</h2>
        <Link href="/admin/users">
            <a>{"<-- Retour"}</a>
        </Link>
    </>
    )
}