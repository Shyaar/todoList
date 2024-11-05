let completed = [];
let unCompleted = [];

let totalNum = document.querySelector("#totalNum");
let completeNum = document.querySelector("#completeNum");
let unCompleteNum = document.querySelector("#unCompleteNum");

let list = document.querySelector("#listItems");
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let li;

// input.addEventListener('input', () => {
//   console.log(input.value);
// });

btn.addEventListener("click", ()=>{
    const value = input.value
    console.log(value)

    if(input.value === ""){
        return alert("You need to write a Schedule")
    }else{
      list.innerHTML += `<li class="listItem bg-slate-200 p-3 rounded shadow-md h-auto my-3"> <input class="checkbox mr-3" type="checkbox" name="" id="checkbox">${value} </li>`;


      li = document.querySelector(".listItem");
      
      unCompleted.push(input.value);
      console.log(unCompleted)
      console.log(unCompleted.length)
      input.value = "";
    }

    li.addEventListener("click", () => {
        console.log("clicked");
        checkTodo();
    });
    unCompleteNum.innerHTML = unCompleted.length;
})

function checkTodo(){
    console.log("click")
    if (checkbox.checked == false){
        checkbox.checked = true
        li.style.textDecoration = "line-through";
        completed.push(li)
        console.log(completed)
    }else{
        checkbox.checked = false
        li.style.textDecoration = "none";
        completed.pop(li);
        console.log(completed);

    }

    totalNum.innerHTML = completed.length + unCompleted.length;
    completeNum.innerHTML = completed.length;

}


