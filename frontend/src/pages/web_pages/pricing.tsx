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
  ContactFormDesigns,
  PricingDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

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

  const pricing_features = {
    standard: {
      features: ['Task Management', 'Basic Reporting', 'Email Support'],
      limited_features: ['Limited Integrations', 'Basic Automation'],
    },
    premium: {
      features: [
        'Advanced Task Management',
        'Comprehensive Reporting',
        'Priority Email Support',
      ],
      also_included: [
        'Custom Integrations',
        'Enhanced Automation',
        'Team Collaboration Tools',
      ],
    },
    business: {
      features: [
        'Enterprise Task Management',
        'Advanced Analytics',
        'Dedicated Account Manager',
        'Full Integrations',
        'Custom Automation Solutions',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individuals or freelancers looking to manage tasks efficiently with essential features.',
    premium:
      'Perfect for small startups or agencies seeking advanced tools and integrations to enhance team productivity.',
    business:
      'Designed for enterprises requiring comprehensive solutions, dedicated support, and full customization options.',
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Pricing Plans | Choose Your ${projectName} Package`}</title>
        <meta
          name='description'
          content={`Explore our flexible pricing plans designed to meet the needs of teams of all sizes. Find the perfect ${projectName} package to enhance your productivity and collaboration.`}
        />
      </Head>
      <WebSiteHeader projectName={'testkanban'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testkanban'}
          image={['Different pricing plans displayed']}
          mainText={`Affordable Plans for Every Team`}
          subTitle={`Discover the perfect ${projectName} plan tailored to your team's needs. Choose from our flexible pricing options to boost productivity and collaboration.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`View Pricing Plans`}
        />

        <PricingSection
          projectName={'testkanban'}
          withBg={0}
          features={pricing_features}
          description={description}
        />

        <ContactFormSection
          projectName={'testkanban'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person writing an inquiry email']}
          mainText={`Inquire About ${projectName} Pricing `}
          subTitle={`Have questions about our plans? Contact us for more details, and our team will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'testkanban'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
