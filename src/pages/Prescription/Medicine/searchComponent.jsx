
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import{addrugtolist} from "../../../store/drugListSlice"
import searchicon from "../../../assets/images/search-normal.svg";

const SearchComponent = () => {
  console.log("Search Component")
const dispatch=useDispatch();
 const {lists} = useSelector((state)=>state.druglist)
  const [suggestedList, setSuggestedList ] = useState([])
  const [keyword, setKeyword ] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchPanelVisibility, setSearchPanelVisibility] = useState(false)


  useEffect(() => {
      if(suggestedList.length > 0 ) setSearchPanelVisibility(true)
  }, [setLoading, setSuggestedList, setSearchPanelVisibility])

  const transformSuggestedList = (rawList = []) =>{
      var updatedSuggestedList = []

      rawList.forEach(function (item, index){
          var flag = checkIfMedicineExistsInAddedList(item.productId)
          item.added = flag
          updatedSuggestedList.push(item.product)
      })
      console.log("updatedSuggestedList")
      console.log(updatedSuggestedList)
      setSuggestedList(updatedSuggestedList)
  }




  const checkIfMedicineExistsInAddedList = (productId) => {
      var flag = false

      if(lists.length > 0 ){
        lists.forEach(function (element, index){
              console.log("IN NEW LIST : " + productId )
              console.log( element )
              if( productId === element.id ){
                  flag = true
              }
          })
      }
      return flag

  }

  const fetchData = async (keyword) => {
    const data = await fetch("http://138.91.105.104:8084/api/v1/search?productName=" + keyword);
    const json = await data.json();
    if(json.data.success = true ){
        try{
            if( json.data.mims !== undefined || json.data !== {}){
               setSearchPanelVisibility(true)
               transformSuggestedList(json.data.mims)
            }
        }catch(error){
            console.log(error)
            setSuggestedList([])
        }

        setLoading(false)
    }
  }

  const handleKeyUp = async (event) =>{
     if(event.target.value.length >= 3){
        setKeyword(event.target.value)
        fetchData(event.target.value)
     }else{
        setSearchPanelVisibility(false)
        setSuggestedList([])
     }
  }

  const addFromSearch = (productId,productName) =>{
    dispatch(addrugtolist({name:productName,id:productId}))
    setSearchPanelVisibility(false)

  }


  return (
  <div>

         <div className="row-span-1">
           <div className="relative flex mt-2 mb-2 bg-white p-2 rounded-md">
             <img src={searchicon} className="pl-2 absolute" alt="search" />

             <input
               placeholder="Search and add new medicine"
               className="focus:outline-none pl-8 bg-white text-xs text-black self-center w-full"
               onKeyUp = { handleKeyUp }
             >
             </input>
           </div>
         </div>


    { searchPanelVisibility &&
      <div className="mt-2 mb-2 bg-gray-200 p-1 rounded-md">
      {  suggestedList && suggestedList.map((medicine, index) => {
          return (
          <div className="flex">
          <div>
              <strong> { medicine.productName }  </strong>
          </div>
          { !medicine.added &&
          <div className="w-1/4 bg-emerald-100 p-1 text-xs rounded-md self-right text-center cursor-pointer" onClick = { () => addFromSearch(medicine.productId, medicine.productName ) }>
            + Add
          </div>
          }
          </div>
      )
      })
      }
      </div>
    }
  </div>

  );
 };

export default SearchComponent;