function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    }

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    }

// Scroll to Top Button
let mybutton = document.getElementById("scroll-to-top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}