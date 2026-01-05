import logo from '../assets/logo.png';
import './Header.css';

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
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
