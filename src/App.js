import SearchiBar from "./components/SearchBar";
import searchImages from "./api";
import SearchList from "./components/SearchList";
import { useState } from "react";
function App(){
    const [image,setImage] = useState([]);
    const handleSubmit = async (term)=>{
       const results = await searchImages(term);//把参数传到api文件里
       setImage(results);// api 请求来的对象数组 传给子组件
    } //把这个函数传递给子组件(SearchBar)；并且设置一个参数为term
     
    return(
        <div>
            <SearchiBar onSubmit={handleSubmit}/>
            <SearchList imageInfor={image}/>
        </div>
    )
}

export default App;
