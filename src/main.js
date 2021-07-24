const $=s=>document.querySelector(s)
const $$=s=>document.querySelectorAll(s)
$('.input').onclick = function(e){
    if(!this.classList.contains('focus')){
        this.classList.add('focus')
        $('.keyboard').classList.add('show')
        e.stopPropagation()
    }
}
document.onclick=function(e){
    $('.keyboard').classList.remove('show')
    $('.input').classList.remove('focus')
}
$('.keyboard').onclick=function(e){
    e.stopPropagation()
}
let text=''
$$('.keyboard .row > span').forEach($key=>{
    $key.onmousedown=function(){
        this.classList.add('active')
    }
    $key.onmouseup=function(){
        this.classList.remove('active')
    }
})
$$('.keyboard .row > span').forEach($key=>{
    $key.onclick=function(e){
        let type=$key.dataset.type
        switch(type){
            case 'char':
                text+=$key.innerText
                $('.input').innerText=text
                break;
            case 'uppercase':
                setPage('uppercase');
                break;
            case 'lowercase':
                setPage('lowercase');
                break;
            case 'number':
                setPage('number');
                break;
            case 'symbol':
                setPage('symbol');
                break;
            case 'backspace':
                text=text.substr(0,text.length-1)
                $('.input').innerText=text
                break;
            case 'space':
                text+=' '
                $('.input').innerText=text
                break;
            case 'return':
                text+='\n'
                $('.input').innerText=text
                break;
        }
    }
})
function setPage(name){
    $$('.keyboard .page').forEach($page=>$page.style.display='none')
    $('.keyboard .page-'+name).style.display='block'
}