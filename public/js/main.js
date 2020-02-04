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
   if (window.innerWidth >= 650 && window.innerWidth <= 1200)
   {
    // document.getElementById("search").children[0].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("makeVisible");  
   }
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
function getmonthlist(){
    let options  = `<option value="none" disabled selected> -- Month -- </option>`;
    for(let i=1; i<=12; i++)
    {
      options+= `<option value="${i}">${i}</option>`;
    }
    document.getElementById("month").innerHTML = options;
}
function getdaylist(){
    let options = `<option value="none" disabled selected> -- Day -- </option>`;
    for(let i=1; i<=31; i++)
    {
        options += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("day").innerHTML = options;
}
function getyearlist(){
    let options = `<option value="none" disabled selected> -- Year -- </option>`;
    for(let i=1960; i<=2020; i++)
    {
    options += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("year").innerHTML = options;
}



window.addEventListener("load", ()=> { /* things to be done when page is loaded */


    if(document.location.pathname == "/signup"){
        getmonthlist()
        getdaylist()
        getyearlist()
    }
    if(document.location.pathname  == "/"){
        let guestButton = document.getElementById("guest-btn");
        guestButton.addEventListener("click", guestNumber);
    }
    

    let dropMenu = document.getElementById("menu");
    dropMenu.addEventListener("click", menuVisible);
    let searchMenu = document.getElementById("srchicon");
    searchMenu.addEventListener("click", searchVisible);
    
});