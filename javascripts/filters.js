function setupFilters(inp) {
    /*registers handler functions for the filters button*/
    inp.addEventListener("click", function(e){
        // prevent page from reloading when submit button is pressed
        e.preventDefault();
        // get the filters-container div
        filterDiv = document.getElementsByClassName("filters-container")[0];
        // either show or hide filterDiv depending on whether it is hidden or
        // showing
        if (filterDiv.style.display == "none"){
            filterDiv.style.display = "flex";
        } else {
            filterDiv.style.display = "none";
        }
    });
}

function generateTimeSelection(inp){
    /*generates */
}