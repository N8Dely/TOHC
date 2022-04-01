let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("txtName");
    const age = document.getElementById("txtAge");
    const email = document.getElementById("txtEmail");
    const country = document.getElementById("selCountry");
    const msg = document.getElementById("msg");

    // This variable stores all the data.
    let data = "\r Name: " + name.value + " \r\n " + "Age: " + age.value + " \r\n " + "Email: " + email.value + " \r\n " + "Country: " + country.value;
    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};

//word counter

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
    output.innerHTML = "Word Count " + words.length;
    console.log("Word Count " + words.length);
    console.log(words);

    //const BLOBS = new Blob (["Message " + words], { type: "text/plain" });
    const textToBLOB = new Blob(["Message " + words + '\n' + "Word Count " + words.length], { type: "text/plain" });
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }


    newLink.click();

};