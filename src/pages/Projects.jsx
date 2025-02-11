function Projects() {
    return (
      <div>
        <h1 className="mb-4">Projects</h1>
        <div className="row">
          {/* Project Card #1 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://img.freepik.com/free-vector/construction-company-logo-template_361591-3087.jpg?t=st=1739264204~exp=1739267804~hmac=e99dee9f8b2a218c704a1b0fcb5454b14e851250fa1f8b3ff2e69bc464af30db&w=740"
                className="card-img-top"
                alt="Project 1"
                // style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Project One</h5>
                <p className="card-text">
                  A brief description of Project One. Mention technologies used and
                  how it solves a particular problem.
                </p>
              </div>
            </div>
          </div>
  
          {/* Project Card #2 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://img.freepik.com/free-vector/bulb-gradient-colorful-logo_343694-1442.jpg?t=st=1739264432~exp=1739268032~hmac=befd2f3229aaea6191c8e508867eb9bc9dbfd4c47922df060980263cb1d56faf&w=740"
                className="card-img-top"
                alt="Project 2"
                // style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text">
                  A brief description of Project Two. Highlight challenges faced and
                  the solutions implemented.
                </p>
              </div>
            </div>
          </div>
  
          {/* Project Card #3 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://img.freepik.com/free-vector/abstract-symbol-shape-figure-logo-vector-concept-icon_126523-269.jpg?t=st=1739264457~exp=1739268057~hmac=f9e946fedadc02a8aad831f03f16418864cfc85251a505082ab34a9db4d6f3dd&w=1380"
                className="card-img-top"
                alt="Project 3"
                // style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">
                  A brief description highlighting key features that make
                  this project stand out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;