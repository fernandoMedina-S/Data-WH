import axios from "axios";

const url = "http://localhost:5000";

export const get = (dir, params={}) => {
    axios.get(url+dir, {params: params}).then((response)=>{
        return response;
    })
}