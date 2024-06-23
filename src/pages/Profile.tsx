import { useAuth } from '../libs/auth.context';

export default function ProfilePage() {
  const { user } = useAuth();
  console.log("I'm on the profile page");
  return <div>{user && <p>Welcome: {user.name}</p>}</div>;
}
