$(function() {
/*********************
 * 
    orderbook表示
 * 
 ********************/

$(window).on('load resize', function(){
  var orderbook_height = $("div#orderbook").height();
  var bid_ask_height = (orderbook_height - (25 + 25))/2;
  console.log("bid_ask_height : " + bid_ask_height);

  $("section.chart").remove();
  $("#orderbook").css('right','0');
  $(".orderbook__offers,.orderbook__bids").css('position','relative');
  $(".orderbook__offers,.orderbook__bids").css('height',bid_ask_height+'px');
  $(".orderbook__offers,.orderbook__bids").css('overflow-y','hidden');
  $(".orderbook__offers .offer__inner").css('position','absolute');
  $(".orderbook__offers .offer__inner").css('bottom','0');
  $("orderbook__bids .bid__inner").css('position','absolute');
  $(".orderbook__offers .bid__inner").css('top','0');

  $(".wrapper--trade .main--bottom").css("height","15%");
  $(".wrapper--trade .main--bottom").css("max-height","15%");


  //$(".orderbook__offers .offer__inner , .orderbook__bids .bid__inner").css('overflow-y','scroll');
  //$(".orderbook__offers .offer__inner , .orderbook__bids .bid__inner").css('height',bid_ask_height+'px');
});


/* 
強制スクロールは重すぎて使えない
$(document).on('DOMSubtreeModified propertychange','.orderbook__offers .offer__inner',function(){
  $(".orderbook__offers .offer__inner").scrollTop(10000);
});
*/

  /* 
  
      特定キー押下とオーダーブックの項目クリックでmaker/taker注文のテスト

  */
 var shiftPressFlg = false;
 var altPressFlg = false;
//maker(x key == 88)
//taker(z key == 90)

//shiftKey
//altKey

$(window).on('keydown', function(e) {
    if(e.shiftKey == true) {
        shiftPressFlg = true;
        $(".orderbook__offers").css("color","#ff00ff");
        $(".orderbook__bids").css("color","#ff00ff");
        console.log("shift on maker mode");
    }
    if(e.altKey == true) {
        altPressFlg = true;
        $(".orderbook__offers").css("color","#5685f9");
        $(".orderbook__bids").css("color","#5685f9");
        console.log("alt on maker mode");
    }


    //maker ask
    $(document).on('click','.orderbook__offers .offer__inner li',function(e){
        if(shiftPressFlg == true){
            var board_ask_price = $(this).find("span.orderbook__price").text();
            var board_ask_size = $(this).find("span.orderbook__size").text();
            console.log("MAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
            shiftPressFlg = false;
            return false;
        }
    });
    //maker bid
    $(document).on('click','.orderbook__bids .bid__inner li',function(e){
        if(shiftPressFlg == true){
            var board_bid_price = $(this).find("span.orderbook__price").text();
            var board_bid_size = $(this).find("span.orderbook__size").text();
            console.log("MAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
            shiftPressFlg = false;
            return false;
        }
    });

    //taker ask
    $(document).on('click','.orderbook__offers .offer__inner li',function(e){
        if(altPressFlg == true){
            var board_ask_price = $(this).find("span.orderbook__price").text();
            var board_ask_size = $(this).find("span.orderbook__size").text();
            console.log("TAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
            altPressFlg = false;
            return false;
        }
    });
    
    //taker bid
    $(document).on('click','.orderbook__bids .bid__inner li',function(e){
        if(altPressFlg == true){
            var board_bid_price = $(this).find("span.orderbook__price").text();
            var board_bid_size = $(this).find("span.orderbook__size").text();
            console.log("TAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
            altPressFlg = false;
            return false;
        }
    });


  });





  $(window).on('keyup', function(e) {
    shiftPressFlg = false;
    altPressFlg = false;
    $(".orderbook__offers").css("color","#e9546b");
    $(".orderbook__bids").css("color","#3eb370");
    console.log("off");
    return false;
  })








/*
 $(window).on('keydown', function(e) {
    if(e.keyCode === 88) {
        e.preventDefault();
        shiftPressFlg = true;
        $(".orderbook__offers").css("color","#ff00ff");
        $(".orderbook__bids").css("color","#ff00ff");
        console.log("shift on maker mode");
        return false;
    }
    if(e.keyCode === 90) {
        e.preventDefault();
        altPressFlg = true;
        $(".orderbook__offers").css("color","#5685f9");
        $(".orderbook__bids").css("color","#5685f9");
        console.log("alt on maker mode");
        return false;
    }


    //maker ask
    $(document).on('click','.orderbook__offers .offer__inner li',function(e){
        if(shiftPressFlg == true){
            var board_ask_price = $(this).find("span.orderbook__price").text();
            var board_ask_size = $(this).find("span.orderbook__size").text();
            console.log("MAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
            shiftPressFlg = false;
            return false;
        }
    });
    //maker bid
    $(document).on('click','.orderbook__bids .bid__inner li',function(e){
        if(shiftPressFlg == true){
            var board_bid_price = $(this).find("span.orderbook__price").text();
            var board_bid_size = $(this).find("span.orderbook__size").text();
            console.log("MAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
            shiftPressFlg = false;
            return false;
        }
    });

    //taker ask
    $(document).on('click','.orderbook__offers .offer__inner li',function(e){
        if(altPressFlg == true){
            var board_ask_price = $(this).find("span.orderbook__price").text();
            var board_ask_size = $(this).find("span.orderbook__size").text();
            console.log("TAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
            altPressFlg = false;
            return false;
        }
    });
    
    //taker bid
    $(document).on('click','.orderbook__bids .bid__inner li',function(e){
        if(altPressFlg == true){
            var board_bid_price = $(this).find("span.orderbook__price").text();
            var board_bid_size = $(this).find("span.orderbook__size").text();
            console.log("TAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
            altPressFlg = false;
            return false;
        }
    });


  });



 */





/*








*/








  /*  
  
div#orderbook
<header class="asksum">
<aside class="orderbook__spread" data-step="8">
<footer class="bidsum">25+20+25


.orderbook__offers .offer__inner {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 350px;
}
.orderbook__bids .bid__inner {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 350px;
}


  */

  /*  
  $(window).on('keydown', function(e) {
    //maker(x key == 88)
    if(e.keyCode === 88) {
      $(document).on('click','.orderbook__offers .offer__inner li',function(e){
        var board_ask_price = $(this).find("span.orderbook__price").text();
        var board_ask_size = $(this).find("span.orderbook__size").text();
        console.log("MAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
        return false;
      });
      
      $(document).on('click','.orderbook__bids .bid__inner li',function(e){
        var board_bid_price = $(this).find("span.orderbook__price").text();
        var board_bid_size = $(this).find("span.orderbook__size").text();
        console.log("MAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
        return false;
      });
      return false;
    }
    //taker(z key == 90)
    if(e.keyCode === 90) {
      $(document).on('click','.orderbook__offers .offer__inner li',function(e){
        var board_ask_price = $(this).find("span.orderbook__price").text();
        var board_ask_size = $(this).find("span.orderbook__size").text();
        console.log("TAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
        return false;
      });
      
      $(document).on('click','.orderbook__bids .bid__inner li',function(e){
        var board_bid_price = $(this).find("span.orderbook__price").text();
        var board_bid_size = $(this).find("span.orderbook__size").text();
        console.log("TAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
        return false;
      });
      return false;
    }
  });
  */
} );
