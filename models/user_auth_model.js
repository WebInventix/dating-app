const { required } = require('joi');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const User_Auth_Schema = mongoose.model('user', new Schema({
    username: {type: String, unique:true, required:false },
    email: { type: String, unique: true, sparse: true , required:false},
    password: { type: String , required:false, required:false },
    facebookId: { type: String, unique: true, sparse: true, required:false },
    googleId: { type: String, unique: true, sparse: true, required:false },
    phoneNumber: { type: String, unique: true, sparse: true, required:false },
    phoneVerified: { type: Boolean, default: false , required:false},
    verificationCode: { type: String },
    logincode: { type: String },
    role: {type:String, enum:['User','Admin'], default:'User'},
    profile: { type: Schema.Types.ObjectId, ref: 'Profile',required:false },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive', required:false }
}, { timestamps: true }
))


module.exports = { User_Auth_Schema }
