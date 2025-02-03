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
  AboutUsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Intuitive Kanban Board',
      description:
        'Visualize your tasks with ease using our intuitive Kanban board. Drag and drop tasks to manage your workflow efficiently.',
      icon: 'mdiViewDashboardOutline',
    },
    {
      name: 'Advanced Ticketing System',
      description:
        'Streamline your support process with our advanced ticketing system. Track, prioritize, and resolve issues swiftly.',
      icon: 'mdiTicketOutline',
    },
    {
      name: 'Real-Time Collaboration',
      description:
        'Enhance team productivity with real-time collaboration. Share updates and communicate seamlessly within the platform.',
      icon: 'mdiAccountGroupOutline',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Board with Ticketing Features | Kanban Style`}</title>
        <meta
          name='description'
          content={`Explore our CRM board with ticketing features, designed to streamline your workflow with a Kanban-style interface. Perfect for teams looking to enhance productivity and collaboration.`}
        />
      </Head>
      <WebSiteHeader projectName={'testkanban'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testkanban'}
          image={['Team collaborating on Kanban board']}
          mainText={`Revolutionize Your Workflow with ${projectName}`}
          subTitle={`Experience seamless task management with ${projectName}, a CRM board that combines ticketing features with a Kanban-style interface for enhanced team collaboration.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'testkanban'}
          image={['Icons representing key features']}
          withBg={1}
          features={features_points}
          mainText={`Discover ${projectName} Features`}
          subTitle={`Unlock the full potential of your team with ${projectName}'s powerful features designed for efficiency and collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'testkanban'}
          image={['Team brainstorming in modern office']}
          mainText={`Empowering Teams with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the way teams work. Our mission is to provide a seamless, efficient, and collaborative platform that enhances productivity and fosters innovation.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <ContactFormSection
          projectName={'testkanban'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team is here to assist you with any inquiries or support you need. Expect a prompt response from ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'testkanban'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
