

const beersr = [];
function addBeer(name, category, rate) {
    let beer = {
        Name: name,
        Category: category,
        Rating: rate
    }
    beersr.push(beer);
}

function renderBeers() {
    $(".beers-list").empty();
    for (let i = 0; i < beersr.length; i++) {
        let NAME = beersr[i].Name;
        let BEER = beersr[i].Category;
        let RATE = beersr[i].Rating;
        $(".beers-list").append(" <li>  " + NAME + ", " + BEER + "," + RATE + " </li>")
    }
}

$(".sorti").on("click", function () {
    if (sortUP()) {
        beersr.reverse();
        renderBeers();
    }
    else {
        beersr.sort(function (a, b) { return a.Rating - b.Rating });
        renderBeers();
    }
}
)
function sortUP() {
    for (let j = 1; j < beersr.length; j++) {
        if (beersr[j - 1].Rating > beersr[j].Rating) {
            return false;
        }
    }
    return true;
}

$(".post-beer").on("click", function () {
    let name = $(".beer-input").val();
    let category = $(".category-input").val();
    let rate = $("select").val();
    addBeer(name, category, rate);
    renderBeers();
})