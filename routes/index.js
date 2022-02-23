var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// module.exports.getByAge = (req, res) => {
//   // It was earlier defined as a static method inside methods/index.js
//   User.findByAge(20, (err, data) => {
//     if (err)
//       return res
//         .status(HttpStatus.BAD_REQUEST)
//         .json({ message: "Age Mismatch" });
//     res.status(HttpStatus.OK).json(data);
//   });
// };