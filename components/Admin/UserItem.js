import Image from 'next/image'
const UserItem = ({data}) => {
    const {firstname, email, name, role, picture} = data;
    return (
        <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <Image className="h-10 w-10 rounded-full" src={picture} alt="" width={50} height={50}/>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {firstname + " " + name}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
        {email}
              </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {role}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
      </tr>
    )
}

export default UserItem
