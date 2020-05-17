import { ADD_NEW_WORD, CHANGE_INPUT } from '../Actions/ActionsType'

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_NEW_WORD:
            let newId = state.words.length + 1;
            let newWord = {
                id: newId,
                word: state.newWord
            }
            return { ...state,
                words: [...state.words, newWord]
            }
        case CHANGE_INPUT:
            return { ...state,
                    [action.fieldName]: action.value}
        default:
            return state;
    }
}

export default reducer;