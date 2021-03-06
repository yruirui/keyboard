const $=s=>document.querySelector(s)
const $$=s=>document.querySelectorAll(s)
class keyboard{
    constructor($input){
        this.$input=$input
        this.text=''
        this.init()
        this.bind()

    }

    setPage(name){
        this.$keyboard.querySelectorAll('.page').forEach($page=>$page.style.display='none')
        this.$keyboard.querySelector('.page-'+name).style.display='block'
    }

    bind() {
        let self = this
        this.$input.onclick = function(e) {
          this.classList.add('focus')
          self.$keyboard.classList.add('show')
          e.stopPropagation()
        }
    document.addEventListener('click',function(e){
        self.$keyboard.classList.remove('show')
        self.$input.classList.remove('focus')
    })
    this.$keyboard.onclick=function(e){
            e.stopPropagation()
        }
    this.$keyboard.querySelectorAll('.row > span').forEach($key=>{
    $key.onclick=function(e){
        let type=$key.dataset.type
        switch(type){
            case 'char':
                self.text+=this.innerText
                self.$input.innerText=self.text
                break;
            case 'uppercase':
                self.setPage('uppercase');
                break;
            case 'lowercase':
                self.setPage('lowercase');
                break;
            case 'number':
                self.setPage('number');
                break;
            case 'symbol':
                self.setPage('symbol');
                break;
            case 'backspace':
                self.text=self.text.substr(0,self.text.length-1)
                self.$input.innerText=self.text
                break;
            case 'space':
                self.text+=' '
                self.$input.innerText=self.text
                break;
            case 'return':
                self.text+='\n'
                self.$input.innerText=self.text
                break;
        }
    }
})   
    }

    init(){
        let $keyboard=document.createElement('div')
        $keyboard.classList.add('keyboard')
        $keyboard.innerHTML=`
        <div class="page page-lowercase">
            <div class="row">
                <span class='col-2 active' data-type="char">q</span>
                <span class='col-2' data-type="char">w</span>
                <span class='col-2' data-type="char">e</span>
                <span class='col-2' data-type="char">r</span>
                <span class='col-2' data-type="char">t</span>
                <span class='col-2' data-type="char">y</span>
                <span class='col-2' data-type="char">u</span>
                <span class='col-2' data-type="char">i</span>
                <span class='col-2' data-type="char">o</span>
                <span class='col-2' data-type="char">p</span>
            </div>
            <div class="row">
                <span class='col-2 offset-1'>a</span>
                <span class='col-2' data-type="char">s</span>
                <span class='col-2' data-type="char">d</span>
                <span class='col-2' data-type="char">f</span>
                <span class='col-2' data-type="char">g</span>
                <span class='col-2' data-type="char">h</span>
                <span class='col-2' data-type="char">j</span>
                <span class='col-2' data-type="char">k</span>
                <span class='col-2' data-type="char">l</span>
            </div>
            <div class="row">
                <span class='col-3' data-type="uppercase"><i class="iconfont icon-caps-lock"></i></span>
                <span class='col-2' data-type="char">z</span>
                <span class='col-2' data-type="char">x</span>
                <span class='col-2' data-type="char">c</span>
                <span class='col-2' data-type="char">v</span>
                <span class='col-2' data-type="char">b</span>
                <span class='col-2' data-type="char">n</span>
                <span class='col-2' data-type="char">m</span>
                <span class='col-3' data-type="backspace"><i class="iconfont icon-backspace"></i></span>
            </div>
            <div class="row">
                <span class='col-4' data-type="number">123</span>
                <span class='col-12' data-type="space">space</span>
                <span class='col-4' data-type="return">return</span>
            </div>
        </div>
        
        <div class="page page-uppercase">
            <div class="row">
                <span class='col-2' data-type="char">Q</span>
                <span class='col-2' data-type="char">W</span>
                <span class='col-2' data-type="char">E</span>
                <span class='col-2' data-type="char">R</span>
                <span class='col-2' data-type="char">T</span>
                <span class='col-2' data-type="char">Y</span>
                <span class='col-2' data-type="char">U</span>
                <span class='col-2' data-type="char">I</span>
                <span class='col-2' data-type="char">O</span>
                <span class='col-2' data-type="char">P</span>
            </div>
            <div class="row">
                <span class='col-2 offset-1' data-type="char">A</span>
                <span class='col-2' data-type="char">S</span>
                <span class='col-2' data-type="char">D</span>
                <span class='col-2' data-type="char">F</span>
                <span class='col-2' data-type="char">G</span>
                <span class='col-2' data-type="char">H</span>
                <span class='col-2' data-type="char">J</span>
                <span class='col-2' data-type="char">K</span>
                <span class='col-2' data-type="char">L</span>
            </div>
            <div class="row">
                <span class='col-3' data-type="lowercase"><i class="iconfont icon-caps-lock"></i></span>
                <span class='col-2' data-type="char">Z</span>
                <span class='col-2' data-type="char">X</span>
                <span class='col-2' data-type="char">C</span>
                <span class='col-2' data-type="char">V</span>
                <span class='col-2' data-type="char">B</span>
                <span class='col-2' data-type="char">N</span>
                <span class='col-2' data-type="char">M</span>
                <span class='col-3' data-type="backspace"><i class="iconfont icon-backspace"></i></span>
            </div>
            <div class="row">
                <span class='col-4' data-type="number">123</span>
                <span class='col-12' data-type="space">space</span>
                <span class='col-4' data-type="return">return</span>
            </div>
        </div>
        <div class="page page-number">
            <div class="row">
                <span class='col-2' data-type="char">1</span>
                <span class='col-2' data-type="char">2</span>
                <span class='col-2' data-type="char">3</span>
                <span class='col-2' data-type="char">4</span>
                <span class='col-2' data-type="char">5</span>
                <span class='col-2' data-type="char">6</span>
                <span class='col-2' data-type="char">7</span>
                <span class='col-2' data-type="char">8</span>
                <span class='col-2' data-type="char">9</span>
                <span class='col-2' data-type="char">0</span>
            </div>
            <div class="row">
                
                <span class='col-2 offset-1' data-type="char">-</span>
                <span class='col-2' data-type="char">/</span>
                <span class='col-2' data-type="char">:</span>
                <span class='col-2' data-type="char">;</span>
                <span class='col-2' data-type="char">(</span>
                <span class='col-2' data-type="char">)</span>
                <span class='col-2' data-type="char">$</span>
                <span class='col-2' data-type="char">&</span>
                <span class='col-2 '>@</span>
            </div>
            <div class="row">
                <span class='col-3' data-type="symbol">#+=</span>
                <span class='col-2' data-type="char">.</span>
                <span class='col-2' data-type="char">,</span>
                <span class='col-2' data-type="char">?</span>
                <span class='col-2' data-type="char">!</span>
                <span class='col-2' data-type="char">'</span>
                <span class='col-2' data-type="char">"</span>
                <span class='col-2' data-type="char">\`</span>
                <span class='col-3' data-type="backspace"><i class="iconfont icon-backspace"></i></span>
            </div>
            <div class="row">
                <span class='col-4' data-type="number">ABC</span>
                <span class='col-12' data-type="space">space</span>
                <span class='col-4' data-type="return">return</span>
            </div>
        </div>
        <div class="page page-symbol">
            <div class="row">
                <span data-type="char" class="col-2">[</span>
                <span data-type="char" class="col-2">]</span>
                <span data-type="char" class="col-2">{</span>
                <span data-type="char" class="col-2">}</span>
                <span data-type="char" class="col-2">#</span>
                <span data-type="char" class="col-2">%</span>
                <span data-type="char" class="col-2">^</span>
                <span data-type="char" class="col-2">*</span>
                <span data-type="char" class="col-2">+</span>
                <span data-type="char" class="col-2">=</span>
              </div>
              <div class="row">
                <span data-type="char" class="col-2 offset-1">_</span>
                <span data-type="char" class="col-2">\</span>
                <span data-type="char" class="col-2">|</span>
                <span data-type="char" class="col-2">~</span>
                <span data-type="char" class="col-2"><</span>
                  <span data-type="char" class="col-2">></span>
                  <span data-type="char" class="col-2">??</span>
                  <span data-type="char" class="col-2">???</span>
                  <span data-type="char" class="col-2">???</span>
                  </div>
                <div class="row">
                  <span data-type="number" class="col-3">123</span>
                  <span data-type="char" class="col-2">.</span>
                  <span data-type="char" class="col-2">,</span>
                  <span data-type="char" class="col-2">?</span>
                  <span data-type="char" class="col-2">!</span>
                  <span data-type="char" class="col-2">'</span>
                  <span data-type="char" class="col-2">"</span>
                  <span data-type="char" class="col-2">\`</span>
                  <span data-type="backspace" class="col-3"><i class="iconfont icon-backspace"></i></span>
                </div>
                <div class="row">
                  <span data-type="lowercase" class="col-4">ABC</span>
                  <span data-type="space" class="col-12">space</span>
                  <span data-type="return" class="col-4">return</span>
                </div>
        </div>
    `
    document.body.appendChild($keyboard)
    this.$keyboard=$keyboard
    

    }
}
$$('.input').forEach($input=>new keyboard($input))

/*
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
*/