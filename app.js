
console.log("Let's get this party started!");
const $gifArea = $("#gif-area"); // html id gif-area (use #)
const $searchInput = $("#search"); // html id search (use #) $?

/* use ajax result to add a gif */

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        // random gif using math.floor
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        //appending the result to the page
        // Part 2: Appending GIFs 
        // Now that you’re communicating properly with the API, 
        // you should do something more interesting with the response data. 
        // Instead of logging it, grab a GIF from the response data and 
        // append the GIF to the page. Ensure that if you submit the form 
        // multiple times, you’ll get multiple GIFs showing up.
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

/* handle form submission: clear search box & make ajax call */

$("form").on("submit", async function (evt) {
    evt.preventDefault(); // stop the page reload
    // empty the value field after the search
    let searchTerm = $searchInput.val();
    $searchInput.val("");
    // get Giphy API url using await and axios 
    const url = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" // API key created on starter code
        }
    });
    addGif(url.data);
});

/* remove gif */
//Part 3: Removing GIFs
// Add a button next to the form which, when clicked, 
//will remove all GIFs from the page.


$("#remove").on("click", function () { // reference html id remove with #
    $gifArea.empty();
});

// Reference springboard 14.2 API's, 14.3 AJAX and rithm school