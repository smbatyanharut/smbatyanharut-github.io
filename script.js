const star = document.querySelectorAll('.star');
const ixs = document.querySelectorAll('.fa-times');
const like = document.querySelector('.like');
const sectionLike = document.querySelector('.sectionLike');
const heart = document.querySelector('.fa-heart');
const img = document.querySelectorAll('.item > img');
const forHover = document.querySelectorAll('.forHover');
const cart = document.querySelector('.cart');
const buyBtn = document.querySelectorAll('.buyBtn');  
const buyCarts = document.querySelectorAll('.buyCarts');
const minus = document.querySelectorAll('.fa-minus');
const plus = document.querySelectorAll('.fa-plus');
const back = document.querySelectorAll(".back");
const basket = document.querySelector(".fa-cart-plus");
const sectionCard = document.querySelector(".sectionCard");
let imgArr = ["img/captoe.webp","img/istockphoto-172417586-612x612.jpg","img/Nike.png","img/wumen3.jpg","img/wumen2.jpg","img/wumen1.jpg"];
const submit = document.querySelector('#submit');

function load(){
    plus.forEach((el,ind)=>{
        el.onclick = () => {
            buyCarts.forEach((elem,index)=>{
                if(ind === index){
                    elem.innerHTML ++;
                    back[ind].children[2].innerHTML = +(back[ind].children[2].innerHTML) + 100;
                }
            });
        }
    });
    minus.forEach((el,ind)=>{
        el.onclick = ()=>{ 
            buyCarts.forEach((elem,index)=>{
                if(ind === index && elem.innerHTML > 1){
                    elem.innerHTML --;
                    back[ind].children[2].innerHTML = +(back[ind].children[2].innerHTML) - 100;
                }
            });
        }
    });
}
load();
buyBtn.forEach((elem,index)=>{
    let c = 1;
    elem.onclick = ()=>{
        c++;
        if(c <= 2){
            c = undefined;
            const cardContect = document.createElement('div');
            cardContect.setAttribute("class", "cardContect");            
            sectionCard.appendChild(cardContect);
            const span = document.createElement('span');
            const $span = document.createElement('span');
            $span.setAttribute("class","dolSpan")
            $span.innerHTML = "$";
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const buyClone = forHover[index].children[0].children[0].children[5].cloneNode(true);
            const close = document.createElement('i');
            close.setAttribute('class', 'fa fa-times-circle');
            buyClone.appendChild(close);
            cardContect.appendChild(img);
            cardContect.appendChild(span);
            cardContect.appendChild($span);
            cardContect.appendChild(buyClone);
            const min =  buyClone.children[0];
            const max = buyClone.children[2];
            const but = buyClone.children[3];
            console.log(but);
            let loop = 1;
            but.addEventListener('click',()=>{
                if(loop <= 2){
                    loop = undefined;
                    const card = document.querySelector('.card');
                    card.style.transform = "translateX(-50%) scale(1)";
                    const closeBtn = document.querySelector("#closeBtn");
                        closeBtn.addEventListener("click",()=>{
                            card.style.transform = "translateX(-50%) scale(0)";
                    });
                    submit.addEventListener("click",()=>{
                        const contenier = document.querySelector('.contenier');
                        contenier.style.transform = "scale(1)";
                        setTimeout(()=>{
                            contenier.style.transform = "scale(0)";
                            card.style.transform = "translateX(-50%) scale(0)";
                        },4000);
                    });
                }
            });
            min.addEventListener("click", ()=>{
                if(+(buyClone.children[1].innerHTML) > 1){
                    buyClone.children[1].innerHTML = +(buyClone.children[1].innerHTML) - 1;
                    cardContect.children[1].innerHTML = +(cardContect.children[1].innerHTML) - 100;
                }
            });
            max.addEventListener("click",()=>{
                buyClone.children[1].innerHTML = +(buyClone.children[1].innerHTML) + 1;
                cardContect.children[1].innerHTML = +(cardContect.children[1].innerHTML) + 100;
            });
            img.src = imgArr[index];
            span.innerHTML = back[index].children[2].innerHTML;
            btn.innerHTML = "Buy";
            cart.innerHTML ++;
            close.addEventListener("click",()=>{
                c = 1;
                cart.innerHTML --;
                span.innerHTML =  back[index].children[2].innerHTML;
                cardContect.remove();
            });        
        } 
    }
});
basket.onclick = ()=>{
    if(getComputedStyle(sectionCard).clipPath==="polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"){
        sectionCard.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        basket.style.color = "#ED2C39";
     }else{
         sectionCard.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
        basket.style.color = "#BC0B0B";
     }
}
let arr = [];
star.forEach((el,ind)=>{
    el.onclick = () =>{
        if(el.style.color === "rgb(0, 0, 0)"){
            el.style.color = "yellow";
            like.innerHTML--;
            arr.forEach((elem,index)=>{
                if(elem === ind){
                    const forHoverLike = document.querySelectorAll('.sectionLike > .forHover');
                    forHoverLike[index].remove();  
                    for(let i = index; i < arr.length - 1; i++){
                        let c = arr[i];
                        arr[i] = arr[i+1];
                        arr[i+1] = c;
                    }
                    arr.pop(); 
                }
            });
            
        }
        else{
            el.style.color = "#000";
            like.innerHTML++;
            let clone =  forHover[ind].cloneNode(true);
            clone.children[0].children[0].children[0].removeAttribute('class');
            clone.children[0].children[0].children[0].setAttribute('class','fa fa-times');
            let buyClone = clone.children[0].children[0].children[5];
            let z = clone.children[0].children[0].children[2];
            let bj =  clone.children[0].children[0].children[5].children[3];
            let min = clone.children[0].children[0].children[5].children[0];
            let max = clone.children[0].children[0].children[5].children[2];
            min.addEventListener("click", ()=>{
                if(+(buyClone.children[1].innerHTML) > 1){
                    buyClone.children[1].innerHTML = +(buyClone.children[1].innerHTML) - 1;
                    z.innerHTML = +(z.innerHTML) - 100;
                }
            });
            max.addEventListener("click",()=>{
                buyClone.children[1].innerHTML = +(buyClone.children[1].innerHTML) + 1;
                z.innerHTML = +(z.innerHTML) + 100;

            });
            let c = 1;
            bj.addEventListener("click",()=>{
                c++;
                if(c % 2 === 0 ){
                            c = undefined;
                            console.dir(+z.innerHTML + 1);
                            const cardContect = document.createElement('div');
                            cardContect.setAttribute("class", "cardContect");            
                            sectionCard.appendChild(cardContect);
                            const span = document.createElement('span');
                            const $span = document.createElement('span');
                            $span.setAttribute("class","dolSpan")
                            $span.innerHTML = "$";
                            const img = document.createElement('img');
                            const btn = document.createElement('button');
                            const buyClone = forHover[ind].children[0].children[0].children[5].cloneNode(true);
                            const close = document.createElement('i');
                            close.setAttribute('class', 'fa fa-times-circle');
                            buyClone.appendChild(close);
                            cardContect.appendChild(img);
                            cardContect.appendChild(span);
                            cardContect.appendChild($span);
                            cardContect.appendChild(buyClone);
                            span.innerHTML =  +(z.innerHTML);
                            const min =  buyClone.children[0];
                            const max = buyClone.children[2];
                            const but = buyClone.children[3];
                            let loop = 1;
                            but.addEventListener('click',()=>{
                                if(loop <= 2){
                                    loop = undefined;
                                    const card = document.querySelector('.card');
                                    card.style.transform = "translateX(-50%) scale(1)";
                                    const closeBtn = document.querySelector("#closeBtn");
                                        closeBtn.addEventListener("click",()=>{
                                            card.style.transform = "translateX(-50%) scale(0)";
                                    });
                                    submit.addEventListener("click",()=>{
                                        const contenier = document.querySelector('.contenier');
                                        contenier.style.transform = "scale(1)";
                                        setTimeout(()=>{
                                            contenier.style.transform = "scale(0)";
                                            card.style.transform = "translateX(-50%) scale(0)";
                                        },4000);
                                    });
                                }
                            });
                            min.addEventListener("click", ()=>{
                                if(+(buyClone.children[1].innerHTML) > 1){
                                    buyClone.children[1].innerHTML = +(buyClone.children[1].innerHTML) - 1;
                                    cardContect.children[1].innerHTML = +(cardContect.children[1].innerHTML) - 100;
                                }
                            });
                            max.addEventListener("click",()=>{
                                buyClone.children[1].innerHTML = +(buyClone.children[1].innerHTML) + 1;
                                cardContect.children[1].innerHTML = +(cardContect.children[1].innerHTML) + 100;
                            });
                            span.innerHTML = back[ind].children[2].innerHTML;
                            img.src = imgArr[ind];
                            span.innerHTML = back[ind].children[2].innerHTML;
                            btn.innerHTML = "Buy";
                            cart.innerHTML ++;
                            close.addEventListener("click",()=>{
                                c = 1;
                                cart.innerHTML --;
                                span.innerHTML =  back[ind].children[2].innerHTML;
                                cardContect.remove();
                            });
                } 
            })
            arr.push(ind);
            sectionLike.appendChild(clone);
            function del(){
                let closes = document.querySelectorAll('.fa-times');
                console.log(closes);
                closes.forEach((el,indo)=>{
                el.onclick = ()=>{
                    console.log(indo);
                    console.log(closes) ;
                    const forHoverLike = document.querySelectorAll('.sectionLike > .forHover');
                    forHoverLike[indo].remove();
                    star[arr[indo]].style.color = "yellow";
                    like.innerHTML--;
                    del();
                    for(let i = indo; i < arr.length - 1; i++){
                        let c = arr[i];
                        arr[i] = arr[i+1];
                        arr[i+1] = c;
                    }
                    arr.pop();
                    console.log(arr);
                }
            })
            }
            del();
        }
    }
});
heart.onclick = () =>{
    if(getComputedStyle(sectionLike).clipPath==="polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)"){
       sectionLike.style.clipPath = "polygon(0 0, 100% 0%, 100% 100%, 0 100%)";
       heart.style.color = "#ED2C39";
    }else{
        console.log(getComputedStyle(sectionLike).clipPath);
        sectionLike.style.clipPath = "polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)";
        heart.style.color = "#BC0B0B";
    }
}