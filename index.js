/* global $, Typed */

(function () {
    const $canvas = $('#main');
    const $body = $(document.body);
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
    const config = {
        typeFlag: false,
        curLoop: 0,
        curLoopBubble: 0,
        loopLen: bubbles.length,
    };

    $canvas.show();

    // function circleImg (context, img, x, y, r) {
    //     context.save();
    //     const d = 2 * r;
    //     const cx = x + r;
    //     const cy = y + r;
    //     context.arc(cx, cy, r, 0, 2 * Math.PI);
    //     context.clip();
    //     context.drawImage(img, x, y, d, d);
    //     context.restore();
    // }

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

    const random = (min, max) => {
        return min + (Math.random() * (max - min));
    };

    function initBubble() {
        bubbles.forEach((item) => {
            const img = new Image();
            const smallImg = new Image();
            img.src = `./img/story/${item.bg}.jpg`;
            // smallImg.src = `./img/story/min/${item.bg}.jpg`;
            // smallImg.src = `./img/story/${item.bg}.jpg`;
            // smallImg.src = `./img/story/min/20180220.png`;
            smallImg.src = `./img/story/min/${item.bg}.png`;

            item.img = smallImg;
            // img.src = `https://hy-1256742784.cos.ap-guangzhou.myqcloud.com/story/${item.bg}.jpg`;
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
        // 正在打字 或者 当前循环已经播放过该气泡
        if (config.typeFlag || bubble.times !== config.curLoop) {
            return;
        }

        // 一次循环一个气泡只播放一次
        config.typeFlag = true;
        config.curLoopBubble++;
        bubble.times++;

        if (config.curLoopBubble === config.loopLen) {
            config.curLoopBubble = 0;
            config.curLoop++;
        }

        // 隐藏选择logo
        $logo.hide();

        $body.css({
            background: `url(./img/story/${bubble.bg}.jpg) center top no-repeat`,
            // background: `url(https://hy-1256742784.cos.ap-guangzhou.myqcloud.com/story/${bubble.bg}.jpg) center top no-repeat`,
            'background-size': 'cover',
        });

        // 更换场景
        setTimeout(() => {
            $canvas.css({
                // background: `url(https://hy-1256742784.cos.ap-guangzhou.myqcloud.com/story/${bubble.bg}.jpg) center top no-repeat`,
                background: `url(./img/story/${bubble.bg}.jpg) center top no-repeat`,
                'background-size': 'cover',
                transition: 'background 2s',
                opactiy: 1,
            });
        }, 300);

        // 打印故事
        const typed = new Typed('#story', {
            strings: [
                '',
                `<p class="story-title">${bubble.title}</p><p class="story-content">${bubble.content}</p>`,
            ],
            typeSpeed: 100,
            backSpeed: 50,
            showCursor: false,
            onComplete: () => {
                config.typeFlag = false;
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
            // bubble.x = bubble.initialX;
            // bubble.y = bubble.initialY;

            bubble.x = random(10, windowWidth - bubble.width - 10);
            bubble.y = random(windowHeight, (windowHeight * bubbles.length) / 1.5);
            bubble.vy = random(-2.5, -0.5) - ((bubble.y * 1.5) / (windowHeight * bubbles.length));
        } else if (bubble.y < 0 && bubble.y - bubble.vy >= 0) {
            renderStory(bubble);
        }
    }

    function renderBubble() {
        bubbles.forEach((item) => {
            if (item.y <= item.maxY && item.y >= item.minY) {
                // circleImg(ctx, item.img, item.x + (item.width / 2), item.y + (item.width / 2), item.width);

                // const pattern = ctx.createPattern(item.img, 'repeat-y');
                // ctx.save();
                // ctx.beginPath();
                // ctx.arc(item.x + (item.width / 2), item.y + (item.height / 2), item.width / 2 - 12, 0, 2 * Math.PI, false);
                // ctx.fillStyle = pattern;
                // ctx.fill();
                // ctx.restore();

                // ctx.drawImage(item.img, item.x + 10, item.y + 10, item.imgWidth, item.imgHeight);
                ctx.drawImage(item.img, item.x + 8, item.y + 8, item.width - 16, item.height - 16);
                ctx.drawImage(bubbleImg, item.x, item.y, item.width, item.height);
            }
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
