import {redirect} from 'next/navigation';

export default async function Laws() {
  redirect('/laws/all');
  return null;
}
