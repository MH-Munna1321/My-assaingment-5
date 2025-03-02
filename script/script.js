document.getElementById("discover-btn").addEventListener("click", function(){
    window.location.href = ("../blogs.html")
})
let colors = ["red", "blue", "green", "purple", "orange"];
    let index = 0;
document.getElementById("colorChange-btn").addEventListener("click", function(event){
    document.body.style.backgroundColor = colors[index];
        index++;
    if (index >= colors.length) {
      index = 0; // 
    }
  });



// const completeButton = document.querySelectorAll(".complete-btn");
// let clickCount = 0;
// for(const btn of completeButton){
//     btn.addEventListener("click",function(event){
      
//         const headValue = getInnerText("head-value");
//         const taskValue = getInnerText("task-value")
//         const completeNumber = 1;
    
//         const HeadResult = headValue + completeNumber;
//         const taskResult = taskValue - completeNumber
//         document.getElementById("head-value").innerText = HeadResult;
//         document.getElementById("task-value").innerText = taskResult;
//         event.target.disabled = true;
//         alert("Board updated Successful")
//         clickCount++;
//         if(clickCount === completeButton.length){
//             alert("Congrats")
//         }
//         const currentTime = new Date();
//         const hours = currentTime.getHours();
//         const minutes = currentTime.getMinutes();
//            const container = document.getElementById("history-container");
//         const p = document.createElement("p");
//         p.innerText = ` You have Complete The Task  ${hours}: ${minutes}`
//         container.appendChild(p)
      
        
//     })
// }

// activity section

// date
const cDate = new Date();
document.getElementById("set-date").innerText = cDate.toDateString();

