let para = document.getElementById('fir')

let count = 0;

function incr(){
    if(count>=0){

        count++;
        para.textContent=count;
    }else{
        alert('zero');
    }
}
function decr(){
    if(count>0){
        
                count--;
                para.textContent=count;
            }else{
        alert("you are doing wrong")

    }
}
function reset(){
    count=0;
    para.textContent=count;

}