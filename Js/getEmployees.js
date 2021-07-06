import {
    showData
} from "./drawingEmployees.js";

const url = "https://jsonplaceholder.typicode.com/users";
console.log("Conection whith JSONPlaceholder API");

const getDatahtx = new XMLHttpRequest();


getDatahtx.addEventListener("load",()=>{
   let response = getDatahtx.response;
    console.log("data",JSON.parse(response));
})
getDatahtx.open("GET",url);
getDatahtx.send();


const getData = () => {
    fetch(url)
        .then((response) => response.json())
        .then((employees) => {
            showData(employees);
        })
        .catch((err) => console.log(err));
}

getData();