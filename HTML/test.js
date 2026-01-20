// メッセージ表示
function showMessage(){
 const msg = document.getElementById("msg");

 // ボタンを二回押すとメッセージ削除
 if (msg.textContent === ""){
   msg.textContent = "押された!!";
  } 
  else{
   msg.textContent = "";
  }
 }

// アラートでメッセージ表示
// function showMessage(){
   // alert("押された!!"):}

// 文字列を変更する
// 関数を用いてコードを見やすくする

document.addEventListener('DOMContentLoaded',function(){

  // ===== 文字切り替え関数 =====
  function toggleText(targetId,originStr,changeStr){
    let target = document.getElementById(targetId);
    if(target.textContent === originStr){
      target.textContent = changeStr;
    } else {
      target.textContent = originStr;
    }
  }

  document.getElementById('btn1').addEventListener("click",function(){
    toggleText("container1","このお好み焼きは美味しくない","たこやきおいしい(DOM操作)");
  });

  document.getElementById('btn2').addEventListener("click",function(){
    toggleText("container2","野菜炒め定食","焼肉定食(DOM操作)");
  });

  // ===== 色変更 =====
  let colorElement = document.getElementsByClassName('buttoncolor')[0];

  document.getElementById('red-button').addEventListener('click', () => {
    setBackgroundColor("red");
  });

  document.getElementById('blue-button').addEventListener('click', () => {
    setBackgroundColor("blue");
  });

  document.getElementById('yellow-button').addEventListener('click', () => {
    setBackgroundColor("yellow");
  });

  function setBackgroundColor(buttoncolor){
    colorElement.style.setProperty("--bg-color", buttoncolor);
  }

}); 