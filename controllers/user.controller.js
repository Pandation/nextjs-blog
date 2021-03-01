import UserModel from '../models/user.model';
import dbConnect from '../utils/dbConnect';
import ObjectID from 'mongoose/lib/types/objectid';

dbConnect();

module.exports.getUser = async (req,res) => {
    if(!ObjectID.isValid(req.query.id)) return res.status(404).send("ID Unknown : "+req.query.id)

    try {
        const user = await UserModel.findById(req.query.id);
        if(user) return res.status(200).send(user);
        else throw new Error("Erreur user.controller");
    } catch (err) {
        throw err;
    }
}

module.exports.getUsers = async (req,res) => {
    try{
        const users = await UserModel.find().select('-password')
        res.status(200).json(users)
    }catch(err){
        res.status(400).send(err);
    }
}
        
        
module.exports.updateUser = async (req,res) => {
    if(!ObjectID.isValid(req.query.id)) return res.status(404).send("ID Unknown : "+req.query.id)

    try {
        return await UserModel.findByIdAndUpdate(
            req.query.id,
            req.body,
            {new: true, upsert: true},
            (err, docs)=>{
                if(!err) return res.status(200).send(docs);
                else throw new Error("Erreur user.controller");
            });
        
    } catch (err) {
        return res.status(404).send("Error Unknown : "+req.query.id + " " + err)
    }
}

module.exports.createUser = async (req,res) => {
    if(!ObjectID.isValid(req.query.id)) return res.status(404).send("ID Unknown : "+req.query.id)

    try {
        const user = await UserModel.findById(req.query.id);
        if(user) return res.status(200).send(user);
        else throw new Error("Erreur user.controller");
    } catch (err) {
        throw err;
    }
}

module.exports.deleteUser = async (req,res) => {
    if(!ObjectID.isValid(req.query.id)) return res.status(404).send("ID Unknown : "+req.query.id)

    try {
        await UserModel.findByIdAndDelete(req.query.id, (err,docs)=>{
            if(!err) return res.status(200).send(docs);
            else return res.status(400).send(err);
        });
        
    } catch (err) {
        return res.status(400).send(err);
    }
}