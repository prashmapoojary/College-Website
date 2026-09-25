import React, { useState } from "react";
import "../styles/Scholarships.css";

function Scholarships() {
  const [openSection, setOpenSection] = useState(null); 
  // null = none, "scholarship" = scholarships open, "awards" = awards open

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="scholarships-container">
      <h1>Prizes and Scholarships</h1>
      <p>
        <b>M.G.M. college and donors provide a large list of prizes and scholarships..</b>
      </p>

      {/* Scholarships Dropdown */}
      <button
        className="dropdown-btn"
        onClick={() => toggleSection("scholarship")}
      >
        {openSection === "scholarship"
          ? "Scholarships / Freeships"
          : " Scholarships / Freeships"}
      </button>

      {openSection === "scholarship" && (
        <div className="dropdown-content">
          <table className="scholarships-table">
            <thead>
              <tr>
                <th colSpan="3" className="main-heading">
                  <b>SCHOLARSHIPS / FREESHIPS</b>
                </th>
              </tr>
              <tr>
                <th className="col-name">Name of the Scholarship/Freeships</th>
                <th className="col-eligibility">Eligibility Criteria</th>
                <th className="col-benefits">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
            <td>
              CV Raman Scholarship (<a href="http://www.dce.kar.nic.in">www.dce.kar.nic.in</a>)
               by the dept of collegiate Education
            </td>
            <td>
              Students who have passed with very high marks in the II year PUC
              examination &amp; pursuing their B.Sc course with any two of the
              following basic science subjects:
              <br />1) Physics, 2) Chemistry, 3) Mathematics, 4) Statistics,
              5) Botany, 6) Zoology
            </td>
            <td>Rs. 5000/- per year</td>
          </tr>

          <tr>
            <td>
              INSPIRE-Scholarship (<a href="http://www.online-inspire.gov.in">www.online-inspire.gov.in</a>) by the Dept of Science and Technology
            </td>
            <td>
              <ul>
                <li>
                  Students who have passed with very high marks in the II year PUC
                  examination &amp; pursuing their B.Sc course in basic science
                  subjects 1) Physics, 2) Chemistry, 3) Mathematics, 4) Statistics,
                  5) Biology
                </li>
                <li>
                  Students have to apply &amp; submit their application with all
                  essential documents through the web portal{" "}
                  <a href="http://www.online-inspire.gov.in">www.online-inspire.gov.in</a>. This portal will be open normally from Aug to Oct.
                </li>
              </ul>
            </td>
            <td>Rs. 60,000 + Rs. 20,000 for project per year</td>
          </tr>

          <tr>
            <td>
              KSTA (Karnataka Science &amp; Technology Academy) Fellowship (<a href="http://www.kstacademy.org">http://www.kstacademy.org</a>)
            </td>
            <td>
              Students who have passed with very high marks in the II year PUC
              examination &amp; pursuing their B.Sc course with any two of the
              following basic science subjects:
              <br />1) Physics, 2) Chemistry, 3) Mathematics, 4) Botany, 5) Zoology
            </td>
            <td>Rs. 10,000/- per year</td>
          </tr>

          {/* New rows from second image */}
          <tr>
            <td>Sanchi Honnamma Scholarship by the Dept of Collegiate Education</td>
            <td>
              <ul>
                <li>This is meant for girl students studying in Degree course</li>
                <li>
                  For general merit min. of 50%, for SC/ST 45% marks needed in the
                  previous examination. Should pass all the semester examinations in
                  first attempt at degree level
                </li>
              </ul>
            </td>
            <td>Rs. 2,000/- per year</td>
          </tr>

          <tr>
            <td>
              Educational concession to the children of Service Personnel (Army,
              Airforce &amp; Navy for both PU &amp; Degree)
            </td>
            <td>To the children of Service Personnel</td>
            <td>Tuition Fee, Lab Fee, Examination Fee and other Fees will be refunded.</td>
          </tr>

          <tr>
            <td>
              Educational concession to the children of Ex-Servicemen (Army, Airforce &amp; Navy for both PU &amp; Degree)
            </td>
            <td>To the children of Ex-Servicemen</td>
            <td>Tuition Fee, Lab Fee, Examination Fee and other Fees will be refunded.</td>
          </tr>

          <tr>
            <td>Beedi Workers Scholarship (For both PU &amp; Degree)</td>
            <td>
              Children of Beedi workers whose family income not exceeding Rs. 10,000
              per month and not receiving any other scholarship
            </td>
           
          </tr>

          <tr>
            <td>Govt. of India National Merit Scholarship</td>
            <td>
              Selection on the merit basis (marks above 80% in the qualifying
              examinations for freshers and 50% for renewal). Income should be Rs.
              25,000 or below per year
            </td>
            <td>
              For PUC and I degree: Rs. 720 per year for II year and III year degree Rs. 1080 per year
            </td>
          </tr>

          <tr>
            <td>Govt. of India, Rashtriya Sanskrit Sansthan, Samskrita Scholarship</td>
            <td>
              For 1st Degree student selection on merit basis (marks above 75% in Sanskrit and total 75% in II PUC — Min 75% in Sanskrit and 75% in II PUC)
            </td>
            <td>Rs. 1,750/- per year</td>
          </tr>
                    <tr>
            <td>
              Govt. scholarships for study in English/Kannada as major subjects at the degree level
            </td>
            <td>
              Students who have secured highest marks in the concerned relevant subject at the pre-university annual examination.
             
            </td>
            <td>
              Rs. 600/- per year &amp; continued for 2nd &amp; 3rd degree classes
               <br />
              <li>This scholarship shall be extended to II and III year only if the student passes the semester exam in the first attempt.</li>
            </td>
          </tr>

          <tr>
            <td>
              Govt. of India, Hindi scholarship (Students of Non-Hindi speaking state)
            </td>
            <td>
              Selection on merit basis (Marks above 80% in Hindi and 80% aggregate in II PUC Examination)
            </td>
            <td>
              I Degree: Rs. 600/- per year<br />
              II Degree: Rs. 900/- per year
            </td>
          </tr>

          <tr>
            <td>
              Govt. Scholarship to the differently abled students (for both PU and Degree)
            </td>
            <td>
              <ul>
                <li>The student should have studied in Karnataka for at least 5 years</li>
                <li>Student who has secured 80% attendance in the I degree are eligible to get scholarship for II degree</li>
                <li>No income limit</li>
              </ul>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              Minority Scholarship (Christians &amp; Muslims) Minority Scholarship (BCM/BCT) (for both PU and Degree)
            </td>
            <td>
              <ul>
                <li>For both PU and degree students whose parents/guardians annual income should be less than Rs. 2,00,000</li>
                <li>Students should have secured 50% or above marks in their previous examination</li>
                <li>Income &amp; Caste certificate issued by Tahashildar is necessary</li>
              </ul>
            </td>
            <td></td>
          </tr>
                     <tr>
            <td>
              SC/ST Scholarship(for both PU and Degree)
            </td>
            <td>
              <li>To SC/ST students</li>
              
              <li>Income limit of the Parent Rs. 2,50,000/-p.a</li>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              LIC Golden Jubilee Scholorship foer students belonging to the economically weaker families
            </td>
            <td>
              <li>Students who have passed II PUC and pursuing graduation in any discipline</li>
              <li>Min marks in II PUC is 60%(Selection as per merit and cut off marks)</li>
              <li>Annual income of parents/guardian from all sources not to exceed 1,00,000/- per annum</li>
              <li>Apply online at(<a href="http://www.licindia.in/GJF_scholorship.htm">www.licindia.in/GJF_scholorship.htm</a>)</li>
            </td>
            <td>
              An amount of Rs.10,000/- per annum will be awarded to the selected candidate which is payable in 10 monthly installment of 1,000/- each
            </td>
          </tr>

          <tr>
            <td>
              M.H.R.D Scholarship
            </td>
            <td>
              <ul>
                <li>Students who have secured above 80% marks in IIPUC and pursuing graduation in any discipline</li>
                <li>Annual income of parents/guardian from all sources not to exceed 4,50,000/- per annum</li>
                <li>Selection as per merit and cut off marks</li>
                <li>Apply online at (<a href="http://pue.kar.nic.in">http://pue.kar.nic.in</a>) Scholarship M.H.R.D Scholarship</li>
               
              </ul>
            </td>
            <td>An amount of Rs.10,000/- per annum will be awarded to the selected candidate</td>
          </tr>

          <tr>
            <td>
              Rajiv Gandhi Loan Scholarship(with a low rate of interest)
            </td>
            <td>
              <ul>
                <li>Economically weak and backward class students, family annual income should be less than 2.5lakhs</li>
                <li>Income certificate issued by Tahashildar is necessary</li>
              </ul>
            </td>
            <td>
             Rs.60,000 per year for 3 years. Total amount Rs.1,80,000/-
            </td>
          </tr>
             <tr>
              <div style={{ whiteSpace: "nowrap" }}>
                <br/>
                
      <strong>
        <u>Note:</u>
      </strong>{" "}
      
      These scholarships shall be extended to the subsequent year only if the student passes the Sem-exam in one attempt.   
      
    </div>
    
    <br/>
   
             </tr>
        </tbody>
      </table>
              {/* ... your existing rows here */}
            
        </div>
      )}
      <br/>

      {/* Awards Dropdown */}
      <button
        className="dropdown-btn"
        onClick={() => toggleSection("awards")}
      >
        {openSection === "awards"
          ? " Scholarships & Prizes Awarded to Students each year"
          : " Scholarships & Prizes Awarded to Students each year"}
      </button>

      {openSection === "awards" && (
        <div className="dropdown-content">
          <table className="scholarships-table">
            <thead>
              <tr>
                <th colSpan="4" className="main-heading">
                  <b>SCHOLARSHIPS & PRIZES AWARDED TO STUDENTS EACH YEAR</b>
                </th>
              </tr>
              <tr>
                <th className="col-si.no">SI.NO</th>
            <th className="col-name">Name of Prize</th>
            <th className="col-donor">Donar</th>
            <th className="col-award">To whom awarded</th>
              </tr>
            </thead>
            <tbody>
             <tr>
            <td>
              1.
            </td>
            <td>
              The Late Sir Krishna R. Haldipurkar scholarships
            </td>
            <td>Directors of Syndicate Bank, Udupi</td>
            <td>
              To the best student in II P.U.C whose subject is Commerce (present student of II P.U.C based pm I P.U.C marks)
            </td>
          </tr>
          
             <tr>
            <td>2.</td>
            <td>Sri. T.A. Pai Book Scholarship</td>
            <td>Sri. T.A. Pai</td>
            <td>To assist a deserving student to buy books</td>
          </tr>

          <tr>
            <td>3.</td>
            <td>Sri. M. Vittal Kamath Memorial Scholarship</td>
            <td>Sri. M.V. Kamath, Bombay</td>
            <td>To a financially poor student in Degree class to be continued for 3 years if not detained.</td>
          </tr>

           <tr>
            <td>4.</td>
            <td>Late Sri Aroor Laxminarayana Rao Scholarship</td>
            <td>Late Sri A.L.N Rao, Udupi</td>
            <td>To a deserving student of Shivalli Brahmin Community in PUC to be continue in succeeding years if not detained</td>
          </tr>

          <tr>
            <td>5.</td>
            <td>The M.G.M Co-operative Store Ltd. Scholarships</td>
            <td>M.G.M College Co-operative Store</td>
            <td>To poor and deserving students of any class in the college.</td>
          </tr>

          <tr>
            <td>6.</td>
            <td>H.H. Sri Vishnuthirtha Memorial Scholarship</td>
            <td>H.H. Sri Vishnuthirtha swamier of Sri Sode Vadiraja Mutt, Udupi</td>
            <td>To a deserving student of the Degree Class</td>
          </tr>

          <tr>
            <td>7.</td>
            <td>Sri. Vadiraja Memorial Proficiency Prizes</td>
            <td>H.H. Sri Vishnuthirtha swamier of Sri Sode Vadiraja Mutt, Udupi</td>
            <td>Awarded on the basis of proficiency in Preparatory Examinations.</td>
          </tr>

          <tr>
            <td>8.</td>
            <td>The Late Sir. P.A. Pai Memorial Scholarships</td>
            <td>Sri. U.R. Rao</td>
            <td>To deserving student/students of the College</td>
          </tr>

          <tr>
            <td>9.</td>
            <td>The Aravinda Motors Private Ltd. Scholarships</td>
            <td>Directores of Aravinda Motors Private Ltd.</td>
            <td>To a deserving PUC student continued for succeeding years if not detained.</td>
          </tr>

          <tr>
            <td>10.</td>
            <td>The Shankar Vittal Motor Co. Ltd. Scholarships</td>
            <td>Shankar Vittal Co. Ltd.</td>
            <td>To a deserving student in the College</td>
          </tr>

          <tr>
            <td>11.</td>
            <td>The Shankar Vital Motor Company (Private) Ltd., Scholarship</td>
            <td>The Shankar Vittal Motor Company Ltd.</td>
            <td>To a deserving student of the I year B.Com class of the college</td>
          </tr>

          <tr>
            <td>12.</td>
            <td>The Shanker Vittal Motor company (Private) Ltd. Scholarship</td>
            <td>The Shanker Vittal Motor company (Private) Ltd.</td>
            <td>To a deserving student of the I year Degree class.</td>
          </tr>

          <tr>
            <td>13.</td>
            <td>L.I.C of India Employees Committee Scholarship</td>
            <td>Employees of L.I.C of India Udupi</td>
            <td>To a deserving student of the I year Degree classTo a deserving student in the college.</td>
          </tr>

          <tr>
            <td>14.</td>
            <td>Late Sri. K.R.K Bhat Scholarship</td>
            <td>Late Sri. K.R.K Bhat</td>
            <td>To a poor deserving student of the college</td>
          </tr>

          <tr>
            <td>15.</td>
            <td>Smt. Asha K.R.K Bhat</td>
            <td>Late Sri. K.R.K Bhat</td>
            <td>To a poor deserving girl student of the College</td>
          </tr>

          <tr>
            <td>16.</td>
            <td>Smt. Asha K.R.K Bhatspecial Scholarship</td>
            <td>The College Trust</td>
            <td>To provide free Mid-day lunch in health kitchen of Mid-Day meals club(girl student)</td>
          </tr>

          <tr>
            <td>17.</td>
            <td>Late Sri Pejawara Ramanna Bhat Scholarship</td>
            <td>The college trust Late Sri K.R.K Bhat</td>
            <td>To a poor deserving Shivalli Brahmin Boy every year.</td>
          </tr>

          <tr>
            <td>18.</td>
            <td>Smt. Asha K.R.K Bhat Scholarship</td>
            <td>Late Sri K.R.K Bhat</td>
            <td>To a poor deserving Shivalli Brahmin Girl.</td>
          </tr>

          <tr>
            <td>19.</td>
            <td> Dr. T.M.A. Pai Benevolent Trust Fund Scholarship</td>
            <td>Dr. T.M.A. Pai Bhat</td>
            <td>To a deserving student for any charitable purpose.</td>
          </tr>

          <tr>
            <td>20.</td>
            <td> M.G.M College Old Students’ Association Music Prize	</td>
            <td>M.G.M College Old Students’ Association, Udupi</td>
            <td>To the best student taking part in the Annual College Day Music Competition</td>
          </tr>

          <tr>
            <td>21.</td>
            <td> Rtn. Dr. P.N. srinivasa Rao Scholarship in Commemoration of 105th Eye Camp of Rtn. Dr. P.N. Srinivasa Rao at M.G.M College		</td>
            <td>Rotary Club of Udupi Manipal Dist. 318</td>
            <td>Awarded to the children of low paid MGM College employees or in Government or Private bodies.</td>
          </tr>

          <tr>
            <td>22.</td>
            <td>  H.H. Sri Prejawara Swamier Sanskrit Prize			</td>
            <td> H.H. Sri Swamier of Prejawara Mutt, Udupi</td>
            <td> To the student who stands first in the PUC Examination in Sanskrit under Part-1 and continues his/her studies in the college.</td>
          </tr>

          <tr>
            <td>23.</td>
            <td>  Late Sri Narayana Kille Memorial Prize			</td>
            <td> Late Sri. T.A. Pai, B.Com	</td>
            <td>  To a first year student who scores highest marks in II puc kannada.</td>
          </tr>

           <tr>
            <td>24.</td>
            <td>  Manjunath Sona Kamath English Essay writing Prize	</td>
            <td> Smt. Girija Bai Vittal Kamath (original donor) Endowment subsequently enhanced by Sri. M.V. Kamath, Mumbai.</td>
            <td>  To the best student in English Essay  </td>
          </tr>

          <tr>
            <td>25.</td>
            <td>  Kochikar Moodlagiri Pai, English Elocution Prize	</td>
            <td> Smt. Girija Bai Vittal Kamath (original donor) Endowment subsequently enhanced by Sri. M.V. Kamath, Mumbai.</td>
            <td>To the best student in English Elocution </td>
          </tr>

          <tr>
            <td>26.</td>
            <td>  Parvathiamma, Kannada essay Writing Prize		</td>
            <td> Smt. Girija Bai Vittal Kamath, B.A., B.L. (original donor) Endowment Subsequently enhanced by Sri. M.V. Kamath of Mumbai.</td>
            <td>To the best student in Kannada Essay Writing</td>
          </tr>

           <tr>
            <td>27.</td>
            <td>  The Tulsiamma, Kannada Elocution Prize</td>
            <td> Smt. Girija Bai Vittal Kamath, B.A., B.L. (original donor) Endowment Subsequently enhanced by Sri. M.V. Kamath of Mumbai	.</td>
            <td>To the best student in Kannada Elocution.</td>
          </tr>

          <tr>
            <td>28.</td>
            <td> S.D. Srinivasan Mathematics Prize</td>
            <td>	Sri. S.D. Srinivasan M.A., F.I.A. (London)	.</td>
            <td>To the best student in PUC examination in Mathematics, who continues his/her studies in the College.</td>
          </tr>

          <tr>
            <td>29.</td>
            <td>	Sri. H. Rama Rao and Mrs. H. Sita Bai Prize	</td>
            <td>	Mrs. H. Sita Bai Prize	</td>
            <td>Highest marks in Final B.A. Opt. Eng.</td>
          </tr>

          <tr>
            <td>30.</td>
            <td>Kota Govinda Prabhu Sanskrit Prize</td>
            <td> Dr. M.V. Kamath, L.M.&S.</td>
            <td>To the best student taking part in the Annual College Day Sanskrit Recitation Competition</td>
          </tr>

          <tr>
            <td>31.</td>
            <td>The Vittal Kamath Memorial Prize</td>
            <td>Sri. M. Surendra Kamath and Sri Narendranath Kamath</td>
            <td>To the best outgoing student of PUC of PCMB group with Hindi under Part –1</td>
          </tr>

          <tr>
            <td>32.</td>
            <td>Late Sri Aroor Laxminarayana rao, Kannada Prize</td>
            <td>Late Sri Aroor Laxminarayana Rao, Udupi (Enhanced by A. Sripathi Rao)</td>
            <td>To a 1 year degree student who scores the highest marks in Kannada in the II PUC Examination and continues to study in the College</td>
          </tr>

          <tr>
            <td>33.</td>
            <td>Dr. U. Sundar Ram Pai Prize</td>
            <td> Victoria Jubilee Club</td>
            <td>To the best N.C.C Cadet of the College or alternatively to the best sportsman.</td>
          </tr>

          <tr>
            <td>34.</td>
            <td>Late Sri Kochkar Padmanabha Pai Memorial Prize</td>
            <td> Sri. C. Sukumaran Nair, Hosdurg</td>
            <td>To a student of III Year B.Com. Degree for the best performance in the II B.Com University Examination.</td>
          </tr>

          <tr>
            <td>35.</td>
            <td>	Late Rashtrakavi M.Govind Pai, Memorial Prize</td>
            <td>Sri. Anantha Pai, Banker Manjeshwar</td>
            <td>To a student who stands first in Kannada in the II B.A Degree University Examination</td>
          </tr>

          <tr>
            <td>36.</td>
            <td>Late Sri. P. Chandrashekar Rao Memorial Prize</td>
            <td>Donated by his father Sri. P. Ramakrishna Rao</td>
            <td>To the student who stands first in the Public Examination in III B.Sc. Statistics main.</td>
          </tr>

          <tr>
            <td>37.</td>
            <td>Late Sri Srinivas Malliah Memorial Prize</td>
            <td> Lions Club of Udupi</td>
            <td> a)To a student of this College who scores highest marks in Chemistry(Opt) Subject in Final Year B.Sc. Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>38.</td>
            <td>Late Sri Srinivas Malliah Memorial Prize</td>
            <td> Lions Club of Udupi</td>
            <td>b)To a student of this College who scores highest marks in History(Opt) Subject in Final Year B.A. Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>39.</td>
            <td>Sujir Sovereign Tile Works Prize</td>
            <td> M/s Sujir Sovereign Tile Works</td>
            <td>To a poor deserving student</td>
          </tr>

          <tr>
            <td>40.</td>
            <td>Kumbla Upendra Nayak Family Trust Prize</td>
            <td> Kumbla Upendra Nayak Family Trust</td>
            <td>To the best student of the College</td>
          </tr>

          <tr>
            <td>41.</td>
            <td>Dr. T.M.A. Pai Gold Medal</td>
            <td>Dr. T.M.A. Pai</td>
            <td>To the best student in the Final B.Sc. Degree Public Examination based on performance in the exam.</td>
          </tr>

          <tr>
            <td>42.</td>
            <td>Late Sri Andrade Memorial Prize</td>
            <td> Mrs. Elias Andrade</td>
            <td>To a poor deserving student.</td>
          </tr>

          <tr>
            <td>43.</td>
            <td>Late Sri Aroor Laxminarayana rao Gold Medal for Arts</td>
            <td>Aroor brothers for the ABC Trust</td>
            <td>To the best outgoing student of B.A. based on the performance in the Final Year Degree.</td>
          </tr>

          <tr>
            <td>44.</td>
            <td>Dr. R.L Adiga Gold Medal for Commerce</td>
            <td>Dr. R.L. Adiga</td>
            <td>To the student who stands first in the final B.Com class judged on the performance at the Final Year Degree examination.</td>
          </tr>

          <tr>
            <td>45.</td>
            <td>Prof. K.A. Krishnamurthi Gold Medal II</td>
            <td>Prof. K.A. Krishnamurthi felicitation Committee</td>
            <td>To the student obtaining highest marks in the Final B.Sc Major Maths in Mangalore and Udupi Districts.</td>
          </tr>

          <tr>
            <td>46.</td>
            <td>M/s Chandrana Brothers Silver Plaque</td>
            <td>M/s Chandrana Brothers, Mangalore</td>
            <td>To the best all-round Athlete of the College during the year.</td>
          </tr>

          <tr>
            <td>47.</td>
            <td>Sri. Laxminarayana R. Bhat Fellowship Prize</td>
            <td>Dr. R.L. Adiga</td>
            <td>To the student of the II year B.Sc. of each year on the basis of his/her performance at the II P.U.C Public Examination, this student having studied the II PUC in this College during the previous year and on the recommendation of a special committee appointed for the purpose.</td>
          </tr>

          <tr>
            <td>48.</td>
            <td>Laxmi Bai L. Adiga Fellowship Prize</td>
            <td>Dr. R.L. Adiga</td>
            <td>To the student of II Year B.Sc. of each year, on the basis of his/her performance at the I B.Sc. University Examination, the student having studied I B.Sc. in the College during the previous year and on the recommendation of a special committee appointed for the purpose.</td>
          </tr>

          <tr>
            <td>49.</td>
            <td>Dr. R.L. Adiga Fellowship Prize</td>
            <td>Dr. R.L. Adiga</td>
            <td>To the student of III Year B.Sc. of each y ear, on the basis of his/her performance at the II B.Sc. University Examination, the student having studied II B.Sc. in the College during the previous year and on the recommendation of a special committee appointed for the purpose.</td>
          </tr>

          <tr>
            <td>50.</td>
            <td>Smt. Beedu Laxmiamma Narayana Balla, Memorial Prize</td>
            <td>Sri Vyasaraya Ballal and Brothers</td>
            <td>To the student scoring highest marks in Sanskrit in the II B.A degree Examination every year.</td>
          </tr>

          <tr>
            <td>51.</td>
            <td>The Late Prof. H. Sunder Rao Memorial English Prize</td>
            <td> Mrs. Hemalatha G. Kuber</td>
            <td>To the student who secures the highest marks in English at I year PUC (April every year)</td>
          </tr>

          <tr>
            <td>52.</td>
            <td>B. Jyothi bai Memorial Prize</td>
            <td>Sri. B. Shivashankar Rao.</td>
            <td>To the student securing highest marks in Economics at the Final B.A. University Examination.</td>
          </tr>

          <tr>
            <td>53.</td>
            <td>Pavanje Guru Rao Memorial Prize</td>
            <td>Mrs. Mandakini Bai</td>
            <td>Purandaradasa Music Competition Prize to the student who stands first at the competition held in Vocal Recital of Purandaradas Keertanas.</td>
          </tr>

          <tr>
            <td>54.</td>
            <td>Padukudru Govina Bhat Memorial Proficiency Award Prize</td>
            <td>Sri. P. Narayana Bhat</td>
            <td>	To the most deserving student (both Academic and Economic conditions) studying the II P.U.C.</td>
          </tr>

          <tr>
            <td>55.</td>
            <td>	Late Vasudeva Setty Memorial Prize</td>
            <td> Late Vasudeva Setty Prize</td>
            <td>	To the best all-round student judged by his/her performance in curricular and extracurricular activities</td>
          </tr>

          <tr>
            <td>56.</td>
            <td>Late Rtn. Vasudeva Setty Memorial Rolling shield</td>
            <td>	Instituted by Rotary Club Udupi (West)</td>
            <td>To the best outgoing NSS student of the year</td>
          </tr>

          <tr>
            <td>57.</td>
            <td>Late Sri Achutha Pai Kochikar Memorial Prize/Scholarship</td>
            <td>Smt. Sathyabhama Pai</td>
            <td>To the 3 students standing first in II PUC (Public) Examinations in Arts, Commerce and Science (PCMB) in April each year who continue their studies in the College</td>
          </tr>

          <tr>
            <td>58.</td>
            <td>Prof. B. Krishnappa Memorial English Prize</td>
            <td> Sudents Council, M.G.M College 1981 – 82.</td>
            <td> To the student who stands first in English language Paper II of B.A. B.Sc. Examination held by the University in April each year.</td>
          </tr>

          <tr>
            <td>59.</td>
            <td>Smt. Rajeshwari Ramanarayana Memorial Scholoarship</td>
            <td>M.G.M College Staff Club and Management</td>
            <td>To the student of I B.A. (Optional English) who has scored highest marks in English of II PUC Board examination in April of previous year.</td>
          </tr>

          <tr>
            <td>60.</td>
            <td>	Late Sri. T.A. Pai Memorial Prize</td>
            <td> All India Syndicate Bank Officers’ Association Central Office, Manipal</td>
            <td> Association Central Office, Manipal	To be awarded to the student of the college who secures highest marks in Final Year B.Com Degree Examination every year.</td>
          </tr>

         <tr>
            <td>61.</td>
            <td>Rajeshwari Memorial Endowment Prize</td>
            <td>Sri. S.K. Menon, father of the Late Mrs. Rajeshwari Ramnayan</td>
            <td>To be awarded to the student who secures the highest marks in optional English at the final B.A. Examination of April each year.</td>
          </tr>

          <tr>
            <td>62.</td>
            <td>Prof. B. Krishnappa Memorial English Scholarship</td>
            <td>	Smt. Rathnamma B. Krishnappa</td>
            <td>To be awarded to the student studying the II year B.A. class with optional English who secures the highest marks in Opotional English Paper of I B.A examination of the University in the preceding year.</td>
          </tr>

          <tr>
            <td>63.</td>
            <td>Late Sri M. Robert Peres Memorial Prize</td>
            <td>M.G.M College Staff Club</td>
            <td>To be awarded each year as a prize to the First Year B.A. student of the College who has secured highest marks in Economics at II year Pre-University Board examination.</td>
          </tr>
          
          <tr>
            <td>64.</td>
            <td>Late Sri Pundalika Shenoy Memorial Prize</td>
            <td> Sri. U. Harish P. Shenoy, Udupi</td>
            <td>To 4 poor and deserving students</td>
          </tr>

          <tr>
            <td>65.</td>
            <td>Late Sri. K. Shekhar Shetty Memorial Prize</td>
            <td>Students’ Council 1983 – 84</td>
            <td>	To 4 students of the College (3 students in the II PUC, 1 B.Sc, II B.Sc. Class who have obtained highest marks in Biology/Botony/ PU Board/ University examinations of April each year and who are continuing their studies in the College and to the student who obtains the highest marks in Botany in the Final B.Sc. Examination of april each Year).</td>
          </tr>

          <tr>
            <td>66.</td>
            <td>Late Srinivas Putturaya Memorial Prize</td>
            <td> Late Srnivasa Putturaya Memorial Committee</td>
            <td>To be awarded each year. Light-Vocal Music I and II Rs. 150/-, Rs. 75/-, Classical Vocal Music : I and II.</td>
          </tr>


          <tr>
            <td>67.</td>
            <td>	Padur Ramakrishna Tantry Memorial Prof. K.S. Haridasa Bhat Gold Medal</td>
            <td>Smt. P. Saraswathy Tantry Gulbarga</td>
            <td>To  the best student of the College with Economics as one of the optional subject who stands first in the Final B.A. Degree Examination with at least 50% marks and has passed the previous University examinations of I and II years. </td>
          </tr>


          <tr>
            <td>68.</td>
            <td>Smt. Thailambal Ammal Annual Prize</td>
            <td>Prof. K.K. Easwaran</td>
            <td>ed to the best outgoing student of this college of the Final Year B.Sc., with Botany as one of the subjects who scores the highest marks in the final B.Sc. Examination of April every year.</td>
          </tr>


          <tr>
            <td>69.</td>
            <td>National Cadet Corps Prize</td>
            <td>NCC Sub-Unit M.G.M College, Udupi</td>
            <td>To the best outgoing cadet of NCC Naval Sub-Unit of the College studying in the Final Year Degree who has served not less than 3 years in NCC continuously, holds certificate ‘C’ and has attended at least one National Level Camp.o the best student taking part in the Annual College Day Sanskrit Recitation Competition</td>
          </tr>

          <tr>
            <td>70.</td>
            <td>Dr. T.M.A. Pai Udayavani Endowment Prize</td>
            <td>20th year Festival Committee of Udayavani</td>
            <td>Three students of II PUC based on their merit in I PUC (Arts, Science and Commerce) and character as decided by a committee appointed for the purpose by the principal.</td>
          </tr>

           <tr>
            <td>71.</td>
            <td>Late Sri P.S. Acharya endowment Scholarship Prize</td>
            <td>Dr. P.B. Rao Smt. Manorama S. Acharya and Family</td>
            <td>To a Brahmin Student who has secured the highest marks in II PUC Board Examination (minimum 45%) and is continuing his studies in the I B.Com of the College and whose parents / guardians’ income is below Rs.20,000</td>
          </tr>

          <tr>
            <td>72.</td>
            <td>Late Sri P.S. Acharya endowment Scholarship Prize</td>
            <td>Dr. P.B. Rao Smt. Manorama S. Acharya and Family</td>
            <td>To a Brahmin Student who has secured the highest marks in II PUC Board Examination (minimum 45%) and is continuing his studies in the I B.Com of the College and whose parents / guardians’ income is below Rs.20,000</td>
          </tr>

          <tr>
            <td>73.</td>
            <td>Late Sri P.S. Acharya endowment Scholarship Prize</td>
            <td>Dr. P.B. Rao Smt. Manorama S. Acharya and Family</td>
            <td>To a student who was in receipt of this scholarship in the I B.Com Degree Class and is continuing his studies in the II B.Com of the College subject to the conditions stipulated by the donor ( on a continuing basis)</td>
          </tr>

          <tr>
            <td>74.</td>
            <td>Late Sri P.S. Acharya endowment Scholarship Prize</td>
            <td>Dr. P.B. Rao Smt. Manorama S. Acharya and Family</td>
            <td>To a student who was in receipt of this scholarship in the I B.Com Degree Class and is continuing his studies in the II B.Com of the College subject to the conditions stipulated by the donor ( on a continuing basis)</td>
          </tr>

          <tr>
            <td>75.</td>
            <td>Late Sri P.S. Acharya endowment Scholarship Prize</td>
            <td>Dr. P.B. Rao Smt. Manorama S. Acharya and Family</td>
            <td>To a student who was in receipt of this scholarship in the II B.Com Degree Class and is continuing his studies in the III B.Com of the College subject to the conditions stipulated by the donor</td>
          </tr>

          <tr>
            <td>76.</td>
            <td>Late Sri P.S. Acharya endowment Scholarship Prize</td>
            <td>Dr. P.B. Rao Smt. Manorama S. Acharya and Family</td>
            <td>To a student who was in receipt of this scholarship in the II B.Com Degree Class and is continuing his studies in the III B.Com of the College subject to the conditions stipulated by the donor</td>
          </tr>

          <tr>
            <td>77.</td>
            <td>Late Sri N.V. Kamath Endowment Prize</td>
            <td>Sri M.V. Kamath, Mumbai (original donor) Endowment subsequently enhanced by Sri M.V. Kamath</td>
            <td>To the student of I B.Com, Degree class who secures highest marks in Business,Statistics and Mathematics in University Examinations each year.</td>
          </tr>

          <tr>
            <td>78.</td>
            <td>Late Sri Narain S. Pai Kochikar Endowment Scholarship Prize</td>
            <td>Sri. Raghuram N. Pai, Udupi</td>
            <td>To the best outgoing NCC Cadet of the College each year</td>
          </tr>

          <tr>
            <td>79.</td>
            <td>Late Sri T.A. Pai Memorial Prize</td>
            <td>Sri. M.V. Padiyar, Manipal</td>
            <td>To a Gowda Saraswath Brahmin student of this college who scores highest marks in the Final B.Com Degree examination in the Preceding year</td>
          </tr>

          <tr>
            <td>80.</td>
            <td>Rajaram Kamath Prize</td>
            <td>	Sri Rajaram Kamath Kasargod</td>
            <td>To a student of this College who scores the highest marks in Hindi in the II Year B.Com degree Exam of Mangalore university.</td>
          </tr>

          <tr>
            <td>81.</td>
            <td>Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize</td>
            <td> Kochikar Trust Fund, Udupi</td>
            <td>a) To a deserving student of this College who passes Final B.Sc. with highest marks in Computer Science (Opt) Subject in Final Year Degree Examination of Mangalore University in Preceding year.</td>
          </tr>


          <tr>
            <td>82.</td>
            <td>Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize</td>
            <td> Kochikar Trust Fund, Udupi</td>
            <td>b) To a deserving student of this College who passes Final B.Sc./ Final B.A. with highest marks in Home Science (Opt) Subject in Final Year Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>83.</td>
            <td>	Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize</td>
            <td>Kochikar Trust Fund, Udupi</td>
            <td>c) To a deserving student of this College who passes Final B.A. with highest marks in Political Science (Opt) Subject in Final Year Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>84.</td>
            <td>Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize</td>
            <td>Kochikar Trust Fund, Udupi</td>
            <td>d) To a deserving student of this College who passes Final B.Sc. with highest marks in Physics(Opt) Subject in Final Year Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>85.</td>
            <td>Late Sri Kochikar Panduranga Pai Memorial Scholarship Prize</td>
            <td>Kochikar Trust Fund, Udupi</td>
            <td>a) To a deserving student of this College who passes Final B.Sc. with highest marks in Zoology (Opt) Subject in Final Year Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>86.</td>
            <td>Late Sri Kochikar Panduranga Pai Memorial Scholarship Prize</td>
            <td>Kochikar Trust Fund, Udupi</td>
            <td>b) To a deserving student of this College who passes Final B.A. with highest marks in Kannada (Opt) Subject in Final Year Degree Examination of Mangalore University in Preceding year.</td>
          </tr>

          <tr>
            <td>87.</td>
            <td>Late Miss. A.J. Bharathi Memorial Scholarship Prize</td>
            <td>Dr. A.L. Jayadevappa Chikmagalur</td>
            <td>	To a deserving student of this College who scores highest Marks in I P.U. Annual Examination with arts subjects in preceding year.</td>
          </tr>

          <tr>
            <td>88.</td>
            <td>Late Miss. A.J. Bharathi Memorial Scholarship Prize</td>
            <td>Dr. A.L. Jayadevappa Chikmagalur</td>
            <td>To a deserving student of this College who scores highest Marks in II P.U. Board Examination with arts subjects in preceding year.</td>
          </tr>

          <tr>
            <td>89.</td>
            <td>Late Sri. H. Vasudeva Nayak Scholarship Prize</td>
            <td> Sri. H., Raghuram Nayak, Udupi</td>
            <td>To the student scoring highest marks in Chemistry of I B.Sc., University Examination</td>
          </tr>

          <tr>
            <td>90.</td>
            <td>Prof. U.L. Acharya Endowment Scholarship (Professor of physics from 1951 – 1976)</td>
            <td>Sr. S.A. Bhandarkar Bahrain</td>
            <td>a) To a student of this college who secures highest marks in Physics at the Second Year Pre-University Board Examination.</td>
          </tr>

          <tr>
            <td>91.</td>
            <td>Prof. U.L. Acharya Endowment Scholarship (Professor of physics from 1951 – 1976)</td>
            <td>Sr. S.A. Bhandarkar Bahrain</td>
            <td>b) To a student of this collegewho secures highest marks in Physics in the Final Year B.Sc. Degree Examination.</td>
          </tr>

          <tr>
            <td>92.</td>
            <td>Sri. R. Nagasraj Endowment Scholarship Prize</td>
            <td>Sri. R. Nagaraj, Sirsi</td>
            <td>To the outgoing student of Final B.A. of preceding year of this College who scores highest marks in Optional English in University Examination in I, II and III year taken together</td>
          </tr>

          <tr>
            <td>93.</td>
            <td>M.G.M College staff Club Endowment Scholarship</td>
            <td>M.G.M College staff Club and Sri Sadashiva Rao, Commerce department, P.P.C. Udupi</td>
            <td>To the award of any member of the Non-Teaching Staff of M.G.M College, who secures highest marks in S.S.L.C and continues his/her studies in this college.</td>
          </tr>

          <tr>
            <td>94.</td>
            <td>Late Srimathi Kidiyoor Nagaveni Amma Memorial Endowment scholarship Prize</td>
            <td>Kidiyoor Nagalakshmi Srinivas Trust (Regd). Udupi</td>
            <td>a) To a student of this College who obtains the highest marks in I B.A. Final Examination</td>
          </tr>

          <tr>
            <td>95.</td>
            <td>Late Kidiyoor Laxmi Narayana Rao Memorial Endowment scholarship Prize</td>
            <td> Kidiyoor Nagalakshmi Srinivas Trust (Regd). Udupi</td>
            <td>To a student of this College who obtains the highest marks in I B.Com., Final Examination.</td>
          </tr>

          <tr>
            <td>96.</td>
            <td>Late Dr. S R Kidiyoor Memorial Endowment scholarship Prize</td>
            <td> Kidiyoor Nagalakshmi Srinivas Trust (Regd). Udupi</td>
            <td>To a student of this College who obtains the highest marks in I B.Sc., Final Examination.</td>
          </tr>

          <tr>
            <td>97.</td>
            <td>Late Sri. Ashwin Shetty Memorial Endowment Scholarship Prize</td>
            <td>Sri. P. Shivaji Shetty, Notary Advocate, Udupi and his wife Mrs. Jayanthi S. Shetty</td>
            <td>To a student of II PUC with PCMB of this college, who scores highest marks in the Board Examination</td>
          </tr>

          <tr>
            <td>98.</td>
            <td>Late Sri. Gautham Shetty Memorial Endowment Scholarship Prize</td>
            <td>Sri. P. Shivaji Shetty, Notary Advocate, Udupi and his wife Mrs. Jayanthi S. Shetty</td>
            <td>To a Final Year B.A. student of this college, with English, Economics and History on the basis of merit and Character who scores highest marks in the Final B.A. Degree Examination of Mangalore University in the preceding year.</td>
          </tr>

          <tr>
            <td>99.</td>
            <td>Late Major Chandrapal Memorial Endowment Scholarship Prize</td>
            <td> Dr. Ram Challarege, New York.</td>
            <td>To a student of II B.Sc. Degree class who has completed the I B.Sc Course in this college itself. He/She will be selected by a panel of teachers on the basis of Merit and/or active participation in N.S.S. or N.C.C and /or Proficiency in Debate, Essay writing and Allied activities.</td>
          </tr>

          <tr>
            <td>100.</td>
            <td>Late Prof. B.V. Achar Endowment Scholarship Prize</td>
            <td>Students of Prof. B.V. Achar</td>
            <td>To a best student of the College in the II B.Sc. class who scores the highest marks in Mathematics in I B.Sc., University Examination.</td>
          </tr>

          <tr>
            <td>101.</td>
            <td>Late Samuel Christananda Memorial Endowment Scholarship Prize</td>
            <td>Non Teaching staff M.G.M college</td>
            <td>To a child of a member of non-teaching staff who is studying and has completed I P.U.C in the college itself and has scored highest marks in I P.U.C if no candidate is available in the II P.U.C the same may be awarded to a I year Degree student (Child of Non – teaching staff) on the basis of Marks obtained in the previous Examination.</td>
          </tr>

          <tr>
            <td>102.</td>
            <td>Late Miss Girija Memorial Endowment Scholarship Prize</td>
            <td>Inmates (1996-97) of Vadiraja Vidyarthini Nilaya M.G.M College Hostel for Women</td>
            <td>To an inmate of V.V. Nilaya and studying in the II year B.Com Degree on the basis of I year5 University examination marks.</td>
          </tr>

          <tr>
            <td>103.</td>
            <td>Aroor Kinni Sheshagiri Rao Memorial Endowment Scholarship Prize</td>
            <td>Smt. Kalyani Amma Udupi</td>
            <td>To a Brahmin student who scored highest marks in the I year PUC annual Examination in Arts</td>
          </tr>

          <tr>
            <td>104.</td>
            <td>	Aroor Padmavathi Amma Memorial Endowment Scholarship Prize</td>
            <td>Smt. Kalyani Amma Udupi</td>
            <td>To a Brahmin student who scored highest marks in the I year PUC annual Examination in Commerce</td>
          </tr>

          <tr>
            <td>105.</td>
            <td>Aroor Venkata Rao Memorial Endowment Scholarship Prize</td>
            <td>Smt. Kalyani Amma Udupi</td>
            <td>To a Brahmin student who scored highest marks in the I year PUC annual Examination in Science</td>
          </tr>

          <tr>
            <td>106.</td>
            <td>Smt. Sujatha P.Rao, Sri Pratap Rao and Bhat Endowment Scholarship</td>
            <td>Smt. Sujatha P.Rao, Sri Pratap Rao and Sri Jayadeve Bhat, Kunjibettu, Udupi</td>
            <td>Free Mid-Day Meals during the academic year to a poor and deserving Lady student selected by the Principal</td>
          </tr>

          <tr>
            <td>107.</td>
            <td>Late Sri Kochikar Manjunath Pai scholarship</td>
            <td>Kochikar Trust Fund Udupi</td>
            <td>To a poor and deserving student of the College</td>
          </tr>

          <tr>
            <td>108.</td>
            <td>	K.S.O.U. study center, M.G.M College Endowment Scholarship Prize</td>
            <td>Coordinator and staff, K.S.O.U. study center, M.G.M College, Udupi</td>
            <td>To a Final Year B.A. student who has scored highest percentage of marks in Economics of I and II Year Degree Exam. Of April (Univ.)</td>
          </tr>

          <tr>
            <td>109.</td>
            <td>Late Smt. Sushila Somasundar and Sri. D.N. Somasundara Endowment Scholarship Prize</td>
            <td>Sri. D.N. Somasundara Ret. Phy. Director and his children, Bangalore</td>
            <td>a) To a Final Year B.A. student who scores highest marks in II Year B.A, B.Sc., B.Com in April Exam. b) Who is active in extra curricular activities of the college c) Who is not getting already any endowment scholarship prize</td>
          </tr>

          <tr>
            <td>110.</td>
            <td>Sri. K. Prabhakar Pai and Smt. Nirupama Prabhakar Pai Endowment Scholarship Prize for excellence in Chemistry</td>
            <td>Ms. Mahima Joishy, America</td>
            <td>To a male student of this college who scores the highest marks in chemistry of II PUC Board Exam 2)To a female student of this college who scores the highest marks in Chemistry of II PUC Board Exam</td>
          </tr>

          <tr>
            <td>111.</td>
            <td>Late Prof. K.S. Haridas Bhat Memorial Endowment Scholarship Prize</td>
            <td>Smt. U.Kusuma, M.G.M College, Udupi</td>
            <td>To a student of this college who stood first in the Essay Competition of current affair conducted in the college</td>
          </tr>

          <tr>
            <td>112.</td>
            <td>Mrs Vanajakshi Adiga Scholarship</td>
            <td>Sri. Balakrishna Adiga, Bangalore</td>
            <td>To one or more needy merited brahmin students of I year degree class of this college. students should apply to Mrs. Vanajakshi Adiga through the college.</td>
          </tr>

          <tr>
            <td>113.</td>
            <td>Late Sri Kochikar Panduranga Pai and Late Smt.Radha Bai Pai Memorial endowment prize</td>
            <td> Sri Prakash Pai Kochikar,Thonse</td>
            <td>Best outgoing college students of the college.</td>
          </tr>

          <tr>
            <td>114.</td>
            <td>Late Smt.K.Beefathimabi memorial endowment prize</td>
            <td>Smt.Bee Isabi Bailoor</td>
            <td>To a poor and deserving I PUC students.</td>
          </tr>
          <tr>
            <td>115.</td>
            <td>Late Sri U Vittal Bhat and Late Smt.adithi Amma memorial endowment prize</td>
            <td> Dr. U K Shyama Bhat, retd.Prof.MGM college</td>
            <td>To a final year student who scores highest marks in Political science in April university exam in each year.</td>
          </tr>

          <tr>
            <td>116.</td>
            <td>Late Prof. U L Acharya endowment prize</td>
            <td>The member of the family of prof. U L Acharya</td>
            <td>To a II BSc student who scores highest in Physics at his II year university exam of preceding years</td>
          </tr>

          <tr>
            <td>117.</td>
            <td>Late Prof. U L Acharya endowment prize</td>
            <td>The member of the family of prof. U L Acharya</td>
            <td>To a II PUC & III Degree student (preferably a brahmin) who scores a minimum of 60% in the preceding final exam & proves good character & conduct</td>
          </tr>

          <tr>
            <td>118.</td>
            <td>Late Katpady Madhava Shenoy & Late Yamuna Madhava Shenoy Endowment Prize</td>
            <td>Sr i K. Raghunath Shenoy, Sri K. Ramesh Shenoy & Sri K.Pr abhakar Shenoy</td>
            <td>To a Girl Student belonging to GSB (Konkani Speaking) Community who is admitted to I PUC with Computer Science as optional Subject and secures highest percentage of marks in SSLC Exam. and to a Boy Student belonging to GSB (Konkani Speaking) Community who is admitted to the I PUC with Commerce as optional Subject and secures highest percentage of marks in SSLC Exam.</td>
          </tr>

          <tr>
            <td>119.</td>
            <td>Late Sri Kochikar Panduranga Radhabai Memorial Endowment Prize</td>
            <td>Nirmala A. Rao</td>
            <td>Best outgoing student of the College</td>
          </tr>

          <tr>
            <td>120.</td>
            <td>Late Gururaj Bhat Memorial Prize</td>
            <td>M. G. M. P. U. Students 2005- 2006</td>
            <td>To a needy Brahmin student of II P.U. Commerce.</td>
          </tr>

          <tr>
            <td>121.</td>
            <td>Late Kochikar Raghuram N. Pai Memorial Endowment Prize</td>
            <td>Insti tuted by Mrs. Nirmala N. Pai</td>
            <td>To a G.S.B. Student of the II Year B.Com. securing highest total marks in I B.Com. Exam. of the University.</td>
          </tr>

          <tr>
            <td>122.</td>
            <td>Late Katpady Madhava Shenoy & Late Yamuna Madhava Shenoy Endowment Prize</td>
            <td>Sr i K. Raghunath Shenoy, Sri K. Ramesh Shenoy & Sri K. Pr abhakar Shenoy</td>
            <td>To a Girl Student belonging to GSB (Konkani Speaking) Community who is admitted to I PUC with Computer Science as optional Subject and secures highest percentage of marks in SSLC Exam. and to a Boy Student belonging to GSB (Konkani Speaking) Community who is admitted to the I PUC with Commerce as optional Subject and secures highest percentage of marks in SSLC Exam.</td>
          </tr>

          <tr>
            <td>123.</td>
            <td>Dr. T.M.A. Pai Memorial.</td>
            <td>Dr. Naresh Nayak</td>
            <td>	The best Male and Females students of I PUC who will continue to II PUC in the same college. whose parents are not income tax payers.</td>
          </tr>

          <tr>
            <td>124.</td>
            <td>Sharadha M. Pai Memorial scholarship.</td>
            <td>Dr. Naresh Nayak</td>
            <td>Best female student.</td>
          </tr>

          <tr>
            <td>125.</td>
            <td>Late Kochikar Raghuram N. Pai Memorial Endowment Prize.</td>
            <td>Instituted by N. Mrs. Nirmala Pai.</td>
            <td>To a G.S.B. Student of the II Year B.Com. securing highest total marks in I B.Com. Exam. of the University</td>
          </tr>

          <tr>
            <td>126.</td>
            <td>Potty Anjaneyulu and Pottym oorthy Subba R ao Me mor ia lEn dowme nt Scholarship.</td>
            <td>Potty Raghava Rao and Pottymoorthy Appa Rao.</td>
            <td>T. o two meritorius and deserving students of I Year B.Sc</td>
          </tr>

          <tr>
            <td>127.</td>
            <td>	Late Ramakrishna Vasudeva Kamath Memorial Endowment Prize.</td>
            <td>Smt. Shakunthala Kamath.</td>
            <td>To two meritorius and poor students of B.Sc.o 4 poor and deserving students</td>
          </tr>

          <tr>
            <td>128.</td>
            <td>Corporation Bank Gold Medal</td>
            <td>	Corporation Bank Head Office Mangalore.</td>
            <td>Best outgoing student of the Degree College.</td>
          </tr>

          <tr>
            <td>129.</td>
            <td>Late M. Katpadi Ramesh Shenoy Endowment Scholarship.</td>
            <td>Mrs. Sheela B. Shenoy and Mrs. Shyamala Shenoy.i</td>
            <td>Two best students-one girl and one boy of I PUC securing highest marks in SSLC.</td>
          </tr>

          <tr>
            <td>130.</td>
            <td>S.M. Pejathaya Prize.</td>
            <td>Sri S. M. Pejathaya.</td>
            <td>Best Cadet of Naval Wing & Best Cadet of Army Wing.</td>
          </tr>

          <tr>
            <td>131.</td>
            <td>Alumni Association Prize.</td>
            <td>Alumni Association of MGM College.</td>
            <td>Five merited Degree students.</td>
          </tr>

          <tr>
            <td>132.</td>
            <td>PTA Prize.</td>
            <td>PTA of MGM College.</td>
            <td>To supplement to Krishnamurthy Gold Medal.</td>
          </tr>

          <tr>
            <td>133.</td>
            <td>Late Vakil Ramanath Pai & Kalyani Pai Memorial Scholarship</td>
            <td>Dr. J.P. Kochikar</td>
            <td>To Meritorious I B.A . student.</td>
          </tr>

          <tr>
            <td>134.</td>
            <td>	Late Shri K. Mohandas Kamath Memorial Prize.</td>
            <td> Mrs. Kusuma Kamath.</td>
            <td>To a student of I BSc, II BSc, III Bsc Degree who get the highest marks in Physics in the respective University examination and also the Prize winner in the Physics Seminar Competition held in the college.</td>
          </tr>

          <tr>
            <td>135.</td>
            <td>Late Sri K. H. Karki Memorial Prize.</td>
            <td>Dr. Deepa Karki.</td>
            <td>To a Student of Second PUC who gets highest marks in Chemistry in II PUC Annual Examination.</td>
          </tr>

          <tr>
            <td>136.</td>
            <td>Chokkady Archaka Family Endowmnent Prize.</td>
            <td>Prof. C.A. Bhat</td>
            <td>To Economically Poor Madhwa Student or Students studying in B.Sc class who secure highest Mark in Mathematics.</td>
          </tr>

          <tr>
            <td>137.</td>
            <td>Mrs. Kamala Udupa & Ms. Bharathi Udupa Endowment Prize Smt. Vimala Udupa & Sri Satyanarayana Udupa endowment Prize.</td>
            <td>Sri Raghavendra Udupa</td>
            <td>To the highest scroes in II PU Science with Sanskrit as one of the Languages.To the final BSc Student with Sanskrit as one of the languages</td>
          </tr>
        
          <tr>
            <td>138.</td>
            <td>Late Prof. B. Krishnappa Memorial endowment prize.</td>
            <td>Jayaram Beladakere & Naganandinin Jayaram.</td>
            <td>To the deserving student studying in I or II year MSc (Comp.Sc)</td>
          </tr>
            </tbody>
          </table>
         <div className="center-top">
  <a href="/Scholarships" className="top-btn">Top</a>
</div>
        </div>
      )}
    </div>
  );
}

export default Scholarships;
