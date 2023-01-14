export const JoinGroupReducer = (state=[], action)=>{
    switch (action.type){
        case 'GROUP_BUYING  ':
          return action.payload;
     
        default:
          return state;

    }
}