const jokeContainer = document.getElementById("joke");
const generate = document.getElementById("generate");
const url = document.getElementById = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";

let getjoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
});
}

generate.addEventListener("click",getjoke);
getjoke();