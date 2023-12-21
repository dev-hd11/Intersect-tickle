document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById("displayScreen");
    const loadingScr = document.getElementById("loading");

    setTimeout(function(){

        const shadow = '0 0 10px cyan, 0 0 10px cyan, 0 0 10px cyan, 0 0 10px cyan';

        loadingScr.classList.add("screen");
        screen.classList = "show";

        const triangle = document.getElementById("tri");
        const msg = document.getElementById("msg");
        const play = document.getElementById("play-button");
        const gmpl = document.getElementById("gmpl");

        triangle.style.display = 'block';

        const triBorder = getComputedStyle(triangle).borderBottomColor;
        const msgColor = getComputedStyle(msg).color;
        const playBorder = getComputedStyle(msg).borderColor;

        function changePlayButton() {
            triangle.style.borderBottomColor = 'cyan';
            triangle.style.transform = 'rotate(90deg)';

            msg.style.color = 'cyan';

            play.style.borderColor = 'cyan';
            play.style.boxShadow = shadow;
            play.style.cursor = 'pointer';
        }

        function ogPlayButton() {
            triangle.style.borderBottomColor = triBorder;
            triangle.style.transform = 'rotate(0deg)';

            msg.style.color = msgColor;

            play.style.borderColor = playBorder;
            play.style.boxShadow = '';
            play.style.cursor = 'pointer';
        }

        play.addEventListener('mouseover', changePlayButton);
        play.addEventListener('mouseout', ogPlayButton);

        play.addEventListener('click', function() {
            play.style.boxShadow = '';
            setTimeout(function() {
                play.style.boxShadow = shadow;
            }, 250);
        });

        gmpl.addEventListener('click', function() {
            alert("This is not yet created");
        });

    }, 6000);
});

