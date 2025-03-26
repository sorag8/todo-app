import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {String} elementid 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementid, todos = [] ) => {

    if( !element )
        element = document.querySelector( elementid );

    if( !element ) throw new Error(`Element ${ element } not found`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );
    });

}