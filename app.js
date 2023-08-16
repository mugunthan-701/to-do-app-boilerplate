var buttn = document.querySelector('#button')
var inp=document.getElementById("input")
var tdl =document.getElementById("todolist")
let arr=[]
buttn.onclick=function(){
 
    arr.push(inp.value)
    inp.value=""
 console.log(arr)
 appendList()
}
// appending data present inside the array which we created 
function appendList(){
    tdl.innerHTML=null
    for(let i=0;i<arr.length;i++){
    //     let newList=document.createElement("li")
    //  newList.innerText=arr[i]
    //     tdl.append(newList)
    // tdl.innerHTML +="<li>" + arr[i] + "</li>"
    tdl.innerHTML +=`<li>${arr[i]} <a onclick="editl(${i})">EdIt</a><a onclick="del(${i})">x |</a></li>`
     }
    
}
function editl(index){
  let task= prompt("enter new task")
  if (task!==null){
    if (task!==""){
        arr[index]=task
        console.log(arr[index])
        appendList()
    }}
}
function del(i){
   arr.splice(i,1)
   appendList() 
}