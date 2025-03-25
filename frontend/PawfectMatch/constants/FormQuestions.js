const FormQuestions = [
  {
    question: "1. Czy miałeś już kiedyś psa?",
    questionKey: "experience",
    answears: [
      "Nigdy",
      "Miałem, ale nie uważam się za eksperta",
      "Miałem, uważam się za eksperta",
    ],
    answearsKey: ["low", "medium", "high"],
  },
  {
    question: "2. Jak aktywny jesteś na codzień?",
    questionKey: "activityLevel",
    answears: ["Mało [max 30min]", "Średnio [1-2h]", "Bardzo [2h+]"],
    answearsKey: ["low", "medium", "high"],
  },
  {
    question: "3. Jak często jesteś w domu?",
    questionKey: "homePresence",
    answears: ["Rzadko", "Średnio", "Często"],
    answearsKey: ["low", "medium", "high"],
  },
  {
    question: "4. Czy masz alergię na sierść?",
    questionKey: "hasAllergy",
    answears: ["Tak", "Nie"],
    answearsKey: [true, false],
  },
  {
    question: "5. Czy masz w domu dzieci?",
    questionKey: "hasKids",
    answears: ["Tak", "Nie"],
    answearsKey: [true, false],
  },
  {
    question: "6. Czy masz w domu inne zwierzęta?",
    questionKey: "otherAnimals",
    answears: ["Nie", "Tak, inne psy", "Tak, koty", "Tak, inne zwierzęta"],
    answearsKey: [false, true, true, true],
  },
  {
    question: "7. Jak dużego psa chciałbyś/chciałabyś mieć?",
    questionKey: "prefferedSize",
    answears: ["Mały", "Średni", "Duży"],
    answearsKey: ["small", "medium", "large"],
  },
];

export default FormQuestions;
