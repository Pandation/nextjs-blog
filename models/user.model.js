const mongoose = require("mongoose");
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        email : {
            type: String,
            required: true,
            unique: true,
            validate : [isEmail],
            trim: true,
            lowercase: true,
            minlength: 3
        },
        name : {
            type : String,
            required: true,
            lowercase: true,
            minlength: 3
        },
        firstname : {
            type : String,
            required: true,
            lowercase: true,
            minlength: 3
        },
        picture : {
            type: String,
            default: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
        },
        password : {
            type : String,
            required: true,
            minlength: 5,
            max: 1024
        },
        role : {
            type: String,
            required: true,
            default: "Contribut.eur.rice",
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save",async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


module.exports =  mongoose.models.user || mongoose.model('user', userSchema);