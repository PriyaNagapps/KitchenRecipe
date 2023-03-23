import spinner from './spinner.gif';
const Spinner =()=>{
  return(
    <img src= {spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="loading...">
    </img>
  )
}

export default Spinner;