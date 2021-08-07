const findM = document.querySelector('.room__modal');
const btn = document.querySelector('#myBtn');
const hideme = document.querySelector('.hide-me');
const unhideme = document.querySelector('.unhide-me');
const closeme = document.querySelector('.close');

let buttons = document.querySelectorAll('.article__item');
for (let index = 0; index < buttons.length; ++index) {
    buttons[index].addEventListener('click', e => {

        if(findM.classList.contains('openModal')){
            findM.classList.remove('openModal');
              //body.classList.remove('noscroll');

                hideme.classList.remove('unhide');
                hideme.classList.add('hides');
                // unhideme.classList.remove('hides');
                // unhideme.classList.add('unhide')
              
            }else
            { 
            //   unhideme.classList.remove('unhide');
            //   unhideme.classList.add('hides')
              hideme.classList.remove('hides');
              hideme.classList.add('unhide');
              findM.classList.add('openModal');
              //body.classList.add('noscroll');

            //   var x = document.getElementsByTagName("button")[index].innerText;
            //   document.getElementById("doctor_name").innerHTML = x;
            //   document.getElementById("category").innerHTML = data[index].category;
            //   document.getElementById("specialty").innerHTML = data[index].specialty;
            //   document.getElementById("schedule").innerHTML = data[index].schedule;
            }
    });
}