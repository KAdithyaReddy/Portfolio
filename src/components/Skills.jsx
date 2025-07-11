import './skills.css'
import htmlicon from '../assets/html-icon.png'
import cssicon from '../assets/css-icon.svg'
import ricon from '../assets/react-icon.png'
import pyicon from '../assets/python.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.svg'
import mysql from '../assets/mysql.png'
import tf from '../assets/tf.svg'
import sk from '../assets/sk.png'
import gh from '../assets/git.png'
import php from '../assets/php.png'
import sl from "../assets/slit.svg"
import exp from '../assets/exp.png'
import node from "../assets/node.svg"
import mongo from '../assets/mongo.svg'
import figma from '../assets/figma.svg'
const skills = [
    { name: "HTML 5", icon: htmlicon }, 
    { name: "CSS 3", icon: cssicon },
    { name: "React", icon: ricon },
    { name: "Express", icon: exp },
    { name: "Node Js", icon: node },
    { name: "Python", icon: pyicon },
    { name: "CPP", icon: cpp },
    { name: "MySQL", icon: mysql },
    { name: "Java", icon: java }, 
    { name: "TensorFlow", icon: tf },
    { name: "StreamLit", icon: sl },
    { name: "PHP", icon: php },
    { name: "Git", icon: gh },
    {name:"Mongo db", icon:mongo},
    // {name:"Figma",icon:figma},
  ];

export default function Skills({isNightMode}){
    return (
        <section id="skills" className={`skills-section ${isNightMode ? 'night-mode' : 'day-mode'}`}>
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      );
}