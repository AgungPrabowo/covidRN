export interface Summary extends Map {
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

export interface IReport {
  title: string;
  icon: string;
  count?: number;
}

export interface Map {
  success: boolean;
  message: Message[];
  Loading: boolean;
}

export interface Message {
  county_name: string;
  state_name: string;
  confirmed: number;
  new: number;
  death: number;
  new_death: number;
  fatality_rate: string;
  latitude: number;
  longitude: number;
  last_update: string;
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
      Countries: [],
      Date: "",
      success: false,
      message: [],
    }
  }

  public static summaryToJson(value: Summary): string {
    return JSON.stringify(value);
  }

  public static toMap(json: string): Map {
    return JSON.parse(json);
  }

  public static mapToJson(value: Map): string {
    return JSON.stringify(value);
  }

}
