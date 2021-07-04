module.exports = function(app){

// app index
app.route('/').get((req,res)=>{
    res.render('login',
        {
            layout : 'layouts/main-layouts',
            title:"Selamat Datang",
            style : "login",
            script : null
        });
})

}