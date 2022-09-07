const cnv = document.querySelector('#canvas');
const btn = document.querySelector('.btn');

//unable to implement both random colors and darkening after 10 passes..
//leaving it for some other time

//create squares and add hover effect
function grid(){
   
    
    //mr == mreja (net in BG)
    const mr = document.createElement('div');   
    cnv.appendChild(mr);
    mr.classList.add('gri');

    
    mr.addEventListener('mouseover',()=>{
        cv = color();
    mr.style.backgroundColor = `rgb(${cv[0]},${cv[1]},${cv[2]})`;
   //after 10 passes square turns black
    // for(i=0;i<cv.length;i++){
    //     //getting the highest value in the array 
    //     mx = Math.max(...cv);

    //     cv[i] = cv[i] - (mx/3);
    // } 
    }, {once:true});
    

    mr.style.border = "1px solid black"

    //misc..
    lent = document.querySelectorAll('.gri').length;
   
   
    mr.style.height  = `${960/n}px`;
    mr.style.width  = `${960/n}px`;



   
}

//generating random colors 
function color(){
    
    let r = Math.floor(Math.random()*255) +1;
    let g = Math.floor(Math.random()*255) +1;
    let b = Math.floor(Math.random()*255) +1;
    
    return [r,g,b];
    
}

btn.addEventListener('click',()=>{ 
    //clearing the canvas
    //rm == remove
    rm =document.querySelectorAll('.gri');
    for(let k=0;k<rm.length;k++){
        rm[k].remove();
    }
    //getting user input and restricting it to 100
    n= prompt("kolko");
    if(n>100){
        alert("100 is max");
         n=100;
        }
    else if(n<1){
        alert("1 is min");
        n=1;
    }
    //building the grid 
     for(j=0;j<n;j++){
        
        for(i=0;i<n;i++){
          grid()
         }
        }
 
    // cnv.style.height = `${n*10}px`;
    // cnv.style.width = `${n*10}px`;
    console.log(`broi n ${n}`);
   

  
    
}
);

