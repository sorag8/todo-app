import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
}

const state = {
    todos: [
        new Todo('Gema del espacio'),
        new Todo('Gema de la mente'),
        new Todo('Gema de la realidad'),
        new Todo('Gema del poder'),
        new Todo('Gema del tiempo'),
        new Todo('Gema del alma'),
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('InitStore 🥑')
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All ) => {
    switch( filter ){
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done );

        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );

        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if( !description )throw new Error('Description is required');
    
    state.todos.forEach(todo => {
        if( todo.description === description ) throw new Error (`Todo ${ description } already exist`);
    });

    state.todos.push( new Todo(description) );
}

/**
 * 
 * @param {String} todoId Identificador del ToDo
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    });
}

/**
 * 
 * @param {String} todoId Identificador del ToDo 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter Filtro de los ToDo
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
