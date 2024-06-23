import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam
        tempora harum quo quas dolores, aspernatur architecto dolore rerum mollitia
        recusandae velit perferendis suscipit dignissimos pariatur consectetur saepe
        libero ratione veniam ad explicabo similique nulla nam id? Vitae numquam voluptas
        debitis maiores facere nesciunt suscipit accusamus alias. Minima consequuntur
        ipsam repellat velit doloribus quia perspiciatis error, culpa nemo molestias
        voluptatibus praesentium. Sed harum earum distinctio dolores laborum saepe, maxime
        hic, assumenda dignissimos, voluptatem impedit reprehenderit!
      </p>
      <p>
        Go to the <Link to={'/'}>Homepage</Link>
      </p>
    </div>
  );
}
