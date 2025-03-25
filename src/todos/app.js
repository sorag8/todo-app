import html from './app.html?raw';

// Crea lo que se renderizara en pantalla

/**
 * 
 * @param {String} elementId Elemento en el cual se va a renderizar la aplicación 
 */

export const App = ( elementId ) => {

    // Cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })()

}