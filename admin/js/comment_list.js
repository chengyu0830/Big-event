$.ajax({
    url: 'http://47.111.184.55:8888/api/v1/admin/comment/search',
    type: 'get',
    data:FormData,
    success:function(response){
        console.log(response);       
        var html = template('listTpl',{data:response})
        console.log(html);
        
        $('#commentBox').html(html)
    }   
})