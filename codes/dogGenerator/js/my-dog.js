// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// function addDoggo(){
//   //show loading spinner
//   const promise = fetch(BREEDS_URL);
//   promise.then(function(response){
//     const processingPromise = response.json();
//     return processingPromise;
  
//   })
//   .then(function(data){
//     //console.log(data);
//     const img = document.createElement('img');
//     img.src = data.message;
//     img.alt = 'Cute doggo';
  
//     document.querySelector('.doggos').appendChild(img);
//       //stop showing spinner
//   });
  
//   console.log("this will log first");

// }

// document.querySelector('.add-doggo').addEventListener('click',addDoggo);

const BREEDS_URL = " https://dog.ceo/api/breeds/list/all ";
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    //console.log(data);
    const breedObject = data.message;
    const breedArray = Object.keys(breedObject);
    
    for(let i=0; i < breedArray.length; i++){
      const option = document.createElement('option');
      option.value = breedArray[i];
      option.innerText = breedArray[i];
      select.appendChild(option);
    }
  })
  select.addEventListener('change', function(event){
    // console.log(event.target.value);
    // console.log(` https://dog.ceo/api/breed/${event.target.value}/images `);

      //make url
      //RANDOM IMAGE FROM A BREED COLLECTION

      //https://dog.ceo/api/breed/hound/images/random Fetch!

    let url = ` https://dog.ceo/api/breed/${event.target.value}/images/random `
     
    getDoggo(url);
    
  });

  const img = document.querySelector('.img-dog');
  const spinner = document.querySelector('.spinner');

  function getDoggo(url) {
      
    //show loading spinner
    spinner.classList.add('show');
    img.classList.remove('show');
    
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
    //console.log('image url',data);

    img.src = data.message;
    });
  
  }
  //Whenever the image finnished loading from its source
  //The spinner will get removed
  img.addEventListener('load',function(){
//stop showing the spinner
spinner.classList.remove('show');
img.classList.add('show');
  })

  //fetch from the api
  //use the URL to change the current image
