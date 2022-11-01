import{createSlice,createAsyncThunk}from "@reduxjs/toolkit"


var drugList1=[];
var drugList2=[];
const reloadDrugDuplicationAPI=()=>
    fetch("http://138.91.105.104:8084/api/v1/decisionSupport/drugDuplication",{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({ inputs: drugList1 } ),
        }).then((res)=>res.json())
    
const reloadDrugInteractionAPI=()=>
    fetch("http://138.91.105.104:8084/api/v1/decisionSupport/drugInteraction",{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({ inputs: drugList2} ),
        }).then((res)=>res.json())

        export const reloadDrugDuplication = createAsyncThunk('druglist/reloadDrugDuplication', async () => {
           if(drugList1.length>=2){
            const duplicationdata = await reloadDrugDuplicationAPI();
            return duplicationdata; 
           }
           });

           export const reloadDrugInteraction = createAsyncThunk('druglist/reloadDrugInteraction', async () => {
            if(drugList2.length>=2){
            const Interactionndata = await reloadDrugInteractionAPI();
            return Interactionndata; 
            }
           });



const initialState={
   lists:[],
   DrugDuplication:{},
   DrugInteraction:{},
}

export const drugListSlice =createSlice({
    name:"druglist",
    initialState:initialState,

   reducers:{
    addrugtolist:(state,{payload})=>{
      const drug = state.lists.find((drug) => drug.name === payload.name);
      console.log(state.lists);
      if(!drug)
       state.lists.push(payload)
       drugList1.push({"id" : payload.id, "type" : 'product'});
       drugList2.push({"id" : payload.id, "type" : 'product'});
        
    },
    removedrug:(state,{payload})=>{
        const drug = state.lists.find((drug) => drug.name === payload.name);
        if(drug!==""){
            state.lists=  state.lists.filter(item=>item.id!==payload.id)
            drugList1 = drugList1.filter(item=>item.id!==payload.id)
            drugList2 = drugList2.filter(item=>item.id!==payload.id)
         if(state.lists.length<=1){
            state.DrugDuplication=undefined;
            state.DrugInteraction=undefined;
         }

    }
    }
  

},
extraReducers:{
    [reloadDrugDuplication.fulfilled](state,{payload}){

        console.log(payload);
        if(payload !==undefined){
        state.DrugDuplication=payload.data.drugDuplicateAlert;
        }
    },
    [reloadDrugDuplication.rejected](state,err){
        console.log(err);
    },
    [reloadDrugDuplication.pending](state){
        console.log("processing");
    },
    [reloadDrugInteraction.fulfilled](state,{payload}){
        if(payload !==undefined){
        console.log(payload);
        state.DrugInteraction=payload.data.drugInteractionAlert;
        
        }
    },
    [reloadDrugInteraction.rejected](state,err){
        console.log(err);
    },
    [reloadDrugInteraction.pending](state){
        console.log("processing");
    }
    
    
}})
export const{addrugtolist,removedrug}=drugListSlice.actions;
    export default drugListSlice.reducer
 