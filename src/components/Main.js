
import React from "react";
import {useEffect} from 'react'
import "../styles/Main.css"
import Mock from "../Json/Mock.json"
import Contact from "./Contact";
import Toggler from "./Toggler";

function Main() {
    
    
    
    useEffect(() => {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
    
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
    
            setTimeout(function() {
            that.tick();
            }, delta);
        };
    
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
      },[])
    
    
    
      


    return (
        <div className="Main">
            <div className="tabDiv">
                <Toggler/>
            </div>
            <div className="mainHero">
                {/* <div className="quote">"{Mock.quote}"</div> */}
                <div className="quote">
                <h1>
                <p  className="typewrite" data-period="2000" data-type={JSON.stringify(Mock.quote)}>
                    <span className="wrap"></span>
                </p>
                </h1>
                </div>
            </div>

            {/* My Skills  */}
                <h2 className="mainTitle">Skills</h2>
                <div className="skillsContainer">
                    {
                        Mock.skills.map((skill,id)=>{
                            return(
                                <div className="skill" key={id}>
                                    <div className="skillInner">
                                        <div className="skillFront">
                                            <i className={`${skill.iconClass} skillIcon`} style={{color:`${skill.iconColor}`}}/>
                                            <div className="skillName">{skill.skillName}</div>
                                        </div>
                                        <div className="skillBack">
                                            <i className={`${skill.iconClass} skillIcon`} style={{color:`${skill.iconColor}`}}/>
                                            <div className="skillRating">
                                                {skill.skillRating.map((rating,key)=>{
                                                    return(
                                                        <i className={rating===1 ? "fas fa-star skillStar" : rating===0.5 ? "fas fa-star-half-alt skillStar" : "far fa-star skillStar"} key={key}/>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            {/* My Skills  */}
        <div className="tabDiv">
            {/* Education */}
          <h2 className="mainTitle">Education</h2>
          <div className="projectsContainer">
          {Mock.education.map((element,key)=>{
            return(
              <div className="projectContainer" key={key}> 
                <div className="educationName">{element.educationType}</div> 
                
                {element.educationitems.map((ele,id)=>{
                  return(
                    <div className="eduContainer" key={id}>
                    <div className="eduTitle">{ele.title} </div>
                    <div className="eduItem">{ele.value}</div>
                    </div>
                  )
                })}
                
              </div>
            )
          })}
          </div>
        {/* Education */}
        {/* Experience */}
        <div>
          <h2 className="mainTitle">Experience</h2>
          {/* <div className="projectsContainer"> */}
          {Mock.experience.map((element,key)=>{
            return(
              <div className="projectContainer expContainer" key={key}>
                <div className="educationName">{element.company_name}</div> 
                <div className="eduContainer">
                  <div className="eduTitle">Position :</div>
                  <div className="eduItem">{element.position}</div>
                </div>
                <div className="eduContainer">
                  <div className="eduTitle">Tenure :</div> 
                  <div className="eduItem">{element.tenure.startDate} - {element.tenure.endDate}</div>
                </div>
              </div>
            )
          })}
          {/* </div> */}
        </div>
        {/* Experience */}
        </div>

            {/* Projects */}
            <h2 className="mainTitle">Projects</h2>
            <div className="projectsContainer">
                {Mock.projects.map((project,key)=>{
                    return(
                        <div className="projectContainer" key={key}>
                            <div className="projectTitleContainer">
                                <h2 className="projectName">{project.name}</h2>
                                {/* <i className={showProjectInfo ? "fas fa-chevron-down projectInfoIcon": "fas fa-chevron-up projectInfoIcon"}  /> */}
                            </div>
                            <div className="projectBodyContainer">
                                <div className="projectDesc">
                                    {project.description}
                                </div>
                                {project.link ?
                                    <button onClick={()=>{window.open(project.link, "_blank");}} className="demoBtn">Demo</button>
                                    : null
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Projects */}
        

            {/* Contact Form  */}
            <Contact/>
            {/* Contact Form  */}
            
            

            
        </div>
    )
}

export default Main
