import { configureStore } from "@reduxjs/toolkit";
import drugSlice from "./getdrugSlice.jsx"
import DrugListSlice from "./drugListSlice.jsx";

 

export default configureStore({
   reducer:{
      drug:drugSlice,
      druglist:DrugListSlice,

   }
})