let time = 0;
document.getElementById("btn").addEventListener("click", () => {
    let num = document.getElementById("number").value;
    if(time >= 3){
        alert("Quá 3 lần ko đc nhập nữa");
        return;
    }
    if(num <= 10 && num >=1){       
            let a = Math.floor(Math.random() * 10 + 1);
            if(num != a){
                alert(`You wrong! the correct is ${a}`);
            }else{
                alert("Correct!! You get gift ");
            }                  
            time++;
    }else{
        alert('input number from 1 to 10');
    }
})