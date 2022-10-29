import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { addrugtolist } from '../../store/drugListSlice.jsx'
function DrugsDetail(props){
  const dispatch = useDispatch();
  const {lists} = useSelector((state)=>state.druglist)



 const drug = lists.find((drug) => drug.name === props.med.product.productName);
 
  console.log(
    'jhgyfdrseawesdrftgh',props.med)
 function handleadd(){
  dispatch(addrugtolist({name:props.med.product.productName,id:props.med.product.productId}))
 }
return(
  
        <div className="row-span-1 border border-white border-b-gray-100">
          <div classNa me="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">{props.med.product.productName}</div> 
        {drug ?

       <div className="w-1/4 bg-gray-100 p-1 text-xs rounded-md self-center text-center cursor-pointer" >
       <button >added</button>
      </div>
        :  
        <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer" >
        <button className='w-full' onClick={handleadd}>add</button>
      </div>
      }
          </div>
        </div>
);
}

export default DrugsDetail