
import '../AppCss.css';

function Carousel() {
    return (
      <div className="carrousel">
        <div className="container">
          <h2
            style={{
              // marginTop: "50px",
              marginTop:"10px",
              color: "#fff",
              fontSize: "15px",
              fontFamily:
                "Lucida Grande, 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', Verdana, sans-serif",
              background: "rgba(0, 0, 0, 0.66)",
              padding: "8px",
              textTransform: "uppercase",
              borderRadius: "20px",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {" "}
            International Conference on Education, Business &amp; Management -
            ICEBM 2023.
          </h2>

          <h3
            style={{
              marginTop: "15px",
              color: "#fff",
              fontSize: "18px",
              fontFamily:
                "Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', Verdana, sans-serif",
              background: "rgba(255,0,4,1.00)",
              padding: "10px",
              width: "auto",
              textTransform: "uppercase",
              borderRadius: "20px",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            22nd - 26th May, 2023, Calgary, Canada
          </h3>
        </div>
      </div>
    );
  }
  
  export default Carousel;