export const casesByCountry = async (isSummary: boolean) => {
  try {
    const endpoint: string = isSummary ? "https://api.covid19api.com/summary" : "https://covid19-us-api.herokuapp.com/county";
    const res: Response = await fetch(endpoint);
    const resJson: object = res.json();
    return resJson;
  } catch (err) {
    console.log(err);
  }
}