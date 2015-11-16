var MathModule = function () {

    return {
        plus: function (x, y) {
            return x + y;
        },
        minus: function (x, y) {
            return x - y;
        },
        times: function (x, y) {
            return x * y;
        },
        divide: function (x, y) {
            return x / y;
        }
    }
};

module.exports = MathModule;
