$(document).ready(function() {

    // init the controller
    var controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: "onLeave", // could also be a int: 0 - 1, 
            loglevel: 3,
        }
    });

    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $svg = $("path.svg");

    // prepare SVG
    pathPrepare($svg);


    // pinani
    var pinani = new TimelineMax()
        // panel wipe uno
        .add(TweenMax.to("#wipe", 1, {transform: "translateY(0)"}))

        // panel wipe dos
        .add(TweenMax.to("#second-wipe", 1, {transform: "translateY(0)"}))

        // panel slide bounce
        .add(TweenMax.to("#slide", 1, {top: "0%", ease: Bounce.easeOut, delay: 0.2}))

        // panel slide color
        .add([
            TweenMax.to("#slide h3:first-child", 0.2, {autoAlpha: 0}),
            TweenMax.from("#slide h3:last-child", 0.2, {autoAlpha: 0})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "#ff00fb"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "#9d9964"})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "#fffc1d"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "#5d5b3c"})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: ""}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "#302f1f"})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "#ff2317"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "black"})
        ])

        // panel slide translateX
        .add(TweenMax.to("#slide-dos", 1, {transform: "translateX(0)"}))

        // panel unpinned
        .add(TweenMax.from("#unpin", .5, {top: "100%"}))

        // panel unpinned
        .add(TweenMax.from("#drawsvg", .5, {top: "100%"}))

        // draw svg / draw word for 0.9
        .add(TweenMax.to($svg, 0.9, {"stroke-dashoffset": 0, ease:Linear.easeNone}))

        // change color during the whole thing
        .add(TweenMax.to("path", 0.9, {stroke: "#52675d", ease:Linear.easeNone})); 

    // panel section pin
    var scene = new ScrollScene({
            triggerElement: "section#pin",
            duration: 1100,
            loglevel: 3,
        })
        .setTween(pinani)
        .setPin("section#pin")
        .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();

    // get value in console
    var loglevel = controller.loglevel();
    // set a new value
    controller.loglevel(0);

    // get scroll position
    var scrollPos = controller.info("scrollPos");


});     