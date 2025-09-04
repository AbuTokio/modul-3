export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  cries: {
    latest: string
    legacy: string
  }
  sprites: {
    back_default: string
    front_default: string
  }
}
