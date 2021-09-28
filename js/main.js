//set the screen size
$('#Layer_x5F_1').attr('viewBox', '2140 4500 1270 1024');

$('#launch').click(() => {
    $('#launch').addClass('pressed');
    setTimeout(show_sputnick,38000)
    timer();
});

//function to show satellite after rocket breaking 
function show_sputnick(){
    sputnick = document.getElementById("sputnik-main")
    sputnick.style.display = "block";
    // setTimeout(increaseSize,2000);
}

// function increaseSize(){
//     var a = document.getElementById("sputnik-main");
//     a.style.width = "10rem";
// }

earthTlm = new gsap.timeline();
rocketTlm = new gsap.timeline();
cloudsTlm = new gsap.timeline({repeat: -1, yoyo: true});
jwtTlm = new gsap.timeline();

cloudsTlm.set('#flames', {
    scaleY: 0
}).to('#clouds > *', {
    x: 'random(-300, 300)',
    duration: 'random(15, 30)'
}, 0);

earthTlm.set('#earthSmall', {
    y: 400
}, 0)

//function for timer showing in the screen
function timer() {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let countDown = new Date(new Date().getTime()+11000).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
            
  
          document.getElementById("days").innerText = Math.floor(distance / (day))+":",
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))+":",
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))+":",
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
           
            launch();
            
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            countdown.style.display = "none";
            content.style.display = "block";
            
            clearInterval(x);
          }
        }, 0)
    }


function launch() {
    rocketTlm
        .to('#smokeSmallLeft_1_ > *', {
            stagger: 0.2,
            y: 100,
            opacity: 0
        })
        .to('#smokeSmallRight > *', {
            stagger: 0.2,
            y: 100,
            opacity: 0
        }, 0)
        .to('#bigSmokes_2_ > *', {
            scale: 100,
            opacity: 0,
            duration: 10,
            stagger: 0.5,
            transformOrigin: "50% 50%"
        }, 4)
        .to('#biggestsmoke', {
            duration: 10,
            scale: 30,
            transformOrigin: "50% 100%",
        }, 2)
        .to('#flames', {
            scaleY: 0.7,
            duration: 20
        }, 3)
        .to('#flames > g:not(#centerFlame)', {
            scaleY: 0
        })
        .to('#rocket-left', {
            x: -700,
            y: 700,
            duration: 10,
            rotate: -90,
            transformOrigin: "50% 50%"
        }, 24)
        .to('#rocket-right', {
            x: 700,
            y: 700,
            duration: 10,
            rotate: 90,
            transformOrigin: "50% 50%"
        }, 24)
        .to(['#rocket-left','#rocket-right'], {
            opacity: 0,
            duration: 0
        }, 31)
        .to('#biggestsmoke > *', {
            x: 'random(-10,10)',
            y: 'random(-10,10)',
            scale: 'random(0.5, 1.5)',
            transformOrigin: "50% 0%",
            opacity: 0,
            duration: 6
        }, 3)
        .to('#rocket', {
            y: 2,
            yoyo: true,
            repeat: 600,
            duration: 0.03
        }, 0)
    earthTlm
        .to(['#earth','#skybox','#bigOldCloud'], {
            y: 2000,
            duration: 20,
            ease: "power1.in"
        },3)
        .to('#stars', {
            y: 500,
            duration: 30
        },17 )
        .to('#space', {
            fill: '#161616',
            duration: 5
        }, 17)
        .to('#stars', {
            opacity: 1,
            duration: 5
        }, 17)
        .to('#rocket', {
            rotate: 45,
            duration: 20,
            y: 450,
            x: 550,
            scale: 0,
            transformOrigin: "50% 50%",
            ease: 'power1.inOut'
        },24)
        .to('#head > g:first-child', {
            x: 2000,
            rotate: 360,
            duration: 30,
            y: 2000
        }, 26)
        .to('#head > g:last-child', {
            x: -2000,
            duration: 30,
            rotate: -360,
            y: 2000,
        }, 26)
        .to('#earthSmall', {
            y: 0,
            duration: 30
        }, 26)
        .to('#JamesWebb', {
            x: 20,
            duration: 3
        }, 25)
        .to('#jw-protector', {
            scale: 1,
            transformOrigin: "50% 50%",
            duration: 4
        }, 28)
        .to('#jw-left-gold', {
            x: 0,
            duration: 2
        }, 33)
        .to('#jw-right-gold', {
            x: 0,
            duration: 2
        }, 33)
        .to('#jw-blackBase', {
            scaleX: 1,
            transformOrigin: "50% 50%"
        }, 33)
        .to('#jw-prop', {
            scaleX: 1,
            x: 0,
            transformOrigin: "0% 50%",
            duration: 2
        }, 29)
        .to('#JamesWebb', {
            scale: 4,
            y: 100,
            transformOrigin: "50% 50%",
            duration: 15,
            ease: 'power1.inOut'
        }, 25);
}


hoverTlm = new gsap.timeline();

hoverTlm.to('#JamesWebb',{
    y: '+=50',
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
}, 40);
