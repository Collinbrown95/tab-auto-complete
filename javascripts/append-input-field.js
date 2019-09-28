function appendToList(inp){
    /*registers a handler function to the submit button*/
    inp.addEventListener("click", function(e){
        // prevent page from reloading when submit button is pressed
        e.preventDefault();
        // extract the text contents of the input field
        var emailEntered = document.getElementById("myInput").value;
        // add the attendee to the attendee list
        addAttendee(emailEntered);
    });
    /*add email to attendee-list*/
    function addAttendee(email){
        // create new email div
        emailDiv = createEmailDiv(email);
        console.log(emailDiv);
        console.log(document.getElementsByClassName("attendee-list")[0])
        // append the email div to the attendee-list - note that there is only
        // one attendee list, so index 0 will access it
        document.getElementsByClassName("attendee-list")[0].appendChild(emailDiv);

    }
    /*create div with email*/
    function createEmailDiv(email){
        var divContents = document.createElement("div");
        divContents.setAttribute("class", "attendee-email");
        emailPTag = document.createElement("p");
        emailPTag.setAttribute("class", "emailText");
        var emailText = document.createTextNode(email);
        divContents.appendChild(emailPTag);
        emailPTag.appendChild(emailText);
        return divContents
    }
}