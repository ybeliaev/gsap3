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
// stagger: 0.5 - 0.5 seconds between when each  element starts animating
//  Basically autoAlpha will animate opacity from 1 to 0 then set the visibility property to hidden. When you animate autoAlpha to 0. autoAlpha will set visibility hidden to visible then animate opacity from 0 to 1 (or whatever value you set it to.)
    function navNavigation(direction){
        // direction - св-во объекта ScrollTrigger. =1 когда скролл вниз и запуск анимации, = -1 вверх 
        console.log(direction);
        let scrollingDown = direction === 1; // true or false
        return gsap.to(mainNavLinks, {
            duration: 1, 
            stagger: 0.5, 
            autoAlpha: () => scrollingDown ? 0 : 1 , 
            y: () => scrollingDown ? 20 : 0,
        })
    }

    // code on 138 app.css
    ScrollTrigger.create({ // ScrollTrigger - Animate anything on scroll
        start: 100, //  starting scroll position (numeric, in pixels) from top
        toggleClass: {
            targets: "body", // на body вешается\убирается класс has-scrolled
            className: "has-scrolled"
        },
        
        onEnter: ({direction})=>navNavigation(direction), // запуск пропадания меню
        onLeaveBack: ({direction})=>navNavigation(direction),
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
