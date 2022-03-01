const quotes = [
  {
    quote : "무슨 생각을 해.. 그냥하는거지",
    author : "김연아",
  },
  {
    quote : "ストレス貯めるならお金を貯めろ",
    author : "二宮和也",
  },
  {
    quote : "勝てるか勝てないかじゃない、やるかやらないかだ。",
    author : "櫻井翔",
  },
  {
    quote : "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
    author : "박명수",
  },
  {
    quote : "그래도 해야지 어떡해",
    author : "태연",
  }
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

//Math.random() 0와1사이의 랜덤 숫자(소숫점)
//Math.round() 반올림
//Math.ceil() 올림
//Math.floor() 내림

//배열 길이만킁의 랜덤 정수 구하기 
const index = Math.floor(Math.random()* quotes.length)

// 랜덤으로 명언 구하기
const printQuote = quotes[index];

//화면출력
quote.innerText = printQuote.quote;
author.innerText = "- "+printQuote.author+" -";