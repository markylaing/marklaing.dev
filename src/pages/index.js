import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome!</h1>
        <p>Software Engineer @ <a href="https://ubuntu.com/lxd">Canonical (LXD)</a> based in Newcastle upon Tyne, UK.</p>
        <p>This site is just a landing page for professional links &#128522;.</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Landing page. Links to social profiles.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
