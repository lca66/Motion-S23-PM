import { gsap } from "gsap";

gsap.to(".nav-bar", {duration:1, y:10});
gsap.to(".hero", {duration:1, x:50, ease:"back.out(4)"});

let mainTl = gsap.timeline({delay:.5});

function navbarAni(){

    let tl = gsap.timeline({delay:.5});
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    tl.to(".nav-bar", {duration:1, y:10})
    .to(".nav-bar", {duration:0.5, rotation:180})
    ;
    });
    return tl;
}

 function heroAni(){

     let tl = gsap.timeline({delay:1});
     let mm = gsap.matchMedia();
    
     mm.add("(max-width:767px)", () =>{
     tl.to(".hero", {duration:1, x:50, ease:"back.out(4)"})
     .to(".hero", {duration:0.5, rotation:180});
     });
     return tl;
    }


    mainTl.add(navbarAni())
.add(heroAni(), 0)

;


// .from("nav-bar"
    
//     )

