$(function () {
    // 获取所有文章类别
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
        success: function (response) {
            // console.log(response);
            var html = template('cateTpl', { data: response.data });
            $('#cateBody').html(html);
        }
    });

    // 添加文章类别
    $('#addForm').on('submit', function () {
        var formData = $(this).serialize();

        if ($('#recipient-name').val() === '') {
            alert('请输入分类名称');
            return false;
        } else if ($('#recipient-slug').val() === '') {
            alert('请输入分类别名');
            return false;
        } else {
            $.ajax({
                type: 'post',
                url: 'http://47.111.184.55:8888/api/v1/admin/category/add',
                data: formData,
                success: function (response) {
                    // console.log(response);
                    location.reload()
                }
            });
        }

        return false;
    });

    // 根据id查询文章类别
    $('#cateBody').on('click', '.edit', function () {
        var id = $(this).attr('data-id');

        $.ajax({
            type: 'get',
            url: 'http://47.111.184.55:8888/api/v1/admin/category/search',
            data: { id: id },
            success: function (response) {
                // console.log(response);
                $('#recipient-id-edit').val(response.data[0].id);
                $('#recipient-name-edit').val(response.data[0].name);
                $('#recipient-slug-edit').val(response.data[0].slug);
            }
        })
    })

    // 编辑文章类别
    $('#editForm').on('submit', function () {
        var formData = $(this).serialize();

        $.ajax({
            type: 'post',
            url: 'http://47.111.184.55:8888/api/v1/admin/category/edit',
            data: formData,
            success: function (response) {
                // console.log(response);
                location.reload();
            }
        });
        return false;
    })

    // 删除文章类别
    $('#cateBody').on('click', '.delete', function () {
        var id = $(this).attr('data-id');

        if (confirm('确定删除?')) {
            $.ajax({
                type: 'post',
                url: 'http://47.111.184.55:8888/api/v1/admin/category/delete',
                data: { id: id },
                success: function (response) {
                    // console.log(response);
                    location.reload();
                }
            });
        }
    });
});