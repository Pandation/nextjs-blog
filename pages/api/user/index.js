import userController from '../../../controllers/user.controller';

export default async (req, res) => {
    
    const {method} = req;

    switch(method) {
        case "GET" :
            return userController.getUsers(req,res);
        default:
            res.status(200).json({err : "problème dtc"})
    }
}
