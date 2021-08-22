window.addEventListener('mousemove', function (e) {
   let x = e.clientX / window.innerWidth
   let y = e.clientY / window.innerHeight
   if (window.matchMedia('(min-width: 1023px)').matches) {
      document.querySelector('.welcome__bg-img').style.transform = 'translate(-' + x * 20 + 'px, -' + y * 15 + 'px)'
   }
})
window.addEventListener('scroll', function () {
   let value = window.scrollY
   if (window.matchMedia('(min-width: 1023px)').matches) {
      document.querySelector('.welcome__bg-img').style.left = value * 1 + 'px'
   }
})

const header = document.querySelector('.header-fixed')
const headerOffset = header.offsetTop

function fixHeader() {
   if (window.scrollY >= headerOffset) {
      document.body.classList.add('-fixed')
      document.body.style.paddingTop = header.offsetHeight + 'px'
   } else {
      document.body.classList.remove('-fixed')
      document.body.style.paddingTop = 0
   }
}
window.addEventListener('scroll', fixHeader)

const menuBurger = document.querySelectorAll('.menu__burger')
const btnBurger = document.querySelectorAll('.burger-icon')

menuBurger.forEach((i) => {
   i.onclick = function () {
      btnBurger.forEach((e) => {
         e.classList.toggle('-active')
      })
      document.body.classList.toggle('-show')
   }
})
document.querySelectorAll('.menu__link').forEach((i) => {
   i.onclick = function () {
      btnBurger.forEach((e) => {
         if (document.body.classList.contains('-show') || e.classList.contains('-active')) {
            document.body.classList.remove('-show')
            e.classList.remove('-active')
         }
      })
   }
})
// document.addEventListener('mousedown', (e) => {
//    const menuRoot = document.querySelector('.mobile-panel')
//    if (!menuRoot.contains(e.target)) {
//       document.body.classList.remove('-show')
//    }
// })

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })
   })
}

let number = document.querySelector('.number-1')
let numberTop = number.getBoundingClientRect().top
let start = +number.innerHTML
let end = +number.dataset.max

window.addEventListener('scroll', function onScroll() {
   if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
      this.removeEventListener('scroll', onScroll)
      let interval = setInterval(function () {
         number.innerHTML = ++start
         if (start == end) {
            clearInterval(interval)
         }
      }, 5)
   }
})

let number1 = document.querySelector('.number-2')
let number1Top = number1.getBoundingClientRect().top
let start1 = +number1.innerHTML
let end1 = +number1.dataset.max

window.addEventListener('scroll', function onScroll() {
   if (window.pageYOffset > number1Top - window.innerHeight / 1.5) {
      this.removeEventListener('scroll', onScroll)
      let interval1 = setInterval(function () {
         number1.innerHTML = ++start1
         if (start1 == end1) {
            clearInterval(interval1)
         }
      }, 100)
   }
})

function initMap() {
   const uluru = { lat: 53.4786001, lng: -2.2477604 }
   const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru,
   })
   const marker = new google.maps.Marker({
      position: uluru,
      map: map,
   })
}
