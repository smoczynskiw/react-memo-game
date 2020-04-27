import pic1 from './pics/1.jpg'
import pic2 from './pics/2.jpg'
import pic3 from './pics/3.jpg'
import pic4 from './pics/4.jpg'
import pic5 from './pics/5.jpg'
import pic6 from './pics/6.jpg'
import pic7 from './pics/7.jpg'
import pic8 from './pics/8.jpg'
import faceDown from './pics/faceDown.jpg'
import { v4 as uuid } from 'uuid'

const pics = [
  { image: pic1, name: 'pic1' },
  { image: pic2, name: 'pic2' },
  { image: pic3, name: 'pic3' },
  { image: pic4, name: 'pic4' },
  { image: pic5, name: 'pic5' },
  { image: pic6, name: 'pic6' },
  { image: pic7, name: 'pic7' },
  { image: pic8, name: 'pic8' },
  { image: pic1, name: 'pic1' },
  { image: pic2, name: 'pic2' },
  { image: pic3, name: 'pic3' },
  { image: pic4, name: 'pic4' },
  { image: pic5, name: 'pic5' },
  { image: pic6, name: 'pic6' },
  { image: pic7, name: 'pic7' },
  { image: pic8, name: 'pic8' }
]

const gamePics = pics.map(pic => ({ image: pic.image, name: pic.name, isFaceDown: true, id: uuid(), isFaded: false }))

export { pics, faceDown }
export default gamePics