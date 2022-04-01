/*let fileSave = () => {
    // Get the data from each element on the form.
    const nameToo = document.getElementById("txtNameToo");
    const emailToo = document.getElementById("txtEmailToo");
    const countryToo = document.getElementById("selCountryToo");
    const msgToo = document.getElementById("msgToo");

    // This variable stores all the data.
    let dataToo = " \r Name: " + nameToo.value + " \r\n " + "Email: " + emailToo.value + " \r\n " + "Country: " + countryToo.value + " \r\n " + "Message: " + msgToo.value;
    console.log(dataToo); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOBToo = new Blob([dataToo], { type: "text/plain" });
    var filenameToo = new Date();
    var monthToo =new Date(); //months from 1-12
    monthToo = monthToo.getMonth();

    var dayToo = new Date();
    var dayToo = dayToo.getUTCDate();

    var yearToo = new Date();
    var yearToo = yearToo.getUTCFullYear();

    newdateToo = yearToo + "/" + monthToo + "/" +  dayToo;
    const sFileNameToo = filenameToo; // The file to save the data.

    let newLink  = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOBToo);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOBToo);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};

//word counter


// Create the function refercenced in the Button
function countWordsToo() {
    // Get the textbox by its id
    var textboxToo = document.querySelector("#mytextToo");
    
    // Get the text
    var textToo = textboxToo.value;
    
    // Get an array of the single words by splitting at whitespace
    var wordsToo = textToo.split(" ");
    
    // Get the lenght of the array and alert it
    var outputToo = document.querySelector("#outputToo");
    
    // Set the lenght of the word array -> word count as the content of the output
    outputToo.innerHTML = "Word Count " + wordsToo.length;
    console.log("Word Count " + wordsToo.length);
    console.log(wordsToo);

    //const BLOBS = new Blob (["Message " + words], { type: "text/plain" });
    const textToBLOBToo = new Blob(["Message " + wordsToo + '\n' + "Word Count " + wordsToo.length], { type: "text/plain" });
    var filenameToo = new Date();
    var monthToo =new Date(); //months from 1-12
    monthToo = monthToo.getMonth();

    var dayToo = new Date();
    var dayToo = dayToo.getUTCDate();

    var yearToo = new Date();
    var yearToo = yearToo.getUTCFullYear();

    newdateToo = yearToo + "/" + monthToo + "/" + dayToo;
    const sFileNameToo = filenameToo; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOBToo);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOBToo);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }


    newLink.click();

};*/