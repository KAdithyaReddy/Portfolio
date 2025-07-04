import React from "react";
import "./codingProfiles.css";

// Import logos
import gfgLogo from "../assets/gfgLogo.png";
import leetcodeLogo from "../assets/leetcodeLogo.png";
import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedin.png";
import hackLogo from "../assets/hackLogo.png";
export default function CodingProfiles({isNightMode}) {
  const profiles = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/komatireddy-adithya-reddy/",
      logo: linkedinLogo,
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/KAdithyaReddy",
      logo: githubLogo,
    },
    {
      id: 3,
      name: "LeetCode",
      link: "https://leetcode.com/u/adithya/",
      logo: leetcodeLogo,
    },
    
    
  ];

  return (
    <section className={`professional-profiles ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h2>Professional Profiles</h2>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <div className="profile" key={profile.id}>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img  src={profile.logo} alt={profile.name} />
              <p className="capt">{profile.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
