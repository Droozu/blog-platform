import { useSelector } from 'react-redux';

export default function useAuthor() {
  const user = useSelector((state) => state.user);
  const { article } = useSelector((state) => state.article);

  if (!user?.username || !article?.author?.username) return false;
  return user?.username === article?.author?.username;
}
