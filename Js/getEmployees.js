import {showData} from "./drawingEmployees.js";

const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response) => response.json())
        .then((employees) => {
            showData(employees);
        })
        .catch((err) => console.log(err));
}

getData();