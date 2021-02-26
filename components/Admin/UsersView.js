import AdLayout from './adminLayout';
import UserItem from './UserItem';
import {useEffect, useState} from 'react'
import AppConfig from '../../reducers/AppConfig';
import Link from "next/link";


const UsersView = () => {

  const [datas, setData] = useState(undefined);
  const [state, dispatch] = AppConfig();

  useEffect(() => {
    console.log(state.new)
    if(state.new){
      fetch("http://localhost:3000/api/user")
        .then(docs => docs.json())
        .then(json => {
          setData(json);
          dispatch({type : "NEW"});
        });
    }
  }, [state])


    return (
<>
<AdLayout />
<main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* <!-- Replace with your content --> */}
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="lg:flex lg:items-center lg:justify-between">
  <div className="flex-1 min-w-0">
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      Membres
    </h2>
  </div>
  <div className="mt-5 flex lg:mt-0 lg:ml-4">

    <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {/* <!-- Heroicon name: solid/check --> */}
        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <Link href="/admin/users/add"><a>Ajouter un membre</a></Link>
      </button>
    </span>

    {/* <!-- Dropdown --> */}
    <span className="ml-3 relative sm:hidden">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu" aria-haspopup="true">
        More
        {/* <!-- Heroicon name: solid/chevron-down --> */}
        <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* <!--
        Dropdown panel, show/hide based on dropdown state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
      <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu" role="menu">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Edit</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View</a>
      </div>
    </span>
  </div>
</div>
        {/* // <!-- This example requires Tailwind CSS v2.0+ --> */}
<div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {datas ? datas.map((data, index)=><UserItem user={data} key={`userItem_${index}`}/>): null}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  </main>
     
    </>)
}

export default UsersView





