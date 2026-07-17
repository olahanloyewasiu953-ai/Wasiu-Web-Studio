/* ===========================
   SHOPPING CART
=========================== */

let cart = [];

const cartCount = document.getElementById("cart-count");

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

button.addEventListener("click", () => {

const card = button.closest(".food-card");

const foodName = card.querySelector("h3").textContent;

const foodPrice = card.querySelector(".price").textContent;

cart.push({

name: foodName,

price: foodPrice

});

cartCount.textContent = cart.length;

button.innerHTML = "✓ Added";

button.style.background = "#28a745";

setTimeout(() => {

button.innerHTML = "Add To Cart";

button.style.background = "#ff6b00";

},1200);

});

});

/* ===========================
   CART PREVIEW
=========================== */

const cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click", () => {

if(cart.length===0){

alert("🛒 Your cart is empty.");

return;

}

let message="🛒 YOUR CART\n\n";

cart.forEach((item,index)=>{

message+=`${index+1}. ${item.name} - ${item.price}\n`;

});

message+=`\nTotal Items: ${cart.length}`;

alert(message);

});

/* ===========================
   HERO BUTTON
=========================== */

const heroButton=document.querySelector(".primary-btn");

heroButton.addEventListener("click",()=>{

heroButton.innerHTML="Loading Menu...";

setTimeout(()=>{

heroButton.innerHTML="Explore Menu";

},1200);

});

/* ===========================
   DARK MODE
=========================== */

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

}else{

icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");

}

});

/* ===========================
   SEARCH FOOD
=========================== */

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {

const keyword = prompt("🔍 Search for a food item:");

if(!keyword) return;

const cards = document.querySelectorAll(".food-card");

let found = false;

cards.forEach(card => {

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(keyword.toLowerCase())){

card.scrollIntoView({
behavior:"smooth",
block:"center"
});

card.style.boxShadow="0 0 30px #ff6b00";

setTimeout(()=>{

card.style.boxShadow="";

},2500);

found = true;

}

});

if(!found){

alert("❌ No matching food found.");

}

});

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

/* ===========================
   SCROLL TO TOP
=========================== */

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#ff6b00";
topButton.style.color="#fff";
topButton.style.fontSize="20px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ===========================
   WHATSAPP ORDER
=========================== */

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {

e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const address = document.getElementById("address").value.trim();
const food = document.getElementById("food").value;
const quantity = document.getElementById("quantity").value;
const note = document.getElementById("note").value.trim();

if (!name || !phone || !address || !food) {
    alert("Please complete all required fields.");
    return;
}

const message =
`🍽️ *NEW FOOD ORDER*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Address: ${address}

🍕 Food: ${food}

🔢 Quantity: ${quantity}

📝 Note: ${note || "None"}

Thank you!`;

const whatsappNumber = "2349137412166";

const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

alert("Your order has been prepared for WhatsApp.");

orderForm.reset();

document.getElementById("quantity").value = 1;

});

/* ===========================
   CART TOTAL & WHATSAPP UPGRADE
=========================== */

// Update Add to Cart to store numeric prices
cart = [];

document.querySelectorAll(".add-cart").forEach(button => {

button.addEventListener("click", () => {

const card = button.closest(".food-card");

const name = card.querySelector("h3").textContent;

const priceText = card.querySelector(".price").textContent;

const price = Number(priceText.replace(/[₦,]/g,""));

cart.push({
name,
price
});

cartCount.textContent = cart.length;

});

});

// Show cart summary when cart icon is clicked

cartIcon.addEventListener("click", () => {

if(cart.length===0){

alert("Your cart is empty.");

return;

}

let total = 0;

let summary = "🛒 YOUR CART\n\n";

cart.forEach((item,index)=>{

summary += `${index+1}. ${item.name} - ₦${item.price.toLocaleString()}\n`;

total += item.price;

});

summary += `\n---------------------`;

summary += `\nTotal Items: ${cart.length}`;

summary += `\nTotal Price: ₦${total.toLocaleString()}`;

alert(summary);

});

// Send full cart to WhatsApp

orderForm.addEventListener("submit",function(e){

e.preventDefault();

if(cart.length===0){

alert("Please add food to your cart first.");

return;

}

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const address=document.getElementById("address").value;
const note=document.getElementById("note").value;

let total=0;

let orderList="";

cart.forEach(item=>{

orderList += `• ${item.name} - ₦${item.price.toLocaleString()}\n`;

total += item.price;

});

const text=`🍴 *NEW ORDER*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Address: ${address}

🛒 Items:
${orderList}

💰 Total: ₦${total.toLocaleString()}

📝 Note:
${note || "None"}

Thank you!`;

window.open(
`https://wa.me/2349137412166?text=${encodeURIComponent(text)}`,
"_blank"
);

alert("Thank you! Your order has been sent.");

cart=[];

cartCount.textContent="0";

orderForm.reset();

document.getElementById("quantity").value=1;

});

/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load",()=>{

console.log("Elite Bites Restaurant loaded successfully.");

});