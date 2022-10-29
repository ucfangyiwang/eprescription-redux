import{createSlice,createAsyncThunk}from "@reduxjs/toolkit"

const loadDrugsAPI=()=>
fetch(
    "http://138.91.105.104:8084/api/v1/icdMedicineRecommendation/icd/E11.9%2CI10%2CR05?multi=true&age=45&hba1c=56&pid=203"
).then((res)=>res.json());
  


export const loadData = createAsyncThunk('drug/loadData', async () => {
    const res = await loadDrugsAPI();
    return res; 
   });


   export const drugSlice=createSlice({
    name:"drug",
    initialState:{
    list:[],
   
    },
    reducers:{
        loadDataEnd(state,{payload}){
            state.list = payload;
            console.log("this",state.list)
        },


    },
    extraReducers:{
        [loadData.fulfilled](state,{payload}){
            console.log(payload);
            state.list=payload.data;
            console.log(state.list);
           
        },
        [loadData.rejected](satate,err){
            console.log(err);
        },
        [loadData.pending](state){
            console.log("processing");
        }
    }

   });

   export const { loadDataEnd} = drugSlice.actions;
export default drugSlice.reducer;