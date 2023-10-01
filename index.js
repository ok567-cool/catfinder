let mainButton = document.getElementById('mainButton');
let mainImage = document.getElementById('mainImage');
let catName = document.getElementById('catName');

mainButton.addEventListener('click', function(){
    
   
    
    
    fetch('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_6itlA2XoSMZZE7zZBoUVhsUZljR52TsVcLvQpFNbRrfKvlm9AdXnSP4N87pMXNLA')

        
        .then(res => res.json())
        .then(result =>{

            /*
            let dogName = result.message.slice(0,-19).slice(30)
            dogName = dogName.replace('-', ' ');
            document.getElementById('Dogname').innerText = dogName;
            document.getElementById('Dogname').setAttribute("href", result.message)
            mainImage.src = result.message
            */
           catName.innerText = result[0].breeds[0].alt_names;
           catName.setAttribute("href", result[0].url)
           mainImage.src = result[0].url;
           console.log(result[0]);
        })
        .catch(err=>console.log(err))
    
})