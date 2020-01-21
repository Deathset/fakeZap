import axios from 'axios'

 const service = {
    server:'http://192.168.0.104:3333',

    post:(url, msg) => {
        return new Promise( async (resolve, reject) =>{
            try {
                console.log(service.server+url)
                let resp = await axios.post(service.server+url, {msg} )
                resolve(resp)
            } catch (error) {
                reject(error)
            }
        })  
    }
}


export default service

