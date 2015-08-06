/**
 * @param  {[array]} bgcolors 每屏的背景色
 * @param  {[array]} tooltips 每屏导航提示文字
 * @param {[jqNode]} target
 * @return {[undefined]}       
 */
function fullpageShow(bgcolors,tooltips,target) {
	var navObj = {
		bgColors: bgcolors,
		tooltips: tooltips
	};

	target.fullpage({
		navigation: true,
		navigationTooltips: navObj.tooltips,
		easing: 'linear',
		sectionsColor: navObj.bgColors
	});
}
$(function() {
	var navObj = {
		bgColors: ['rgb(240,72,71)', 'rgb(250,200,139)', 'rgb(253,255,190)', 'rgb(151,255,248)', 'rgb(109,253,156)'],
		tooltips: ['电商仓储配送系统', '系统集成服务总线', '流程管控，灵活可配', '多组织多架构权限管理模型', '基于互联网，B/S和C/S混合模式']
	};
	fullpageShow(navObj.bgColors,navObj.tooltips,$('#fullpage'));
});
