let array=[undefined, undefined, undefined,undefined, undefined, undefined,undefined, undefined, undefined]
let random=parseInt(Math.random()*2)
let value;
if(random==0){value='&#215;'
document.querySelector('.result').innerHTML=`${value} Cross`
}
else {value='&#x25CB;'
document.querySelector('.result').innerHTML=`${value} Circle`
}

let cnt=0;
let input=document.querySelectorAll('.x')
input.forEach(function(element){
  element.addEventListener('click',function(e){
    e.preventDefault()
      
      let ID=parseInt(element.id)
      console.log(ID);
      if(array[ID-1]===undefined){
        array[ID-1]=value
        element.innerHTML=value
        if(value==='&#215;')value='&#x25CB;'
        else value='&#215;'
        var val;
        if(value=='&#215;')val="Cross"
        else val="Circle"
        document.querySelector('.result').innerHTML=`${value} ${val}`
        
        cnt++;
        checkWin(array)
      }
    
  })
})

function checkWin(a){
  if(cnt===9){
    document.querySelector('.result').innerHTML=`Drawww &#128555;`
    restart()
  }
  if ((a[0] === a[1] && a[1] === a[2]) && a[0] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[0]} Won &#x1F973;`
    restart()
  }
  else if ((a[3] === a[4] && a[4] === a[5]) && a[3] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[4]} Won &#x1F973;`
    restart()
  }
  else if ((a[6] === a[7] && a[7] === a[8]) && a[6] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[7]} Won &#x1F973;`
    restart()
  }
  //second part
  else if ((a[0] === a[3] && a[3] === a[6]) && a[6] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[6]} Won &#x1F973;`
    restart()
  }
  else if ((a[1] === a[4] && a[4] === a[7]) && a[7] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[7]} Won &#x1F973;`
    restart()
  }
  else if ((a[2] === a[5] && a[5] === a[8]) && a[8] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[8]} Won &#x1F973;`
    restart()
  }

  // third
  else if ((a[0] === a[4] && a[4] === a[8]) && a[8] !== undefined) {
    document.querySelector('.result')
    .innerHTML=`${a[8]} Won &#x1F973;`
    restart()
  }
  else if ((a[2] === a[4] && a[4] === a[6]) && a[6] !== undefined) {
    document.querySelector('.result').innerHTML=`${a[6]} Won &#x1F973;`
    restart()
  }
}
const div=document.createElement('div')
function restart(){
  div.className='y'
  div.innerHTML=`<button id="butt">Restart</button>
  `
  document.querySelector('div').appendChild(div)
  const elements = document.querySelectorAll('.x');

  // Iterate over each element and remove event listeners
  elements.forEach(function(element) {
      // Create a copy of the element without its listeners
      const clonedElement = element.cloneNode(true);
  
      // Replace the original element with the cloned one
      element.parentNode.replaceChild(clonedElement, element);
  });
  //restarting
  document.getElementById('butt').addEventListener('click',function(){
    location.reload()
  })
}


