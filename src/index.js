// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix !== undefined) {
        let newArr = [];
        matrix.forEach((item, index) => {
            if (index % 2 != 0) newArr = newArr.concat(item.reverse());
            else newArr = newArr.concat(item);
        });
        return newArr;
    }
    return [];
};
