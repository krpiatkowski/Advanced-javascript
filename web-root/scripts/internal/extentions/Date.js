Date.prototype.addDays = function(days) {
    return new Date(this.getTime() + 1000 * 60 * 60 * 24 * days);
}