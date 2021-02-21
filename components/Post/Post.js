import utilStyles from '../../styles/utils.module.css';
import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';

const Post = ({data}) => {

    return (
            <div>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className={utilStyles.lightText}>{data.author}</p>
                <p>{formatDistance(Date.parse(data.date), new Date(), { locale: fr })}</p>
            </div>
    )
}

export default Post
