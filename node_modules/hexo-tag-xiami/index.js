hexo.extend.tag.register('xiami', function (args) {
    var sid = args[0];

    if (sid.indexOf(',') >= 0) {
        var autoPlay = args[1] || 0;
        var mainColor = args[2] || 'FF8719';
        var backColor = args[3] || '494949';
        var width = args[4] || 235;
        var height = args[5] || 346;

        var src = '<embed ' +
                    'src="http://www.xiami.com/widget/12753884_' +
                    sid + '_' +
                    width + '_' +
                    height + '_' +
                    mainColor +'_' +
                    backColor + '_' +
                    autoPlay +
                    '/multiPlayer.swf" ' +
                    'type="application/x-shockwave-flash" ' +
                    'width="' + width + '" ' +
                    'height="' + height + '" ' +
                    'wmode="opaque"></embed>';
        console.log('========');
        console.log(src);
        return src;
    } else {
        var width = args[1] || 257;
        var height = args[2] || 33;
        var src = '<embed ' +
                    'src="http://www.xiami.com/widget/12753884_' +
                        sid +
                    '/singlePlayer.swf" ' +
                    'type="application/x-shockwave-flash" ' +
                    'width="' + width + '" ' +
                    'height="' + height + '" ' +
                    'wmode="transparent"></embed>';

        return src;
    }

});
