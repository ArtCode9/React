import logo from '../assets/logo.png';
import classes from'./Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* The style prop takes a dynamic value 👇 */}
      {/* <p  style={{
          color: 'red',
          textAlign: 'left',
          fontSize: '44px'
      }}>A community of artists and art-lovers.</p> */}

      {/* now this is scoping module css style add here 👇 
      also can add condition 
      and also we can add like className = {`${classes.para}`}
      */}
      <p className={1 === 1 ? classes.para : undefined}>A community of artists and art-lovers.</p>
    </header>
  );
}
