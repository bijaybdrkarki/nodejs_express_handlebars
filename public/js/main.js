// console.log("test");
//Data for rooms
const allrooms=[
    {
        id : 1,
        name : `Beach View`,
        image : `/img/room1.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },
    {
        id : 2,
        name : `Beach View`,
        image : `/img/room2.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },
    {
        id : 3,
        name : `Beach View`,
        image : `/img/room3.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },{
        id : 4,
        name : `Beach View`,
        image : `/img/room4.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },{
        id : 5,
        name : `Beach View`,
        image : `/img/room5.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },
    {
        id : 6,
        name : `Beach View`,
        image : `/img/room6.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },
    {
        id : 7,
        name : `Beach View`,
        image : `/img/room7.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },
    {
        id : 8,
        name : `Beach View`,
        image : `/img/room8.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    },
    {
        id : 9,
        name : `Beach View`,
        image : `/img/room9.jpg`,
        description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
        price: 150.00,
        rating: 4.21,
        ratingPeople : 312,
    }
]

// functions 
function getRoomsAsString(room) /* return each room as string of HTML to render on page */
{
return `<article class="room">
<header>
    <img src="${room.image}" alt="room img">
</header>
<div class="name-price">
      <h3>Beach view</h3>
      <data value="${room.price}"><ins>$${room.price}/night</ins></data>
</div>
<div class="see-more">
      <p>${room.description}</p>
      <a href="#" class="extra-info">See more</a><br>
      <span class="invisible">${room.extra}</span>
</div>
<dl class="rating-fav">
  <div><dt><span class="material-icons">star</span> <h2>${room.rating}</h2><p>(${room.ratingPeople})</p></dt></div>
  <div class="align-right"><button type="button" class="fav but"><span class="material-icons fav-color">favorite_border</span></button></div>
</dl>
</article>`
}
function displayRooms(rooms) /* display rooms on room page */
{
    document.getElementById("rooms").innerHTML = rooms.map(getRoomsAsString).join('\n');
    let seeMore = document.querySelectorAll(".extra-info");
    let favBtn = document.querySelectorAll(".fav-color");

    favBtn.forEach(btn => btn.addEventListener("click", favbtnclick));
    seeMore.forEach(item => item.addEventListener("click", showMore));
}
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
    if(document.location.pathname  == "/"){
        let guestButton = document.getElementById("guest-btn");
        guestButton.addEventListener("click", guestNumber);
    }
    if(document.location.pathname == "/rooms"){
        displayRooms(allrooms);
    }

    let dropMenu = document.getElementById("menu");
    dropMenu.addEventListener("click", menuVisible);
    let searchMenu = document.getElementById("srchicon");
    searchMenu.addEventListener("click", searchVisible);
    
});
