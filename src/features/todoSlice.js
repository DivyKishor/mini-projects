import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: 'learn redux', completed: false}],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, {
                id: nanoid(),
                text: action.payload,
            }]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: true
                    }
                }
                return todo;
            })
        }
    }
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;