fis.config.merge({
    roadmap : {
        // domain : "file:///C:/Users/Administrator/Desktop/website/4pit"
        domain: "http://ivonxiao.github.io/4pit"
    }
});

fis.config.set('roadmap.path',[
	{
		reg: '**',
		release: '/dist$&'
	}
]);