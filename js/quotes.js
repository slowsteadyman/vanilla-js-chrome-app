const quotes = [
  {
    quote: "매미는 비가 와도 운다",
    author: "thornapple",
  },
  {
    quote: "수성의 하루",
    author: "thornapple",
  },
  {
    quote: "석류의 맛",
    author: "thornapple",
  },
  {
    quote: "넓은 밤",
    author: "thornapple",
  },
  {
    quote: "플랑크톤",
    author: "thornapple",
  },
  {
    quote: "2월",
    author: "thornapple",
  },
  {
    quote: "시퍼런 봄",
    author: "thornapple",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `오늘의 노래 : ${todayQuote.quote} - ${todayQuote.author}`;
