import axios from 'axios'
import {BASE_URL} from './constant.js'

async function getAllData (){
 try {
    const response = await axios(`${BASE_URL}/products`)
    return response
 } catch (error) {
    console.log(error);
 }
}
async function getDataById (){
    try {
        const  response = await axios(`${BASE_URL}/products/${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}

export{
    getAllData, getDataById
}