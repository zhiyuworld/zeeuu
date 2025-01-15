/*网站制作QQ43171398*/
yen_menu('.yen-menu');
function yen_menu(ulclass){
	$(document).ready(function(){
		$(ulclass+' li').hover(function(){
			$(this).children("ul").show();
		},function(){
			$(this).children("ul").hide();
		});
	});
}
