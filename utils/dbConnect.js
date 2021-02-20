const mongoose = require('mongoose');

export const connexion = {};

export default async function dbConnect() {
    if(!connexion.isConnected){
        mongoose.connect("sommeurl")
        .then(res => {
            console.log(res);
            connexion.isConnected = true;
            return connexion;
        }) 
        .catch(e => console.log(e))
    }
    else return connexion;
    
}
