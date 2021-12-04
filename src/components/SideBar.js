import React from "react";
import {useState} from 'react'
import "../styles/sideBar.css";
import Mock from "../Json/Mock.json";
import Contact from "./Contact";
import Toggler from "./Toggler";

function SideBar() {
  const [modal, setmodal] = useState(false)
  return (
    <>
    {modal ? 
    <div className="contactDiv">
      <Contact
        setModal={setmodal}
        modal={modal}
      />
    </div>
    :
    <div className="sideBar">
      <div className="sideBarHero">
        <img src={Mock.personalInfo.profileImg ? Mock.personalInfo.profileImg : "/assets/img/main.jpg"}  alt="/assets/img/main.jpg" className="profileImg" />
        <div className="myName">{Mock.personalInfo.name}</div>
        <div className="myJobTitle">{Mock.personalInfo.jobTitle}</div>
      </div>
      
      {/* SideBar Body */}
      <div className="sideBarBody">
        <div className="GeneralInfo">
        {Mock.generalInfo.map((infoEle,id)=>{
          return(
            <React.Fragment key={id}>
            <div className="InfoTitle" >{infoEle.infoTitle} :</div>
            <div className="InfoItem">{infoEle.infoValue}</div>
            </React.Fragment>
          )
        })}
        </div>
        <div className="divider"/>

        <div>
            <div className="sideBarTitle">Languages</div>
            <ul className="Languages">
            {Mock.personalInfo.languages.map((language,key)=>{
              return(
                <li className="sideBarElement" key={key}>{language}</li>
              )
            })}
            </ul>
        </div>

        <div className="divider"/>
        {/* Education */}
        <div>
          <div className="sideBarTitle">Education</div>
          {Mock.education.map((element,key)=>{
            return(
              <div className="courseContainer" key={key}> 
                <div className="sideBarSubTitle">{element.educationType}</div> 
                <div className="educationContainer">
                {element.educationitems.map((ele,id)=>{
                  return(
                    <React.Fragment key={id}>
                    <div className="eduTitle">{ele.title} :</div>
                    <div className="eduItem">{ele.value}</div>
                    </React.Fragment>
                  )
                })}
                </div>
              </div>
            )
          })}
          
          
        </div>
        {/* Education */}

        {/* Unhide on Mobile View  */}
        {/* My Skills  */}
        <div className="mobileDiv">
        <div className="divider"/>
        <h2 className="sideBarTitle">Skills</h2>
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
                                                        <i className={rating==1 ? "fas fa-star skillStar" : rating==0.5 ? "fas fa-star-half-alt skillStar" : "far fa-star skillStar"} key={key}/>
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

            {/* Projects */}
            <div className="divider"/>
            <h2 className="sideBarTitle">Projects</h2>
            
                {Mock.projects.map((project,key)=>{
                    return(
                        <div className="ProjectContainer" key={key}>
                            
                                <h2 className="sideBarSubTitle">{project.name}</h2>
                                {/* <i className={showProjectInfo ? "fas fa-chevron-down projectInfoIcon": "fas fa-chevron-up projectInfoIcon"}  /> */}
                            
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
            {/* Projects */}
            </div>
            {/* Unhide on mobile View */}

        <div className="divider"/>
        {/* Experience */}
        <div>
          <div className="sideBarTitle">Experience</div>
          {Mock.experience.map((element,key)=>{
            return(
              <React.Fragment key={key}>
                <div className="sideBarSubTitle">{element.company_name}</div> 
                <div className="educationContainer">
                  <div className="eduTitle">Position :</div>
                  <div className="eduItem">{element.position}</div>
                  <div className="eduTitle">Tenure :</div> 
                  <div className="eduItem">{element.tenure.startDate} - {element.tenure.endDate}</div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
        {/* Experience */}

        {/* Download CV*/}
        <button className="downloadCV" onClick={()=>{let resumeLink= Mock.personalInfo.resume ? Mock.personalInfo.resume : "/assets/Docs/Resume.pdf"; window.open(resumeLink)}}>Download CV</button>
        {/* Download CV*/}
      </div>
      {/* sideBar Body */}
      

      {/* sideBar Footer  */}
      <div className="sideBarFooter">
        <i className="fab fa-whatsapp-square icon" style={{color:"#25D366"}} onClick={()=>{let whatsappLink="https://wa.me/"+Mock.personalInfo.mobileNumber;window.open(whatsappLink)}}/>
        <i className="fab fa-linkedin icon" style={{color:"#0e76a8"}}  onClick={()=>{window.open(Mock.personalInfo.linkedIn)}}/>
        <i className="fab fa-facebook-square icon" style={{color:"#4267B2"}} onClick={()=>{window.open(Mock.personalInfo.faceBook)}}/>
        <i class="fas fa-envelope-open-text icon message" style={{color:"#4267B2"}} onClick={()=>{setmodal(true)}} />
        <Toggler />
      </div>
      {/* sideBar Footer  */}
    </div>
    }
    </>
  );
}

export default SideBar;
