const LoremIpsum = require("lorem-ipsum").LoremIpsum

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1,
  },
  wordsPerSentence: {
    max: 10,
    min: 8,
  },
});

console.log(lorem.generateParagraphs(3));