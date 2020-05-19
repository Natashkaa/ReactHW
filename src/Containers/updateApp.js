import { connect } from 'react-redux'
import { addNewItem, 
         changeInput,
         setCheck,
         deleteItem } from '../Actions/ActionCreators'
import MainApp from '../Components/MainApp'

function mapStateToProps(state){
    return {
        todoItems: state.todoItems,
        newTodoItem: state.newTodoItem
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewItem: () => dispatch(addNewItem()),
        changeInput: (value, name) => dispatch(changeInput(value, name)),
        setCheck: (id) => dispatch(setCheck(id)),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

let func = connect( mapStateToProps, mapDispatchToProps);
const UpdateApp = func(MainApp);

export default UpdateApp;