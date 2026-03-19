export interface PaddockAnimal {
  id: string;
  animalType: "cow" | "sheep" | "goat";
  animalId: string;
  name: string;
  image: string;
  breed: string;
  gender: string;
  dateOfBirth: string;
}

export interface Paddock {
  id: string;
  name: string;
  animals: PaddockAnimal[];
  capacity: number;
}

export const AVAILABLE_ANIMALS: PaddockAnimal[] = [
  {
    id: "cow-1",
    animalType: "cow",
    animalId: "C-001",
    name: "Bessie",
    image: "/beautiful-cow-green-grass-with-blue-sky.jpg",
    breed: "Holstein",
    gender: "Female",
    dateOfBirth: "2020-03-15",
  },
  {
    id: "cow-2",
    animalType: "cow",
    animalId: "C-002",
    name: "Ferdinand",
    image: "/images/cow.jpg",
    breed: "Angus",
    gender: "Male",
    dateOfBirth: "2019-06-22",
  },
  {
    id: "sheep-1",
    animalType: "sheep",
    animalId: "S-001",
    name: "Woolly",
    image: "/vertical-shot-sheep-nature (1).jpg",
    breed: "Merino",
    gender: "Female",
    dateOfBirth: "2021-01-10",
  },
  {
    id: "goat-1",
    animalType: "goat",
    animalId: "G-001",
    name: "Billy",
    image: "/goat-field-morning-light.jpg",
    breed: "Saanen",
    gender: "Male",
    dateOfBirth: "2020-11-12",
  },
];

export const DEFAULT_PADDOCKS: Paddock[] = [
  { id: "p1", name: "North Field", animals: [], capacity: 15 },
  { id: "p2", name: "South Pasture", animals: [], capacity: 15 },
  { id: "p3", name: "East Meadow", animals: [], capacity: 15 },
  { id: "p4", name: "West Enclosure", animals: [], capacity: 15 },
];