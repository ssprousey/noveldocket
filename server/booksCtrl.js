module.exports = {
  saveBook: function(req, res) {
    const dbInstance = req.app.get('db')
    console.log("this is dbInstance", dbInstance)

    dbInstance.save_book([req.body.title, req.body.author, req.body.page_length])
      .then(function() {
        res.send('it worked still')
      })

  }
}
