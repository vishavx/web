// const item = document.querySelector("#cl")
const todo= document.querySelector("#todo")
const todo2= document.querySelector("#todo2")
function f1(){
    const textinputval = document.getElementById("ft");
    const discinputval = document.getElementById("fd");
    addtodo(textinputval.value,discinputval.value);
    textinputval.value="";
    discinputval.value="";
}
function f2(){ 
    const textinputval = document.getElementById("ft");
    const discinputval = document.getElementById("fd");
    textinputval.value="";
    discinputval.value="";
}
const arr=[];
function addtodo(tinput,dinput){
    
    const mdiv=document.createElement("div")
    mdiv.className="singleinput";
    const ul=document.createElement("ul");
    const listitem1=document.createElement("li");
    listitem1.id="titleid";
    const listitem2=document.createElement("li");

    var span1 = document.createElement("div");
    var txt1 = document.createTextNode("\u00D7");
    span1.className = "close";
    span1.appendChild(txt1);
    span1.addEventListener("click",function(){
        var c1 = this.parentElement;
        var n=c1.id
        c1.remove();
        while(n<arr.length){
            var temp=document.getElementById("n+1");
            temp.id="n";
            arr[n-1]=arr[n];
            n=n+1;
        }
        arr.pop();
        
    })
    
    var span2 = document.createElement("div");
    var txt2 = document.createTextNode("\u270E");
    span2.className = "edit";
    span2.appendChild(txt2);
    span2.addEventListener("click",function(){
    const textinputval2 = document.getElementById("ft");
    const discinputval2 = document.getElementById("fd");
    textinputval2.value=tinput;
    discinputval2.value=dinput;
    var cb = this.parentElement;
    var n2=cb.id
    cb.remove();
    while(n2<arr.length){
        
        var temp2=document.getElementById("n2+1");
        temp2.id="n2";
        arr[n2-1]=arr[n2];
        n2=n2+1;
    }
    arr.pop();
    })

    listitem1.innerHTML=tinput;
    listitem2.innerHTML=dinput;
    ul.appendChild(listitem1);
    ul.appendChild(listitem2); 
    mdiv.appendChild(ul);
    mdiv.appendChild(span2);
    mdiv.appendChild(span1);
    mdiv.id=arr.length+1
    
    if (arr.length<3){
        // alert(arr.length);
        arr.push(mdiv);
        todo.appendChild(mdiv);
          
    }
    else{
        if(arr.length<6){
        arr.push(mdiv);
        todo2.appendChild(mdiv);
        }
        else{
            alert("Task limit exeeded please remove in order to add more");
        }
    }
}