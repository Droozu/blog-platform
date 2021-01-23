import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function useSlug() {
  const { slug: currentSlug } = useParams();
  const { article } = useSelector((state) => state.article);

  return [currentSlug, article?.slug, currentSlug === article?.slug];
}
