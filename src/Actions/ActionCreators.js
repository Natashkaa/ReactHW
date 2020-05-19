import { ADD_NEW_ITEM, 
         CHANGE_INPUT,
         SET_CHECK,
         DELETE_ITEM } from "./ActionsType"

export function addNewItem (){
    return {
        type: ADD_NEW_ITEM
    }
}
export function deleteItem(id){
    return {
        type: DELETE_ITEM,
        id
    }
}
export function changeInput(value, name){
    return{
        type: CHANGE_INPUT,
        fieldName: name,
        value: value
    };
}

export function setCheck(id){
    return {
        type: SET_CHECK,
        id
    }
}