export const Contacts = (props) => {
  return (
    <div id='features' className='text-start' style={{background:'transparent'}}>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title' style={{marginBottom:'0'}}>
          <h2>CONTACT</h2>
        </div>
        <div id='contact' className='col-md-12' style={{background:'transparent'}}>
          <div className='row'>
            <div className='social'>
              <ul>
                <li>
                  <a href={props.data ? props.data.github : '/'}>
                    <i className='fa fa-github'></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.linkedin : '/'}>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.facebook : '/'}>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.instagram : '/'}>
                    <i className='fa fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.youtube : '/'}>
                    <i className='fa fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
