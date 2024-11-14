export interface CounterState {
    value: number
  }

export interface IState {
    cart: TCart[] | null
  }


  export interface TCart {
    id: number | null,
    name: string | null,
    location: string | null,
    image: string | null,
    ratings: string | null
  }
