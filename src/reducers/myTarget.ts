
const initMyTarget= {
    status : true,
    id : "",
    show : false,
    admin : true
}

const myTargetReducer = (state: any =initMyTarget, action : any)=>{

    switch (action.type) {
        case "RELOAD" :{
            return {...state};
        }
        case "EDIT" : {
            return {
                ...state,
                id : action.payload
            };
        }

        case "TOGGLE_FORM" : {
            return {
                ...state,
                show : action.payload
            }
        }

        
        default : { return state}
    }
}

export default myTargetReducer