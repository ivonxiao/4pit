$(window).on("load",function(){$(".flexslider").flexslider({directionNav:!1,animation:"slide",start:function(){$("body").addClass("loaded"),$(".home-news-wrapper,.footer").css("visibility","visible")}})}),$(function(){$(".home-news-list").flexslider({selector:".home-news-list-slides li",direction:"vertical",animation:"slide",directionNav:!1,controlNav:!1,customDirectionNav:".news-pager-nav"}),$(".news-pager-nav").on("click",".caret-previous",function(){$(".home-news-list").flexslider("previous")}).on("click",".caret-next",function(){$(".home-news-list").flexslider("next")})});