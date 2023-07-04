import axios from "axios";

export const getData =((url)=>{
       const redriveData = new Promise((resolve,reject)=>{
        axios.get(url)
        .then((res)=>{
            resolve(res);
        })
        .catch((err)=>{
            reject(err)
        })
       })
       return redriveData;
})

