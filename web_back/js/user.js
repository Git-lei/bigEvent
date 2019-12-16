var user = {
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

    getUser: function (options) {
        $.ajax({
            type: 'get',
            url: GETUSER,
            success: function (res) {
                console.log(res);
                date = res.data
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail(res);
                }

            }
        })
    },

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
    }






}