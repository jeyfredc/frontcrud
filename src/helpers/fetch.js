import { url } from "../config/variables";

export const peticion = (endpoint, method, data) =>{
    const baseUrl = `${url}/${endpoint}`;
    return fetch(baseUrl,{
        method : method,
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'x-csrftoken': sessionStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
}

export const peticionGET = (endpoint, method) =>{
    const baseUrl = `${url}/${endpoint}`;
    return fetch(baseUrl,{
        method : method,
        headers: {
            'Content-Type': 'application/json',
        },
    })

}