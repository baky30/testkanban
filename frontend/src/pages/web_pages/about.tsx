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
  AboutUsDesigns,
  FeaturesDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Seamless Integration',
      description:
        'Connect with your favorite tools effortlessly. ${projectName} integrates smoothly with existing software to enhance your workflow.',
      icon: 'mdiPuzzleOutline',
    },
    {
      name: 'Customizable Workflows',
      description:
        "Tailor your processes to fit your team's needs. ${projectName} offers flexible workflows that adapt to your unique requirements.",
      icon: 'mdiTuneVariant',
    },
    {
      name: 'Data-Driven Insights',
      description:
        'Make informed decisions with real-time analytics. ${projectName} provides valuable insights to optimize team performance.',
      icon: 'mdiChartLineVariant',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us | Discover Our Mission and Vision`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, vision, and the team behind ${projectName}. Discover how we are committed to enhancing productivity and collaboration for teams worldwide.`}
        />
      </Head>
      <WebSiteHeader projectName={'testkanban'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testkanban'}
          image={['Team members discussing project ideas']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the passion and dedication that drives ${projectName}. Our team is committed to revolutionizing the way teams collaborate and achieve their goals.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Join Our Journey`}
        />

        <AboutUsSection
          projectName={'testkanban'}
          image={['Founders brainstorming innovative solutions']}
          mainText={`Our Story: The Heart of ${projectName}`}
          subTitle={`At ${projectName}, we believe in empowering teams to reach their full potential. Our journey is fueled by innovation, collaboration, and a commitment to excellence.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Discover Our Story`}
        />

        <FeaturesSection
          projectName={'testkanban'}
          image={['Icons representing core features']}
          withBg={0}
          features={features_points}
          mainText={`Unveiling ${projectName} Core Features`}
          subTitle={`Explore the innovative features that make ${projectName} a game-changer in team collaboration and productivity.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <ContactFormSection
          projectName={'testkanban'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person sending an email message']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`We're here to help! Reach out to us anytime, and our team will respond promptly to assist with your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'testkanban'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
