console.log("JS script is running!");

var counter = 0;

var count = function(){
    return function(){
        counter += 1;
        return counter;
    }
}();

function show(){
    let show = document.getElementById("show-here");
    let show1 = document.getElementById("show-here1");
    show.innerHTML = "ปุ่มนี้ยังทำไม่เสร็จ มันไร้สาระที่จะกดปุ่มนี้" ;
    count()
    if(counter > 5){
        show1.innerHTML = "<br> คุณกดมามากกว่า 5 ครั้งแล้วนะ";
    }
    if(counter > 20){
        show1.innerHTML = "<br> คุณกดมามากกว่า 20 ครั้งแล้วนะ";
    }
    if(counter > 60){
        show1.innerHTML = "<br> ถ้าคุณไม่มีอะไรทำ คุณสามารถกดต่อไปได้เลย";
    }
    if(counter > 100){
        show1.innerHTML = "<br> Ok";
    }
    if(counter > 109){ 
        window.open("https://notamoniac.github.io/about-me/videos/nggyu.mp4", "_blank");
    }
}
