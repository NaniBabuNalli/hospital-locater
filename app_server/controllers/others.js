/* GET 'about' page */
const about = function(req, res) {
    res.render('generic-text', {
      title: 'About Online Grocery Store',
    });
  };
  
    module.exports = {
        about
      };