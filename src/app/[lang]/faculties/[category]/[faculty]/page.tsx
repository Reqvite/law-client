import {Section} from '@/shared/ui';

export default async function FacultyRoute({params}: {params: {faculty: string}}) {
  return <Section>{params.faculty}</Section>;
}
