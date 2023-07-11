import React from 'react';
import { SiNextdotjs } from 'react-icons/si';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function NextJs(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <TechnologySelectButton
      data={{
        icon: <SiNextdotjs size={22} color='#54c5b8' />,
        name: 'Next.js',
        description: t('experiences.section.skill.menu.description.nextjs'),
        knowledges,
        techExperience: {
          started: new Date('6/1/2022')
        }
      }}
    />
  );
}