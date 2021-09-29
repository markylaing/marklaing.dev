import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Linkedin',
    imgPath: '/img/linkedin.png',
    link: 'https://www.linkedin.com/in/mark-laing/'
  },
  {
    title: 'CV',
    imgPath: '/img/cv.png',
    link: '/cv.pdf'
  },
  {
    title: 'Github',
    imgPath: '/img/github.png',
    link: 'https://github.com/markylaing'
  },
];

function Feature({ imgPath, title, link }) {
  return (
    <div className={clsx('col col--4')} style={{ "paddingTop": "80px" }}>
      <a href={link}>
        <div className="text--center">
          <img src={imgPath} alt={title} height="100" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
