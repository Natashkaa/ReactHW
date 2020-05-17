import { connect } from 'react-redux'
import { addNewWord, changeInput } from '../Actions/ActionCreators'
import MainApp from '../Components/MainApp'

function mapStateToProps(state){
    return {
        words: state.words,
        newWord: state.newWord
    }
}

function mapDispatchToProps(dispatch){
    return{
        addNewWord: () => dispatch(addNewWord()),
        changeInput: (value, name) => dispatch(changeInput(value, name))
    }
}

let func = connect( mapStateToProps, mapDispatchToProps);
const UpdateApp = func(MainApp);

export default UpdateApp;