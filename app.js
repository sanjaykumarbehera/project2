console.log("hello javascript");
let string="";
let buttons = document.querySelectorAll(".buttons");
let ans = document.querySelector(".display");
// console.log(buttons);
// console.dir(buttons);
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        
        console.log(e.target);
        if(e.target.innerHTML == '='){
            if(string == ''){
                ans.innerHTML="";
            }else{
                string=eval(string);
                ans.innerText=string;
                
            }
            
        }else if(e.target.innerHTML == 'AC'){
            string='';
            ans.innerText=string;
        }
        else{
            string = string + e.target.innerHTML;
            // console.log(string);
            ans.innerText=string;
        }
        
    })
})
