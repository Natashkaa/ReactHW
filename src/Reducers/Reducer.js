import { ADD_NEW_ITEM, 
         CHANGE_INPUT,
         SET_CHECK, 
         DELETE_ITEM} from '../Actions/ActionsType'

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_NEW_ITEM:
            if(state.newTodoItem != ""){
                let newId = state.todoItems.length + 1;
                let newItem = {
                    id: newId,
                    addDate: new Date().getDate() + '-' +
                         ((new Date().getMonth() + 1) < 10 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' +
                         new Date().getFullYear(),
                    addTime: (new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()) + ':' + 
                         (new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()),
                    description: state.newTodoItem,
                    isChecked: false
                }
                return { ...state,
                    todoItems: [...state.todoItems, newItem]
                }
            }
        case CHANGE_INPUT:
            return { ...state,
                    [action.fieldName]: action.value
                   }
        case SET_CHECK:
            let item = state.todoItems.find(e => e.id == action.id);
            item.isChecked = !item.isChecked;
            return { ...state,
                     todoItems: [ ...state.todoItems ]
                    }
        case DELETE_ITEM:
            let removeIndex = state.todoItems.map(e => e.id).indexOf(action.id);
            state.todoItems.splice(removeIndex, 1);
        return { ...state,
                 todoItems: [ ...state.todoItems ]}
        default:
            return state;
    }
}

export default reducer;