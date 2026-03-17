export interface Step {
  id: string;
  title: string;
  description: string;
  fields: { name: string; type: string; label: string }[];
}

export interface AnimalGuide {
  id: string;
  name: string;
  description: string;
  image: string;
  steps: Step[];
}

export const ANIMALS: AnimalGuide[] = [
  {
    id: "cow",
    name: "Cow",
    description: "Dairy and beef cattle management",
    image: "/portrait-beautiful-brown-cow.jpg",
    steps: [
      {
        id: "add-animal",
        title: "Add Animal",
        description: "Register a new cow with essential identification details",
        fields: [
          { name: "animalId", type: "text", label: "Animal ID" },
          { name: "breed", type: "text", label: "Breed" },
          { name: "gender", type: "select", label: "Gender" },
          { name: "dateOfBirth", type: "date", label: "Date of Birth" },
          { name: "photo", type: "file", label: "Photo" },
        ],
      },
      {
        id: "weight-history",
        title: "Weight History",
        description: "Track weight progression over time",
        fields: [
          { name: "date", type: "date", label: "Date" },
          { name: "weight", type: "number", label: "Weight (kg)" },
        ],
      },
      {
        id: "vaccination-history",
        title: "Vaccination History",
        description: "Manage vaccination records and schedules",
        fields: [
          { name: "vaccine", type: "select", label: "Vaccine Type" },
          { name: "date", type: "date", label: "Vaccination Date" },
          { name: "nextDate", type: "date", label: "Next Vaccination" },
        ],
      },
      {
        id: "health-notes",
        title: "Health Notes",
        description: "Record health treatments and observations",
        fields: [
          { name: "notes", type: "textarea", label: "Health Notes" },
          { name: "date", type: "date", label: "Date" },
        ],
      },
    ],
  },
  {
    id: "sheep",
    name: "Sheep",
    description: "Wool and meat sheep management",
    image: "/vertical-shot-sheep-nature.jpg",
    steps: [
      {
        id: "add-animal",
        title: "Add Animal",
        description: "Register a new sheep with essential identification details",
        fields: [
          { name: "animalId", type: "text", label: "Animal ID" },
          { name: "breed", type: "text", label: "Breed" },
          { name: "gender", type: "select", label: "Gender" },
          { name: "dateOfBirth", type: "date", label: "Date of Birth" },
          { name: "photo", type: "file", label: "Photo" },
        ],
      },
      {
        id: "weight-history",
        title: "Weight History",
        description: "Track weight progression over time",
        fields: [
          { name: "date", type: "date", label: "Date" },
          { name: "weight", type: "number", label: "Weight (kg)" },
        ],
      },
      {
        id: "vaccination-history",
        title: "Vaccination History",
        description: "Manage vaccination records and schedules",
        fields: [
          { name: "vaccine", type: "select", label: "Vaccine Type" },
          { name: "date", type: "date", label: "Vaccination Date" },
          { name: "nextDate", type: "date", label: "Next Vaccination" },
        ],
      },
      {
        id: "health-notes",
        title: "Health Notes",
        description: "Record health treatments and observations",
        fields: [
          { name: "notes", type: "textarea", label: "Health Notes" },
          { name: "date", type: "date", label: "Date" },
        ],
      },
     
    ],
  },
  {
    id: "goat",
    name: "Goat",
    description: "Dairy and meat goat management",
    image: "/adorable-black-goat-with-brown-patterns-zoo.jpg",
    steps: [
      {
        id: "add-animal",
        title: "Add Animal",
        description: "Register a new goat with essential identification details",
        fields: [
          { name: "animalId", type: "text", label: "Animal ID" },
          { name: "breed", type: "text", label: "Breed" },
          { name: "gender", type: "select", label: "Gender" },
          { name: "dateOfBirth", type: "date", label: "Date of Birth" },
          { name: "photo", type: "file", label: "Photo" },
        ],
      },
      {
        id: "weight-history",
        title: "Weight History",
        description: "Track weight progression over time",
        fields: [
          { name: "date", type: "date", label: "Date" },
          { name: "weight", type: "number", label: "Weight (kg)" },
        ],
      },
      {
        id: "vaccination-history",
        title: "Vaccination History",
        description: "Manage vaccination records and schedules",
        fields: [
          { name: "vaccine", type: "select", label: "Vaccine Type" },
          { name: "date", type: "date", label: "Vaccination Date" },
          { name: "nextDate", type: "date", label: "Next Vaccination" },
        ],
      },
      {
        id: "health-notes",
        title: "Health Notes",
        description: "Record health treatments and observations",
        fields: [
          { name: "notes", type: "textarea", label: "Health Notes" },
          { name: "date", type: "date", label: "Date" },
        ],
      },
    ],
  },
];

export function getAnimalGuide(animalId: string): AnimalGuide | undefined {
  return ANIMALS.find((animal) => animal.id === animalId);
}
