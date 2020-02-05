const list = document.querySelector('#todos');
//追加ボタンの処理//
function adding() {
    //削除ボタンで一斉に全部消えるとやなので、liに別々のidを与えた//
    $(function () {
        var h = document.getElementById("todos");
        var l = h.getElementsByTagName("li");
        for (var i = 0; i < l.length; i++) {
            l[i].setAttribute("id", "n" + (i + 1));
        }
    });
    
    var task = document.getElementById('addtasks').value;
    var dates = document.getElementById('date').value;
    var html = document.getElementById('todos').innerHTML;
    //二つとも入力がないと使えないようにした。//    
    if (task == false || dates == false) {
        return;
    } else {
        html = html + '<li> ' + task + "<br>" + dates + '<button class="gomi fa fa-trash-alt btn-light btn-dark btn-sm" ondblclick = "del()"></button> ' + '</li > ';
        document.getElementById('todos').innerHTML = html;
        document.getElementById('addtasks').value = '';
        document.getElementById('date').value = "";
    }
}
//削除//
function del() {
    list.addEventListener('click', e => {
        if (e.target.classList.contains('gomi')){
            e.target.parentElement.remove();
            alert("お疲れ様でした！");
            return;
        }else{}
    });
}
//遊び//
var elem = document.getElementById('elem');
elem.addEventListener('click',function(){
  anime({
      targets: elem,
      rotate : '10turn',     
  })              
})