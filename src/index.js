exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            array[i] < min ? (min = array[i]) : false;
        }
        return min;
    }
};

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            array[i] > max ? (max = array[i]) : false;
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        let avg = 0;
        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }
        return avg / array.length;
    }
};
