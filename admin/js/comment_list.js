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
// 评论删除功能
$('#commentBox').on('click', '#delete', function () {
    var id = $(this).attr('data-id');
    console.log(id);
    if (confirm('确定残忍删除?')) {
      $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/comment/delete',
        type: 'post',
        data:{id:id},
        success: function (res) {
          console.log(res);
          console.log('.....');
          location.reload();
        }
      })
    }

  })


  //审核拒绝
  $('#commentBox').on('click', '#refuse', function () {
    var id = $(this).attr('data-id');
    console.log(id);
    if(confirm('是否确定更改状态')){
        $.ajax({
            url:'http://47.111.184.55:8888/api/v1/admin/comment/reject',
            type:'post',
            data:{id:id},
            success:function(res){
                console.log(res);
                // $(this).html('通过')
               location.reload()
            }
        })
    }    

})