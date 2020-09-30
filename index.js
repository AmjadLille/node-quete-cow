const information = require("./information");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `hello I'm ${information.name} from ${information.campus} Campus`,
    e: "oO",
    T: "U ",
  })
);
