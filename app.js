//コメントアウト

console.log('---------------console.log-------------------');
console.log('hoge');

//四則演算
console.log('--------------四則演算----------------------');

console.log(1+1);

console.log(4-2);

console.log(3*3);

console.log(8/2);

console.log(7%2);


console.log('------------文字列連結-----------------');
console.log('平井の'+'叔父貴');

//文字として表示したい場合は、シングルクォーテーションで囲う。(or ダブルクウォート)
//console.log('平井の+叔父貴');←文字列になっちゃうよ

console.log('-----------------変数----------------');

//変数とは、データを入れる箱的なものです。
//箱の名前を「変数名」と呼びます。
//変数を使用する理由
//1.変更に対応できる。
//2.同じ値を繰り返し使える
//3.値の意味がわかりやすい
//変数名のルールは、英数にすることです。
//英単語 キャメルケース

let name = '車さん';
console.log(name);

name = 'なおきさん';
console.log(name);

name = '阿部さん';
console.log(name);

//変数を使った計算
let num = 2;
//num = num * 4;

console.log(num);

num += 5;
console.log('num += 5は'+ num + 'です。');

//定数
const age = 21;

console.log(`私の年齢は、${age}です`);


console.log('----------------条件分岐-----------------');

//if (条件){
//  処理;
//}

console.log('if文を使うよ');
let int = 5;

if (int == 3){
    console.log(`${int}は3と等しいです`);
    }

//比較演算子
//<, <=, >,>=,===, !==

console.log('else if-----------------')
//int = 5;

if (int >= 10){
  console.log(int+'は10以上です。');
}else if(int > 3){
  console.log(int+'は3より大きいです。');
}else{
  console.log(int+'は3以下です。');
}



console.log('switch-------------------');

//signalって名前の変数にgreenを格納

let signal = 'green';
console.log(signal);


//if(signal == 'green'){
//   
//  console.log('進め');
//   
//}else if(signal == 'red'){
//
//  console.log('止まれ');
//
//}else{
//  
//  console.log('その他');
//}

switch(signal){
  case 'green':

    console.log('進め');
      
    break;
  
  case 'red':
    
    console.log('止まれ');
   
    break;
    
  default:

    console.log('その他');
    
    break;

}


console.log('繰り返し処理-------------------');

console.log('for文-----------');


for(let i = 1; i <= 10; i++){
  
  console.log(i);

}


console.log('while文----------------');
let j = 11;
while(j <= 20){
  console.log(j);
  j++;
}

console.log('do while--------------');
let j2 = 21;

do{
  console.log(j2);

  j2++;

}while(j2 <= 30);




//1~15まで表示して
//
//3 で割り切れるなら Fizz
//
//5 で割り切れるなら Buzz
//
//どちらでも割り切れるなら FizzBuzz

console.log('fizzbuzz問題--------------------------');

let num2 = 15;

for(i = 1; i <= num2; i++){
  if(i % 15 == 0){
  
    console.log('fizzbuzz');
    
  }else if(i % 5 == 0){
    
    console.log('buzz');
        
  }else if(i % 3 == 0){
    
    console.log('fizz');
  
  }else{
    
    console.log(i);
  
  }
}

console.log('fizzbuzz問題短いやーつ---------------');


for(i = 1; i <= num2; i++){
  console.log((i % 3 ==0 ? 'fizz' : '')+(i % 5 == 0 ? 'buzz' : '') || i); 
}


console.log('配列---------------------------');

//配列=グループ化されたデータ
//[値1,値2,値3]

let student = ['屋慶名さん','車さん','阿部さん','なおきさん'];

console.log(student);

//◯番目の値を表示
console.log(student[0]);//2番目の値を表示


//値の上書き
student[1] = 'sokoさん';
console.log(student[1]);

//値の追加
student.push('神谷さん');
console.log(student);

student.unshift('平井さん');
console.log(student);

//値の削除
student.pop();//末尾の値が削除
console.log(student);

student.shift();
console.log(student);



console.log('連想配列--------------------------')

//連想配列
//{キー1:値1, キー2:値2}

let profile = {
    name:'阿部さん',
    age:18,
    from:'仙台'   
}

let profile2 = {
    name:'阿部さん',
    age:18,
    from:'仙台'   
}

console.log(profile);
console.log(profile['name']);

//配列名はprofile2、キーは一緒、値は自分のプロフィールで。


console.log('2次元配列--------------------------');

let profiles = [profile,profile2];

console.log(profiles);


//配列名[一個目][一個目配列のキー];

console.log(profiles[1]['age']);
console.log(profiles[1].age);//連想配列だったら使える

//多次元配列
//5次元配列を作ろう！わーい。

//普通の配列の場合
//let hokubu = ['本部','今帰仁','名護'];
//
//let nanbu = ['那覇','浦添'];
//
//let tyubu = ['北谷','宜野湾'];
//
//let okinawa = [hokubu,nanbu,tyubu];
//
//let kumamoto = ['天草','八代'];
//
//let osaka = ['飛田新地','西成'];
//
//let japan = [okinawa,kumamoto,osaka];
//
//let china = ['ドレス','桃娘'];
//
//let usa = ['ダパンプ','トランプ'];
//
//let earth = [japan,china,usa];
//
//let mars = ['ゴキブリ','コケ'];
//
//let utyu = [earth,mars];

let hokubu = ['本部','今帰仁','名護'];

let nanbu = {
    naha:'那覇',
  urasoe:'浦添'
};

let tyubu = ['北谷','宜野湾'];

let okinawa = {
  hokubu:hokubu,
  nanbu:nanbu,
  tyubu:tyubu
};

let kumamoto = ['天草','八代'];

let osaka = ['飛田新地','西成'];

let japan = {
  okinawa:okinawa,
  kumamoto:kumamoto,
  osaka:osaka
};

let china = ['ドレス','桃娘'];

let usa = ['ダパンプ','トランプ'];

let earth = {
  japan:japan,
  china:china,
  usa:usa
};

let mars = ['ゴキブリ','コケ'];

let utyu = {
  earth:earth,
  mars:mars
};


console.log('宿題の確認----------------------------------')

console.log(utyu);

//console.log(utyu[0][0][0][1][0]);

console.log(utyu.earth.japan.okinawa.nanbu.naha);


console.log('メソッド---------------------------------');

let greetuser = {
  food:'sushi',
  age:21,
  from:'仙台',
  greet: function(name) {
    console.log('こんにちは、私の名前は' + name + 'です。好きな食べ物は' + this.food + 'です');
  }
}

greetuser.greet('');



console.log('DOM---------------------');

let test = document.getElementById('test');

console.log(test);

console.log(test.textContent);

test.textContent = '変更するよ';

test.style.color = 'blue';
test.style.backgroundColor = 'red';

test.className = 'addClass';



console.log('イベント--------------------------');

document.getElementById('btn').addEventListener('click', function(){
  
  let tag = document.createElement('p');
  
  let text = document.createTextNode('はいさいjs');
  
  document.body.appendChild(tag).appendChild(text);
  
})

//画面がロードされた(functionを今は読み込んでるよ)時
//コンテンツと、画像
window.onload = function(){
  //アラートボタンが押された時の処理
  document.getElementById('alertbtn').onclick = function(){
    window.alert('アラートボタンがクリックされました。500万払ってください。');
  }
}

//イベントハンドラを使った処理
function btn_click(){
  window.alert('怪しいボタンがクリックされました。');
}































