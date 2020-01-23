import axios from 'axios'

 const service = {
    server:'http://192.168.0.104:3333',

    post:(url, msg) => {
        return new Promise( async (resolve, reject) =>{
            try {
                let {data} = await axios.post(service.server+url, msg )
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })  
    },
    
    get:(url) =>{
        return new Promise( async ( resolve, reject ) =>{
            try {
                let {data} = await axios.get(service.server+url)
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    }
}


export default service

