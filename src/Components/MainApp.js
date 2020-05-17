import React from 'react';

function MainApp(props){
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <textarea className="form-control mr-sm-2" 
                       type="text"
                       placeholder="Add new word"
                       name="newWord"
                       value={props.newWord}
                       onChange={e => props.changeInput(e.target.value, e.target.name)}></textarea>
                <button className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit"
                        onClick={() => props.addNewWord()}>Add</button>
            </nav>
        
            <ul className="list-group">
                {props.words.map(e => (
                    <li key={e.id} className="list-group-item">id: {e.id} - {e.word}</li>
                ))}
            </ul>
        </div>
    )
}

export default MainApp;