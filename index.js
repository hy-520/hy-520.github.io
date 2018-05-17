/******************************************
 *  Author : Author   
 *  Created On : Sun May 13 2018
 *  File : index.js
 *******************************************/
window.onload = () => {
    const $canvas = $('#main');    
    const $story = $('#story');
    const $storyTitle = $story.find('.story-title');
    const $storyCnt = $story.find('.story-content');
    const canvas = document.querySelector('#main');
    const bubbleImg = document.querySelector('#bubble');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const bubbles = [{
        x: 50,
        y: windowHeight + 50,
        vx: 3,
        vy: -2.5,
        width: 90,
        height: 90,
        // id: 'default',
        id: 'leaf',
        title: '2018/05/10 梅州',
        content: '我们一起，看落叶纷飞。',
    }, {
        x: 240,
        y: windowHeight + 50,
        vx: 3,
        vy: -2,
        width: 70,
        height: 70,
        id: 'sky',
        title: '2013/12/10 深圳',
        content: '我要变成超人带你飞。',
    }, {
        x: 100,
        y: windowHeight + 50,
        vx: 1.5,
        vy: -1.8,
        width: 50,
        height: 50,
        id: 'station',
        title: '2016/05/01 广州',
        content: '你就留在这里不要走，我去给你买个橘子。',
    }];
    const G = 9.8 / 100;
    let typeFlag = false;

    // const isOverflow = (bubble) => {
    //     const width = bubble.width || 50;
    //     const height = bubble.height || 50;

    //     if (bubble.x + bubble.width >= windowWidth || bubble.x <= 0) {
    //         // bubble.x = windowWidth;
    //         bubble.vx = -bubble.vx;
    //     }

    //     if (bubble.x <= 0) {
    //         // bubble.x = windowWidth;
    //         bubble.vx = -bubble.vx;
    //     }

    //     if (bubble.y + bubble.height >= windowHeight || bubble.y <= 0) {
    //         bubble.vy = -bubble.vy;
    //     } 
    // }

    const random = (min, max) => {
        return min + Math.random() * (max - min);
    };

    const isOverflow = (bubble) => {
        if (bubble.y < -bubble.height) {
            bubble.x = random(10, windowWidth - 10 - bubble.height);
            bubble.y = windowHeight + bubble.height;
        } else if (bubble.y < 0 && bubble.y - bubble.vy >= 0) {
            renderStory(bubble);
        }
        // else if (bubble.y + 10 > windowHeight && bubble.y < windowHeight) {
        //     renderStory(bubble);
        // }
    };

    const touchBubble = (x, y) => {
        bubbles.some((item) => {
            if (x >= item.x - item.width && x <= item.x + item.width * 2
                && y >= item.y - item.height && y <= item.y + item.height * 2) {
                $canvas.css({
                    'background': `url(./img/${item.id}.jpg) center top no-repeat`,
                    'background-size': 'cover',
                    'transition': 'background .5s',
                }); 
                $storyTitle.html(item.title);
                $storyCnt.html(item.content);

                return true;
            }

            return false;
        });
    };

    function initBubble() {
        bubbles.forEach((item) => {
            const img = new Image;
            img.src = `./img/${item.id}.jpg`;
        });
    }

    function renderBubble() {
        bubbles.forEach((item) => {
            ctx.drawImage(bubbleImg, item.x, item.y, item.width, item.height);

            // item.v += G;
            // item.y += item.v;

            // item.x = item.x + item.vx;
            item.y = item.y + item.vy;

            isOverflow(item);
        });
    }

    function renderStory(bubble) {
        if (typeFlag) {
            return; 
        }
        typeFlag = true;

        $canvas.css({
            'background': `url(./img/${bubble.id}.jpg) center top no-repeat`,
            'background-size': 'cover',
            'transition': 'background .5s',
        }); 

        // $storyTitle.html(bubble.title);
        // $storyCnt.html(bubble.content);   
        
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
            }
        });

        if (bubble.id === 'leaf') {
            $(document).trigger('leaf-start');
            $(document).trigger('shuttle-stop');

            // $(document).trigger('shuttle-start');
            // $(document).trigger('leaf-stop');
        } else if (bubble.id === 'sky') {
            $(document).trigger('shuttle-start');
            $(document).trigger('leaf-stop');
        } else {
            $(document).trigger('leaf-stop');
            $(document).trigger('shuttle-stop');

            // $(document).trigger('shuttle-start');
            // $(document).trigger('leaf-stop');
        }
    }

    function bindEvent() {
        $canvas.on('touchstart', function(event) {
            const touch = event.touches[0]

            touchBubble(touch.clientX, touch.clientY);
        });
    }

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    initBubble();
    bindEvent();


    // const typed = new Typed('.story-title', {
    //     strings: ['', '测试测试'], //输入内容, 支持html标签
    //     typeSpeed: 200, //打字速度
    //     backSpeed: 100 //回退速度
    // });

    (function animate() {
        ctx.clearRect(0, 0, windowWidth, windowHeight);

        renderBubble();
        requestAnimationFrame(animate);
    })();
}
