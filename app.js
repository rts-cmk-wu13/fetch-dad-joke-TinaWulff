

fetch("https://icanhazdadjoke.com", {       //Object
    headers: {                              //Object
        "Accept": "application/json"
    }
})
.then((response) => response.json())
.then((data) => {
    console.log(data)

     let divElm = document.querySelector("div");
     let jokeElm = document.createElement("p");
     //jokeElm.classList.add("theJoke")

     jokeElm.innerHTML = `${data.joke}`          //data."object-key"

     divElm.append(jokeElm);
})





