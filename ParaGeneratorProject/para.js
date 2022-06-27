
const input = document.getElementById("noofwords");
const container = document.querySelector(".container");



const generatewords = (no) =>{
    const a = "ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz"; //26+26=52 == 0 - 51
    let word = " ";
    for(let j=0;j<no;j++){
        for(let i=0;i<5;i++){
            let random = (Math.random() * 51).toFixed(0);
            word = word + a[random];
        }
        word = word + "  ";
    }
    
    return word;
}




const para = document.createElement("p");
para.setAttribute("class","paras");

const generateno = () =>{

    para.innerText = generatewords(input.value);
    container.append(para);

}


























































































// const input = document.getElementById("noofwords");
// const container = document.querySelector(".container");



// const generatewords = () =>{
    
// }




// const generateno = () =>{
//     const para = document.createElement("p");
//     para.setAttribute("class","paras");

//     para.innerText = loren*20;

//     container.append(para);

    
// }