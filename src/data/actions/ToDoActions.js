import AppDispacher from "../dispatcher/AppDispatcher";
import TodoConstants from "../constants/ToDoConstant";

const TodoActions = {
    create(description){
        AppDispacher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            description
        })
    },
    update(item){
        AppDispacher.dispatch({
            actionType: TodoConstants.TODO_UPDATE,
            item
        })
    },
    remove(id){
        AppDispacher.dispatch({
            actionType: TodoConstants.TODO_REMOVE,
            id
        })
    },
    clear(){
        AppDispacher.dispatch({
            actionType: TodoConstants.TODO_CLEAR
        })
    }
}

export default TodoActions;