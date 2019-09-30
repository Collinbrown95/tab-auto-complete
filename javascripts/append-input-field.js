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
    /*create parent item div*/
    function createEmailDiv(email){
        var divContents = document.createElement("div");
        divContents.setAttribute("class", "attendee-email");
        emailDiv = document.createElement("div");
        emailDiv.setAttribute("class", "email-div");
        // Create <p> tag to hold email text
        emailPTag = document.createElement("p");
        emailPTag.setAttribute("class", "email-text");
        var emailText = document.createTextNode(email);
        divContents.appendChild(emailDiv);
        emailDiv.appendChild(emailPTag);
        emailPTag.appendChild(emailText);
        // Add delete button in case user wishes to delete this item later.
        deleteDiv = createDeleteDiv();
        divContents.appendChild(deleteDiv);
        return divContents
    }

    /*create div for delete button*/
    function createDeleteDiv(){
        // Create parent div for delete button
        deleteDiv = document.createElement("div");
        deleteDiv.setAttribute("class", "delete-div");
        // Add delete button in case user wishes to delete this item later.
        deleteButton = document.createElement("div");
        deleteButton.setAttribute("class", "delete-button");
        deleteText = document.createElement("p");
        deleteText.setAttribute("class", "delete-text");
        deleteText.innerHTML = "Remove";
        deleteButton.appendChild(deleteText);
        deleteDiv.appendChild(deleteButton);
        return deleteDiv
    }
}