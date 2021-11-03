import { shiftToRight } from "./ProblemTwo";

// creates a new array with the zeroes at the end
describe("[shiftToRight TEST]", () => {
  it("[Test 1.0]", async () => {
    const res = await shiftToRight(80, 3);
    expect(res).toEqual(10);
  });

  it("[Test 2.0]", async () => {
    const res = await shiftToRight(-24, 2);
    expect(res).toEqual(-6);
  });

  it("[Test 3.0]", async () => {
    const res = await shiftToRight(-5, 1);
    expect(res).toEqual(-3);
  });

  it("[Test 4.0]", async () => {
    const res = await shiftToRight(4666, 6);
    expect(res).toEqual(72);
  });

  it("[Test 5.0]", async () => {
    const res = await shiftToRight(3777, 6);
    expect(res).toEqual(59);
  });

  it("[Test 6.0]", async () => {
    const res = await shiftToRight(-512, 10);
    expect(res).toEqual(-1);
  });
});
