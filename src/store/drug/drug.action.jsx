import{DURG_ACTION_TYPES}from './drug.types'
import { createAction } from '../actioncreator'

export const fetchDrugsStart=()=>
createAction(DURG_ACTION_TYPES.FETCH_DRUGS_START);

export const fetchDrugsSuccess=(drugsArray)=>
createAction(DURG_ACTION_TYPES.FETCH_DRUGS_SUCCESS,drugsArray);

export const fetchDrugsFailed=(error)=>
createAction(DURG_ACTION_TYPES.FETCH_DRUGS_FAILED,error);

export const fetchDrugsAsync ()=>async (dispatch)=>{
    dispatch(fetchDrugsStart());
try{
    const drugsArray =  await fetch("http://138.91.105.104:8084/api/v1/icdMedicineRecommendation/icd/E11.9%2CI10%2CR05?multi=true&age=45&hba1c=56&pid=203");
    dispatch(fetchDrugsSuccess(drugsArray));
}catch(error){
    dispatch(fetchDrugsFailed(error));
}
};