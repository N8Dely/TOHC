// Create the function refercenced in the Button
function countWords() {
    // Get the textbox by its id
    var textbox = document.querySelector("#mytext");
    
    // Get the text
    var text = textbox.value;
    
    // Get an array of the single words by splitting at whitespace
    var words = text.split(" ");
    
    // Get the lenght of the array and alert it
    var output = document.querySelector("#output");
    
    // Set the lenght of the word array -> word count as the content of the output
    output.innerHTML = "This text is " + words.length + " words long!";
    console.log(words.length);
  }