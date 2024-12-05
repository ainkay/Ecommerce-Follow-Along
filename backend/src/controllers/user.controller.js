const UserModel = require ("../models/user.model")

export async function CreateUser(){
const{Name,email,password}= req.body;
const CheckUserPresent = await UserModel.findOne({
    email:email,
})
if(CheckUserPresent){
    return res.send('User Already Exists')
}
new UserModel({
    Name:Name,
    email: email,
    password:password,
})
await UserModel.bulkSave()
return res.send('User Created Succesfully')



}