import {Text} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';
import {Section} from '@/shared/ui';

export default async function FacultyRoute({params}: {params: {faculty: string}}) {
  const urlParamsObject = {
    filters: {
      slug: params.faculty
    }
  };
  const {data} = await fetchArticles({urlParamsObject});

  if (data.length === 0)
    return (
      <Section>
        <Text>{params.faculty}</Text>
      </Section>
    );

  return <Section>{params.faculty}</Section>;
}
