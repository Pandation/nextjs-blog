import dbConnect from '../../../utils/dbConnect';
import UserModel from '../../../models/user.model';

dbConnect();

export default async function handler(req, res) {
    
    const {method} = req;

    switch(method) {
        case "GET" :
            try {
                const users = await UserModel.find();
                if(users) {
                    console.log(users[0])
                    res.status(200).send(users);
                }else 
                    res.status(404).json({ error : "Oups"})
            } catch (err) {
                res.status(404).json({ error : "Oups catch"})
            }

    }
}
