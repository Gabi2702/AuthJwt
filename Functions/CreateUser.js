const user = require('.././Configs/Models/Users')
const bcrypt = require('bcrypt')


async function CreateUser(Email,Password){
    const UserExist = await user.findOne({ where: { Email: Email } });
    if (UserExist === null) {
        const hash = bcrypt.hashSync(Password, 10);
        const UserCreate = await user.create({Email:Email,Password:hash})
        return UserCreate.Email
      } else {
        return {msg:'User alwready exist!'}
      }
}

module.exports = CreateUser