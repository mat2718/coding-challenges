import getHashTags from "./ProblemTwo";

const getHashTags1 = ["#christmas", "#probably", "#will"];

const getHashTags2 = ["#avocado", "#became", "#global"];

const getHashTags3 = ["#surprise", "#parents", "#fruit"];

describe("[getHashTags TEST]", () => {
  it("[Test 1.0]", async () => {
    const res = await getHashTags(
      "Why You Will Probably Pay More for Your Christmas Tree This Year"
    );
    expect(res).toEqual(getHashTags1);
  });

  it("[Test 2.0]", async () => {
    const res = await getHashTags(
      "How the Avocado Became the Fruit of the Global Trade"
    );
    expect(res).toEqual(getHashTags2);
  });

  it("[Test 3.0]", async () => {
    const res = await getHashTags(
      "Hey Parents, Surprise, Fruit Juice Is Not Fruit"
    );
    expect(res).toEqual(getHashTags3);
  });
});
