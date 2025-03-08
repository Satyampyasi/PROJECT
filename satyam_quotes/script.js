const factElement = document.querySelector('#fact');
const button = document.querySelector('#button');
const author= document.querySelector('#author');

let getfact = async ()=>
{
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        console.log(data);
        factElement.textContent = data.quote;
        author.textContent= data.author;

    } catch (error) {
        console.error("An error occurred:", error);
    }
};
button.addEventListener('click',getfact);

