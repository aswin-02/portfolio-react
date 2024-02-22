import './Home.css';
import slider from './img/bg_line2.png';

function Slider() {
  return (
    <div class="reveal fade-left">
      <img
        src={slider}
        style={{paddingTop: "100px", userSelect: "none", WebkitUserDrag: "none", maxWidth: "100%"}}
      />
    </div>
  );
}

export default Slider;
