export interface FormProps {
    type: string,
    onSubmit : (data:UserDataType)=>void
    }



export interface UserDataType{
    email : string,
    password : string,
    username : string
}