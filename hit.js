
let hitanc = 0;
let bleanc = 0;
let resultsnum =  document.querySelector('ol#kasuga');
let hb      = document.querySelector('ol#wakabayasi');
let rist = document.querySelector('ol#o-dori-');
let qu = document.querySelector('h2');
let good = document.querySelector('p#message');



//回答数の初期値と最大回答数の設定
let guesscount = 1;
const maxcount = 8;

//当てる数をランダム生成
var num = new Array(3);
let a = document.querySelector('button');
a.addEventListener('click',creat);
function creat() {
var flag = true;
console.log('clea!');
while(flag) {
    num[0] = Math.floor(Math.random()*10);
    num[1] = Math.floor(Math.random()*10);
    num[2] = Math.floor(Math.random()*10);
    if (num[0] != num[1] && num[0] != num[2] && num[1]!=num[2]) {
        flag = false;
    }
}
//consoleによるチェック
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
a.style.display = "none";
}



//答えの配列
var anc = new Array(3);
let b = document.querySelector('button#kaitoubox');
b.addEventListener('click',go);
function go () {
    if (guesscount <= maxcount && hitanc != 3) {
        let il = document.querySelector('input[name="Lkaitoubox"]');
    anc[0]= (il.value);
    il.value = " ";
    let ic = document.querySelector('input[name="Ckaitoubox"]');
    anc[1]= (ic.value);
    ic.value = " ";
    let ir = document.querySelector('input[name="Rkaitoubox"]');
    anc[2]= (ir.value);
    ir.value = " ";
        //consoleによるチェック
    console.log(anc[0]);
    console.log(anc[1]);
    console.log(anc[2]);
       //入力値の表示
    let aaa = document.createElement('li');
    let bbb = document.createElement('ol');
    let ccc = document.createElement('li');
    aaa.textContent = anc[0]+"  "+anc[1]+"  "+anc[2];
    rist.appendChild(aaa);

    //判定
    hitanc = obj.ht(anc, num);
    bleanc = obj.bl(anc, num);
    console.log(hitanc);
    console.log(bleanc);
    if (hitanc!=3) {
        bbb.textContent = "H>>"+hitanc+"   "+"B>>"+bleanc;
        rist.appendChild(bbb);
        }
        else {
        bbb.textContent = "クリア！";
        rist.appendChild(bbb);
        qu.textContent = anc[0]+"  "+anc[1]+"  "+anc[2];
        good.textContent = "good!"
        }

    }
    else {

    }
    guesscount++;


}



var obj = {
    ht: function() {
        var hit = 0;
        for (var i=0; i<3; i++) {
            if (anc[i] == num[i]) {
                hit ++;
            }
        }
        return hit;

    },
    bl: function() {
        var ble = 0;
        for (var i=0; i<3; i++) {
            for (var j=0; j<3; j++) {
                if (anc[i] == num[j] && i!=j) {
                    ble++;
                }
            }
        }
    return ble;
    }

    
}


