import { MyPageLikeItem } from '.';
import type { Projects } from '@/common/types/responseTypes';
import useSWR, { mutate } from 'swr';
import { userApi } from '@/common/api/api';
import { Link } from 'react-router-dom';

interface UserModalProps {
  memberId?: string;
}

function MyPageLikeList({ memberId }: UserModalProps) {
  const { data: projectList } = useSWR<Projects>(
    `/members/${memberId}/like`,
    userApi.getUserProjects
  );

  return (
    <section className='grid-auto max-w-[1280px] mx-auto'>
      {projectList?.map((project) => (
        <Link to={`/project/${project.projectId}`} key={project.projectId}>
          <MyPageLikeItem project={project} projects={projectList ?? []} />
        </Link>
      ))}
    </section>
  );
}

export default MyPageLikeList;
