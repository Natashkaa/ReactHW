function createStore(reducer){
    let state = [];
    let subscribers = [];

    return {
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);
            subscribers.forEach(x => x());
        },
        subscribe(sbr){
            subscribers.push(sbr);
        }
    }
}