import { zeroesToEnd, pushZerosToEnd } from "./ProblemOne";

const testObjects = [
  [1, 2, 0, 0, 4, 0, 5],
  [0, 0, 2, 0, 5],
  [4, 4, 5],
  [0, 0]
];

const testResults = [
  [1, 2, 4, 5, 0, 0, 0],
  [2, 5, 0, 0, 0],
  [4, 4, 5],
  [0, 0],
];

// creates a new array with the zeroes at the end
describe("[zeroesToEnd TEST]", () => {
  it("[Test 1.0]", async () => {
    const res = await zeroesToEnd(testObjects[0]);
    expect(res).toEqual(testResults[0]);
  });

  it("[Test 2.0]", async () => {
    const res = await zeroesToEnd(testObjects[1]));
    expect(res).toEqual(testResults[1]);
  });

  it("[Test 3.0]", async () => {
    const res = await zeroesToEnd([testObjects[2]);
    expect(res).toEqual(testResults[2]);
  });

  it("[Test 3.0]", async () => {
    const res = await zeroesToEnd(testObjects[3]);
    expect(res).toEqual(testResults[3]);
  });
});

// mutates the same array with zeros at the end
describe("[pushZerosToEnd TEST]", () => {
  it("[Test 1.0]", async () => {
    const res = await pushZerosToEnd(testObjects[0]);
    expect(res).toEqual(testResults[0]);
  });

  it("[Test 2.0]", async () => {
    const res = await pushZerosToEnd(testObjects[1]);
    expect(res).toEqual(testResults[1]);
  });

  it("[Test 3.0]", async () => {
    const res = await pushZerosToEnd(testObjects[2]);
    expect(res).toEqual(testResults[2]);
  });

  it("[Test 3.0]", async () => {
    const res = await pushZerosToEnd(testObjects[3]);
    expect(res).toEqual(testResults[3]);
  });
});
