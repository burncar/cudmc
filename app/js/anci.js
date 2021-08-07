const rad = document.querySelector('#rad');
const pha = document.querySelector('#pha');
const lab = document.querySelector('#lab');
const radio = document.querySelector('.ancillary__radiology');
const rad_xray = document.querySelector('.ancillary__xray');
//const b4_xray = rad_xray.querySelector("::before");
const rad_ctscan = document.querySelector('.ancillary__ctscan');
const n_img = document.querySelector('.ancillary__img');
//const b4_ctscan = rad_ctscan.querySelector("::before");
const pharm = document.querySelector('.ancillary__pharmacy');
const labs = document.querySelector('.ancillary__laboratory');
const hideme = document.querySelector('.hide-me');
const unhideme = document.querySelector('.unhide-me');

const rad_data = "Brand/Model: SHIMADZU Radspeed Fit Equipped with a floating tabletop that can support up to 320kg With Anatomical Program System Combined with Aero DR, for fast image acquisition with built-in internal storage And a touch screen  monitor";
const rad_head = "Our Xray";
const ct_head = "Our CT Scan"
const ct_data ="Brand/Model: PHILIPS Access CT 32 slice CT Scan Machine with iDose system that offeers such excellent image quality at low radiation dose. Exclusive MAR technology helps isolate the effects of metal objects in image data, aiding visualization of surrounding anatomy, and with higg spatial resolution";
const ximageUrl = "url(/cudmc/x1.jpg)";
const ctimageUrl = "url(/cudmc/x2.jpg)";
const a_labimageUrl = "url(/cudmc/lab1.jpg)";
const b_labimageUrl = "url(/cudmc/lab2.jpg)";
const c_labimageUrl = "url(/cudmc/lab_n.jpg)";
const a_pharma = "url(/cudmc/pha1.jpg)"

rad.addEventListener('click', e => {
        document.getElementById('xray').innerHTML = rad_head;
        document.getElementById('xrayBody').innerHTML = rad_data; 
        document.getElementById('ctscan').innerHTML = ct_head;
        document.getElementById('ctscanBody').innerHTML = ct_data;
        rad_xray.style.setProperty("--imageBackground", ximageUrl);
        rad_ctscan.style.setProperty("--imageBackground", ctimageUrl);
        rad_xray.style.setProperty("--px", "440px");
        rad_ctscan.style.setProperty("--px", "440px");
        rad_xray.style.setProperty("--order", "");
        rad_ctscan.style.setProperty("--order", "");
        rad_xray.style.setProperty("--width", "50%");
        rad_ctscan.style.setProperty("--width", "50%");

        n_img.style.setProperty("", "");
        n_img.style.setProperty("--px", "");
        n_img.style.setProperty("--width", "");
});
pha.addEventListener('click', e=>{
    document.getElementById('xray').innerHTML = "";
    document.getElementById('xrayBody').innerHTML = ""; 
    document.getElementById('ctscan').innerHTML = "";
    document.getElementById('ctscanBody').innerHTML = "";

    rad_xray.style.setProperty("--px", "");
    rad_ctscan.style.setProperty("--px", "");
    rad_xray.style.setProperty("--order", "");
    rad_ctscan.style.setProperty("--order", "");

    n_img.style.setProperty("--imageBackground", a_pharma);
    n_img.style.setProperty("--px", "1000px");
    n_img.style.setProperty("--width", "80%");
 
});
lab.addEventListener('click', e =>{
        document.getElementById('xray').innerHTML = "";
        document.getElementById('xrayBody').innerHTML = ""; 
        document.getElementById('ctscan').innerHTML = "";
        document.getElementById('ctscanBody').innerHTML = "";
        rad_xray.style.setProperty("--imageBackground", a_labimageUrl);
        rad_ctscan.style.setProperty("--imageBackground", b_labimageUrl);
        n_img.style.setProperty("--imageBackground", c_labimageUrl);
        n_img.style.setProperty("--px", "500px");
        n_img.style.setProperty("--width", "80%");

        rad_xray.style.setProperty("--px", "565px");
        rad_ctscan.style.setProperty("--px", "565px");
        rad_xray.style.setProperty("--order", "1");
        rad_ctscan.style.setProperty("--order", "2");
        n_img.style.setProperty("--order", "3");
        rad_xray.style.setProperty("--width", "40%");
        rad_ctscan.style.setProperty("--width", "40%");
});

function myLoad() {
    // var elements = document.getElementsByClassName(url);
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].style.background=imageUrl;
    // }

    document.getElementById('xray').innerHTML = rad_head;
    document.getElementById('xrayBody').innerHTML = rad_data; 
    document.getElementById('ctscan').innerHTML = ct_head;
    document.getElementById('ctscanBody').innerHTML = ct_data;
    rad_xray.style.setProperty("--imageBackground", ximageUrl);
    rad_ctscan.style.setProperty("--imageBackground", ctimageUrl);
    rad_xray.style.setProperty("--px", "440px");
    rad_ctscan.style.setProperty("--px", "440px");
    rad_xray.style.setProperty("--order", "");
    rad_ctscan.style.setProperty("--order", "");
    rad_xray.style.setProperty("--width", "50%");
    rad_ctscan.style.setProperty("--width", "50%");
}

