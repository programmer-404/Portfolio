import React from 'react'
import {useState,useRef} from 'react'
import "../styles/sideBar.css";
import Mock from "../Json/Mock.json"
import emailjs from 'emailjs-com';

function Contact(props) {
    const form = useRef();
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [subject, setsubject] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [errMsg, seterrMsg] = useState("")
    const [showMsg, setshowMsg] = useState(false)
    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        if(fName && email && subject && message){
            emailjs.sendForm(Mock.emailJs.serviceID, Mock.emailJs.templateID, form.current, Mock.emailJs.userID)
            .then((result) => {
                setsuccess(true)
                setfName("")
                setlName("")
                setsubject("")
                setemail("")
                setmessage("")
                console.log(result.text);
            }, (error) => {
                seterror(true)
                console.log(error.text);
            });
        }else{
            if(!fName){
                seterrMsg("Please Enter your Name")
            }
            else if(!email){
                seterrMsg("Please Enter your Email id")
            }
            else if(!subject){
                seterrMsg("Please Enter Subject")
            }else if(!message){
                seterrMsg("Please Enter Message")
            }
            setshowMsg(true);
        }
        
        setTimeout(() => {
            setshowMsg(false);
            seterrMsg("");
            setsuccess(false);
            seterror(false);
        }, 4000);
    }
    return (
        
            <div   className="contactFormContainer">
            {props.modal ? <i class="fas fa-times closeBtn mobileDiv" onClick={()=>{props.setModal(false)}}/>:null}
            <h2 className="mainTitle">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <label className="contactLabel">First Name</label>
                    <label className="contactLabel desktopView">Last Name</label>
                    <input type="text"  className="contactInput" name="fname" placeholder="Your First Name" value={fName} onChange={(e) => {setfName(e.target.value);}} />

                    <label className="contactLabel mobileDiv">Last Name</label>
                    <input type="text"  className="contactInput" name="lname" placeholder="Your Last Name" value={lName} onChange={(e) => {setlName(e.target.value);}}/>
                    <label className="contactLabel">Email-ID</label>
                    <label className="contactLabel desktopView">Subject</label>
                    <input type="email"  className="contactInput" name="from_mail" placeholder="Your Email Address" value={email} onChange={(e) => {setemail(e.target.value);}}/>
                    <label className="contactLabel mobileDiv">Subject</label>
                    <input type="text"  className="contactInput" name="subject" placeholder="Subject" value={subject} onChange={(e) => {setsubject(e.target.value);}}/>
                    <label className="contactLabel grow">Message</label>
                    <textarea name="message" placeholder="Your Message........." className="contactInput1 grow" value={message} onChange={(e) => {setmessage(e.target.value);}}/>
                    <input type="submit"  className="contactSubmit grow" value="Send"/>
                </form>
                {(showMsg && errMsg) ? <div className="mailFailure">{errMsg}</div> : null}
                {(success) ? <div className="mailSuccess">Mail sent Successfully !!!!!!!!!!!!</div> : null}
                
                {(error) ? <div className="mailFailure">Oop's Something went wrong! please try again</div> : null}
            </div>
            

        
    )
}

export default Contact
