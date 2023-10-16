// alert("hii");
let temp = document.querySelector("i");
// let tempZero = document.querySelector(".fa-thermometer-empty");
// let tempOne = document.querySelector(".fa-thermometer-quarter");
// let tempTwo = document.querySelector(".fa-thermometer-half");
// let tempThree = document.querySelector(".fa-thermometer-three-quarters");
// let tempFull= document.querySelector(".fa-thermometer-full");

const main_function = (()=>{
    const funcTemp = () =>{
        
        temp.classList.add("fa-thermometer-empty")
        temp.style.color="green"
    
        // setTimeout=(()=>{
        //     temp.classList.remove("fa-thermometer-empty");
            
        // },1000);
    
        // setTimeout=(()=>{
        //     temp.classList.add("fa-thermometer-quarter")
        // },2000);
    
        // setTimeout=(()=>{
        //     temp.innerHTML = "&#xf2c7";
        // },3000);
    
    }
    
    const funcTwo = () => {
        temp.classList.remove("fa-thermometer-empty");
        temp.classList.add("fa-thermometer-quarter");
        temp.style.color="yellow"
    }
    const funcThree = () => {
        temp.classList.remove("fa-thermometer-quarter");
        temp.classList.add("fa-thermometer-half");
        temp.style.color = "orange";
    }
    const funcFour = () => {
        temp.classList.remove("fa-thermometer-half");
        temp.classList.add("fa-thermometer-three-quarters");
        temp.style.color="red"
    }
    const funcFull = () => {
        temp.classList.remove("fa-thermometer-three-quarters");
        temp.classList.add("fa-thermometer-full")
        temp.style.color="maroon"
    }
    
    funcTemp();
    setTimeout(funcTwo,1000); 
    setTimeout(funcThree,2000); 
    setTimeout(funcFour,3000);
    setTimeout(funcFull,4000); 
    
})

main_function()

setInterval(main_function,5000)

