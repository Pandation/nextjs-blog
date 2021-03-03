import UserItem from "./UserItem";
import { useEffect, useState } from "react";
import Reducer from "../../redux/reducers/test";


const ItemsTable = () => {
  const [datas, setData] = useState(undefined);
  const [state, dispatch] = Reducer();

  useEffect(() => {
    
    const asyncFunc = async () => {
      const json = await fetch("http://localhost:3000/api/user")
      console.log('coucou')
      const result = await json.json();
      setData(result);
      dispatch({type : "FALSE"});
    };
    if(state.newData) asyncFunc();
  }, [state.newData]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {datas &&
                  datas.map((data, index) => (
                    <UserItem
                      callback={()=>dispatch({})}
                      user={data}
                      key={`userItem_${index}`}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
