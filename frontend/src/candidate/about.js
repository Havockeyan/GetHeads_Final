import React from "react";
import Navbar from "../navbar";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import '../candidate/about.css'


class About extends React.Component
{
render()
{
    return(
        <div>
            <Navbar />
            <section className="grid">
          
          <h2 className="mission">
              Get Heads
          </h2>
          <br/>
          <p className="para">
              Aim of our Website is to reduce the work load for many IT realted Industries mainly in providing them best quality of Engineers based on their skills,Knowledge and Talent which helps them in recruiting them for specialised Job. 
          </p>
          <br/>
          <br/>
          <div className="bdiv"><h2 className="mission">Vision and Mission<FcIcons.FcPositiveDynamic/></h2><br/></div>
          <div><p className="vision"><FcIcons.FcOk/>Our vision is to be the leading professional association for business analysts in the Central Virginia Area.</p>
          <br/>
          <p className="vision"><FcIcons.FcOk/>Our mission is to provide value through fostering awareness of the issues related to business analysts and creating an environment where business analysts can come together, build relationships, learn from one another and collaborate with other business analysts as well as vendors, corporations and other organizations that support the practice.   </p>
          </div>
          <br/>
          <br/>
         <div><div className="bgdiv"><h2 className="objc"><FcIcons.FcReading/>Objectives</h2></div>
          <br/>
          <p className="obj"><FaIcons.FaHandPointRight/>&nbsp;Advance the role of the Business Analyst as a recognized profession <br/><br/><FaIcons.FaHandPointRight/>&nbsp;Support opportunities for members to network with, and gain knowledge from, seasoned BA practitioners as well as with industry and government leaders 
Provide pathways to learn about business analysis best practices and certification<br/> <br/><FaIcons.FaHandPointRight/>&nbsp;Obtain and maintain a sufficient level of financial security, sustainability and autonomy at the chapter level to sustain the chapter <br/><br/><FaIcons.FaHandPointRight/>&nbsp;Create corporate support for the IIBA within the local market by generating marketing/awareness programs that demonstrate the value of business analysis and the IIBA<br/> <br/><FaIcons.FaHandPointRight/>&nbsp;Provide a recognized forum for the free exchange, discussion and examination of problems, solutions, applications, and ideas related to business analysis.</p></div>
          <br/>
          <br/>
          <img alt='nothing' src="https://res.cloudinary.com/practicaldev/image/fetch/s--rAHvwN_l--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kp1b5x0uufzyabikh8fp.png" width="130px" height="60px"></img>
          <h2 className="dinfo">Developers Info <FaIcons.FaReact/></h2>
          <div className="grid-items">
              <div className="divide">
                  <img alt='nothing' alt="" width="110cm" height="130cm"/>
                  <h4 className="names">Karthikeyan</h4>
                  <p className="names">Developer of our Project Get Heads</p>
                  <p className="names"><FcIcons.FcPhone/>&nbsp; 9360141967</p>
                  <p className="names"><FaIcons.FaInstagram/>&nbsp; mokka_gamers11</p>
                  <p className="names"><GrIcons.GrMail/>&nbsp; karthihavoc121@gmail.com</p>
              </div>
              <div className="divide1">
                  <img alt='nothing'  alt=""  width="110cm" height="130cm"/>
                  <h4 className="names">Manu Dev</h4>
                  <p className="names">Developer of our Project Get Heads</p>
                  <p className="names"><FcIcons.FcPhone/>&nbsp; 9750149068</p>
                  <p className="names"><FaIcons.FaInstagram/>&nbsp; dhoni_love7</p>
                  <p className="names"><GrIcons.GrMail/>&nbsp; manudev23071@gmail.com</p>
              </div>
              <div className="divide2">
                  <img alt='nothing'  alt=""  width="110cm" height="130cm"/>
                  <h4 className="names">Dharaneesh</h4>
                  <p className="names">Developer of our Project Get Heads</p>
                  <p className="names"><FcIcons.FcPhone/>&nbsp; 8610165937</p>
                  <p className="names"><FaIcons.FaInstagram/>&nbsp; dharaneeshselvaraj</p>
                  <p className="names"><GrIcons.GrMail/>&nbsp; dharaneeshselvaraj@gmail.com</p>
              </div>

          </div>
      </section>
        </div>
    );
}
}
export default About;