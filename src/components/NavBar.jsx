import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/netcompany_logo.svg';

const NavBar = () => {
  const styles = {
    nav: {
      backgroundColor: '#0F2147',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem'
    },
    links: {
      display: 'flex',
    },
    link: {
      color: 'white',
      marginLeft: '1rem',
      textDecoration: 'none',

    }
  };

  return (
    <nav style={styles.nav}>
      <Link to='/'>
        <Logo />
      </Link>
      <div>Kodekalender 2020</div>
      <div style={styles.links}>
        <Link to='/1' style={styles.link}>Første Advent</Link>
        <Link to='/2' style={styles.link}>Andre Advent</Link>
        <Link to='/3' style={styles.link}>Tredje Advent</Link>
        <Link to='/4' style={styles.link}>Fjerde Advent</Link>
      </div>
    </nav>
  );
};

export default NavBar;