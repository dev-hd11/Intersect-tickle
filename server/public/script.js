document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById("displayScreen");
    const loadingScr = document.getElementById("loading");

    setTimeout(function(){
        const shadow = '0 0 10px cyan, 0 0 10px cyan, 0 0 10px cyan, 0 0 10px cyan';

        loadingScr.classList.add("screen");
        screen.classList = "show";

        const triangle = document.getElementById("tri");
        const textOg = document.getElementById("text");
        const msg = document.getElementById("msg");
        const play = document.getElementById("play-button");
        const gmpl = document.getElementById("gmpl");
        const btn_series = document.getElementById("btn-series");
        const span1 = document.getElementById("icon-span");

        triangle.style.display = 'block';

        const triBorder = getComputedStyle(triangle).borderLeftColor;
        const msgColor = getComputedStyle(msg).color;
        const playBorder = getComputedStyle(msg).borderColor;

        function changePlayButton() {
            triangle.style.borderLeftColor = 'cyan';
            triangle.style.transform = 'rotate(0deg)';

            msg.style.color = 'cyan';

            play.style.borderColor = 'cyan';
            play.style.boxShadow = shadow;
            play.style.cursor = 'pointer';
        }

        function ogPlayButton() {
            triangle.style.borderLeftColor = triBorder;
            triangle.style.transform = 'rotate(90deg)';

            msg.style.color = msgColor;

            play.style.borderColor = playBorder;
            play.style.boxShadow = '';
            play.style.cursor = 'pointer';
        }

        ogPlayButton();

        play.addEventListener('mouseover', changePlayButton);
        play.addEventListener('mouseout', ogPlayButton);

        play.addEventListener('click', function() {
            triangle.style.animation = 'grow 1.5s linear infinite';
        });

        gmpl.addEventListener('click', function() {
            alert("This is not yet created");
        });

        btn_series.addEventListener('mouseover', function() {
            span1.style.display = 'block';
            textOg.style.display = 'none';
            btn_series.style.boxShadow = '0 0 10px rgb(0, 125, 0), 0 0 10px rgb(0, 125, 0), 0 0 10px rgb(0, 125, 0), 0 0 10px rgb(0, 125, 0), 0 0 10px rgb(0, 125, 0), 0 0 10px rgb(0, 125, 0), 0 0 10px rgb(0, 125, 0)';
        });

        btn_series.addEventListener('mouseout', function() {
            span1.style.display = 'none';
            textOg.style.display = 'block';
            btn_series.style.boxShadow = '';
        });
    }, 6000);
});

