import { useLoaderData } from 'react-router-dom';
import type { Params } from 'react-router-dom';
import { Career } from './Careers';

function CareerDetails() {
  //const { id } = useParams();
  const career = useLoaderData() as Career;
  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint unde laudantium
        quibusdam numquam quis ut, impedit dignissimos perferendis libero eius nostrum
        possimus similique temporibus repellat maxime quod, quae totam sapiente assumenda.
        Doloribus, tempore! Enim soluta, cupiditate aperiam quam illo consequuntur quo
        nesciunt doloremque animi, at reprehenderit, libero repudiandae explicabo quos.
      </div>
    </div>
  );
}
export default CareerDetails;

export const careerDetailsLoader = async ({ params }: { params: Params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/careers/' + id);

  if (!res.ok) {
    throw Error('Cound not find that Career');
  }

  return res.json();
};
