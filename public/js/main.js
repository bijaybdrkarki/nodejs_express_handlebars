

// functions 

function showMore(event) /* show room more info onclick in all version */
{
    event.preventDefault();
    event.target.parentElement.children[3].classList.toggle("invisible");
    if(event.target.parentElement.children[1].innerText == 'See more'){
        event.target.parentElement.children[1].innerText = 'Read less'
    }else{
        event.target.parentElement.children[1].innerText = 'See more';
    }
}
function favbtnclick(event) /* check or uncheck fav button on click in all version */
{
    event.preventDefault();
   if(event.target.innerHTML == "favorite")
   {
    event.target.innerHTML = "favorite_border";
   }
   else
   {
    event.target.innerHTML = "favorite";
   }
}

function minusbtnclick(event)
{
    event.preventDefault();
    let value= parseInt(event.target.parentElement.children[1].innerHTML);
    if (value > 0)
    {
        value--;
    }
    event.target.parentElement.children[1].innerHTML = value;
    if (value == 0 && event.target.parentElement.children[0].classList.contains("plusbutton"))
    {
        event.target.parentElement.children[0].classList.remove("plusbutton");
        event.target.parentElement.children[0].classList.add("minusbutton");
    }
    let total = totalguest();
    if (total == 1)
    {
        document.getElementById("guest-btn").children[0].innerHTML = `${total} Guest`;
    }
    else
    {
        document.getElementById("guest-btn").children[0].innerHTML = `${total} Guests`;
    }
    if (total < 1) 
    {
        if (document.querySelector(".clr-btn").classList.contains("btnSelect"))
        {
        document.querySelector(".clr-btn").classList.remove("btnSelect");
        document.querySelector(".clr-btn").classList.add("btnUnselect");
        document.querySelector(".save-btn").classList.remove("btnSelect");
        document.querySelector(".save-btn").classList.add("btnUnselect");
        }
        document.getElementById("guest-btn").children[0].innerHTML = `Guest`;
    }
}

function plusbtnclick(event)
{
    event.preventDefault();
    let value = parseInt(event.target.parentElement.children[1].innerHTML);
    value++;
    event.target.parentElement.children[1].innerHTML = value; 
    event.target.parentElement.children[0].classList.remove("minusbutton");
    event.target.parentElement.children[0].classList.add("plusbutton");
    let total = totalguest();
    if (total > 0 ) 
    {
        if (document.querySelector(".clr-btn").classList.contains("btnUnselect"))
        {
        document.querySelector(".clr-btn").classList.remove("btnUnselect");
        document.querySelector(".clr-btn").classList.add("btnSelect");
        document.querySelector(".save-btn").classList.remove("btnUnselect");
        document.querySelector(".save-btn").classList.add("btnSelect");
        }
        if (total == 1)
        {
        document.getElementById("guest-btn").children[0].innerHTML = `${total} Guest`;
        }
        else
        {
        document.getElementById("guest-btn").children[0].innerHTML = `${total} Guests`;
        }
    }
}
function totalguest()
{
    var sum=0;
    let total = document.querySelectorAll(".quantity");
    total.forEach(item => sum+=(parseInt(item.innerHTML)));
    return sum;
}

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
function searchVisible() /* make search on tablet screen size */
{
   if (window.innerWidth >= 650 && window.innerWidth <= 1200)
   {
    // document.getElementById("search").children[0].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("makeVisible");  
   }
}
function guestNumber() /* get guest number dropdown on home page  */
{
    event.preventDefault();
    // console.log("test");
    document.querySelector(".guestNum").classList.toggle("animate");
    let html= document.getElementById("guest-btn").children[1].innerHTML;
    if( html == 'arrow_downward')
    {
        document.getElementById("guest-btn").children[1].innerHTML = 'arrow_upward';
    }
    else{
        document.getElementById("guest-btn").children[1].innerHTML = 'arrow_downward';
    }
} 
function getmonthlist() /* month list on signup page */
{
    let months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul','Aug', 'Sep','Oct','Nov', 'Dec' ];
    if (document.getElementById("day").innerHTML.length <= 25 )
    {
        let options  = `<option value="none"  disabled selected> -- Month -- </option>`;
        for(let i=1; i<=12; i++)
        {
        options+= `<option value="${i}">${months[i-1]}</option>`;
        }
        document.getElementById("month").innerHTML = options;
    }
    else
    {
        let options  = `<option value="none"  disabled> -- Month -- </option>`;
        for(let i=1; i<=12; i++)
        {
            if (i != document.getElementById("month").value)
            {
            options += `<option  value="${i}">  ${months[i-1]} </option>`;
            }
            else
            {
                options += `<option  value="${i}" selected>  ${months[i-1]}  </option>` 
            }
        }
        document.getElementById("month").innerHTML = options;
    }
    
}
function getdaylist() /* day list on signup page */
{
    if (document.getElementById("day").innerHTML.length <= 25 )
    {
        let options = `<option value="none" name="none" disabled selected> -- Day -- </option>`;
        for(let i=1; i<=31; i++)
        {
            options += `<option  value="${i}">  ${i} </option>`;
        }
        document.getElementById("day").innerHTML = options;
    }
    else
    {
        let options= `<option value="none" name="none" disabled> -- Day -- </option>`;
        for(let i=1; i<=31; i++)
        {
            if (i != document.getElementById("day").value)
            {
            options += `<option  value="${i}"> ${i} </option>`;
            }
            else
            {
                options += `<option  value="${i}" selected> ${i}  </option>` 
            }
        }
        document.getElementById("day").innerHTML = options;  
    }
}
function getyearlist() /* year list on signup page */
{
    if (document.getElementById("year").innerHTML.length <= 25 )
    {
        let options = `<option value="none" name="none" disabled selected> -- Year -- </option>`;
        for(let i=1960; i<=2020; i++)
        {
        options += `<option value="${i}">${i}</option>`;
        }
        document.getElementById("year").innerHTML = options;
    }
    else
    {
        let options= `<option value="none" name="none" disabled> -- Year -- </option>`;
        for(let i=1960; i<=2020; i++)
        {
            if (i != document.getElementById("year").value)
            {
            options += `<option  value="${i}"> ${i} </option>`;
            }
            else
            {
                options += `<option  value="${i}" selected> ${i}  </option>` 
            }
        }
        document.getElementById("year").innerHTML = options;  
    }
}


window.addEventListener("load", ()=> { /* things to be done when page is loaded */
    if(document.location.pathname == "/signup"){
        getmonthlist()
        getdaylist()
        getyearlist()
    }
    if(document.location.pathname  == "/")
    {
        let guestButton = document.getElementById("guest-btn");
        guestButton.addEventListener("click", guestNumber);

        let minusButton = document.querySelectorAll(".minusbutton");
        minusButton.forEach(item => item.addEventListener("click", minusbtnclick));

        let plusButton = document.querySelectorAll(".plusbutton");
        plusButton.forEach(item => item.addEventListener("click", plusbtnclick));
    }
    if(document.location.pathname == "/rooms" || document.location.pathname == "/")
    {
        let seeMore = document.querySelectorAll(".extra-info");
        let favBtn = document.querySelectorAll(".fav-color");
    
        favBtn.forEach(btn => btn.addEventListener("click", favbtnclick));
        seeMore.forEach(item => item.addEventListener("click", showMore));
    }
    let dropMenu = document.getElementById("menu");
    dropMenu.addEventListener("click", menuVisible);
    let searchMenu = document.getElementById("srchicon");
    searchMenu.addEventListener("click", searchVisible);
    
});
