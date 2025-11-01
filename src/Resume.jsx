import "./Resume.css";

function Resume() {
  return(
    <div className="resume-container">
        <div className="column left">
            <div className="resume-section">
              <h2>Education</h2>
              <h3>Western Governs University</h3>
              <p>BS Computer Science</p>
              <h3>Sam Houston State University</h3>
              <p>BA Music | Biology</p>
            </div>
            <div className="resume-section">
              <h2>Certifications</h2>
              <h3>Axelos - ITIL Foundation</h3>
              <h3>LPI Linux Essentials</h3>
            </div>
            <div className="resume-section">
              <h2>Skills</h2>
              <h3>Programming Languages</h3>
              <p>JavaScript, Python, Java, C#, HTML, CSS, SQL</p>
              <h3>Frameworks & Libraries</h3>
              <p>Spring, React, Angular</p>
              <h3>Tools & Platforms</h3>
              <p>Git, Docker, AWS, Microsoft Office</p>
            </div>
        </div>
        <div className="column right">
          <div className="resume-section">
            <h2>Experience</h2>
            <h3>eFC Operations Coordinator</h3>
            <p><em>HEB Leander eFC 764</em></p>
            <p><em>2024 - Present</em></p>
            <ul className="experience-content">
              <li>Coordinated workload distribution across automated systems and 80+ warehouse associates to ensure timely outbound and inbound logistics/deliveries.</li>
              <li>Successfully collaborated with peers to improve facility payroll by 15%.</li>
              <li>Analyzed shipment data and employee performance metrics to drive improvements in throughput and operational efficiency</li>
              <li>Created Plan-O-Gram for Non-Conveyable products to merchandise effectively and improve pallet selection based on product size, movement, weight, etc.</li>
              <li>Successfully established SOP for equipment tracking, becoming one of the first facilities on process.</li>
              <li>Stepped into technician roles as needed, demonstrating adaptability and hands-on experience with system tools and diagnostics.</li>
            </ul>
            <h3>Service Lead - Cash Controller Specialist</h3>
            <p><em>Huntsville - HEB #728 / Austin 03 - HEB #425</em></p>
            <p><em>2019 – 2024</em></p>
            <ul className="experience-content">
              <li>Directed daily operations on the sales floor, managing a team of 40+ employees to meet dynamic business demands and ensure seamless customer experiences.</li>
              <li>Coached team members on standard operating procedures (SOPs), point-of-sale (POS) efficiency, and customer service best practices, improving overall IPM performance by 16%, hospitality scoring by 20%, and reducing transaction times.</li>
              <li>Oversaw store-level cash flow processes, consolidating and verifying financial data, and investigating discrepancies to maintain financial accuracy and accountability.</li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Resume;