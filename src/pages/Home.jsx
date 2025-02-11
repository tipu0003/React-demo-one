// import myImage from "../assets/image.png"; // when image placed in src/assets folder 


function Home() {
    return (
      <div className="text-center">
        <img
          src="/image.png"  // when image placed in public folder
        //   src={myImage}  // when image placed in src/assets folder 
          alt="Developer"
          className="img-fluid rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h2 className="mb-3">Web Developer</h2>
        <p className="lead">
          Welcome to my portfolio! I specialize in creating modern web
          applications that are both responsive and interactive.
        </p>
        <hr />
        <p>
          Feel free to explore my projects or learn more about me in the
          About section. For any inquiries, head over to the Contact page.
        </p>
      </div>
    );
  }
  
  export default Home;