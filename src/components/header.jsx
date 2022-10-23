import React                       from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Ph.D., University Of Coimbra.",
  "Certified TensorFlow Developer.",
  "Blockchain Developer."
];

export const Header = (props) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1000 // every 1 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-8 intro-text'>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <h2>
                  <TextTransition springConfig={presets.wobbly} style={{color:'rgb(255, 64, 64)'}}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </h2>
                {/* <h2>
                  {props.data ? props.data.title2 : 'Loading'}
                  <span></span>
                </h2> */}
                <h3>
                  {props.data ? props.data.title3 : 'Loading'}
                  <span></span>
                </h3>                
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  V
                </a>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
