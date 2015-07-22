$(function() {
	var navObj = {
		bgColors: ['rgb(240,72,71)','rgb(250,200,139)','rgb(253,255,190)','rgb(151,255,248)','rgb(109,253,156)','rgb(161,206,239)'],
		tooltips: ['电商ERP','品类管理','供应链管理','订单管理','平台监控','账务中心']
	};

	$('#fullpage').fullpage({
		navigation: true,
		navigationTooltips: navObj.tooltips,
		easing: 'linear',
		sectionsColor: navObj.bgColors
	});
});