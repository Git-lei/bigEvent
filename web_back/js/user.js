var user = {

    //登录
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                console.log(res);

                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        });
    },

    //退出
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
                else {
                    options.fail();
                }
            }
        })
    },


    //获取用户信息
    getUser: function (options) {
        $.ajax({
            type: 'get',
            url: GETUSER,
            success: function (res) {
                console.log(res);
                // date = res.data
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail(res);
                }

            }
        })
    },

    //iframe 标签实现 页面嵌套


    //用户详细信息获取展示
    getUserinfo: function (options) {
        $.ajax({
            url: GET_USERINFO,
            success: function (res) {
                if (res.code === 200) {
                    //将获取到的数据展示到 页面里
                    //  遍历
                    options.success(res);
                }
            }
        })

    },


    //用户详细信息 修改
    userInfoEdit: function (options) {
        $.ajax({
            type: 'post',
            url: USERINFO_EDIT,
            data: options.data,
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }

            }
        })

    },





    //获取文章数
    gettotal: function (options) {
        $.ajax({
            type: 'get',
            url: GETTOTAL,
            success: function (res) {
                console.log(res);
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail(res);
                }

            }
        })
    },


    //获取评论数
    getcomment: function (options) {
        $.ajax({
            type: 'get',
            url: GETCOMMENT,
            success: function (res) {
                console.log(res);
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail(res);
                }
            }
        })
    },


    //获取月增文章数



































    //文章类别
    category: function (options) {
        $.ajax({
            type: 'get',
            url: CATEGORY_SEARCH,
            success: function (res) {
                console.log(res.data);

                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },


    //新增类别
    addCategory: function (options) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:8000/admin/category_add',
            data: options.fd,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        })
    }




}