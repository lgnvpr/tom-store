export const reloadTarget=() =>{
    return {
        type : "RELOAD",
        payload : true
    }
}

export const editTarget=(id : string)=>{
    return {
        type : "EDIT",
        payload : id
    }
}

export const toggleForm= (show : boolean)=>{
    return {
        type : "TOGGLE_FORM",
        payload : show
    }
}



