const toggleSwitch = document.querySelector('.checkBox')
const child1 = document.querySelector('.child1')
const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const image3 = document.querySelector('.image3')

const imgSwitch = function(theme) {
   image1.src = `img/undraw_block_${theme}.svg`
   image2.src = `img/undraw_software_${theme}.svg`
   image3.src = `img/undraw_happy_${theme}.svg`
}

const SwitchDark = function(isDark) {
 child1.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode'
 isDark ? child1.children[1].setAttribute('name', 'moon') : child1.children[1].setAttribute('name', 'sunny')
 isDark ? imgSwitch('dark') : imgSwitch('light')
}

toggleSwitch.addEventListener('click', function(e) {
   if(e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      SwitchDark(true)
      localStorage.setItem('theme', 'dark')
   } else {
      document.documentElement.setAttribute('data-theme', 'light')
      SwitchDark(false)
      localStorage.setItem('theme', 'light')
   }
})

const currentTheme = localStorage.getItem('theme')
console.log(currentTheme)

if(currentTheme === 'dark') {
   document.documentElement.setAttribute('data-theme', currentTheme)
   SwitchDark(true)
   toggleSwitch.checked = true
}
































// const toggleSwitch = document.querySelector('.checkBox') //input click
// const ModeContainer = document.querySelector('.child1')
// const image1 = document.querySelector('.image1')
// const image2 = document.querySelector('.image2')
// const image3 = document.querySelector('.image3')
// const dark = 'dark'
// const light = 'light' //by default the theme is light

// const isDarkLigth = function(isDrak) {
// // document.querySelector('.child1').textContent = isDrak ? 'Dark Mode' : 'Light Mode' instead of this ☝️ selecting children way is also better👇
//    ModeContainer.children[0].textContent = isDrak ? 'Dark Mode' : 'Light Mode'
//    isDrak ? ModeContainer.children[1].setAttribute('name', 'moon') : ModeContainer.children[1].setAttribute('name', 'sunny') //instead of replace i use setAttr cuz they are attr to began with
//    isDrak ? image(dark) : image(light) //for img change the name should be same except the last that we manuallt set dark or light
// }

// const image = function(theme) {   
//    image1.src = `img/undraw_block_${theme}.svg`
//    image2.src = `img/undraw_software_${theme}.svg`
//    image3.src = `img/undraw_happy_${theme}.svg`
// }

// const switchTheme = function(e) { //when input is clicked 
//     console.log(e, e.target.checked) 
//     if(e.target.checked) {
//         console.log(document.documentElement)
//         document.documentElement.setAttribute('data-theme', dark)
//         isDarkLigth(true) //true cuz from e.target.checked when clicked input
//         localStorage.setItem('theme', dark) //storing in storage
//     } else {
//         console.log(document.documentElement)
//         document.documentElement.setAttribute('data-theme', light)
//         isDarkLigth(false)  //false cuz from e.target.checked when clicked input again
//         localStorage.setItem('theme', light)  //storing in storage
//     }
// }
// toggleSwitch.addEventListener('click', switchTheme)
//  //geting thing out of storage to keep the mode on display when visited again
// const currentTheme = localStorage.getItem('theme')
// console.log(currentTheme) //will be dark or light 
// if(currentTheme === dark) { //if dark this👇 else false by default light
//     document.documentElement.setAttribute('data-theme', currentTheme)
//     isDarkLigth(currentTheme)
//     toggleSwitch.checked = true
// }