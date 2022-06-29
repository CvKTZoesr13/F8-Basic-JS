import html from "../core.js";

import { connect } from "../store.js";

const connector = connect()

import Header from "./Header.js";
import TodoList from "./ToDoList.js";
import Footer from "./Footer.js";
function App({todos}) {
    return html`
            <h1>Hello Sakimichan!</h1>
            <section class="todoapp">
                ${Header()}
                ${todos.length > 0 && TodoList()}
                ${todos.length > 0 && Footer()}
            </section>
    `
}

export default connector(App)