//

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0"
}
function hideMenu() {
    navLinks.style.right = "-260px"
}

// TAB COME BACK

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = " Come back : ("
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

// BOOK TAG FILTER

$(document).ready(function () {
    $('.fliter-item').click(function () {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    // Add active to btn
    $('.fliter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


// Header BackGround Change on Schroll

let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
})