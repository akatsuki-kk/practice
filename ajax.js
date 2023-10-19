//Ajaxのサンプル

//(1)とりあえず非同期でAjax通信
$.ajax({
    type:'get/post',
    url: URL,
    data: {_method: 'get/post/patch/delete', id: id,}
}).done(function(response){
    //responseにサーバーレスポンスが入る
    //doneは通信成功時
}).fail(function(response){
    //failは通信失敗時
}).always(function(response){
    //alwaysは常時。
    //これをdone,failの前に置くと実行順を変えられる
});


//(2)Ajaxを同期処理で
//Promise と async/awaitを使えば、Ajaxを関数内で結果を待って使える。
//Promiseの場合
async function foo(){
    result = {}
    await new Promise((resolve,reject)=>{
        $.ajax({
            //リクエスト
        }).done(function(response){
            //レスポンス
            result = response
        })
    })
}

