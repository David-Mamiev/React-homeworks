import * as axios from 'axios';
export const baseUrl = "https://jsonplaceholder.typicode.com/todos/";

const todoAxios = axios.create({baseUrl});
todoAxios.get("1").then((res) => console.log(res));

// todoAxios.post();

export function getAll() {
    return fetch(baseUrl)
        .then((response) => response.json())
}

export function getById(id){
    return fetch(`${baseUrl}/${id}`)
        .then((response) => response.json());
}

export function removeById (id) {   
    return fetch(`${baseUrl}/${id}`, {method: "DELETE"})
            .then((response) => response.json());
}

export class ToDoService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getAll() {
        return fetch(this.baseUrl)
            .then((response) => response.json())
    }

    getById(id){
        return fetch(`${this.baseUrl}/${id}`)
            .then((response) => response.json());
    }

    removeById (id) {   
        return fetch(`${this.baseUrl}/${id}`, {method: "DELETE"})
                .then((response) => response.json());
    }
}

// export default new ToDoService(baseUrl);