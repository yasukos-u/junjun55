$(function(){
    $(".menu-btn").on("click", function(){
        //スライドして表示・非表示を切り替え
        $(".head_nav_list").slideToggle();
        //メニューボタンのopenクラスつけ外し
        $(".menu-btn").toggleClass("open");
    });

    //スマホ表示時の処理
    if (window.matchMedia('(max-width: 640px)').matches) {
        $(".head_nav_list li a").on("click", function(){
            //リンクをクリックされたらメニューを非表示
            $(".head_nav_list").fadeOut();
            //メニューボタンのopneクラスつけ外し
            $(".menu-btn").toggleClass("open");
        })
    }
})