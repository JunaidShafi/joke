// // xml reque3sts


// const req = new XMLHttpRequest();
// req.onload = function(){
//     console.log("itloaded");

//     const he = JSON.parse(this.responseText);
//     console.log(he.name,he.height)

// }

// req.onerror = function(){
//     console.log("error");
//     console.log(this)
    
// }




// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();


// FETCH REQUESTS

// fetch("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log("worked");
//     console.log(res)
//     res.json().then(data => console.log("jsnondone",data));
// })
// .catch(e =>{
//     console.log("error",e)
// })

// axios req
const jokes = document.querySelector("#jokes");
const getDadJoke= async ()=>{
    const config = {headers :{Accept:"application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/",config);
    const joke =res.data.joke
    const newL = document.createElement("LI")
    newL.append(joke)
    jokes.appendChild(newL)
}


const btn = document.querySelector("#btn")
btn.addEventListener("click",getDadJoke)
