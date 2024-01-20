var questions = [
  {
    question: "What is the name of Frodo's loyal friend and gardener?",
    answers: [
      { text: "Samwise Gamgee", correct: true },
      { text: "Meriadoc Brandybuck", correct: false },
      { text: "Peregrin Took", correct: false },
      { text: "Faramir", correct: false },
    ],
  },
  {
    question:
      "Which creature is known for saying 'My precious' while referring to the One Ring?",
    answers: [
      { text: "Gollum", correct: true },
      { text: "Smeagol", correct: false },
      { text: "Bilbo Baggins", correct: false },
      { text: "Frodo Baggins", correct: false },
    ],
  },
  {
    question: "What is the name of Aragorn's sword?",
    answers: [
      { text: "Andúril", correct: true },
      { text: "Sting", correct: false },
      { text: "Glamdring", correct: false },
      { text: "Narsil", correct: false },
    ],
  },
  {
    question: "Who is the king of the Riders of Rohan in The Two Towers?",
    answers: [
      { text: "Théoden", correct: true },
      { text: "Éomer", correct: false },
      { text: "Éowyn", correct: false },
      { text: "Grima Wormtongue", correct: false },
    ],
  },
  {
    question:
      "What is the name of the giant spider encountered by Frodo and Sam in Mordor?",
    answers: [
      { text: "Shelob", correct: true },
      { text: "Ungoliant", correct: false },
      { text: "Arachne", correct: false },
      { text: "Lobelia Sackville-Baggins", correct: false },
    ],
  },
  {
    question:
      "Who is the Lord of Lothlórien, the ruler of the elves residing in the forest?",
    answers: [
      { text: "Galadriel", correct: true },
      { text: "Celeborn", correct: false },
      { text: "Haldir", correct: false },
      { text: "Thranduil", correct: false },
    ],
  },
  {
    question: "Which character is known as the White Wizard?",
    answers: [
      { text: "Gandalf the White", correct: true },
      { text: "Saruman the White", correct: false },
      { text: "Radagast the Brown", correct: false },
      { text: "Alatar the Blue", correct: false },
    ],
  },
  {
    question:
      "What is the name of Frodo's pony that travels with him in the Shire?",
    answers: [
      { text: "Bill the Pony", correct: true },
      { text: "Shadowfax", correct: false },
      { text: "Brego", correct: false },
      { text: "Asfaloth", correct: false },
    ],
  },
  {
    question:
      "What is the name of the elf who joins the Fellowship and becomes Frodo's close companion?",
    answers: [
      { text: "Legolas", correct: false },
      { text: "Gimli", correct: false },
      { text: "Arwen", correct: false },
      { text: "Arwen", correct: true },
    ],
  },
  {
    question:
      "What is the ancient city of the men that Aragorn, Legolas, and Gimli seek to aid in The Two Towers?",
    answers: [
      { text: "Minas Tirith", correct: false },
      { text: "Rivendell", correct: false },
      { text: "Gondor", correct: false },
      { text: "Rohan", correct: true },
    ],
  },
  {
    question: "Who is the father of Boromir and Faramir?",
    answers: [
      { text: "Denethor", correct: true },
      { text: "Théoden", correct: false },
      { text: "Aragorn", correct: false },
      { text: "Elrond", correct: false },
    ],
  },
  {
    question: "What is the name of the fortress of Sauron in Mordor?",
    answers: [
      { text: "Barad-dûr", correct: true },
      { text: "Isengard", correct: false },
      { text: "Orthanc", correct: false },
      { text: "Minas Morgul", correct: false },
    ],
  },
  {
    question:
      "Which hobbit is known for his love of food and is the best friend of Frodo?",
    answers: [
      { text: "Samwise Gamgee", correct: false },
      { text: "Peregrin Took", correct: false },
      { text: "Meriadoc Brandybuck", correct: true },
      { text: "Frodo Baggins", correct: false },
    ],
  },
  {
    question:
      "What is the name of the river that flows through Gondor and Minas Tirith?",
    answers: [
      { text: "Anduin", correct: true },
      { text: "Bruinen", correct: false },
      { text: "Celebrant", correct: false },
      { text: "Entwash", correct: false },
    ],
  },
  {
    question:
      "Who is the dark and treacherous guide appointed by Saruman to lead the Fellowship through Moria?",
    answers: [
      { text: "Gollum", correct: false },
      { text: "Grima Wormtongue", correct: false },
      { text: "Bill the Pony", correct: false },
      { text: "Durin's Bane (Balrog)", correct: true },
    ],
  },
  {
    question:
      "What is the name of the Shire's chief law-enforcement officer, responsible for maintaining order?",
    answers: [
      { text: "Faramir", correct: false },
      { text: "Théoden", correct: false },
      { text: "Tom Bombadil", correct: false },
      { text: "Sheriff of the Shire (Hobbiton)", correct: true },
    ],
  },
  {
    question: "Which kingdom was ruled by Thranduil, the father of Legolas?",
    answers: [
      { text: "Gondor", correct: false },
      { text: "Mirkwood", correct: true },
      { text: "Lothlórien", correct: false },
      { text: "Rohan", correct: false },
    ],
  },
  {
    question:
      "What is the name of the horse given to Legolas by Éomer in The Two Towers?",
    answers: [
      { text: "Shadowfax", correct: false },
      { text: "Arod", correct: false },
      { text: "Firefoot", correct: false },
      { text: "Hasufel", correct: true },
    ],
  },
  {
    question:
      "Which character becomes the new bearer of the One Ring after Frodo?",
    answers: [
      { text: "Samwise Gamgee", correct: false },
      { text: "Gollum", correct: true },
      { text: "Aragorn", correct: false },
      { text: "Gimli", correct: false },
    ],
  },
  {
    question:
      "What is the name of the wizard who guides Frodo Baggins and the Fellowship of the Ring?",
    answers: [
      { text: "Gandalf", correct: true },
      { text: "Saruman", correct: false },
      { text: "Radagast", correct: false },
      { text: "Alatar", correct: false },
    ],
  },
  {
    question: "Who is the rightful heir to the throne of Gondor?",
    answers: [
      { text: "Frodo Baggins", correct: false },
      { text: "Aragorn", correct: true },
      { text: "Boromir", correct: false },
      { text: "Faramir", correct: false },
    ],
  },
  {
    question:
      "What is the One Ring's inscription in the Black Speech of Mordor?",
    answers: [
      {
        text: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
        correct: false,
      },
      {
        text: "Ash nazg durbat ulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatul.",
        correct: true,
      },
      {
        text: "I am looking for someone to share in an adventure that I am arranging, and it's very difficult to find anyone.",
        correct: false,
      },
      { text: "Speak, friend, and enter.", correct: false },
    ],
  },
  {
    question: "Who is the leader of the Ents in The Two Towers?",
    answers: [
      { text: "Treebeard", correct: true },
      { text: "Quickbeam", correct: false },
      { text: "Old Man Willow", correct: false },
      { text: "Fangorn", correct: false },
    ],
  },
  {
    question:
      "What creature does Gollum become after being corrupted by the One Ring?",
    answers: [
      { text: "Orc", correct: false },
      { text: "Troll", correct: false },
      { text: "Balrog", correct: false },
      { text: "Sméagol", correct: true },
    ],
  },
  {
    question: "What is the capital city of Rohan?",
    answers: [
      { text: "Minas Tirith", correct: false },
      { text: "Helm's Deep", correct: false },
      { text: "Edoras", correct: true },
      { text: "Isengard", correct: false },
    ],
  },
  {
    question:
      "Who is the Dark Lord and master of Mordor in The Lord of the Rings?",
    answers: [
      { text: "Sauron", correct: true },
      { text: "Morgoth", correct: false },
      { text: "The Witch-king of Angmar", correct: false },
      { text: "Saruman", correct: false },
    ],
  },
  {
    question:
      "What is the name of Frodo's uncle, who originally possessed the One Ring?",
    answers: [
      { text: "Bilbo Baggins", correct: true },
      { text: "Balin", correct: false },
      { text: "Déagol", correct: false },
      { text: "Sméagol", correct: false },
    ],
  },
  {
    question: "Which character says the famous line: 'You shall not pass!'",
    answers: [
      { text: "Legolas", correct: false },
      { text: "Aragorn", correct: false },
      { text: "Gandalf", correct: true },
      { text: "Gimli", correct: false },
    ],
  },
  {
    question:
      "What is the name of the river that flows through the center of Mirkwood?",
    answers: [
      { text: "Anduin", correct: false },
      { text: "Celebrant", correct: false },
      { text: "Running River", correct: false },
      { text: "Forest River", correct: true },
    ],
  },
];
