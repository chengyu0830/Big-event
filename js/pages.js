/*最新评论1 */
$.ajax({
    url: 'http://47.111.184.55:8888/api/v1/index/latest_comment',
    type: 'get',
    success: function (data) {
        var html = template('critics', { data: data.data })
        $('#critic').html(html)
    }
})

/*  热门排行2 */
$.ajax({
    url: 'http://47.111.184.55:8888/api/v1/index/rank',
    type: 'get',
    success: function (data) {
        var html = template('lists', { data: data.data })
        $('#list').html(html)
        $('#list li:eq(0) span').addClass("first")
        $('#list li:eq(1) span').addClass("second")
        $('#list li:eq(2) span').addClass("third")
    }
})

/* 热点图 4*/
$.ajax({
    url: 'http://47.111.184.55:8888/api/v1/index/hotpic',
    type: 'get',
    data: FormData,
    success: function (data) {
        //focalize 焦点
        var html = template('focalizes', { data: data.data })
        $('#focalize').html(html)
        $('#focalize').children(':first').prop('className', 'first')
    }
})

/* 文章分类5 */
$.ajax({
    url: 'http://47.111.184.55:8888/api/v1/index/category',
    type: 'get',
    success: function (data) {
        var html = template('films', { data: data.data })
        $('#film').html(html)
    }
})