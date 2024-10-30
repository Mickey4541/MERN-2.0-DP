//just sequelize ko types haru dinxa yo package ley.
import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'users', //tablename(always plural)
    modelName : 'User', //modelname is that name which we can use to access that table throughout the project. like we can use this name to create, find, update, delete.(singular and in pascal case)
    timestamps : true //createdAt, updatedAt
})


//inheritance
class User extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID, //universally unique identifier.
        defaultValue : DataType.UUIDV4
    })
    declare id:string //id vanni column maa primarykey, type, default value declare gareko

    @Column({
        type : DataType.STRING
    })
    declare username : string


    @Column({
        type : DataType.ENUM('customer', 'admin'),
        defaultValue : 'customer'
    })
    declare role : string


    
    @Column({
        type : DataType.STRING
    })
    declare email : string


    @Column({
        type : DataType.STRING
    })
    declare password: string
}
 export default User


 //if i have to make another table, i can use this code to make the table.