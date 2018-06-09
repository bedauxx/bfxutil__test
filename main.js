

$(function() {
  /* 
  console.log("bfx util 0.1 loaded!");

  console.log("どう?");
  $("i.scrolllock.fa.fa-lock").trigger('clickstart');

  console.log("どうどう?");
  */
/*********************
 * 
    orderbook表示
 * 
 ********************/

$(window).on('load resize', function(){
  var orderbook_height = $("div#orderbook").height();
  var bid_ask_height = (orderbook_height - (25 + 25))/2;
  console.log("bid_ask_height : " + bid_ask_height);

  $(".orderbook__offers,.orderbook__bids").css('position','relative');
  $(".orderbook__offers,.orderbook__bids").css('height',bid_ask_height+'px');
  $(".orderbook__offers .offer__inner").css('position','absolute');
  $(".orderbook__offers .offer__inner").css('bottom','0');
  $("orderbook__bids .bid__inner").css('position','absolute');
  $(".orderbook__offers .bid__inner").css('top','0');

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
 var x_key_flag = false;
 var z_key_flag = false;
  
/* 

 $(window).on('keydown', function(e) {
    if(e.keyCode === 88) {
      if(x_key_flag == false){
        x_key_flag = true;
        z_key_flag = false;
        $(".orderbook__offers").css("color","#ff00ff");
        $(".orderbook__bids").css("color","#ff00ff");
        //console.log(x_key_flag);
        return false;
      }else{
        x_key_flag = false;
        $(".orderbook__offers").css("color","#e9546b");
        $(".orderbook__bids").css("color","#3eb370");
        //console.log(x_key_flag);
        return false;
      }
    }
    if(e.keyCode === 90) {
      if(z_key_flag == false){
        z_key_flag = true;
        x_key_flag = false;
        $(".orderbook__offers").css("color","#5685f9");
        $(".orderbook__bids").css("color","#5685f9");
        //console.log(z_key_flag);
        return false;
      }else{
        z_key_flag = false;
        $(".orderbook__offers").css("color","#e9546b");
        $(".orderbook__bids").css("color","#3eb370");
        //console.log(z_key_flag);
        return false;
      }
    }
  });

  //maker(x key == 88)
  $(document).on('click','.orderbook__offers .offer__inner li',function(e){
    if(x_key_flag==true){
      var board_ask_price = $(this).find("span.orderbook__price").text();
      var board_ask_size = $(this).find("span.orderbook__size").text();
      console.log("MAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
      $(".orderbook__offers").css("color","#e9546b");
      $(".orderbook__bids").css("color","#3eb370");
      x_key_flag = false;
    }
  });

  //maker(x key == 88)
  $(document).on('click','.orderbook__bids .bid__inner li',function(e){
    if(x_key_flag==true){
      var board_bid_price = $(this).find("span.orderbook__price").text();
      var board_bid_size = $(this).find("span.orderbook__size").text();
      console.log("MAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
      $(".orderbook__offers").css("color","#e9546b");
      $(".orderbook__bids").css("color","#3eb370");
      x_key_flag = false;
    }
  });


  //taker(z key == 90)
  $(document).on('click','.orderbook__offers .offer__inner li',function(e){
    if(z_key_flag==true){
      var board_ask_price = $(this).find("span.orderbook__price").text();
      var board_ask_size = $(this).find("span.orderbook__size").text();
      console.log("TAKER!! ASKS price : " + board_ask_price + " lot : " + board_ask_size);
      $(".orderbook__offers").css("color","#e9546b");
      $(".orderbook__bids").css("color","#3eb370");
      z_key_flag = false;
    }
  });
  //taker(z key == 90)
  $(document).on('click','.orderbook__bids .bid__inner li',function(e){
    if(z_key_flag==true){
    var board_bid_price = $(this).find("span.orderbook__price").text();
    var board_bid_size = $(this).find("span.orderbook__size").text();
    console.log("TAKER!! BIDS price : " + board_bid_price + " lot : " + board_bid_size);
    $(".orderbook__offers").css("color","#e9546b");
    $(".orderbook__bids").css("color","#3eb370");
    z_key_flag = false;
    }
  });

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
