import"./ImageList.css";
import ImageShow from "./ImageShow"
function SearchList({imageInfor}){
    const list = imageInfor.map((imageInfors)=> {
        return <ImageShow key={imageInfors.id} onList={imageInfors}/>
    })
     
    return (
        <div>
           <div className="image-list">{list}</div> 
        </div>
    )
}

export default SearchList
