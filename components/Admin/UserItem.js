import Image from 'next/image';
import Link from 'next/link';
import AppConfig from '../../reducers/AppConfig';

const UserItem = ({user, callback}) => {

    const [state, dispatch] = AppConfig();

    const { firstname, email, name, role, picture} = user;

    return (<tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <Link href={`/admin/users/${user._id}`}><a>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <Image className="rounded-full" src={picture} alt="profile picture" width={50} height={50}/>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {firstname + " " + name}
              </div>
            </div>
          </div></a></Link>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <Link href={`/admin/users/${user._id}`}><a>
        <div className="text-sm font-medium text-gray-900">
        {email}
              </div></a></Link>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Link href={`/admin/users/${user._id}`}><a>
          {role}</a></Link>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {/* <button onClick={() => dispatch({ type : 'PUT', id: user._id})}>Editer
          </button> */}
          <button onClick={() => {
            console.log("ok")
            callback({ type : 'DELETE', id: user._id})}}>Supprimer</button>
          </td>
      </tr>)
}

export default UserItem
