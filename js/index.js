//焦点关注列表
$.ajax({
    url: 'http://47.111.184.55:8888/api/v1/index/attention',
    type: 'get',
    success:function(response){
        console.log(response);       
        var html = template('focusTpl',response)
        // console.log(html);
        
        $('#focus').html(html)
    }
})