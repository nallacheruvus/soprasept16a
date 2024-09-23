const { Customer } = require("./first");
const { CustomerPrototype } = require("./sec");

function run() {
    let proto = new Customer("Sujith", "Bhattacharjee", "Pending");
    let prototype = new CustomerPrototype(proto);
    let customer = prototype.clone();
    console.log(customer.details());
}
run();