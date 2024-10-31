//just sequelize ko types haru dinxa yo package ley.
import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
} from 'sequelize-typescript'

@Table({
    tableName : 'products', //tablename(always plural)
    modelName : 'Product', //modelname is that name which we can use to access that table throughout the project. like we can use this name to create, find, update, delete.(singular and in pascal case)
    timestamps : true //createdAt, updatedAt
})


//inheritance
class Product extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID, //universally unique identifier.
        defaultValue : DataType.UUIDV4
    })
    declare id:string //id vanni column maa primarykey, type, default value declare gareko

    @Column({
        type : DataType.STRING,
        allowNull : false

    })
    declare productName : string


    @Column({
        type : DataType.TEXT
    })
    declare productDescription : string


    @Column({
        type : DataType.INTEGER
    })
    declare productPrice: number


    @Column({
        type : DataType.INTEGER
    })
    declare productTotalStockQty: number


    @Column({
        type : DataType.STRING
    })
    declare productImageUrl: string
}
 export default Product


 //if i have to make another table, i can use this code to make the table.