import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

/**
 * 
 * @param {String} elementid 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementid, todos = [] ) => {

    //TODO referencia
    const element = document.querySelector( elementid );

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );
    });

}