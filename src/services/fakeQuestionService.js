

const questions = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "New York is ____ large city",
    answers:[
                {
                  _id: "11",
                  text: "a",
                  correctAnswer: true,

                 },
                  {
                    _id: "12",
                    text: "the"
                  },
                    {
                      _id: "13",
                      text: "no article"
                    },
                      {
                        _id: "14",
                        text: "an"
                      }
                ],
    score: 0


  },

  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Are you attending ____reception today",
    answers:[
                {
                  _id: "21",
                  text: "adfgfdgfdg"
                 },
                  {
                    _id: "22",
                    text: "thedfghtfgf",
                    correctAnswer: true
                  },
                    {
                      _id: "23",
                      text: "no article"
                    },
                      {
                        _id: "24",
                        text: "an"
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "____ Oranges are grown in Nagpur",
    answers:[
                {
                  _id: "31",
                  text: "a"
                 },
                  {
                    _id: "32",
                    text: "the"
                  },
                    {
                      _id: "33",
                      text: "no article",
                      correctAnswer: true
                    },
                      {
                        _id: "34",
                        text: "an"
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "She wants to become ____engineer",
    answers:[
                {
                  _id: "41",
                  text: "a"
                 },
                  {
                    _id: "42",
                    text: "the"
                  },
                    {
                      _id: "43",
                      text: "no article"
                    },
                      {
                        _id: "44",
                        text: "an",
                        correctAnswer: true
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "____lion is a ferocious animal",
    answers:[
                {
                  _id: "51",
                  text: "a"
                 },
                  {
                    _id: "52",
                    text: "the",
                    correctAnswer: true
                  },
                    {
                      _id: "53",
                      text: "no article"
                    },
                      {
                        _id: "54",
                        text: "an"
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "____ unit means a measurement",
    answers:[
                {
                  _id: "61",
                  text: "a"
                 },
                  {
                    _id: "62",
                    text: "the",
                    correctAnswer: true
                  },
                    {
                      _id: "63",
                      text: "no article"
                    },
                      {
                        _id: "64",
                        text: "an"
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "He is ____honest official.",
    answers:[
                {
                  _id: "71",
                  text: "a"
                 },
                  {
                    _id: "72",
                    text: "the"
                  },
                    {
                      _id: "73",
                      text: "no article"
                    },
                      {
                        _id: "74",
                        text: "an",
                        correctAnswer: true
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "He is ____ European",
    answers:[
                {
                  _id: "81",
                  text: "a",
                  correctAnswer: true
                 },
                  {
                    _id: "82",
                    text: "the"
                  },
                    {
                      _id: "83",
                      text: "no article"
                    },
                      {
                        _id: "84",
                        text: "an"
                      }
                ],
    score: 0

  },

  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Let us play ____ chess",
    answers:[
                {
                  _id: "91",
                  text: "a"
                 },
                  {
                    _id: "92",
                    text: "the"
                  },
                    {
                      _id: "93",
                      text: "no article",
                      correctAnswer: true
                    },
                      {
                        _id: "94",
                        text: "an"
                      }
                ],
    score: 0

  },

  {
    _id: "5p21ca6aab7f6fbccd471000",
    title: "He hopes to join ____university soon",
    answers:[
                {
                  _id: "101",
                  text: "a",
                  correctAnswer: true
                 },
                  {
                    _id: "102",
                    text: "the"
                  },
                    {
                      _id: "103",
                      text: "no article"
                    },
                      {
                        _id: "104",
                        text: "an"
                      }
                ],
    score: 0

  },
];

export function getQuestions() {
  return questions;
}

export function getQuestion(id) {
  return questions.find(q => q._id === id);
}
