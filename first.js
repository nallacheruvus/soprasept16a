module.exports.Customer = function (first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;
    this.details = function () {
        console.log(`FullName:${this.first} ${this.last}\tStatus:${this.status}`);
    }
}
