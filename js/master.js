/**
 * Created by Mumu on 2016/6/21.
 */
$(function(){
  $("#fullPage").fullpage({
    verticalCentered:false,
    anchors:['page1','page2','page3','page4'],
    navigation:true,
    navigationTooltips:['它,终于来了。','真正与你贴近的个人设备','非同一般的精准计时','在三个特点鲜明的系列中找到你的风格'],
    resize:true,
    afterRender:function(){

    },
    afterLoad:function(link,index){
      switch (index){
        case 1:
          $(".section-one h1").animate({scale:"1.5"},function(){
            $(".section-one p").animate({"margin-top":"5%"});
          });
          break;
        case 2:
          $(".section-two h1").animate({scale:".7"});
          break;
        case 3:
          $(".section-three h1").animate({'margin-left':"20%"},"slow");
          $(".section-three p").animate({'margin-left':"10%"},"slow");
          break;
        case 4:
          $(".section-four img.primary").animate({rotate:'360deg'},function(){
            $(".section-four img.sport").animate({rotate:'360deg'},function(){
              $(".section-four img.edition").animate({rotate:'360deg'},function(){
                $(".section-four img.edition1").animate({rotate:'360deg'},function(){
                  $(".section-four h4.primary").animate({scale:'1.1'},600,function(){
                    $(".section-four h4.sport").animate({scale:'1.1'},600,function(){
                      $(".section-four h4.edition").animate({scale:'1.1'},600,function(){
                        $(".section-four h4.edition1").animate({scale:'1.1'},600);
                      });
                    });
                  })
                })
              })
              });
            });
          break;
        default:
          break;
      }
    },
    onLeave:function(link,index){
      switch (index){
        case 1:
          $(".section-one h1").css({transform:"scale(1)"});
          $(".section-one p").css({"margin-top":"800px"});
          break;
        case 2:
          $(".section-two h1").css({scale:"1"});
          break;
        case 3:
          $(".section-three h1").css({'margin-left':"-1500px"});
          $(".section-three p").css({'margin-left':"1500px"});
          break;
        case 4:
          $(".section-four img").css({rotate:"0"});
          $(".section-four h4").css({scale:"1"});
          break;
        default:
          break;
      }
    }
  });
})
