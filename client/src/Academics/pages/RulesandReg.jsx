import React, { useState } from "react";
import '../styles/RulesandReg.css';

const rules = [
  {
    category: "Discipline",
    details: [
      "During leisure hours the students are expected to be in the library",
      "During class hours they are strictly forbidden from loitering in the corridors and the campus",
      "Every student is expected to maintain a sense of decency and decorum in his/her dress, as prescribed by the college.",
      "Students shall not absent themselves from classes without genuine reasons endorsed by parents.",
      "Any misbehaviour on the part of the student shall be severely dealt with.",
      "The students welfare council will consist of members selected by the Principal on the basis of their conduct and studies.",
      { bold: "NO ELECTION WILL BE HELD" },
      "No student shall organise or participate in any picnics or tours without the permission of the Principal.",
      {
        bold:
          "Ragging is strictly forbidden. Anyone found to be indulging in this uncivilized practice will be summarily dismissed.",
      },
      {
        bold:
          "Use and possession of mobile phones in the college campus is strictly forbidden.",
      },
    ],
  },
  {
    category: "General Tips – DOS",
    details: [
      "Do look up the Notice Board Every Day.",
      "Do enter the class well in time before the teacher enters the class.",
      "Do make use of all the facilities and opportunities",
      "Do submit all the assignments, records and notes in time.",
      "Do spend your free time when the lecturers are on leave, either by reading in the library or playing in the indoor complex or by staying in the vacant class rooms peacefully. Girls can stay in the ladies waiting room.",
    ],
  },
  {
    category: "General Tips – DON'TS",
    details: [
      "Do not idle away the precious time by vain chatting.",
      "Do not move around the campus in packs during working hours.",
      "Do not litter the class-rooms and the campus.",
    ],
  },
  {
    category: "Examinations and Internal Assessment",
    details: [
      "A system of internal assessment is in force for the students of the Degree Classes. 20/30 marks in each theory paper/subject are reserved for internal assessment. Students will be assessed in the basis of their performance in the first test/assignment and second test to be held in the course of each semester. ",
      "No student shall absent himself/herself from any examination or class test without obtaining permission in person, wherever possible, from the Principal or in the case of the class tests, from the lecturer. Violation of these rules may result in the imposition of such penalties as the Principal may deem necessary .",
      " Parents and guardians are particularly requested to supervise the studies of their wards at home and co-operate with the Principal and his staff in all matters pertaining to the welfare of the students. The Principal will be glad to meet parents and discuss with them the progress of their children.",
      " Promotion from the First Year and Second Year to the next senior class and selection to the University examinations will depend upon the progress of the student as shown in his/her examinations and tests on his/her conduct, behaviour and attendance.",
    ],
  },
  {
    category: "Cumulative Record",
    details: [
      "A teacher will be in-charge of a group of students and will supervise the progress of his wards and guide them in their studies and co-curricular activities.",
      " Each student will be provided with a Cumulative Record in which the monthly attendance and marks of the class test and term examination will be entered by the Staff Advisor. Cumulative Records shall be signed by parents every semester after personal verification of marks and attendance entered therein.",
      " The cumulative record is a document reflecting the progress of the student in the course of his/her study in the college. It should be handled carefully by the student when it is in his possession and should be returned to the Staff Advisor when required.",
    ],
  },
];

function CodeOfEthicsFull() {
  return (
    <div className="code-ethics">
  <div className="college-name">MGM College, Udupi</div>

  <h2 className="code-heading">Code of Ethics</h2>

  <div style={{ height: '80px' }}></div> {}

  <div className="code-subheading"><strong>FOR STUDENTS</strong></div>

  <p>
    Every student admitted to this College and studying in this college should clearly understand
    the Rules regarding Admission, Attendance, Discipline, College Examinations, Scholarships and
    Fee Concessions as specified in the Calendar. Every student of the College shall conduct
    himself/herself in a disciplined manner both inside and outside the campus. He/she is expected
    to strictly adhere to the rules and regulations of the college.
  </p>


      <ol>
        <li>
          Ragging is strictly forbidden. Anyone found to be indulging in this
          uncivilized practice will be summarily dismissed from the institution.
        </li>

        <li>Possession and misuse of mobile phones in the college campus is strictly forbidden, if found, it will be confiscated.</li>

<li>A minimum of 75% attendance is required to appear for the semester exam.</li>

<li>During leisure hours the students are expected to be in the library, Indoor sports complex or AV Hall.</li>

<li>During class hours they are strictly forbidden from loitering in the corridors and the campus.</li>

<li>Every student is expected to maintain a sense of decency and decorum in his/her dress and hair style as prescribed by the college.</li>

<li>Students shall not be absent from classes without genuine reasons endorsed by parents.</li>

<li>The student’s Welfare Council will consist of members selected by the Principal and a committee on the basis of their conduct, studies and performance in the interview.</li>

<li>Parents/Guardians are hereby notified that the authorities or teachers of the college do not organize or lead any unauthorized excursions, trekking picnics, tours or pleasure trips. The Management and College authorities are not responsible for any unauthorized excursion, picnic, tour or pleasure and trekking trips organized by students.</li>

<li>Students shall wear the uniform prescribed by the College to be present in the campus.</li>

<li>Any misbehaviour on the part of the student shall be severely dealt with.</li>

<li>Students drawing graffiti on walls, desks, benches shall be punished with a heavy fine of Rs. 1000/-.</li>

<li>Every student must carry with him / her college ID-card every day while attending lectures and appearing for examinations.</li>

<li>The student should carry identity card with him / her regularly and the identity card should be produced when demanded by the authorized persons of the college.</li>

<li>Wearing the Identity Card is a must to enter the Library. At the time of issuing books, the Identity Card must be presented to avail Home Lending facility.</li>
<li>If student has lost library card or ID-card,it should be reported immeditely to the Office and the librarian with an application. </li>
      </ol>


<div style={{ height: '30px' }}></div> {/* Adds vertical space before the new section */}

      <div className="code-subheading">Physical Education Rules:</div>
      
      <p>
        The Physical Education Committee shall lay out the general policy regarding the sports and Games activities in the college and decide on matters connected with them. In case of any difference of opinion the decision of the Principal shall be final.
      </p>


      <ol>
         
        <li>Captains for the various games will be nominated by the Physical Director of the College.</li>

<li>The selections will be made by the Physical Director in consultation with the members of Physical Education Committee.</li>

<li>Teams which do not comply with the instructions of the Physical Education teacher and are very irregular for practice will not participate in any competitions.</li>

<li>If the players selected are irregular for practice or if their conduct is not good they will not be permitted to participate in any tournament and such persons may have to pay back the expenses incurred for providing them with uniforms and such other things.</li>

<li>All players should come in proper uniform for the various games and sports.</li>

<li>In all games and sports the players are required to conduct themselves properly both on and off the fields. Each player in expected to exhibit team spirit</li>

<li>Students who receive the materials from the games room should return them safely to the person who has issued them.</li>

<li>The Playground should he kept clean. The materials used for sports and games shall be handled with care.</li>

<li>No student is permitted to play outdoor games on the campus during working hours.</li>

<li>No student on the rolls of the College is permitted to play in any external team in a particular event without the permission of the Principal.</li>

<li>In all matters of discipline Principal's decision will be final.</li>
        </ol>

        <div style={{ height: '30px' }}></div> {}

        <div className="code-subheading">Library - Rules and Regulations</div>
        
        <ol>
          <li> All the Students must wear their full Uniform with collar ID to enter into the Library.</li>

<li>Students are required to make their entry in the prescribed Register kept in the entrance of the Library.</li>

<li>Lending of 2 books for 7 days to students.</li>

<li>In addition to the above One book will be issued under Overnight borrowing facility.</li>

<li>Group Study and Discussion is not allowed inside the Reading areas, Reference Sections and Magazine Sections.</li>

<li>Personal Books are not allowed inside the Library. In the emergency case students should take the permission of the Librarian or Library staff.</li>
<li>Please take care of the library books. Do not spoil the books by marking, scribbling or underlining in the books.</li>

<li>Maintain neatness and cleanliness in both Girls and Boys Reading Areas.</li>

<li>Girls and Boys should be seated separately in the Library.</li>

<li>Keep the Toilets clean.</li>
          
        </ol>







<div style={{ height: '30px' }}></div> {}
      <div className="code-subheading center">
        Code for the Principal
      </div>
      <ol>
        <li>The Principal looks after all academic and administrative activities of the College as the Head of the Institution.</li>

<li>The Principal chalks out policies and plans to execute vision and mission of the College.</li>

<li>Keeps the co-ordination in all the works related to the College.</li>

<li>Provides guidance, leadership, direction to the all the stakeholders.</li>

<li>Oversees and monitors the administration of the academic programmes along with the general administration of the college.</li>

<li>Takes appropriate decision to adapt new technology and methods for effective teaching learning process.</li>

<li>Follows and implements the directives issued by Government / Statutory bodies/ U.G.C./Director of Collegiate Education / University and other concerned authorities.</li>

<li>Assesses and maintains the Performance Reports of the teaching and non teaching staff of the College.</li>

<li>Ensures that the teaching and non teaching staff are following the Code of Conduct of the Institution.</li>

<li>Assesses reports/Academic dairy /teaching plan/ plan of action and action taken reports of teachers/head/ coordinators/ departments.</li>

<li>Guides and motivates the teaching staff to inculcate social, cultural, national and human values among the students through education for their overall development.</li>

<li>Provides platforms to the students and mentors them by giving them opportunities to face the challenges of the competitive world through the curricular, co-curricular and extracurricular activities.</li>

<li>Encourages the teaching and non teaching staff for their professional development.
          </li>
      </ol>

<div style={{ height: '30px' }}></div> {}
      <div className="code-subheading">The Professional Ethics & Code of Conduct for Non-Teaching Staff</div>

      <ol>
        <li>Every non-teaching staff of the college shall discharge his/her duties efficiently and diligently to match with the administrative standards and performance norms laid down by the U.G.C/University/College /Management from time to time.</li>

<li>Maintain their professional knowledge & skills by updating himself / herself professionally for the proper discharge of duties assigned to him/her.</li>

<li>Must maintain punctuality.</li>

<li>Assist in carrying out functions relating to the administrative responsibilities of the college and the university such as: assisting in appraising applications for admission, advising and counseling students as well as assisting the conduct of university and college examinations, including all types of Examination works.</li>

<li>Respect the right and dignity of the student for assisting them any kind of help/guidance etc.</li>

<li>Speak respectfully and behave politely with everyone of the college. (The Principal, teachers, Students, visitors, parents etc.)</li>

<li>Deal justly and impartially with students regardless of their religion, caste, political, economic, social and physical characteristics.</li>

<li>Co-operate in the formulation of policies of the institution by accepting various offices and discharge responsibilities which such offices may demand.</li>

<li>Co-operate personally to the policies of the institutions which have been made by higher authorities of the institution.</li>
<li>Co-operate with the authorities for the betterment of the institutions keeping in view the interest and in conformity with dignity of the profession.</li>

<li>Should adhere to the Professional Ethics and Code of Conduct of the Institution.</li>

<li>Every employee should apply their knowledge and experience for overall development of the office work of the college.</li>

<li>Every employee of the college should cooperate to maintain discipline and good habits in the office as well as college premises.</li>

<li>Should maintain the positive relationship with all colleagues & teaching staff and the students of the college.</li>

<li>Every employee possesses his/her identity as a Employee of the college/Institution in the society, therefore no employee should act in any manner that violates the norms of decency or morality in his/her conduct or behaviour inside or outside of the College Campus, everyone should maintain the reputation, discipline & culture of the College at the public places/ in the society.</li>

<li>Any employee should not indulge in any organized anti-institutional activity and shall not promote, abet, assist or motivate any groupism or unhealthy activity.</li>

<li>Avoid conflicts between their professional work and personal interest.</li>

<li>No one shall remain absent from work without prior permission of the Principal or grant of leave.</li>

<li>Any criminal complaint, action/proceeding lodged against him/her in any police Station, Court or Forum shall be reported to the Principal.</li>

<li>Should adopt a humane approach in dealing with students who are physically challenged.</li>

<li>No one shall meet/approach directly to any member of the Management/Governing Body of MGM College for their personal or any issue or matter. He/She should put/forward their issue/matter through the Principal of the college.</li>

<li>Every employee should respect the functional superiority of those set in authority over him/her by the Management/Principal.</li>

<li>No one of the non-teaching staff of the college shall leave headquarter without permission of the Principal.</li>
      </ol>

      <div style={{ height: '30px' }}></div> {}
      <div className="code-subheading">The Professional Ethics for the Teachers (As per UGC Notification-2018)</div>

<p>
  The college is providing the following guidelines of UGC for maintaining the professional ethics
  for the teachers. These guidelines are adopted from UGC notification (New Delhi, The 18th July,
  2018) i.e. UGC regulations on minimum qualifications for appointment of teachers and other
  academic staff in Universities and Colleges and measures for the maintenance of standards in
  higher education, 2018
</p>

<p className="small-text">
  Source: https://www.ugc.ac.in/pdfnews/5323630_New_Draft_UGCRegulation-2018
</p>

<div style={{ height: '30px' }}></div> {}

<div className="code-subheading center mt-lg">CODE OF PROFESSIONAL ETHICS</div>
<div style={{ height: '10px' }}></div> {}

      <div className="bold-text">I. TEACHERS AND THEIR RESPONSIBILITIES:</div>

      <p>
        Whoever adopts teaching as a profession assumes the obligation to conduct himself / herself in
        accordance with the ideal of the profession. A teacher is constantly under the scrutiny of his
        students and the society at large. Therefore, every teacher should see that there is no
        incompatibility between his precepts and practice. The national ideals of education which have
        already been set forth and which he/she should seek to inculcate among students must be
        his/her own ideals. The profession further requires that the teachers should be calm, patient
        and communicative by temperament and amiable in disposition.
      </p>

      <p>
        (i) Perform their duties in the form of teaching, tutorial, practical, seminar and research work
        conscientiously and with dedication.
      </p>

      <p>
        (ii) Co-operate and assist in carrying out functions relating to the educational responsibilities of
        the college and the university such as: assisting in appraising applications for admission,
        advising and counseling students as well as assisting the conduct of university and college
        examinations, including supervision, invigilation and evaluation.
      </p>

      <p>
        (iii) Participate in extension, co-curricular and extra-curricular activities including community
        service.
      </p>
      <p>
        (iv) Teachers should respect the right and dignity of the student in
        expressing his/her opinion; Deal justly and impartially with students
        regardless of their religion, caste, political, economic, social and
        physical characteristics.
      </p>
      <p>
        (v) Inculcate among students scientific outlook and respect for physical
        labour and ideals of democracy, patriotism and peace.
      </p>
      <p>
        (vi) Be affectionate to the students and not behave in a vindictive manner
        towards any of them for any reason.
      </p>
      <p>
        (vii) Pay attention to only the attainment of the student in the assessment
        of merit.
      </p>
      <p>
        (viii) Make themselves available to the students even beyond their class
        hours and help and guide students without any remuneration or reward.
      </p>
      <p>
        (x) Refrain from inciting students against other students, colleagues or
        administration.
      </p>
      <p>
        (xi) Teachers and Colleagues Teachers should treat other members of the
        profession in the same manner as they themselves wish to be treated. Speak
        respectfully of other teachers and render assistance for professional
        betterment.
      </p>
      <p>
        (xii) Refrain from lodging unsubstantiated allegations against colleagues
        to higher authorities.
      </p>
      <p>
        (xiii) Refrain from allowing considerations of caste, creed, religion, race
        or sex in their professional endeavour.
      </p>
      <p>
        (xiv) Teachers should Discharge their professional responsibilities
        according to the existing rules and adhere to it.
      </p>
      <p>
        (xv) Refrain from undertaking any other employment and commitment
        including private tuitions and coaching classes which are likely to
        interfere with their professional responsibilities.
      </p>
      <p>
        (xvi) Co-operate in the formulation of policies of the institution by
        accepting various offices and discharge responsibilities which such
        offices may demand.
      </p>
      <p>
        (xvii) Co-operate with the authorities for the betterment of the
        institutions keeping in view the interest and in conformity with dignity
        of the profession.
      </p>
      <p>
        (xviii) Should adhere to the conditions of contract; Give and expect due
        notice before a change of position is made.
      </p>
      <p>
        (xix) Refrain from availing themselves of leave except on unavoidable grounds and as far as practicable with prior intimation, keeping in view their particular responsibility for completion of academic schedule.
      </p>
      <p>
        (xx) Teachers should treat the non-teaching staff as colleagues and equal partners in a cooperative undertaking, within every educational institution.
      </p>
      <p>
        (xxi) Teachers should help in the function of joint staff-councils covering both teachers and the non-teaching staff.
      </p>
      <p>
        (xxii) Teachers should give respect to the parents/guardians and be available for discussion about the students whenever required.
      </p>
      <p>
        (xxiii) Teacher should recognize that education is a public service and strive to keep the public informed of the educational programmes which are being provided.
      </p>
      <p>
        (xxiv) Work to improve education in the community and strengthen the community's moral and intellectual life.
      </p>
      <p>
        (xxv) Teachers should be aware of social problems and take part in such activities as would be conducive to the progress of society and hence the country as a whole.
      </p>
      <p>
        (xxvi) Perform the duties of citizenship, participate in community activities and shoulder responsibilities of public offices.
      </p>
      <p>
        (xxvii) Refrain from taking part in or subscribing to or assisting in any way activities which tend to promote feeling of hatred or enmity among different communities, religions or linguistic groups but actively work for National Integration.
      </p>
      <p className="mt-sm">
        Source: https://www.ugc.ac.in/pdfnews/5323630_New_Draft_UGCRegulation-2018
      </p>


      <div style={{ height: '30px' }}></div> {}
      <p className="bold-text">
        Code of Conduct / Professional Ethics for the Teachers
      </p>

      <p>
        1. Every teacher of the college shall discharge his/her duties efficiently and diligently to match with the academic standards and performance norms laid down by the U.G.C./University/College /Management from time to time.
      </p>
      <p>
        2. Maintain their professional knowledge & skills by updating himself/ herself professionally for the proper discharge of duties assigned to him/her.
      </p>
      <p>
        3. Every teacher should apply their knowledge and experience for overall development of the students of the college.
      </p>
      <p>
        4. The Teacher should behave and perform fairly and be committed to the best interest of students of the college.
      </p>
      <p>
        5. Adopt the process of developing the teaching-learning process by preparing subject wise and semester wise individual teaching plan at the beginning of the semester and perform accordingly.
      </p>
      <p>
        6. Every teacher should do assessment practices for finding out slow learners & advanced learners and strive adequately for the overall development of the students of the college.
      </p>
      <p>
        7. The teacher shall engage the classes regularly and punctually and strive to complete the syllabus within the University directed/prescribed teaching days.
      </p>
      <p>
        8. The Teacher should not only confine his/her activities to the classroom teaching but also involve himself/herself in all the efforts of the college in giving extra inputs to the students so as to make the students not only academically brilliant, but also a confident, competent and fully overall developed personality & strive for them according to the Vision and Mission and Objectives of the college/institution.
      </p>
      <p>
        9. Every teacher should inform the college discipline/code of conduct to the students time to time and encourage/compel them to follow accordingly.
      </p>
      <p>
        10. Every teacher of the college should cooperate to maintain discipline and good habits among the students. In addition to the duties of teaching and allied activities, the teacher shall, when required, attend to extra-curricular co-curricular activities organized by the Department/Committees/Cells of the College.
      </p>
      <p>
        11. Teacher should assist the College/University Examinations, Valuation works, Moderation etc.
      </p>
      <p>
        12. Evaluation of Examination, Practical examination should be done fairly by the teacher.
      </p>
      <p>
        13. Every teacher should fairly & properly give the internal marks to the students, without keeping the view of partiality.
      </p>
      <p>
        14. The teacher should not demand/force for any assistance or money to the students by showing or giving any temptation of increasing marks or any other cooperation in examination /practical work, etc., if anyone is found guilty, legal action will be taken against him/her.
      </p>
      <p>
        15. The teacher should not force or compel any student of the college for doing his/her personal work, inside or outside of the college.
      </p>
      <p>
        16. No teacher shall incite, instigate or provoke any student/s, any other member of the staff into any form of action against the College or that seeks to disrupt the academic activities of the College.
      </p>
      <p>
        17. The teacher should maintain the positive relationship with all colleagues & students of the college.
      </p>
      <p>
        18. The teacher possesses his/her identity as a teacher/Employee of the college/Institution in the society, therefore no teacher should act in any manner that violates the norms of decency or morality in his/her conduct or behavior inside or outside of the College Campus, every teacher should maintain the reputation, discipline & culture of the College at the public places/in the society.
      </p>
      <p>
        19. The teacher should inculcate a feeling of pride among the students for their Parents, Teachers, Institution, Society, and Nation.
      </p>
      <p>
        20. Create pleasant atmosphere where students can actively participate in curricular and extracurricular activities of the college.
      </p>
      <p>
        21. The Teacher should not indulge in any organized anti-institutional activity and shall not promote, abet, assist or motivate any groupism or unhealthy activity.
      </p>
      <p>
        22. Avoid conflicts between their professional work and personal interest.
      </p>
      <p>
        23. No teacher should by act or deed, degrade, harass or insult any other person for any reason whatsoever or act in a manner unbecoming of the teaching profession.
      </p>
      <p>
        24. The teacher shall not ordinarily remain absent from work without prior permission of the Principal or grant of leave.
      </p>
      <p>
        25. The Teacher shall report to the Principal, if there is any criminal complaint, action/proceeding lodged against him/her in any police Station, Court or Forum.
      </p>
      <p>
        26. The teacher should adopt a humane approach in dealing with students who are physically challenged.
      </p>
      <p>
        27. Be punctual & careful in availing professional opportunities for career development.
      </p>
      <p>
        28. Academic diaries are provided to every teacher by the college at commencement of the session. Every teacher should regularly fill/record in it, his/her daily lectures/daily performance
        and other necessary information/etc. They should submit it to the Principal's Office for month wise review.
      </p>
      <p>
        29. The teacher should not be careless about filling the Academic dairy; every teacher should keep his/her academic diary updated and get the signature of the Principal.
      </p>
      <p>
        30. No teacher shall meet/approach directly to any member of the Management/ Governing Body of MGM College for their personal or any issue or matter. He/She should put forward their issue/matter through the Principal to the Management/ Governing Body of the MGM College, in written form.
      </p>
      <p>
        31. Every teacher should respect the functional superiority of those set in authority over him/her by the Management/Principal.
      </p>
      <p>
        32. The teacher should not interfere/ speak any personal matter/issue of his/her colleague teacher among the students in the class/ inside or outside of the college, always speak respectfully of other teachers.
      </p>
      <p>
        33. The teacher shall present punctually to the college for the Prayer.
      </p>
      <p>
        34. No teacher shall leave the college campus during the duty hours.
      </p>
      <p>
        35. No teacher shall leave the headquarters without the permission of the Principal.
      </p>
      <p>
        36. Every teacher should follow the dress code as directed by the Institution.
      </p>
    </div>
    
  );
}

function RulesandReg() {
  const [showCodeOfConduct, setShowCodeOfConduct] = useState(false);

 return (
  <div className="rules-page" id="top">
    <div className="rules-header">
      <h1>Rules and Regulations</h1>
    </div>

    <div className="rules-container">
      <p className="intro">
        Every student admitted to this College and studying in this college should
        clearly understand the implications of the Rules regarding Admission,
        Attendance, Discipline, College Examinations and Scholarships and Fee
        Concessions in this College as specified in the Calendar.
      </p>
      <p>
        Every student of the College shall conduct himself/herself in a disciplined
        manner both inside and outside the campus.
      </p>
      <p>
        He/She is expected to strictly adhere to the rules and regulations of the
        college.
      </p>

      <table className="rules-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, i) =>
            rule.details.map((detail, idx) => {
              const isBold = typeof detail === "object" && detail.bold;
              const content = isBold ? detail.bold : detail;

              return (
                <tr key={`${i}-${idx}`}>
                  {idx === 0 && (
                    <td
                      className="rules-td rules-category"
                      rowSpan={rule.details.length}
                    >
                      {rule.category}
                    </td>
                  )}
                  <td className="rules-td">
                    <ul>
                      <li className={`rules-li ${isBold ? 'bold' : ''}`}>
                        {content}
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <button
        className="toggle-button"
        onClick={() => setShowCodeOfConduct(!showCodeOfConduct)}
      >
        {showCodeOfConduct ? "Hide Code of Ethics" : "Show Code of Ethics"}
      </button>

      {showCodeOfConduct && <CodeOfEthicsFull />}

      <hr className="divider" />

      <div className="top-link">
        <a href="#top" className="top-anchor">
          Top
        </a>
      </div>
    </div>
  </div>
);
}
export default RulesandReg;