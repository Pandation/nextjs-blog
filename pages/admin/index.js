import Head from 'next/head';
import AdLayout from '../../components/Admin/adminLayout'


export default function admin() {

    return (
            <>
            <Head>
                <title>Administration du site</title>
            </Head>
           
<div>
 <AdLayout />

  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Dashboard
      </h1>
    </div>
  </header>
  <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* <!-- Replace with your content --> */}
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}

    </div>
  </main>
</div>
        </>
    )

}