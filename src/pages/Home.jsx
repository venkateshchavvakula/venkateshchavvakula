import React, { useEffect } from "react";
import updateMeta from "../helpers/seo-meta";

const SKILLS = [
    'Full Stack',
    'Nodejs',
    'JavaScript',
    'React',
    'Angular',
    'CSS3',
    'HTML5',
    'Tailwind CSS',
    'Bootstrap',
    'Typescript',
    'Mongodb',
    'MySQL',
    'Elasticsearch',
    'Microsoft SQL Server',
    'PostgreSQL',
    'Mocha',
    'Jest',
    'AWS',
    'GCP',
    'Azure',
    'Cypress',
    'Redis',
    'RabbitMQ',
    'Cucumber',
    'Jasmine',
    'Playwright',
    'Github',
    'Jenkins',
    'C',
    'C++',
    'Python',
    'Golang',
    'Nginx',
    'Apache',
    'SEO',
    'OOPS',
    'Data structures',
    'JWT',
    'OAuth',
    'Firebase',
    'CyberSecurity',
    'SAST & DAST',
    'Docker',
    'Kubernetes',

]
const Home = () => {
    useEffect(() => {
        document.title = 'Venkatesh | Senior Software Engineer';
        updateMeta('description', `The Future of Business Cards is here, switch to the next generation smart business card. Be creative and personalize your Scube card.`);
    }, []);
    return (
        <article className="px-6 sm:px-12 py-6">
        <div>
          <div className="flex flex-col items-center sm:flex-row mb-12">
            <div className="mr-0 mb-6 sm:mr-6 sm:mb-0">
              <div className="w-64 h-64  overflow-hidden">
                <div className="profile-image-wrapper">
                  <picture>
                    <img
                      title="Venkatesh Chavvakula"
                      decoding="async"
                      loading="lazy"
                      src="/images/avatar.jpg"
                      alt="Venkatesh Chavvakula"
                      className="rounded-lg"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start">
              <div className="flex flex-row text-center">
                <h1 className="text-3xl mb-1 uppercase font-extrabold">
                  CHAVVAKULA VENKATESH
                </h1>
              </div>
              <div className="mb-3 font-light text-gray-500 flex flex-row items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mr-1 w-4 h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Senior Software Engineer @Scubeelate
              </div>
              <div className="mb-3 text-gray-500">
                <div className="flex flex-row items-center font-light">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-1 w-4 h-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>Visakhapatnam, Andhra Pradesh 🇮🇳</div>
                </div>
              </div>
              <div className="mb-4">
                <div className=" ">
                  <ul className="flex flex-row flex-wrap ">
                    {
                        SKILLS.map(x=>
                        <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                            <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">
                              {x}
                            </span>
                        </li>
                        )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-light">
              Hi There, I'm Venkatesh, a seasoned Full-Stack Developer boasting over
              5+ years of hands-on experience. My skill set encompasses advanced
              proficiency in React, Angular, and Node.js, complemented by extensive
              knowledge of databases such as MongoDB, MySQL, and Postgres.
            </p>
            <p className="font-light">
              Beyond being a proficient coder, I've also served as a leader,
              spearheading development teams and successfully managing a multitude of
              projects. My expertise extends beyond code, delving into the dynamic
              landscape of cloud technologies, including AWS, Azure, and GCP.
            </p>
            <p className="font-light">
              But that's not all! I am a passionate advocate for Test-Driven
              Development (TDD), emphasizing the importance of robust testing
              methodologies. My toolkit includes a diverse range of testing
              frameworks, including Jest and Mocha for backend testing, as well as
              Karma, Jasmine, Cucumber, Playwright, and Puppeteer. I believe in
              delivering not just functional but thoroughly tested and reliable
              solutions.
            </p>
          </div>
        </div>
      </article>      
    );
};

export default Home;
