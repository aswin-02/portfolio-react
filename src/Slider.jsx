import './Home.css';


function Slider() {
  return (
    <div class="reveal fade-left">
      <img
        src="/img/bg_line2.png"
        style={{paddingTop: "100px", userSelect: "none", WebkitUserDrag: "none", maxWidth: "100%"}}
      />
    </div>
  );
}

export default Slider;
