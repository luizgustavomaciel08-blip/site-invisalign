var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true, //marcação de onde cada coisa começa e termina
}})

tl.to("#invisalign",{
    top: "120%",
    left: "0%"
}, 'orange')

