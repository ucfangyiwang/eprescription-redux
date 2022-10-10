import{DURG_ACTION_TYPES} from'./drug.types'


export const DRUG_INITIAL_STATE={
    drug:[],
    inLoading:false,
    error:null,
};

export const drugsReducer=(
    state=DRUG_INITIAL_STATE,
    action={}
)=>{
    const {type,payload}=action;

    switch(type){
        case DURG_ACTION_TYPES.FETCH_DRUGS_START:
            return{...state,isloading:true};
        case DURG_ACTION_TYPES.FETCH_DRUGS_SUCCESS:
         return{...state,isloading:false};
        case DURG_ACTION_TYPES.FETCH_DRUGS_FAILED:
         return{...state,isloading:false};
         default:
            return state;  
    }
};