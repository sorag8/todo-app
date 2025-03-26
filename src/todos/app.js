import html from './app.html?raw';
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

// Crea lo que se renderizara en pantalla

const ElementsIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId Elemento en el cual se va a renderizar la aplicación 
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementsIDs.TodoList, todos);
    }

    // Cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })()

}