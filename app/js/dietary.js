const page = document.querySelector('.dietary__pagination');
const img_d = document.querySelector('.dietary__image');
let list = document.getElementById("myList");
data = [
    {"name:": "next" ,"url": "url(/cudmc/right.png)"},
    {"name:": "d1" ,"url": "url(/cudmc/d1.jpg)"},
    {"name:": "d2" ,"url": "url(/cudmc/d2.jpg)"},
    {"name:": "d3" ,"url": "url(/cudmc/d3.jpg)"},
    {"name:": "d4" ,"url": "url(/cudmc/d4.jpg)"},
    {"name:": "d5" ,"url": "url(/cudmc/d5.jpg)"},
    {"name:": "prev" ,"url": "url(/cudmc/left.png)"}
];
data.forEach((item) =>{
    let ah = document.createElement('a');
    ah.style.setProperty("--img", item.url);
   // ah.href = "";
    list.appendChild(ah);
});
let a = 19;
let d = 1;
let x = 0;
let ab = document.querySelectorAll('a');
for (let index = 0; index < ab.length; ++index){
    ab[index].addEventListener('click', e =>{
       
        for (let index = 0; index < ab.length; ++index){
            if(ab[index].classList.contains('active')){
                ab[index].classList.remove('active');
                x = index;
            }
        }


        if( index == 18){
            x = x + 1;
            if(x != 0 && x <= 23){
                img_d.style.setProperty("--img", data[x - 18].url);
                ab[x].classList.add('active');
                }
              
            if(x == 24){
                img_d.style.setProperty("--img", data[d].url);
                ab[a].classList.add('active');
            }
           
        }else if (index == 24 ){
            x = x - 1;
            console.log(x);
            if(x != 0 && x <= 23){
                img_d.style.setProperty("--img", data[x - 18].url);
                ab[x].classList.add('active');
                }
            if(x == 18){
                img_d.style.setProperty("--img", data[5].url);
                ab[23].classList.add('active');
            }

        }else{
            img_d.style.setProperty("--img", data[index - 18].url);
            ab[index].classList.add('active');
        }


    });
 }


function load(){
    img_d.style.setProperty("--img", data[d].url);
    ab[a].classList.add('active');
}

