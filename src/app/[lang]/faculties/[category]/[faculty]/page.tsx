import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {generatePageMetaData} from '@/shared/api/generatePageMetaData';
import {fetchFaculties} from '@/shared/api/getFaculties';
import {Section} from '@/shared/ui';
import {FacultyBlockRendered} from '@/shared/ui/BlocksRenderer';

export type FacultyParams = {
  lang: string;
  category: string;
  faculty: string;
};

export async function generateMetadata({params}: {params: {lang: string}}): Promise<Metadata> {
  return await generatePageMetaData({params, pageName: 'Faculties'});
}

export default async function FacultyRoute({params}: {params: FacultyParams}) {
  const urlParamsObject = {
    filters: {
      slug: params.faculty
    },
    populate: {
      image: true,
      departments: {
        populate: {image: true}
      }
    }
  };
  const faculty = await fetchFaculties({urlParamsObject});

  if (!faculty?.data[0]) {
    notFound();
  }

  return (
    <Section>
      <FacultyBlockRendered faculty={faculty.data[0]} params={params} />
    </Section>
  );
}
