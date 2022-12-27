const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function update(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a="AM";

    if(h>12){
        h = h-12;
        a ="PM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = a;
    setTimeout(()=>{
        update();
    },1000);
}
update();
