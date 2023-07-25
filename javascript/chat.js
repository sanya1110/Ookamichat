const form = document.querySelector(".typing-area"),
incoming_id = form.querySelector(".incoming_id").value,
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");


inputField.focus();
inputField.onkeyup = ()=>{
    if(inputField.value != ""){
        sendBtn.classList.add("active");
    }else{
        sendBtn.classList.remove("active");
    }
}

sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              inputField.value = "";
              scrollToBottom();
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}

chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(() =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
            let data = xhr.response;
            chatBox.innerHTML = data;
            if(!chatBox.classList.contains("active")){
                scrollToBottom();
              }
          }
      }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("incoming_id="+incoming_id);
}, 500);

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
  }

// Get the button element
const changeColorButton = document.getElementById("changeColorButton");

// Define an array of colors
const colors = ["javascript/bg/a.png", "javascript/bg/b.png",  "javascript/bg/c.png", "javascript/bg/d.png",  "javascript/bg/e.png"];


// Variable to keep track of the current color index
let currentColorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
  // Get the next color from the array
  const nextColor = colors[currentColorIndex];

  // Apply the color to the background
  document.body.style.backgroundImage = `url('${nextColor}')`;


  // Increment the color index (loop back to the start if it exceeds the array length)
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add click event listener to the button
changeColorButton.addEventListener("click", changeBackgroundColor);

form.onsubmit = (e)=>{
    e.preventDefault();
}

  