import { useSelector } from 'react-redux';

export default function useAuth() {
  const user = useSelector((state) => state.user);

  return [Boolean(user), user?.token];
}
