
const windowHeight = window.innerHeight;

const bubbles = [{
    x: 50,
    y: windowHeight + 50,
    vx: 3,
    vy: -2.5,
    width: 90,
    height: 90,
    id: 'leaf',
    bg: 'leaf',
    title: '2018/05/10 梅州',
    content: '我们一起，看落叶纷飞。',
}, {
    x: 240,
    y: windowHeight + 50,
    vx: 3,
    vy: -2,
    width: 70,
    height: 70,
    id: 'shuttle',
    bg: 'sky',
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
    bg: 'station',
    title: '2016/05/01 广州',
    content: '你就留在这里不要走，我去给你买个橘子。',
}];

window.bubbles = bubbles;
