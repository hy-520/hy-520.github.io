
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const random = (min, max) => {
    return min + (Math.random() * (max - min));
};

const bubbles = [{
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2,
    width: 90,
    height: 90,
    id: 'leaf',
    bg: '20180220',
    title: '2018/02/20 梅城东中',
    content: '一大早来到东中，一进校门，熟悉的篮球场上是来不及扫的满地落叶。静静的发呆，等待着我和火火从东中开始的第一次约会。',
    manual: true,
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180220-5',
    title: '2018/02/20 梅城东中',
    content: '很多年没来东中了，这一天，注定是意义非凡的一天。因为2018年2月20日，我和我的火火宝贝在一起了~',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180124',
    title: '2018/01/24 深圳',
    content: '挑选了很久的礼物，看到这个书签的时候瞬间就觉得这礼物再适合不过火火了。第一次包装礼物，花了不少时间却包装的不好看。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180113',
    title: '2018/01/13 香港历史博物馆',
    content: '第一张我们俩个人的合照，谢谢这次只属于我们俩的香港之旅，让我开始来到你的世界。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'leaf',
    bg: '20171119',
    title: '2017/11/19 深圳',
    content: '覔書店，默默地看着你，喜欢却只能埋在心里。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'shuttle',
    bg: '20180113-2',
    title: '2018/01/13 香港太平山顶',
    content: '晚上10点的我们，还在太平山顶，风很大，天气很冷。好想紧紧抱着你。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180124-2',
    title: '2018/01/24 深圳',
    content: '谢谢旅行的青蛙，提供了很多话题，加速了我追你的步伐。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180310-2',
    title: '2018/03/10 深圳',
    content: '第二次约会，很安静的一个上午，和我心爱的宝贝开始我的第一次油画之旅。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180310',
    title: '2018/03/10 深圳',
    content: '静静欣赏自己油画大作的火火最可爱了。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'shuttle',
    bg: '20180330-2',
    title: '2018/03/30 广州',
    content: '14年毕业后再也没有回过学校了，再看到熟悉的校门，还是和心爱的人一起，莫名的感动。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180330',
    title: '2018/03/30 广州',
    content: '谁家的傻宝宝，我要带回家去。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180407',
    title: '2018/04/07 深圳',
    content: '收到了火火定制的手机壳，超级用心。从此有了属于我们独一无二的标志。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180430',
    title: '2018/04/30 梅城',
    content: '玩完密室，看着你傻傻地堆积木。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'default',
    bg: '20180331-2',
    title: '2018/03/31 广州',
    content: '第三次约会，蜡笔小新展，自拍的傻宝贝。',
    times: 0,
}, {
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'leaf',
    bg: 'leaf',
    title: '想象中未来，',
    content: '我们一起，看落叶纷飞。',
    times: 0,
}, {
    x: 240,
    y: windowHeight + 50,
    vx: 3,
    vy: -2,
    width: 70,
    height: 70,
    id: 'shuttle',
    bg: 'sky',
    title: '有一天，',
    content: '我要变成超人带你飞。',
    times: 0,
}, {
    x: 100,
    y: windowHeight + 50,
    vx: 1.5,
    vy: -1.8,
    width: 50,
    height: 50,
    id: 'station',
    bg: 'station',
    title: '宝贝，',
    content: '你就留在这里不要走，我去给你买个橘子。',
    times: 0,
}];

const len = bubbles.length;

bubbles.forEach((item) => {
    if (item.manual) {
        item.initialX = item.x;
        item.initialY = item.y;

        return;
    }

    item.width = random(30, 90);
    item.height = item.width;
    item.x = random(10, windowWidth - item.width - 10);
    item.y = random(windowHeight, (windowHeight * len) / 2);
    item.vy = random(-2.5, -0.5) - ((item.y * 2) / (windowHeight * len));
    item.initialX = item.x;
    item.initialY = item.y;
});

window.bubbles = bubbles;
