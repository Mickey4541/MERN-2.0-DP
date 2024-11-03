//just sequelize ko types haru dinxa yo package ley.
import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'orderDetails', //tablename(always plural)
    modelName : 'orderDetail', //modelname is that name which we can use to access that table throughout the project. like we can use this name to create, find, update, delete.(singular and in pascal case)
    timestamps : true //createdAt, updatedAt
})


//inheritance
class OrderDetail extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID, //universally unique identifier.
        defaultValue : DataType.UUIDV4
    })
    declare id:string //id vanni column maa primarykey, type, default value declare gareko

    @Column({
        type : DataType.INTEGER,
        allowNull : false

    })
    declare quantity : string

}
 export default OrderDetail


 //if i have to make another table, i can use this code to make the table.