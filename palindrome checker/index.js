const input = document.getElementById("input")
function check(){
    const value = input.value;
    let l = 0;
    let r = value.length-1;
    
    console.log(r);
    while(l<r){
        if(value[l] === value[r]){
            l++;
            r--;
        }else{
            alert("not a palindrome");
            return false;
        }
    }
    alert("it is a palindrome");
     input.value=""
    return true;

   
}