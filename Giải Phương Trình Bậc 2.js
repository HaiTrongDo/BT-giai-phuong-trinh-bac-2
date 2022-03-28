
function processing() {
    let a = Number(document.getElementById("a").value)
    console.log(a);
    let b = Number(document.getElementById("b").value)
    console.log(b);
    let c = Number(document.getElementById("c").value)
    console.log(c);
    let result = 0;
    let result2 = 0;

if (a === 0) {
    // result =;
    result = "Đây không phải phương trình bậc 2";
    result2 = "";
} else {
    let denta = b**2 - 4*a*c;
        if (denta < 0) {
            result = "Phương trình vô nghiệm";
            result2 = "";
            }
        else if (denta === 0) {
            result = -b/(2*a);
            result2 = result;
            }
        else if (denta > 0) {
            result = (-b + Math.sqrt(denta))/(2*a)
            result2 = (-b - Math.sqrt(denta))/(2*a)
            }


        }

    document.getElementById("result-el").innerHTML = result;
    document.getElementById("result2-el").innerHTML = result2;
}
