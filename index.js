/* global $, Typed */

(function () {
    const $canvas = $('#main');
    const $logo = $('#logo');
    const $bgMusic = $('#bg-music');
    // const $story = $('#story');
    // const $storyTitle = $story.find('.story-title');
    // const $storyCnt = $story.find('.story-content');
    const mainCanvas = document.querySelector('#main');
    // const bubbleImg = document.querySelector('#bubble');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const ctx = mainCanvas.getContext('2d');
    const bubbles = window.bubbles;
    const bubbleImg = window.bubbleImg;
    let typeFlag = false;

    $canvas.show();

    const random = (min, max) => {
        return min + (Math.random() * (max - min));
    };

    // const touchBubble = (x, y) => {
    //     bubbles.some((item) => {
    //         if (x >= item.x - item.width && x <= item.x + item.width * 2
    //             && y >= item.y - item.height && y <= item.y + item.height * 2) {
    //             $canvas.css({
    //                 'background': `url(./img/${item.bg}.jpg) center top no-repeat`,
    //                 'background-size': 'cover',
    //                 'transition': 'background .5s',
    //             });
    //             $storyTitle.html(item.title);
    //             $storyCnt.html(item.content);

    //             return true;
    //         }

    //         return false;
    //     });
    // };

    function initBubble() {
        bubbles.forEach((item) => {
            const img = new Image();
            img.src = `./img/${item.bg}.jpg`;
        });
    }

    function initAudio() {
        document.addEventListener('WeixinJSBridgeReady', () => {
            $bgMusic[0].play();
        });

        document.addEventListener('touchstart', () => {
            $bgMusic[0].play();
        });
    }

    function renderStory(bubble) {
        if (typeFlag) {
            return;
        }
        typeFlag = true;

        // 隐藏选择logo
        $logo.hide();

        $canvas.css({
            background: `url(./img/${bubble.bg}.jpg) center top no-repeat`,
            'background-size': 'cover',
            transition: 'background .5s',
        });

        const typed = new Typed('#story', {
            strings: [
                '',
                `<p class="story-title">${bubble.title}</p><p class="story-content">${bubble.content}</p>`,
            ],
            typeSpeed: 100,
            backSpeed: 20,
            showCursor: false,
            onComplete: () => {
                typeFlag = false;
                delete typed;
            },
        });

        $(document).trigger('animation', bubble.id);
    }

    // function bindEvent() {
        // $canvas.on('touchstart', (event) => {
        //     const touch = event.touches[0];

        //     touchBubble(touch.clientX, touch.clientY);
        // });
    // }

    function isOverflow(bubble) {
        if (bubble.y < -bubble.height) {
            bubble.x = random(10, windowWidth - 10 - bubble.height);
            bubble.y = windowHeight + bubble.height;
        } else if (bubble.y < 0 && bubble.y - bubble.vy >= 0) {
            renderStory(bubble);
        }
    }

    function renderBubble() {
        bubbles.forEach((item) => {
            ctx.drawImage(bubbleImg, item.x, item.y, item.width, item.height);
            item.y += item.vy;

            isOverflow(item);
        });
    }

    mainCanvas.width = windowWidth;
    mainCanvas.height = windowHeight;

    initBubble();
    initAudio();
    // bindEvent();

    (function animate() {
        ctx.clearRect(0, 0, windowWidth, windowHeight);

        renderBubble();
        requestAnimationFrame(animate);
    }());
}());
