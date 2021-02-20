import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Form from '../components/Form/Form';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Flo, I'm a Web developer.</p>
      </section>
      <section>
        <Form />
      </section>
    </Layout>
  )
}

