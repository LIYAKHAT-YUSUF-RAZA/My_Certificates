import React from 'react';
import CertificateList from './components/CertificateList';

function App() {
  const certificates = [
    {
      title: 'Abouv Certificate',
      description: "abôuv Stage 0 Assessment Certificate Awarded by abôuv on January 31, 2025, for successfully completing Stage 0 assessments with Grade 5 (scoring between 71–80%). This certification reflects strong foundational skills, analytical thinking, and problem-solving abilities, assessed through industry-relevant tests designed to evaluate readiness for tech and professional roles.",
      date: '2025-04-01',
      image: '/images/abouv-certificate.jpg',
    },
    {
      title: 'Prajwalan 2K25 Certificate',
      description: 'The image showcases my certificate of participation in the Idea Presentation (Round 2) at Prajwalan 2K25, a prestigious National Level Hackathon organized by the Association of Computer Engineers, SRKREC. It stands as a recognition of my involvement, innovation, and contribution to a platform focused on creative tech solutions and real-world challenges.',
      date: '2025-02-28',
      image: '/images/Prajwalan_2K25.jpg',
    },
    {
      title: 'Network Addressing and Basic Troubleshooting Certificate',
      description: 'I completed the Cisco Networking Academy course on Network Addressing and Basic Troubleshooting, where I learned the basics of networking, IPv6 addressing, and troubleshooting connectivity issues. It also gave me practical knowledge of Cisco routers and switches.',
      date: '2025-02-28',
      image: '/images/Network_Addressing_and_Basic_Troubleshooting.jpg',
    },
    {
      title: 'Python Essentials 2 Certificate',
      description: 'I’m happy to share that I’ve completed the Python Essentials 2 course from Cisco Networking Academy in collaboration with the OpenEDG Python Institute. This certification helped me strengthen my Python skills, especially in Object-Oriented Programming (OOP), solving real-world problems, and building multi-module programs. It also prepared me for the PCAP – Certified Associate in Python Programming exam.',
      date: '2025-02-28',
      image: '/images/Python_Essentials_2_page-0001.jpg',
    },
    {
      title: 'Python Essentials 1 Certificate',
      description: 'I completed the Python Essentials 1 course from Cisco and OpenEDG, where I learned the basics of Python programming, problem-solving, and coding logic. It prepared me for the PCEP certification and boosted my skills in Python development.',
      date: '2025-02-28',
      image: '/images/Python_Essentials_1_page-0001.jpg',
    },
    {
      title: 'JNTUK Central Zone Chess Tournament Certificate',
      description: 'I participated in the JNTUK Central Zone Chess Tournament (2024–25) and secured 3rd place with my team. It was a valuable experience that strengthened my strategic thinking and focus.',
      date: '2025-02-28',
      image: '/images/Chess_21-11-24.jpg',
    },
    {
      title: 'BrainOVision & AICTE Certificate',
      description: 'Java Full Stack Development with React JS & AI (NSTTP-2K24) Completed a 20-day national-level training program organized by SRKR Engineering College in collaboration with Brainovision & AICTE. Gained hands-on experience in Java Full Stack Development, React JS for front-end design, and foundational concepts in Artificial Intelligence. Enhanced practical skills through real-time projects and expert-led sessions.',
      date: '2025-03-15',
      image: '/images/BrainOVision_Certi_page-0001.jpg',
    },
    {
      title: 'Git & GitHub Workshop Certificate',
      description: 'I participated in the Git & GitHub Workshop organized by Google Developer Groups (GDG) On Campus on November 11, 2024. The workshop helped me build foundational skills in version control and software development, specifically using Git and GitHub, which are essential tools for collaborative coding and project management.',
      date: '2025-02-28',
      image: '/images/GDG_GIT&GITHUB-WorkShop.png',
    },
    {
      title: "Coding Contest - HACK 'N' CLASH Certificate",
      description: "This certificate confirms Shaik Liyakhat Yusuf Raza's successful completion of the Coding Contest - HACK 'N' CLASH, held by SRKREC CSI Student Branch from September 6th to 13th, 2024. Shaik, a 2nd year B.Tech (AI&DS - C) student (Registration No. LE 5414) at Sagi Rama Krishnam Raju Engineering College, demonstrated their coding skills in this event.",
      date: '2025-02-28',
      image: '/images/Hack_N_Clash.jpg',
    },
    {
      title: "Career Development Workshop Certificate",
      description: "This certificate of participation is awarded to Shaik Liyakhat Yusuf Raza for completing a Career Development Workshop with Skill Intern on September 28, 2024, acknowledging their dedication to growth in a specialized area. This participation demonstrates a proactive approach towards enhancing their professional skills.",
      date: '2025-02-28',
      image: '/images/Career Development Workshop_page-0001.jpg',
    },
  ];

  return (
    <div className="App">
      <CertificateList certificates={certificates} />
    </div>
  );
}

export default App;