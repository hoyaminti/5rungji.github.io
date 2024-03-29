// [#skill] 3page //// [#skill] 3page //// [#skill] 3page //// [#skill] 3page //

// 배경
function skillBackOn(){
	$('#skill').css({
		backgroundSize: '300%'
	}).stop().animate( {
		backgroundSize: '150%'
	},5000);
	
    $('#skill .quality').css({
        width: "0%"
    }).stop().animate( {
        width: "95%"
    },1000);
}

function skillBackOff(){
	$('#skill').css({
		backgroundSize: '300%'
	});
}

// .skill-mn 버튼 클릭
$(function(){
    // 색상 변경
	$('.skill-mn button').click(function(){
        $(this).addClass("org-btn").removeClass("mint-btn");
        $(this).siblings().addClass("mint-btn").removeClass("org-btn");

        if($(".back-btn").hasClass("org-btn")){
            $('.skill-box > li:nth-child(1)').css({
                opacity: '100%',
                zIndex: '1'
            }).siblings().css({
                opacity: '0%',
                zIndex: '0'
            });            
        }else if($(".front-btn").hasClass("org-btn")){
            $('.skill-box > li:nth-child(2)').css({
                opacity: '100%',
                zIndex: '1'
            }).siblings().css({
                opacity: '0%',
                zIndex: '0'
            });                
        }else if($(".desgin-btn").hasClass("org-btn")){
            $('.skill-box > li:nth-child(3)').css({
                opacity: '100%',
                zIndex: '1'
            }).siblings().css({
                opacity: '0%',
                zIndex: '0'
            });               
        }

        // 스킬채우기    
        $('#skill .quality').css({
            width: "0%"
        }).stop().animate( {
            width: "95%"
        },1000);
	});
});