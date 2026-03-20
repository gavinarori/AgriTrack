export interface MedicalRecord {
  id: string;
  date: Date;
  type: string;
  description: string;
  notes: string;
}

export interface VaccinationRecord {
  id: string;
  vaccine: string;
  date: Date;
  nextDueDate: Date;
  veterinarian?: string;
}

export interface WeightEntry {
  date: Date;
  weight: number; // in kg
}

export interface AnimalProfile {
  id: string;
  name: string;
  type: "cow" | "sheep" | "goat";
  breed: string;
  gender: "male" | "female";
  dateOfBirth: Date;
  image: string;
  medicalRecords: MedicalRecord[];
  vaccinations: VaccinationRecord[];
  weightHistory: WeightEntry[];
  notes: string;
}

export interface FarmerProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  farmName: string;
  location: string;
  totalAnimals: number;
  animals: AnimalProfile[];
}

// Sample farmer data with complete profiles
export const SAMPLE_FARMER: FarmerProfile = {
  id: "farmer-1",
  name: "John Smith",
  email: "john.smith@farm.com",
  phone: "+1 (555) 234-5678",
  farmName: "Green Pastures Farm",
  location: "Rural County, State",
  totalAnimals: 5,
  animals: [
    {
      id: "animal-1",
      name: "Bessie",
      type: "cow",
      breed: "Holstein",
      gender: "female",
      dateOfBirth: new Date("2019-03-15"),
      image: "/images/cow.jpg",
      medicalRecords: [
        {
          id: "med-1",
          date: new Date("2024-03-10"),
          type: "Antibiotic Treatment",
          description: "Mastitis treatment",
          notes: "Left udder inflammation. Amoxicillin prescribed. 7-day course.",
        },
        {
          id: "med-2",
          date: new Date("2024-01-22"),
          type: "General Checkup",
          description: "Routine veterinary examination",
          notes: "Overall health good. No concerns noted.",
        },
        {
          id: "med-3",
          date: new Date("2023-11-08"),
          type: "Deworming",
          description: "Internal parasite treatment",
          notes: "Quarterly deworming. Standard treatment applied.",
        },
      ],
      vaccinations: [
        {
          id: "vacc-1",
          vaccine: "Brucellosis",
          date: new Date("2024-02-14"),
          nextDueDate: new Date("2025-02-14"),
          veterinarian: "Dr. Sarah Johnson",
        },
        {
          id: "vacc-2",
          vaccine: "Leptospirosis",
          date: new Date("2024-02-14"),
          nextDueDate: new Date("2025-02-14"),
          veterinarian: "Dr. Sarah Johnson",
        },
      ],
      weightHistory: [
        { date: new Date("2024-01-05"), weight: 650 },
        { date: new Date("2024-02-10"), weight: 658 },
        { date: new Date("2024-03-15"), weight: 665 },
        { date: new Date("2024-04-20"), weight: 672 },
        { date: new Date("2024-05-25"), weight: 678 },
        { date: new Date("2024-06-30"), weight: 685 },
      ],
      notes: "High milk production. Good temperament.",
    },
    {
      id: "animal-2",
      name: "Daisy",
      type: "cow",
      breed: "Jersey",
      gender: "female",
      dateOfBirth: new Date("2020-07-22"),
      image: "/images/cow.jpg",
      medicalRecords: [
        {
          id: "med-4",
          date: new Date("2024-03-01"),
          type: "Hoof Trimming",
          description: "Routine hoof care",
          notes: "Regular maintenance. No issues found.",
        },
        {
          id: "med-5",
          date: new Date("2024-01-15"),
          type: "General Checkup",
          description: "Routine examination",
          notes: "All vitals normal.",
        },
      ],
      vaccinations: [
        {
          id: "vacc-3",
          vaccine: "BVD",
          date: new Date("2024-03-05"),
          nextDueDate: new Date("2025-03-05"),
          veterinarian: "Dr. Sarah Johnson",
        },
      ],
      weightHistory: [
        { date: new Date("2024-01-05"), weight: 480 },
        { date: new Date("2024-02-10"), weight: 485 },
        { date: new Date("2024-03-15"), weight: 488 },
        { date: new Date("2024-04-20"), weight: 492 },
        { date: new Date("2024-05-25"), weight: 495 },
        { date: new Date("2024-06-30"), weight: 498 },
      ],
      notes: "Good milk quality. Friendly with handlers.",
    },
    {
      id: "animal-3",
      name: "Woolly",
      type: "sheep",
      breed: "Merino",
      gender: "female",
      dateOfBirth: new Date("2021-04-10"),
      image: "/images/sheep.jpg",
      medicalRecords: [
        {
          id: "med-6",
          date: new Date("2024-02-28"),
          type: "Shearing",
          description: "Wool harvest",
          notes: "Excellent wool quality. 15 lbs harvested.",
        },
        {
          id: "med-7",
          date: new Date("2024-01-10"),
          type: "Parasite Treatment",
          description: "External parasite control",
          notes: "No signs of mites or lice.",
        },
      ],
      vaccinations: [
        {
          id: "vacc-4",
          vaccine: "Clostridium C & D",
          date: new Date("2024-03-20"),
          nextDueDate: new Date("2025-03-20"),
          veterinarian: "Dr. Michael Brown",
        },
      ],
      weightHistory: [
        { date: new Date("2024-01-05"), weight: 85 },
        { date: new Date("2024-02-10"), weight: 87 },
        { date: new Date("2024-03-15"), weight: 89 },
        { date: new Date("2024-04-20"), weight: 91 },
        { date: new Date("2024-05-25"), weight: 93 },
        { date: new Date("2024-06-30"), weight: 95 },
      ],
      notes: "Premium wool production. Healthy and active.",
    },
    {
      id: "animal-4",
      name: "Billy",
      type: "goat",
      breed: "Alpine",
      gender: "male",
      dateOfBirth: new Date("2022-05-18"),
      image: "/images/goat.jpg",
      medicalRecords: [
        {
          id: "med-8",
          date: new Date("2024-03-12"),
          type: "Castration Check",
          description: "Post-castration follow-up",
          notes: "Healing well. No complications.",
        },
      ],
      vaccinations: [
        {
          id: "vacc-5",
          vaccine: "CDT (Clostridium C&D, Tetanus)",
          date: new Date("2024-02-15"),
          nextDueDate: new Date("2025-02-15"),
          veterinarian: "Dr. Michael Brown",
        },
      ],
      weightHistory: [
        { date: new Date("2024-01-05"), weight: 75 },
        { date: new Date("2024-02-10"), weight: 78 },
        { date: new Date("2024-03-15"), weight: 81 },
        { date: new Date("2024-04-20"), weight: 84 },
        { date: new Date("2024-05-25"), weight: 87 },
        { date: new Date("2024-06-30"), weight: 90 },
      ],
      notes: "Strong, healthy buck. Good temperament.",
    },
    {
      id: "animal-5",
      name: "Nanny",
      type: "goat",
      breed: "Saanen",
      gender: "female",
      dateOfBirth: new Date("2020-11-25"),
      image: "/images/goat.jpg",
      medicalRecords: [
        {
          id: "med-9",
          date: new Date("2024-03-08"),
          type: "Milk Production Check",
          description: "Lactation assessment",
          notes: "Excellent milk yield. Quality tests passed.",
        },
      ],
      vaccinations: [
        {
          id: "vacc-6",
          vaccine: "CDT (Clostridium C&D, Tetanus)",
          date: new Date("2024-02-20"),
          nextDueDate: new Date("2025-02-20"),
          veterinarian: "Dr. Michael Brown",
        },
      ],
      weightHistory: [
        { date: new Date("2024-01-05"), weight: 65 },
        { date: new Date("2024-02-10"), weight: 67 },
        { date: new Date("2024-03-15"), weight: 68 },
        { date: new Date("2024-04-20"), weight: 70 },
        { date: new Date("2024-05-25"), weight: 71 },
        { date: new Date("2024-06-30"), weight: 72 },
      ],
      notes: "Produces premium milk. Very productive.",
    },
  ],
};
