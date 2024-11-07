
//making a instance of axios.
import axios from "axios";

const API = axios.create({
    baseURL : 'http://localhost:3000',
    headers : {
        'Content-Type' : 'application/json', //data server maa pathaudaa kun format maa pathauni vaneko.
        'Accept' : 'application/json' // data server bata leudaa kun format maa leuni vaneko.
    }
})

export default API