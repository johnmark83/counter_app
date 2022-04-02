import { useEffect, useState } from 'react';


function App() {
  const [value, setValue] = useState(8);
  const [shake, setShake] = useState(false);

  useEffect(()=>{
		setShake(true);

		setTimeout(() => setShake(false), 200);
  },[value])

  return (
    <div className='container text-center text-light justify-content-center'>
		<div className='row mt-5 align-items-center justify-content-center'>
			<div className='col-12 col-lg-10'>
				<h1>
					Simple Counter App
				</h1>
				<p>
					Press the buttons to change the value
				</p>
			</div>
		</div>
		<hr className='mx-auto flex-grow-1' style={{maxWidth:'900px'}}/>
		<div className='row'>
			<div className='col-12 fs-1 text-center text-light'>
				<p className={shake?'shake':null}style={{fontSize: '300px', color: 'rgb(57, 189, 145)'}}>{value}</p>
			</div>
		</div>
	  <div className='row mx-auto w-75 justify-content-between'>
	  	<div className='col-lg-4 text-center my-2'>
			<button type="button" className="rounded-pill border-0 btn btn-lg btn-light " style={{paddingLeft: '90px', paddingRight: '90px', maxWidth: '200px'}} onClick={() => setValue(8)}>8</button>
		</div>
		<div className='col-lg-4 text-center my-2'>
			<button type="button" className="rounded-pill border-0 btn btn-lg btn-light" style={{paddingLeft: '90px', paddingRight: '90px', maxWidth: '200px'}} onClick={() => setValue(0)}>0</button></div>
		<div className='col-lg-4 text-center my-2'>
			<button type="button" className="rounded-pill border-0 btn btn-lg btn-light" style={{paddingLeft: '90px', paddingRight: '90px', maxWidth: '200px'}} onClick={() => setValue(val => val*2)}>2x</button>
		</div>
		</div>
	</div>
  );
}

export default App;
