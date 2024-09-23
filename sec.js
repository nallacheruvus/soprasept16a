const { Customer } = require("./first");

module.exports.CustomerPrototype = function (proto) {
    this.proto = proto;
    this.clone = function () {
        let cust = new Customer();
        cust.first = proto.first;
        cust.last = proto.last;
        cust.status = proto.status;
        return cust;
    }
}