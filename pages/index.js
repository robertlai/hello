import Head from 'next/head';
import ContentSection from 'components/ContentSection';
import LinkIcon from 'components/LinkIcon';
import styles from 'styles/Home.module.scss';

const Home = () => (
    <>
        <Head>
            <title>Hi - Robert Lai - Software Engineer</title>
            <meta
                name="description"
                content="Hi. I'm Robert Lai, a software engineer and curious person.
                    I like to build things using code, especially interfaces for humans.
                    When I'm not working, I enjoy anime, games, drawing, and appreciating nature."
            />
        </Head>
        <section className={styles.aboveFold}>
            <h1 className={styles.name}>Robert Lai</h1>
            <p className={styles.intro}>Hi. I like to build things and have fun.</p>
            <nav className={styles.nav}>
                <LinkIcon href="https://www.linkedin.com/in/rcylai/" src="linkedin.svg" alt="LinkedIn logo" />
                <LinkIcon href="https://github.com/robertlai" src="github.svg" alt="GitHub logo" />
                <LinkIcon href="mailto:hi@rlai.dev" src="email.svg" alt="Email icon" />
                <LinkIcon href="resume.pdf" src="resume.svg" alt="Résumé icon" />
            </nav>
        </section>
        <div className={styles.belowFold}>
            <ContentSection title="About me" imageSrc="my_face.png" imageAltText="Robert Lai, smiling in front of mountains in Banff, Alberta">
                <p>Hi. I'm Robert Lai, a software engineer and curious person.</p>
                <p>I like to build things using code, especially interfaces for humans.</p>
                <p>When I'm not working, I enjoy anime, games, drawing, and appreciating nature.</p>
            </ContentSection>
            <ContentSection title="Work" imageSrc="yelp_cookies.png" imageAltText="A dozen cookies shaped like the Yelp burst in a cardboard box" alt>
                <p>I currently work for Yelp, where I build features and conduct experiments to deliver tailored experiences to users.</p>
                <p>I previously interned at Yelp, Meraki, and AdRoll, among others.</p>
                {/* <p>See my full work history here.</p> */}
            </ContentSection>
            {/*
            <ContentSection title="Contact" imageSrc="" imageAltText="" alt>
            </ContentSection>
            */}
        </div>
    </>
);

export default Home;
