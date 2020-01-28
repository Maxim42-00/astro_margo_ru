"use strict"


function load()
{
console.log("load");
    setTimeout(window.scrollTo, 10, 0, 0);
    setTimeout(function(){loaded=true;}, 10, 0, 0);
}
window.addEventListener("load", load);

let side_menu_done=false;
$("#openMenu").click(function()
{
    if(!side_menu_done)
    {
        let side_menu=$("<div>");
        side_menu.attr("id", "side_menu");
        $("#s1").append(side_menu);
        let mas_div=[];
        for(let i=0;i<4;i++)
        {
            mas_div[i]=$("<div>");
            mas_div[i].addClass("side_menu_div");
            side_menu.append(mas_div[i]);
            mas_div[i].html( $("nav .goto").eq(i).html() );
        }
        let book_now=$("<div>");
        book_now.addClass("book_now");
        book_now.html("BOOK NOW");
        side_menu.append(book_now);
        side_menu_done=true;
        side_menu.css("left", "-200px");
    }

    if($("#side_menu").css("left")=="-200px")
        $("#side_menu").css("left", "0");
    else
        $("#side_menu").css("left", "-200px");
});


for(let i=0; i<document.querySelectorAll("#rest_menu_header>div").length; i++)
    document.querySelectorAll("#rest_menu_header>div")[i].addEventListener("click", function(event){rest_menu_fill_content(event.target.innerHTML)});

rest_menu_fill_content("MAINS");

async function rest_menu_fill_content(option)
{
    if(option=="MAINS")
    {
        $("#rest_menu_header>div").removeClass("clicked");
        $("#rest_menu_header>div").eq(0).addClass("clicked");
    }
    if(option=="DESSERTS")
    {
        $("#rest_menu_header>div").removeClass("clicked");
        $("#rest_menu_header>div").eq(1).addClass("clicked");
    }
    if(option=="DRINKS")
    {
        $("#rest_menu_header>div").removeClass("clicked");
        $("#rest_menu_header>div").eq(2).addClass("clicked");
    }
    $("#rest_menu_body").addClass("hide");
    let promise1 = new Promise((resolve, reject) => {setTimeout( () => resolve(1), 1000 )});
    await promise1;
    $("#rest_menu_body").removeClass("hide");
    document.querySelector("#rest_menu_body").innerHTML="";
    if(option=="MAINS")
    {
        rest_menu_fill_item("$25.89",
                            "Osso Buco", 
                            "Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce. Meltingly tender, this is both hearty and luxurious."
                           );
        rest_menu_fill_item("$16.89", 
                            "Pappardelle Mimmo", 
                            "This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate."
                           );
        rest_menu_fill_item("$17.89",
                            "Trippa Satriano", 
                            "Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!"
                           );
        rest_menu_fill_item("$18.89",
                            "Filetto Di Manzo", 
                            "Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce."
                           );
    }
    if(option=="DESSERTS")
    {
        rest_menu_fill_item("$20.89", 
                            "Tiramisu",
                            "A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults."
                           );
        rest_menu_fill_item("$6.89",
                            "Cannoli",
                            "Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available."
                           );
        rest_menu_fill_item("$5.89",
                            "Pistachio Passion",
                            "Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust."
                           );
        rest_menu_fill_item("$4.89",
                            "Chocolate-and-Pistachio Biscotti",
                            "At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor."
                           );
    }
    if(option=="DRINKS")
    {
        rest_menu_fill_item("$10.89", 
                            "Aperol Spritz",
                            "The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!"
                           );
        rest_menu_fill_item("$9.89",
                            "Negroni",
                            "Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail."
                           );
        rest_menu_fill_item("$11.89",
                            "Negroni Sbagliato",
                            "A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality."
                           );
        rest_menu_fill_item("$8.89",
                            "White Peach Bellini",
                            "White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto."
                           );
    }
}

function rest_menu_fill_item(price_val, name_val, description_val)
{
    let price=document.createElement("div");
    price.innerHTML=price_val;
    let name=document.createElement("div");
    name.innerHTML=name_val;
    let description=document.createElement("div");
    description.innerHTML=description_val;
    let new_item=document.createElement("div");
    document.querySelector("#rest_menu_body").append(new_item);
    new_item.append(price);
    new_item.append(name);
    new_item.append(description);
}


$(".goto").click(() => {
    console.log($(this).index());
    let index=$(this).index();
    $("html").animate({
        scrollTop: $(".screen").eq(index+1).offset().top
    }, 2000);
});


let loaded=false;
window.onscroll=f_scroll;
function f_scroll()
{
    let scrll = window.pageYOffset;
    if(scrll>0)
        $(".subheader").attr("id", "scrollheader");
    else
        $(".subheader").attr("id", "topheader");
    let wndHeight = document.documentElement.clientHeight;
    let scrllBottom=window.pageYOffset+wndHeight;
    if(loaded)
    {
        let left_img=document.getElementsByClassName("_left_img");
        let right_img=document.getElementsByClassName("_right_img");
        let upper_img=document.getElementsByClassName("_upper_img");
        let down_img=document.getElementsByClassName("_down_img");
        for(let i=0;i<left_img.length;i++)
        {
            if(wndHeight-left_img[i].getBoundingClientRect().y>150)  // getBoundingClientRect().y - расстояние от верха окна до элмиента, меняется с прокруткой 
            {
                $(left_img[i]).addClass("left_img");             //left_img[i].classList.add("left_img");
                $(left_img[i]).removeClass("_left_img");             //left_img[i].classList.remove("_left_img");
            }
        }
        for(let i=0;i<right_img.length;i++)
        {
            if(wndHeight-right_img[i].getBoundingClientRect().y>150)
            {
                right_img[i].classList.add("right_img");
                right_img[i].classList.remove("_right_img");
            }
        }
        for(let i=0;i<upper_img.length;i++)
        {
            if(wndHeight-upper_img[i].getBoundingClientRect().y>150)
            {
                upper_img[i].classList.add("upper_img");
                upper_img[i].classList.remove("_upper_img");
            }
        }
        for(let i=0;i<down_img.length;i++)
        {
            if(wndHeight-down_img[i].getBoundingClientRect().y>150)
            {
                down_img[i].classList.add("down_img");
                down_img[i].classList.remove("_down_img");
            }
        }
    }
}

let sol_x1=640;
let sol_y1=429;

let sol_x2=960;
let sol_y2=429;

let wndWidth = document.documentElement.clientWidth;
let div_width1=wndWidth/3;
let div_height1=div_width1/sol_x1*sol_y1;

let div_width2=wndWidth/2;
let div_height2=div_width2/sol_x2*sol_y2;

$(".b0").css("width", div_width1);
$(".b0").css("height", div_height1);
$(".a0").css("width", div_width1);
$(".a0").css("height", div_height1);

$(".b1").css("width", div_width2);
$(".b1").css("height", div_height2);
$(".a1").css("width", div_width2);
$(".a1").css("height", div_height2);

$("#gallery").css("width", parseFloat($(".a0").css("width"))*3);

window.addEventListener("resize", (event) => {
    wndWidth = document.documentElement.clientWidth;
    let img_width1=wndWidth/3;
    let img_height1=img_width1/sol_x1*sol_y1;
    $(".a0").css("width", img_width1);
    $(".a0").css("height", img_height1);

    let img_width2=wndWidth/2;
    let img_height2=img_width2/sol_x2*sol_y2;
    $(".a1").css("width", img_width2);
    $(".a1").css("height", img_height2);

    $("#s5").css("transition-duration", "0s");
    $("#s5").css("height", $(".a1").offset().top + parseFloat($(".a1").css("height")) - $(".a0").offset().top);

    resizeEnd();
    
}, false);

window.addEventListener("resizeEnd", (event) => {
    console.log("STOP RESIZE");
    let newWndWidth = document.documentElement.clientWidth;
    let div_width1=newWndWidth/3;
    let div_height1=div_width1/sol_x1*sol_y1;
    $(".b0").css("width", div_width1);
    $(".b0").css("height", div_height1);

    let div_width2=newWndWidth/2;
    let div_height2=div_width2/sol_x2*sol_y2;
    $(".b1").css("width", div_width2);
    $(".b1").css("height", div_height2);

    $("#gallery").css("width", newWndWidth);
    if(newWndWidth>wndWidth)
    {
        $("#s5").css("transition-duration", "0s");
    }
    else
    {
        $("#s5").css("transition-duration", "1s");
    }
    $("#s5").css("height", div_height1 + div_height2);
    
}, false);

function resizeEnd()
{
    let wndWidth_now = document.documentElement.clientWidth;
    let wndWidth_then;
    setTimeout( () => {
        wndWidth_then = document.documentElement.clientWidth;
        if(wndWidth_now === wndWidth_then)
        {
            let event=new Event("resizeEnd", {bubbles: true});
            document.dispatchEvent(event);
        }
        return false;
    }, 1000);
}