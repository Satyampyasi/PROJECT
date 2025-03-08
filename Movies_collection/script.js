const mainDiv = document.getElementById('main');
   
  let fetchdata =  async ()=>{
    try{
  const response = await fetch("https://api.sampleapis.com/cartoons/cartoons2D")
  const  data = await response.json();
    displaydata(data);
    }
    catch(error){
      console.error("Error fetching data:", error);
    }
    
  };

//  function displaydata(data){ data.forEach(function(p){

//  })};
     
  function displaydata(data){
    data.forEach((p)=>{
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        
        const producttittle = document.createElement('h2');
        producttittle.textContent=p.title;

        const productprice= document.createElement('p');
        productprice.textContent = p.year

        const productimg = document.createElement('img');
        productimg.src=p.image;
        productalt = p.title;

        const productbutton = document.createElement('button');
        productbutton.textContent="Add to card";

        productDiv.append(productimg,producttittle,productprice,productbutton)
        mainDiv.appendChild(productDiv)
       });
          
       }
       fetchdata();




  