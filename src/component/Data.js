import productOne from '../assests/productOne.webp';
import productTwo from '../assests/productTwo.jpeg';
import productThree from '../assests/productThree.webp';
import productFour from '../assests/productFour.jpg';
import productFive from '../assests/productFive.jpg';
import productSix from '../assests/productSix.webp';
import productSeven from '../assests/productSeven.jpg';
import productEight from '../assests/productEight.jpg';

// import ReviewOne from '../assests/ReviewOne.webp'

const productImgs = [
    { id: 1, image: productOne, hoverImage: productTwo, description: 'Product One Description' },
    { id: 2, image: productTwo, hoverImage: productThree, description: 'Product Two Description' },
    { id: 3, image: productThree, hoverImage: productFour, description: 'Product Three Description' },
    { id: 4, image: productFour, hoverImage: productFive, description: 'Product Four Description' },
    { id: 5, image: productFive, hoverImage: productSix, description: 'Product Five Description' },
    { id: 6, image: productSix, hoverImage: productSeven, description: 'Product Six Description' },
    { id: 7, image: productSeven, hoverImage: productEight, description: 'Product Seven Description' },
    { id: 8, image: productEight, hoverImage: productOne, description: 'Product Eight Description' }
];


const reviews = [
    {
      id: 1,
      image: '../assets/ReviewOne.webp',
      name: 'John Doe',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?',
      rating: 5
    },
    {
      id: 2,
      image: '../assets/ReviewOne.webp',
      name: 'Sara',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?.',
      rating: 4
    },
    {
      id: 3,
      image: '../assets/ReviewOne.webp',
      name: 'Aliza',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?.',
      rating: 5
    },
    {
      id: 4,
      image: '../assets/ReviewOne.webp',
      name: 'jenny',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?.',
      rating: 5
    },
    {
      id: 5,
      image: '../assets/ReviewOne.webp',
      name: 'Narj',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?.',
      rating: 5
    },
    {
      id: 6,
      image: '../assets/ReviewOne.webp',
      name: 'Mark',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?.',
      rating: 5
    },
    {
      id: 7,
      image: '../assets/ReviewOne.webp',
      name: 'Smith',
      text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste officiis odit debitis adipisci reiciendis atque architecto quo natus asperiores excepturi quod possimus nesciunt unde, sit rerum molestiae corrupti facilis hic?.',
      rating: 5
    }

    
  ];
  
  
  


export { productImgs , reviews};







