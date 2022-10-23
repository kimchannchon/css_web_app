export const Project = (props) => {
  return (
    <div id='project' className='text-start' style={{background:'#f6f6f6'}}>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title' style={{marginBottom:'0'}}>
          <h2>PROJECT</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-sm-6' style={{marginTop:'90px'}}>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <img src={d.img} alt='...' className='features-img' />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <a href={d.link} className='btn btn-custom btn-lg'>
                    View
                  </a>{' '}
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>    
  )
}
