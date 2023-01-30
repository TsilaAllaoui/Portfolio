import "../css/Navbar.scss";

const items = ["Home", "Works", "Projects", "About"];

function Navbar() {
  return <div class="Navbar">
    <p id="me">RASOLO ALLAOUI Tsilavo</p>
    <div class="items">
      {items.map((item) => (<a class="nav-item" href="#">{item}</a>))}
    </div>
    <button class="chat">Me contacter</button>
  </div>
}

export default Navbar;
