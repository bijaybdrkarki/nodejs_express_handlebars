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
    document.getElementById("month").innerHTML = `<option value="none" disabled selected> -- Month -- </option>`;
    for(let i=1; i<=12; i++)
    {
    document.getElementById("month").innerHTML += `<option value="${i}">${i}</option>`;
    }
}
function getdaylist(){
    document.getElementById("day").innerHTML = `<option value="none" disabled selected> -- Day -- </option>`;
    for(let i=1; i<=31; i++)
    {
    document.getElementById("day").innerHTML += `<option value="${i}">${i}</option>`;
    }
}
function getyearlist(){
    document.getElementById("year").innerHTML = `<option value="none" disabled selected> -- Year -- </option>`;
    for(let i=1960; i<=2020; i++)
    {
    document.getElementById("year").innerHTML += `<option value="${i}">${i}</option>`;
    }
}
// let guestButton = document.getElementById("guest-btn");
// guestButton.addEventListener("click", guestNumber);
// let monthbutton = document.getElementById("month");
// monthbutton.addEventListener("click", getmonthlist);
// let daybutton = document.getElementById("day");
// daybutton.addEventListener("click", getdaylist);
// let yearbutton = document.getElementById("year");
// yearbutton.addEventListener("click", getyearlist);

window.addEventListener("load", ()=> { /* things to be done when page is loaded */
    let dropMenu = document.getElementById("menu");
    dropMenu.addEventListener("click", menuVisible);
    let searchMenu = document.getElementById("srchicon");
    searchMenu.addEventListener("click", searchVisible);
    
});
