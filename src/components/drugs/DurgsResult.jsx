import { loadData } from '../../store/getdrugSlice';

import {useDispatch, useSelector} from 'react-redux';
import React,{useState,useEffect} from 'react';
import DrugsDetail from  './DrugsDetail';
function DrugsResult(){
const dispatch = useDispatch();
const {list} = useSelector((store)=>store.drug)

useEffect(()=>{
  dispatch(loadData());
  },[dispatch])

return(<>
         {
         list.map((drugs) => {  
          console.log("this is drugsssssss",drugs);
          return(    
            <> 
            <div className="row-span-1 bg-gray-50 flex">
          <div className="w-3/4 p-2 font-semibold">{drugs.ICDName}</div>
          <div className="w-1/4 p-2 font-semibold text-right">{ drugs.ICDCode}</div>
          </div>
                  { drugs.mims !== undefined &&
                    drugs.mims.map((med)=>{
                   
                      return( <DrugsDetail key={med.product.productId} med={med}/>)
                      
                   })
                 
                  }
                 
                </>
          )
       
      })
    }
      </>
)
      
          
      }
export default DrugsResult