const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function FirstPageAnime(){
    var tl = gsap. timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    }
    )
    .to(".boundingelement",{
        y:0,
        ease: Expo.easeInOut,  
        duration:2,
        stagger:.2,
        delay:-1
        
    })
    .from("#herofooter",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    }
    )
    
}
FirstPageAnime();

function CircleMouseFollower() {
    window.addEventListener("mousemove",function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

    })

}
CircleMouseFollower();

document.querySelectorAll(".element").forEach(function(element){
        var rotate=0;
        var diffrot=0;
        element.addEventListener("mouseleave",function(dets) {
            
            
        gsap.to(element.querySelector ("img"),{
            opacity: 0,
            ease: Power3,
            duration:.5
         


        })
           });
           element.addEventListener("mousemove",function(dets) {
            var diff = dets.clientY - element.getBoundingClientRect().top;
            diffrot= dets.clientX-rotate;
            rotate=dets.clientX;
            gsap.utils.clamp(-20,20, diff);
        gsap.to(element.querySelector ("img"),{
            opacity: 1,
            ease: Power3,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20, diffrot)


        })
           });
});

