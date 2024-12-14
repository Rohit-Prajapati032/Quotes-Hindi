const BASE_URL = "https://hindi-quotes.vercel.app/random/";
const btn = document.querySelector("#btn");
const quateContainer = document.querySelector(".quote");
const quoteType = document.querySelector(".type");



btn.addEventListener('click', getData);

function getData(){
    let userInput = document.querySelector("#input").value;
     userInput = userInput.toLowerCase();

        if(!userInput){
            quateContainer.innerHTML = `<h2 class = "error-msg">Please Type you Quote Category</h2>
           <div class = "exam">
            <h2>Example<h2>
            <li>Sad</li>
            <li>Success</li>
            <li>Attitude</li>
            <li>Love</li>
            <li>Motivational</li>
           </div>`;
            
        }
        else{

            if(userInput =="sad" || userInput =="attitude" || userInput == "love" || userInput == "success" || userInput=="motivational"){
                console.log("hii");
             fetch(BASE_URL + userInput)
                .then(response=>{
                   return response.json();
                })
                .then(data=>{
                    console.log(data);
                    quoteType.innerHTML = ` Quote Type : ${ data.type}`;
                    quateContainer.innerHTML = `<h2>${ data.quote}</h2>`;
                
                    // if(data.type=='attitude'){
                    //     console.log(data);
                    // }
                    
                })
                .catch(error=>{
                    console.log(error);
                });
        
             }
             else{
                quoteType.innerHTML = '';
                quateContainer.innerHTML = `<h2 class = "error-msg">Please cheack Spealling</h2>`;
             }
        }
    
     
}