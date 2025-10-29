function loadingAnimation() {


    var tl = gsap.timeline()
    tl.from(".page1 ", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })



    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from(".nav-wrapper", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 .smallhead, .page1 .mainhead, .page1 .lasthead , .page1 video", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

}


document.querySelectorAll('.grid-item').forEach(gridItem => {
    const videoContainer = gridItem.querySelector('.video');



    if (videoContainer) {
        const video = videoContainer.querySelector('video');



        if (video) {
            gridItem.addEventListener('mouseenter', function () {
                videoContainer.style.display = 'block';
                video.play().catch(console.error);
            });


            gridItem.addEventListener('mouseleave', function () {
                videoContainer.style.display = 'none';
                video.pause();
                video.currentTime = 0;
            });
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const caseStudyElements = document.querySelectorAll('.casestudyone');


    caseStudyElements.forEach(element => {
        const video = element.querySelector('video');


        if (video) {
            element.addEventListener('mouseenter', function () {
                video.play().catch(e => console.log('Video play failed:', e));
            });


            element.addEventListener('mouseleave', function () {
                video.pause();
                video.currentTime = 0;
            });
        }
    });
});




gsap.from(".page10smallbox li", {
    x: 0,
    duration: 1,


    scrollTrigger: {
        trigger: ".page10smallbox",
        scroller: "body",



        scrub: true
    }
})





loadingAnimation()





gsap.to(".nav-bar", {
 borderBottom: "1px solid grey",
  duration: 0.5,
  height: "70px",
  scrollTrigger: {
    trigger: ".nav-bar",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
