module.exports = function(app){

// app index
app.route('/').get((req,res)=>{
    res.render('index',
        {
            layout : 'layouts/main-layouts',
            title:"index"
        });
})

}