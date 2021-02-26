import userController from '../../../controllers/user.controller';

export default async (req, res) => {
    
    const {method} = req;

    switch(method) {
        case "GET" :
        default:
            return userController.getUsers(req,res);
            break;
    }
}
