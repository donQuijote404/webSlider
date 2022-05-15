// header

let search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", () => {
    let input_search = document.getElementById("input_search");

    if (input_search.style.visibility === "hidden") {
        input_search.style.cssText = "visibility: visible;";
        input_search.style.opacity = "1";
        input_search.focus();
    }
    else {
        input_search.style.cssText = "visibility: hidden";
    }
})

// slider


let couter = 1;
setInterval(function() {
    document.getElementById("radio" + couter).checked = true;
    couter++;
    if (couter > 3) {
        couter = 1;
    }
}, 4000);

// footer
let github_btn = document.getElementById("github-btn");
github_btn.addEventListener("click", () => {
    location.href = "https://github.com/donQuijote404";
})

let fb_btn = document.getElementById("fb-btn");
fb_btn.addEventListener("click", () => {
    location.href = "https://www.facebook.com/profile.php?id=100024583027260";
})