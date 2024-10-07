import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {generatePageMetaData} from '@/shared/api/generatePageMetaData';
import {fetchDepartments} from '@/shared/api/getDepartments';
import {Section} from '@/shared/ui';
import {DepartmentBlockRendered} from '@/shared/ui/BlocksRenderer';

type Params = {
  lang: string;
  category: string;
  faculty: string;
  department: string;
};

export async function generateMetadata({params}: {params: {lang: string}}): Promise<Metadata> {
  return await generatePageMetaData({params, pageName: 'Faculties'});
}

export default async function DepartmentRoute({params}: {params: {department: Params}}) {
  const urlParamsObject = {
    filters: {
      slug: params.department
    },
    populate: {
      image: true,
      students: {
        populate: {image: true}
      }
    }
  };
  const department = await fetchDepartments(urlParamsObject);

  if (!department?.data[0]) {
    notFound();
  }

  return (
    <Section>
      <DepartmentBlockRendered {...department?.data[0]} />
    </Section>
  );
}
