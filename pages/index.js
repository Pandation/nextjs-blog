import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {useState, useEffect} from 'react';
import {formatDistance} from 'date-fns';
import { fr } from 'date-fns/locale';


export default function Home() {

  const [ data , setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(async () => {
      const data = await fetch('./api/posts');
      const results = await data.json();
      const children = results.datas.map((child, index) =>
        (<div key={`article_${index}`}>
          <h4>{child.title}</h4>
          <p>{child.content} n°{index}</p>
          <p className={utilStyles.lightText}>By {child.author}<br/>{formatDistance(Date.parse(child.date), new Date(), { locale: fr})}</p>
          <Link href={`/posts/${index}`}>
            <a>Voir plus...</a>
          </Link>
        </div>)
        );
      setData(children);
      setIsLoading(false);
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Flo, I'm a Web developer.</p>
      </section>
      {/* <section><Form /></section> */}
      <section>
        <h2>Derniers articles</h2>
        <div>{!isLoading? data : ""}</div>
      </section>
    </Layout>
  )
}
