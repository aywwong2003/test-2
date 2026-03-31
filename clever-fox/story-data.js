/**
 * STORY DATA CONFIGURATION
 * To change the story, simply update the objects in this array.
 * Each object represents one "scene" or "page" in the experience.
 */
const storyData = [
    {
        en: "In the green woods lived Silas, a very smart red fox. While others liked to hunt, Silas liked to watch. He watched the humans and was curious about their tools and the bright 'Red Flower' they called fire.",
        tc: "在翠綠的森林裡，住著聰明的紅狐狸西拉斯。當其他狐狸忙於捕獵時，他卻喜歡觀察。他對人類的工具和那種被稱為火的燦爛「紅花」感到非常好奇。",
        sc: "在翠绿的森林里，住着聪明的红狐狸西拉斯。当其他狐狸忙于捕猎时，他却喜欢观察。他对人类的工具和那种被称为火的灿烂“红花”感到非常好奇。",
        img: "scene1.png", 
        caption: "The Curious Fox"
    },
    {
        en: "One hot day, some hikers left their camp in a rush. They forgot to check their fire. Under the grey ash, a tiny, glowing spark was still alive. Silas saw the spark and knew it was a big mistake.",
        tc: "一個炎熱的日子，幾位徒步旅行者匆忙離開了營地。他們忘記檢查營火。在灰色灰燼下，一顆微小的火星依然跳動著。西拉斯看到了，知道那是個大錯誤。",
        sc: "一个炎热的日子，几位徒步旅行者匆忙离开了营地。他们忘记检查营火。在灰色灰烬下，一个微小的火星依然跳动着。西拉斯看到了，知道那是个大错误。",
        img: "scene2.png", 
        caption: "The Mistake"
    },
    {
        en: "A dry leaf blew into the fire and caught flame. Soon, the small fire started to grow, heading straight for the Great Cedar, the oldest tree in the forest. Silas had to think of a plan fast.",
        tc: "一片枯葉吹進火中被點燃了。很快，小火開始擴散，衝向森林中最古老的大雪松。西拉斯必須快速想出一個計劃。",
        sc: "一片枯叶吹进火中被点燃了。很快，小火开始扩散，冲向森林中最古老的大雪松。西拉斯必须快速想出一个计划。",
        img: "scene3.png", 
        caption: "The Danger"
    },
    {
        en: "He ran to the dry creek. Deep under the dust was wet, heavy mud. Silas used his paws to dig up the cool clay. He found an old cloth the humans had left behind and covered it with the thick mud.",
        tc: "他跑向乾涸的小溪。塵土深處有濕重的淤泥。西拉斯挖出涼爽的黏土，找出一塊人類留下的舊布，並在上面塗滿了厚厚的泥土。",
        sc: "他跑向干涸的小溪。尘土深处有湿重的淤泥。西拉斯挖出凉爽的黏土，找出一个人类留下的旧布，并在上面涂满了厚厚的泥土。",
        img: "scene4.png", 
        caption: "The Muddy Plan"
    },
    {
        en: "With all his strength, Silas dragged the heavy mud-blanket to the fire. He flipped it right onto the heart of the flames. The fire hissed and died out as the mud smothered the heat. He kept working until the ground was cool.",
        tc: "西拉斯用盡全身力氣，將沉重的泥毯拖向火場。他猛地將它蓋在火源核心。泥土壓熄了熱氣，火焰發出嘶嘶聲並熄滅了。他一直工作到地面變涼為止。",
        sc: "西拉斯用尽全身力气，将沉重的泥毯拖向火场。他猛地将它盖在火源核心。泥土压熄了热气，火焰发出嘶嘶声并熄灭了。他一直工作到地面变凉为止。",
        img: "scene5.png", 
        caption: "Stopping the Fire"
    },
    {
        en: "By morning, the Great Cedar was safe. Silas was tired but happy. He saved the forest not by being the strongest, but by being the smartest. He was the hero of the Whispering Woods.",
        tc: "到了早晨，大雪松安全了。西拉斯雖然評倦卻很開心。他拯救森林不是靠蠻力，而是靠智慧。他是低語森林的英雄。",
        sc: "到了早晨，大雪松安全了。西拉斯虽然疲倦却很开心。他拯救森林不是靠蛮力，而是靠智慧。他是低语森林的英雄。",
        img: "scene6.png", 
        caption: "The Forest Hero"
    }
];

// Export for potential module usage, though we'll use a global script tag for simplicity in the HTML
if (typeof module !== 'undefined') {
    module.exports = storyData;
}