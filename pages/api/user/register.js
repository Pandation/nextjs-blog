import UserModel from '../../../models/user.model';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async(req, res) => {
    const { method } = req;

    switch(method) {

        case "POST" :
            try {
                const user = await UserModel.create(req.body)

                if(user)
                    res.status(200).send({ "ope" : "success"})
                else res.status(200).send("error : une erreur a eu lieu oups")
            } catch (err) {
                res.status(400).send("L'erreur survenue est :" + err)
            }
    }
}
