import User from "./database/models/userModel"
import bcrypt from 'bcrypt'




const adminSeeder = async():Promise<void> => {
    const [data] = await User.findAll({ //it returns array.
        where : {
            email : "rajan@gmail.com",
        }
    })
    if(!data){
        await User.create({
            email : 'rajan@gmail.com',
            password : bcrypt.hashSync("12345", 8),
            username : 'rajan',
            role : 'admin'
        })
        console.log('Admin credentials seeded succesfully');
    }else{
        console.log('Admin credentials already Seeded.');
    }
}

export default adminSeeder