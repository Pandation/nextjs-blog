import dbConnect from '../../../../utils/dbConnect'
import userController from '../../../../controllers/user.controller'


dbConnect();

export default async(req, res) => {
    const { method } = req;

    switch(method) {
        case "PUT" :
            return userController.updateUser(req, res)

        case "DELETE" :
            return userController.deleteUser(req, res)

        case "GET" :
        default:
            return userController.getUser(req, res)

    }
}