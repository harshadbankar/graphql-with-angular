export type Location = {
  id: number
  name: String
  address: String
  description: String
	imageUrl: String
  url: String
}

export type Query = {
  allLocations: Location[];
}
