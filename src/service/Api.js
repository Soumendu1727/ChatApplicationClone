import axios from "axios";

const url = '';

export const addUser = () => {
    try {
        axios.post(url, data);
    }catch(error){
        console.log('Error:', error.message);
    }
}