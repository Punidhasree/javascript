var popupoverlay= document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.querySelector("#add-popup-id")
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton= document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
// select container,add-book,book-title-input,book-author-input,About-book
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var Aboutbook=document.getElementById("About-book")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>
            ${booktitleinput.value}
        </h2>
        <h5>
            ${bookauthorinput.value}
        </h5>
        <p> ${Aboutbook.value}</p>
        <button onclick="deletebook(event)"> Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}