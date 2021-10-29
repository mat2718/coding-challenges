import charBox from "./ProblemOne";

const charBoxTest1 = [
  ["#", "#", "#", "#"],
  ["#", " ", " ", "#"],
  ["#", " ", " ", "#"],
  ["#", "#", "#", "#"],
];

const charBoxTest2 = [["#"]];

const charBoxTest3 = [
  ["#", "#"],
  ["#", "#"],
];

describe("[CHARBOX TEST]", () => {
  it("[Test 1.0]", async () => {
    const res = await charBox(4);
    expect(res).toEqual(charBoxTest1);
  });

  it("[Test 2.0]", async () => {
    const res = await charBox(1);
    expect(res).toEqual(charBoxTest2);
  });

  it("[Test 3.0]", async () => {
    const res = await charBox(2);
    expect(res).toEqual(charBoxTest3);
  });
});
