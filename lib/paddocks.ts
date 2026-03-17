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
  animal?: PaddockAnimal;
}

// Mock data - demo animals that can be dragged
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
    image: "/images/sheep.jpg",
    breed: "Merino",
    gender: "Female",
    dateOfBirth: "2021-01-10",
  },
  {
    id: "sheep-2",
    animalType: "sheep",
    animalId: "S-002",
    name: "Fleecy",
    image: "/images/sheep.jpg",
    breed: "Romney",
    gender: "Female",
    dateOfBirth: "2021-04-05",
  },
  {
    id: "goat-1",
    animalType: "goat",
    animalId: "G-001",
    name: "Billy",
    image: "/images/goat.jpg",
    breed: "Saanen",
    gender: "Male",
    dateOfBirth: "2020-11-12",
  },
  {
    id: "goat-2",
    animalType: "goat",
    animalId: "G-002",
    name: "Nanny",
    image: "/images/goat.jpg",
    breed: "Alpine",
    gender: "Female",
    dateOfBirth: "2021-02-20",
  },
];

// Create default paddocks
export const DEFAULT_PADDOCKS: Paddock[] = [
  { id: "paddock-1", name: "North Field" },
  { id: "paddock-2", name: "South Pasture" },
  { id: "paddock-3", name: "East Meadow" },
  { id: "paddock-4", name: "West Enclosure" },
  { id: "paddock-5", name: "Central Pen" },
  { id: "paddock-6", name: "Shaded Grove" },
];
