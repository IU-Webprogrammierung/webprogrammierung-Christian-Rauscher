// Sidebar Menu
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    }

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    }

// Scroll to Top Button
    window.onscroll = function() {scrollFunction()}

function scrollFunction(){
    const mybutton = document.querySelector('.scroll-to-top-button')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

//Modal Image Viewer
function modalImgViewer(element){
    document.getElementById("modalimg").src = element.src;
    document.getElementById("modaldiv").style.display = "flex";
}