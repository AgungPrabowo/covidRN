export interface Summary {
  Message: string;
  Global: Global;
  Countries: Country[];
  Date: string;
  Loading: boolean;
}

export interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export class Convert {
  public static toSummary(json: string): Summary {
    return JSON.parse(json);
  }

  public static initialSummary(): Summary {
    return {
      Message: "",
      Loading: true,
      Global: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
      },
      Countries: [
        {
          Country: "",
          CountryCode: "",
          Slug: "",
          NewConfirmed: 0,
          TotalConfirmed: 0,
          NewDeaths: 0,
          TotalDeaths: 0,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: ""
        }
      ],
      Date: ""
    }
  }

  public static summaryToJson(value: Summary): string {
    return JSON.stringify(value);
  }
}
