import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'testkanban';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/pricing',
      label: 'pricing',
    },
  ];

  const features_points = [
    {
      name: 'Task Automation',
      description:
        'Automate repetitive tasks to save time and reduce errors. ${projectName} helps streamline your workflow with intelligent automation.',
      icon: 'mdiRobotOutline',
    },
    {
      name: 'Collaborative Workspaces',
      description:
        'Create dynamic workspaces for your team to collaborate effectively. Share ideas, files, and updates in real-time with ${projectName}.',
      icon: 'mdiAccountMultipleOutline',
    },
    {
      name: 'Secure Data Management',
      description:
        'Keep your data safe with robust security features. ${projectName} ensures your information is protected and accessible only to authorized users.',
      icon: 'mdiLockOutline',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services | Enhance Your Workflow with ${projectName}`}</title>
        <meta
          name='description'
          content={`Discover the range of services offered by ${projectName} to streamline your team's workflow and boost productivity. Learn how our solutions can be tailored to meet your unique needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'testkanban'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testkanban'}
          image={['Team collaborating on project']}
          mainText={`Transform Your Workflow with ${projectName}`}
          subTitle={`Explore our comprehensive services designed to enhance productivity and streamline operations. ${projectName} offers tailored solutions to meet your team's unique needs.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'testkanban'}
          image={['Icons showcasing service features']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Service Features`}
          subTitle={`Discover the powerful features that ${projectName} offers to enhance your team's efficiency and collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <ContactFormSection
          projectName={'testkanban'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person typing on a laptop']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`Have questions or need assistance? Contact us anytime, and our team will respond promptly to support your needs.`}
        />
      </main>
      <WebSiteFooter projectName={'testkanban'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
