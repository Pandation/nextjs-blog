import AdLayout from '../../../components/Admin/adminLayout';
import { useRef, useState } from 'react';

export default function AddUser () {
    const [info , setInfo] = useState("");
    const formRef = useRef();

    const clickHandler = (e) => {
        e.preventDefault()
        let role = "";

        if (formRef.current.role.value) role = formRef.current.role.value;

        const body = {
            name: formRef.current.name.value,
            firstname: formRef.current.firstname.value,
            email: formRef.current.email.value,
            password : "changeme",
            role
        };
        formRef.current.name.value = ""
        formRef.current.firstname.value = ""
        formRef.current.email.value = ""
        fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(body),
        })
        .then(res => {
            if(res.status === 200)
             setInfo("Membre bien ajouté.")
        })
    }

    return (
        <>
        <AdLayout />
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Ajouter un membre
            </h2>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Informations membre</h3>
        <h2 className="mt-1 w-full py-2 px-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{info}</h2>
      </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
    <form action="#" method="POST" ref={formRef}>
    <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-gray-700" htmlFor="name">*Nom :{' '}</label>
                    <input type="text" id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>        
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="firstname">*Prénom :{' '}</label>
                    <input className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" id="firstname"/>
                </div>

                <div className="col-span-6 sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">*Email :{' '}</label>
                    <input className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="email" id="email"/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Country / Region</label>
                    <select id="role" name="role" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Administrat.eur.rice</option>
                        <option>Aut.eur.rice</option>
                        <option>Contribut.eur.rice</option>
                    </select>
                </div>

            </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={clickHandler}>
            Ajouter
            </button>
        </div>
    </div>
</form>
        
</div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </main>
             
            </>
    )
}







  