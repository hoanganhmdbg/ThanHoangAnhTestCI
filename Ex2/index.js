
function merge2String(s1,s2){
    let a = s1.split("");
    let b = s2.split("");
    let result = "";
    if(a.length = b.length){
        for (let i = 0; i < a.length; i++) {
            result += a[i] + b[i];
        }
    }else if(a.length > b.length){
        for (let i = 0; i < a.length; i++) {
            if(i <  b.length){
                result += a[i] + b[i];
            }else{
                result += a[i];
            }
        }
    }else if(a.length < b.length){
        for (let i = 0; i < b.length; i++) {
            if(i <  a.length){
                result += a[i] + b[i];
            }else{
                result += b[i];
            }
        }
    }
    console.log(result);
}
merge2String("abcd","123");
merge2String("abc","12234");
