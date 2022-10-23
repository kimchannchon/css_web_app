export const About = (props) => {
  return (
    <div id="about">
      <div className="container-fluid" style={{margin:'0'}}>
        <div className="row">
          <div className="img-color col-xs-4 col-md-4">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-8 col-md-8">
            <div className="about-text">
              <h2>About Me</h2>
              <p style={{textJustify:'inter-character'}}>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Work Experience</h3>
              <div className="list-style">
                <div className="col-lg-8 col-sm-8 col-xs-8">
                  <ul className="work">
                    {props.data
                      ? props.data.work.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-4">
                  <ul>
                    {props.data
                      ? props.data.country2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <h3>Education</h3>
              <div className="list-style" style={{marginBottom:'50px'}}>
                <div className="col-lg-8 col-sm-8 col-xs-8">
                  <ul className="country">
                    {props.data
                      ? props.data.school.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-4">
                  <ul>
                    {props.data
                      ? props.data.country.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>              
              <h3>Program</h3>
              <div className="list-style">
                <div className="col-lg-8 col-sm-8 col-xs-8">
                  <ul className="program">
                    {props.data
                      ? props.data.program.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-4">
                  <ul>
                    {props.data
                      ? props.data.country3.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
