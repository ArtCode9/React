import reactImg from '../assets/react-core-concepts.png';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
   return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
   const description = reactDescription[genRandomInt(2)];

   return (
      <header>
         <image src={reactImg} alt="Stylized atom" />
         <h1>React Essential</h1>
         <p>
            {description} React Concepts you will need for almost any app you are going to build!
         </p>
      </header>
   );
}