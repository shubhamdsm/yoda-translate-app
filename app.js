var btn = document.querySelector('#btn')
var text = document.querySelector('#text')
var output = document.querySelector('#output')

var serverURL = 'https://api.funtranslations.com/translate/yoda.json'

function getTranslationURL(input){
   return serverURL + "?" + "text=" +input
}

function errorHandler(error){
   console.log("error is occured",error);
   alert('Server is not responding try again later')
}

function clickHandler(){
   var inputText = text.value;

   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json =>{
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
   })
   .catch(errorHandler)
};

btn.addEventListener('click',clickHandler)

