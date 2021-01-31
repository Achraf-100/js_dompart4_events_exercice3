// let monH1 = document.querySelector('h1')
// let h1 = () => {
//     monH1.classList.add('text-blue')
// }

// monH1.addEventListener('click', h1)




// let monH3 = document.querySelector('h3')
// let h3 = () => {
//     monH3.classList.add('text-error')
// }

// monH3.addEventListener('dblclick',h3)




// let firstP = document.querySelectorAll('p')[0]

// let test = () => {
//     firstP.classList.toggle('text-style')
// }
// firstP.addEventListener('click', test)





// let span = document.querySelectorAll('p')[1]
// let enfant = span.querySelectorAll('span')
// let enfant1 = Array.from(enfant)
// console.log(enfant1);

// enfant1.forEach(el => {
//         el.addEventListener('click', () =>{
//         el.classList.toggle('bolder-red')
//     })
// });






let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)

console.log(mySpan2);

mySpan2.forEach(el => {
    el.addEventListener('click', () =>{
        mySpan2.forEach(el => {
            el.classList.remove('bolder-red')
        });
        el.classList('bolder-red')
    })
});