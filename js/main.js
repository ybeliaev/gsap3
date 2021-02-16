gsap.registerPlugin(ScrollTrigger);

function initNavigation(){
    const mainNavLinks = gsap.utils.toArray(".main-nav a")
    mainNavLinks.forEach(link => {
        link.addEventListener("mouseleave", () => {
            // add class
            link.classList.add("animate-out")
            // remove class
            setTimeout(()=>{
                link.classList.remove("animate-out")
            }, 300)
        })
    })
    // code on 138 app.css
    ScrollTrigger.create({
        start: 100,
        toggleClass: {
            targets: "body", // на body вешается\убирается класс has-scrolled
            className: "has-scrolled"
        },
        markers: true
    })

}

function init(){
    
    // start here
    initNavigation()

}

window.addEventListener('load', function(){
    init();
});
