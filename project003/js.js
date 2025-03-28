$(document).ready(function(){
    // 화면의 높이값을 구해라
    let ht = $(window).height()
    console.log(ht);
    // $('#wrap>div').eq(2).height(ht+300)

    // nav li 에 마우스가 들어갔을때, 나 자신에게 addClass를 해라
    $('nav li').click(function(){
        $('nav li').removeClass('on')
        $(this).addClass('on');

        // 클릭할때마다, 나 자신의 순변을 구하고,
        // 그 순번에 맞는 box의 높이를 찾아라
        let i = $(this).index()
        let divHt = $('#wrap>div').eq(i).height()
        

        // 박스마다 화면상단에서부터 떨어져있는 거리를 찾아라
        let divot = $('#wrap>div').eq(i).offset().top;
        console.log('박스'+i+'의 거리는'+divot);

        $('html,body').stop().animate({'scrollTop':divot},800)

        // 두 번째 li 클릭시 nav의 색을 #fff로 변경
        if ($(this).index() === 1) {
            $("nav p").css("color", "#fff");
            $("nav .dot").css("background-color", "#fff");  // 두 번째 li 클릭 시
        } else {
            $("nav p").css("color", "");
            $("nav .dot").css("background-color", "");  // 두 번째 li가 아니면 원래 색으로
        }
   
    });

    // player 네비게이션
    $('.box2 .navi p').click(function() {
        let index = $(this).index(); // 클릭한 p의 인덱스 (0부터 시작)

        $('.box2>div:not(.navi)').removeClass('on'); // 모든 div에서 active 제거
        $('.box2>div').eq(index).addClass('on'); // 해당 인덱스의 div에 active 추가
        
        $('.box2 .navi p').removeClass('on')
        $(this).addClass('on')
    });

    $('.box3 .navi p').click(function() {
        let index = $(this).index(); // 클릭한 p의 인덱스 (0부터 시작)

        $('.box3 .player').removeClass('on'); // 모든 div에서 active 제거
        $('.box3 .player').eq(index).addClass('on'); // 해당 인덱스의 div에 active 추가
        
        $('.box3 .navi p').removeClass('on')
        $(this).addClass('on')
    });


    // 갤러리
    $('article').mouseenter(function(){
        $(this).parent('.panolama').addClass('on')
    })

    $('article').mouseleave(function(){
        $(this).parent('.panolama').removeClass('on')
    })

    // article 클릭 시 팝업 열기
    const $modal = $(".modal");
    const $modalImg = $(".modal img");
    const $closeBtn = $(".modal .close");

    $(".box3 .panolama article").click(function () {
        let imgSrc = $(this).find("img").attr("src");
    
        console.log("수정된 이미지 경로:", imgSrc);
    
        if (imgSrc) {
            $(".modal img").attr("src", imgSrc);
            $(".modal").css("display", "flex").hide().fadeIn();
        }
        $("body").css("overflow", "hidden");
    });

    // 닫기 버튼 클릭 시 팝업 닫기
    $closeBtn.click(function () {
        $modal.fadeOut();
    });

    // 모달 배경 클릭 시 닫기
    $modal.click(function (e) {
        if ($(e.target).is($modal)) {
            $modal.fadeOut();
        }
        $("body").css("overflow", "auto");
    });

    // ESC 키 누르면 닫기
    $(document).keydown(function (e) {
        if (e.key === "Escape") {
            $modal.fadeOut();
        }
        $("body").css("overflow", "auto");
    });
    

})