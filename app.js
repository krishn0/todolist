let input = document.getElementById('input')
let btn = document.getElementById('button')
let ul = document.getElementById('ul')
let up = null

btn.addEventListener('click',()=>{

if(input.value===''){

alert('input is invalid')
ul.style.display="none"
input.value=''
saveData()  
}
if(btn.innerText=="Edit"){

up.target.previousSibling.innerHTML=input.value
btn.innerText="Add"
input.value=''


saveData()  

}
else {
let li = document.createElement('li')
        li.setAttribute('id',"li")
        ul.appendChild(li)
const p = document.createElement('p')
        p.setAttribute('id','p')
        p.innerHTML = input.value
        input.value=''
        li.appendChild(p)

const b1 = document.createElement('button')
         b1.innerText="Edit"
         b1.setAttribute('id','b1')
           li.appendChild(b1)
const b2 = document.createElement('button')
           b2.innerText="Remove"
           b2.setAttribute('id','b2')
             li.appendChild(b2)
             saveData()  
}
ul.style.display="block"
    })

    ul.addEventListener('click',(e)=>{

        if(e.target.innerText =="Remove"){
        
              e.target.parentElement.remove()
           
              saveData()  
        
        }
      if(e.target.innerText =="Edit"){
    
            input.value= e.target.previousSibling.innerText
            input.focus()
            btn.innerText = "Edit"
            console.log(e.target.Text_Node)
         up = e 
        saveData()  
      }   })
     
    
function saveData(){
    localStorage.setItem('data',ul.innerHTML)
}
function show(){
ul.innerHTML=localStorage.getItem('data')

}
show()