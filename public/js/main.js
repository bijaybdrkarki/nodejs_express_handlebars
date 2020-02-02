// console.log("test");
function menuVisible() /* show menu on click in mobile version */
{
    document.getElementById("search").classList.toggle("visible");
    document.getElementById("account").classList.toggle("invisible");
    document.getElementById("mainmenu").classList.toggle("visible");
    let menuValue= document.getElementById("menu").innerHTML;
    if (menuValue == 'menu')
    {
        document.getElementById("menu").innerHTML = 'clear';
    }
    else if (menuValue=='clear')
    {
        document.getElementById("menu").innerHTML = 'menu';
    }
    
}
function searchVisible()
{
    // document.getElementById("search").children[0].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("makeVisible");  
}
function guestNumber()
{
    event.preventDefault();
    // console.log("test");
    document.querySelector(".guestNum").classList.toggle("invisible");
   let html= document.getElementById("guest-btn").children[1].innerHTML;
    if( html == 'arrow_downward')
    {
        document.getElementById("guest-btn").children[1].innerHTML = 'arrow_upward';
    }
    else{
        document.getElementById("guest-btn").children[1].innerHTML = 'arrow_downward';
    }
} 



window.addEventListener("load", ()=> { /* things to be done when page is loaded */
    let dropMenu = document.getElementById("menu");
    dropMenu.addEventListener("click", menuVisible);
    let searchMenu = document.getElementById("srchicon");
    searchMenu.addEventListener("click", searchVisible);
    let guestButton = document.getElementById("guest");
    guestButton.addEventListener("click", guestNumber);
});