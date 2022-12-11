export class State {
  constructor(public key: string, public name: string) {}
}

export class Country {
  constructor(public county: string, public city: string) {}
}
export class StateandCountry {
  constructor(
    public id: number,
    public name: string,
    public country_id: number,
    public country_code: string,
    public country_name: string,
    public state_code: string,
    public type: null,
    public latitude: string,
    public longitude: string
  ) {}
}
