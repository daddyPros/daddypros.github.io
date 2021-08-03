
var valScrol = window.scrollY;


// affichage content methodo




// sticky

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
    addClassActiveMenu();
    showSticky();

};

// Get the navbar
var navbar = document.getElementById("nav-principal");
navbar.style.opacity = "0";


var section_header = document.getElementById("header");
// Get the offset position of the navbar
var sticky = section_header.offsetHeight+10;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function showSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.style.opacity = "1";
    //navbar.style.transform = "translateY(50px)";
    navbar.style.marginTop = "0px"
    navbar.style.visibility = "visible"
  } else if(window.pageYOffset < sticky){
    navbar.style.opacity = "0";
    navbar.style.top = "0px"
    navbar.style.marginTop = "-50px"
    
    //navbar.style.transform = "translateY(0px)" 
  }else if(window.pageYOffset < 100){
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden"
    //navbar.style.transform = "translateY(0px)" 
  }
}

function addClassActiveMenu (){

    var btnCrea = document.getElementById("btn_crea");
    var btnApropos = document.getElementById("btn_apropos");
    var btnContact = document.getElementById("btn_contact");

    var section_head = document.getElementById("header");
    var section_nosvaleurs = document.getElementById("nosvaleurs");
    var section_noscrea = document.getElementById("noscrea");
    var section_linkContact = document.getElementById("linkContact");

    var height_header = section_head.offsetHeight+10;
    var height_nosvaleurs = section_nosvaleurs.offsetTop + 300;
    var height_noscrea = section_noscrea.offsetTop - 400;
    var height_linkContact = section_linkContact.offsetTop-300;

    var activNav = document.getElementsByClassName("activeMenu");
    for (i=0; i < activNav.length; i++){
        activNav[i].className = activNav[i].className.replace(" activeMenu", "");

    }
    
    if (window.scrollY >= height_header) {
        btnApropos.classList.add("activeMenu")
        btnCrea.classList.remove("activeMenu")
        btnContact.classList.remove("activeMenu")
    }
    if (window.scrollY >= height_noscrea) {
        btnApropos.classList.remove("activeMenu")
        btnCrea.classList.add("activeMenu")
        btnContact.classList.remove("activeMenu")
    }
    if (window.scrollY >= height_linkContact) {
        btnApropos.classList.remove("activeMenu")
        btnCrea.classList.remove("activeMenu")
        btnContact.classList.add("activeMenu")
    }



    

}