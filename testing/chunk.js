// [1,2,3,4,5,6,7,8]

function chunk(list, chunkSize = list.length) {
    if(isNaN(chunkSize)) throw new Error("ChunkSize must be a number!");
    return list.reduce((acc, item, index) => {
        if (index % chunkSize === 0) acc.push([]);
        acc[acc.length - 1].push(item);
        return acc;
    }, []);
}

function isEqual(rigth, left) {
    return JSON.stringify(rigth) === JSON.stringify(left);
}

function test() {
    const expectedResult = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
    const result = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

    isEqual(result, expectedResult) ? console.log("TEST PASS") : console.error("TEST ERRROR");

    try{
        const result2 = chunk([1,2,3,4,5,6,7,8,9,10], NaN);
    } catch (e) {
        if(e instanceof Error && e.message === "ChunkSize must be a number!"){
            console.log("TEST PASSSEEEDD");
        }
    }
    isEqual(result2, expectedResult) ? console.log("TEST PASS") : console.error("TEST ERRROR");   
}
test()