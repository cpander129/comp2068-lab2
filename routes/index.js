'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //req.query.name for ?name
    //create calc function (method, x,. y)
    // parse x and y as floats
    //parseFloat(x)
    function calculate(method, x, y) {
        /*
         * Check method and do math
         * If not valid return an error
         */
        let answer;
        switch (method) {
            case "add":
                answer = parseFloat(x) + parseFloat(y);
                break;
            case "subtract":
                answer = parseFloat(x) - parseFloat(y);
                break;
            case "multiply":
                answer = parseFloat(x) * parseFloat(y);
                break;
            case "divide":
                answer = parseFloat(x) / parseFloat(y);
                break;
            default:
                answer = "Invalid math operation, please choose from add, subtract, mulitply and divide."
        }
        return answer;
    }
    // Grab variables from quesry and store values
    let method = req.query.method;
    let x = req.query.x;
    let y = req.query.y;

    //call calculate function and display answer to console
    console.log(x + " " + method + " " + y + " = " + calculate(method, x, y));
    //call calculate function and display answer to page
    return res.send(x + " " + method + " " + y + " = " + calculate(method, x, y));
    res.end();
});

module.exports = router;
