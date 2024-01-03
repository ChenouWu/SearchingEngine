import axios from "axios";
const searchImages= async(term)=>{
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID hf5hYnWi0sTp0orpHNZrNBiLAbOHJKXj8paGXGSqwLM'//ID 认证
        },
        params:{
            query:term, //是可选的参数
        }
    });
    console.log(response.data.results)
    return response.data.results;
}
export default searchImages