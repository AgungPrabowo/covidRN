export const casesByCountry = async () => {
  try {
    const res: Response = await fetch("https://api.covid19api.com/summary");
    const resJson: object = res.json();
    return resJson;
  } catch (err) {
    console.log(err);
  }
}