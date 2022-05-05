// fetch("https://api-thirukkural.vercel.app/api?num=20")
// .then((data)=>data.json())
// .then((data)=>{
//     console.log(data)
//     data.map((z)=>{
//         console.log(z)
//     })
// })
// .catch((er)=>{
//     console.error(er)
// })

let input=document.createElement("input")
input.setAttribute("id","givenvalue")
input.placeholder="given number thirukurl"

let btn=document.createElement("button")
btn.setAttribute("id","btn")
btn.textContent="clickme"
btn.addEventListener("click",clicks)

document.body.append(input)
document.body.append(btn)

// let img=document.createElement("img")
// img.innerHTML=`${url("download__2_-removebg-preview.png")}`

// let div1=document.createElement("div")
// div1.innerHTML=<p>  Written by the poetic saint Thiruvalluvar, it is the collection of 1330 two-lined poems, each of which shows the path to integrity, non-violence and knowledge.
// I have designed an API with Cloud Functions that returns the poem, explanation and english translation for a given Kural Number.
// Developers (I meant 'YOU') are called for using this API...</p>
 
// document.body.append(div1)


async function clicks(){
    let given=document.getElementById("givenvalue").value;
    console.log(given)
    let sss=await fetch(`https://api-thirukkural.vercel.app/api?num=${given}`)
    let ddd=await sss.json()
    console.log(ddd)

  


//      let divs=document.createElement("div")
//         divs.style.color="red"
       
//         divs.innerHTML=`thirukural ${ddd}`;

//         document.body.append(divs)
// }


let divs=document.createElement("div")
divs.style.color="red"
 divs.innerHTML=`Thirukkural ${given}:<br>${ddd.line1}<br>${ddd.line2}`;
 document.body.append(divs)

}