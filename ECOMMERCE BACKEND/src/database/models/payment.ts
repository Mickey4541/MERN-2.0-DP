//just sequelize ko types haru dinxa yo package ley.
import {
    Table,
    Column,
    Model,
    DataType,
} from 'sequelize-typescript'

@Table({
    tableName : 'payments', //tablename(always plural)
    modelName : 'payment', //modelname is that name which we can use to access that table throughout the project. like we can use this name to create, find, update, delete.(singular and in pascal case)
    timestamps : true //createdAt, updatedAt
})


//inheritance
class payment extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID, //universally unique identifier.
        defaultValue : DataType.UUIDV4
    })
    declare id:string //id vanni column maa primarykey, type, default value declare gareko

    @Column({
        type : DataType.ENUM('cod', 'khalti', 'esewa'),
        allowNull : false

    })
    declare paymentMethod : string


    @Column({
        type : DataType.ENUM('paid', 'unpaid'),
        allowNull : false,
        defaultValue : 'unpaid'

    })
    declare paymentStatus : string


    @Column({
        type : DataType.STRING,

    })
    declare pidx : string

}
 export default payment


 //if i have to make another table, i can use this code to make the table.