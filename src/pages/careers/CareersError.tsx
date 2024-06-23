import { useRouteError, Link } from 'react-router-dom';

function CareersError() {
  const error = useRouteError() as Error;

  return (
    <div className='careers-error'>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/'>Back to homepage</Link>
    </div>
  );
}
export default CareersError;
