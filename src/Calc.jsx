

function add(a,b)
{
    let sum=a+b;
    return sum;  
}
function sub(a,b){
    let diff=a-b;
    return diff;
}
function mul(a,b){
    let pro=a*b;
    return pro;
}
function div(a,b){
    let division=a/b;
    division=division.toFixed(1);
    return division;
}
export default add;
export {sub,mul,div};