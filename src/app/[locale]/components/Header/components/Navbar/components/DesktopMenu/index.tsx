import React from 'react';
import { useSSRTranslation } from '../../../../../../../../shared/hooks/useSSRTranslation';

import { LocaleSelectInput } from '../../../../../../../components/LocaleSelectInput';
import { NavigationLink } from './components/NavigationLink';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function NavigationLinks(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex items-center gap-[10px]'>
      <NavigationLink to='#aboutme'>{t('navbar.aboutme.label')}</NavigationLink>
      <NavigationLink to='#skills'>{t('navbar.skills.label')}</NavigationLink>
      <NavigationLink to='#projects'>{t('navbar.projects.label')}</NavigationLink>
    </div>
  );
}

export function DesktopMenu(): JSX.Element {
  return (
    <div className='base:hidden lg:flex items-center gap-[25px]'>
      <NavigationLinks />
      <hr className='min-h-[8px] min-w-[8px] rounded-full bg-primary-200 mr-[3px]' />
      <LocaleSelectInput width={170} height={42} />
    </div>
  );
}