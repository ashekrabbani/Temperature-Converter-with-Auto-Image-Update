const submit = document.querySelector(".btn")
const celcius = document.querySelector("#celcius")
const fahrenheit = document.querySelector("#fahrenheit")
const kelvin = document.querySelector("#kelvin")
const image = document.querySelector("#image")

let temp = ''

const updateimage = {
    cold: 'https://plus.unsplash.com/premium_photo-1695290757424-06b72bf518e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8',
    warm: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    hot: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    lava: 'https://plus.unsplash.com/premium_photo-1665392924019-b72d80a63bfb?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D'
}

const changeimage = (temp, updateimage) => {
    if(temp<= 0) {
        image.setAttribute('src', updateimage.cold);
    }
    else if (temp > 0 && temp <= 30) {
        image.setAttribute('src', updateimage.warm);
    }
    else if (temp <= 99){
        image.setAttribute('src', updateimage.hot);
    }
    else if (temp >= 100) {
        image.setAttribute('src', updateimage.lava);
    }
} 

let lastedit = '';

//const updatelastedit = () => {
(() => {
//    celcius.addEventListener('change', (e) => {
//       console.log(celcius.value)   });
//     fahrenheit.addEventListener('change', (e) => {
//       console.log(fahrenheit.value)
//    });
//    kelvin.addEventListener('change', (e) => {
//       console.log(kelvin.value)
//    });
    // celcius.addEventListener('keyup', () => {
    //     console.log(celcius.value) });
    // fahrenheit.addEventListener('keyup', () => {
    //     console.log(fahrenheit.value)
    // });
    // kelvin.addEventListener('keyup', (e) => {
    //     console.log(e.target.value)
    // });
            celcius.addEventListener('keyup', () => {
            lastedit = 'celcius'
            // console.log(lastedit)
            });
            fahrenheit.addEventListener('keyup', () => {
            lastedit = 'fahrenheit'
            // console.log(lastedit)
            });
            kelvin.addEventListener('keyup', (e) => {
            lastedit = 'kelvin'
            // console.log(lastedit)
            });
})();
// }
// updatelastedit();
const convert = (lastedit) => {
    if (lastedit === 'celcius') {
        const f = (parseFloat(celcius.value)* 9/5) + 32;
        const k = (parseFloat(celcius.value)) + 273.15;
        fahrenheit.value = Math.floor(f);
        kelvin.value = Math.floor(k);

        changeimage(parseFloat(celcius.value), updateimage);
    }
    else if (lastedit === 'fahrenheit') {
        const c = (parseFloat(fahrenheit.value) - 32) * 5/9;
        const k = (parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15;
        celcius.value = Math.floor(c);
        kelvin.value = Math.floor(k);

        changeimage(parseFloat(c), updateimage);
    }
    else if (lastedit === 'kelvin') {
        const c = (parseFloat(kelvin.value)) - 273.15;
        const f = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32;
        celcius.value = Math.floor(c);
        fahrenheit.value = Math.floor(f);

        changeimage(parseFloat(c), updateimage);
    }

}


submit.addEventListener('click', () => {
    convert(lastedit);
})
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        // submit.click();
        convert(lastedit);
    }
});