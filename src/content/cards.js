import { testText } from "./variables"
export const cards = [
  {
    text: testText.slice(0, 50),
    img: require('@/assets/img/paper-coffe.png'),
    textAnimation: true
  },
  {
    text: testText.slice(0, 100),
    img: require('@/assets/img/paper-coffe.png'),
    textAnimation: false
  },
  {
    text: testText.slice(0, 150),
    img: require('@/assets/img/paper-coffe.png'),
    textAnimation: true
  },
  {
    text: testText.slice(0, 120),
    img: require('@/assets/img/paper-coffe.png'),
    textAnimation: false
  }
]
