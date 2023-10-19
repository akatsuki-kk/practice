//Ajaxのサンプル

//(1)とりあえず非同期でAjax通信
$.ajax({
    //リクエストをここに書く(typeはgetかpost。それ以外はdataの中に書く)
    type:'get/post',
    url: '/api/nanika?doreka="hai"',
    data: {_method: 'get/post/patch/delete', id: id,}
}).done(function(response){
    //responseにサーバーレスポンスが入る
    //サーバーレスポンスはHTMLとかJSONとかある。
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
            result = response;
        })
    })
    return result["foo"];
}

//呼び出すときにawaitをつけると、ajaxの結果を取得してから返す。
await foo();
