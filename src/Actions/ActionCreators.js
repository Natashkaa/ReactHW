import { ADD_NEW_WORD, CHANGE_INPUT } from "./ActionsType"

export function addNewWord (word){
    return {
        type: ADD_NEW_WORD,
        word
    }
}
export function changeInput(value, name){
    return{
        type: CHANGE_INPUT,
        fieldName: name,
        value: value
    };
}