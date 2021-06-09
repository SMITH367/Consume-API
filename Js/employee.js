const showContainer = document.getElementById("container");
getUrl = new URLSearchParams(window.location.search);

id = getUrl.get("id");

const url = `https://jsonplaceholder.typicode.com/users/${id}`;


const getData = () =>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        showData(data);
        
    })
}
const showData = (employee) =>{
    

    

}

getData();