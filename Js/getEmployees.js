import {
    showData
} from "./drawingEmployees.js";

const url = "https://jsonplaceholder.typicode.com/users";
console.log("Conection whith JSONPlaceholder API");

fetch(url).then((response)=>console.log(response))

const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((employees) => {
            console.log("data",employees)
            showData(employees);
            
        })
        .catch((err) => console.log(err));
}

getData();