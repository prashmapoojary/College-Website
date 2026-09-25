import React, { useState } from 'react';
import '../styles/Admissions.css';

const Admissions = () => {
    const [activeSection, setActiveSection] = useState('admission-details');

    const sections = [
        { id: 'admission-details', title: 'Admission Details' },
        { id: 'application-form', title: 'Application Form' },
        { id: 'interview-requirements', title: 'Interview Requirements' },
        { id: 'post-admission', title: 'Post-Admission Conditions' },
        { id: 'discipline', title: 'Rules of Discipline' },
        { id: 'parent-responsibilities', title: 'Parent Responsibilities' },
        { id: 'contact-info', title: 'Contact Information' }
    ];

    const renderSectionContent = () => {
        switch(activeSection) {
            case 'admission-details':
                return (
                    <div className="section-content">
                        <h3>Admission Information</h3>
                        <div className="info-card">
                            <h4>📅 Academic Year Validity</h4>
                            <p><strong>Admissions to any course are made for one academic year only.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>🔄 Re-admission Process</h4>
                            <p><strong>Students will be admitted to the next higher class (subsequent academic years) on the basis of fresh application for admission taking into account their progress, conduct and behavior during the year.</strong></p>
                        </div>
                        <div className="info-card warning">
                            <h4>⚠️ Important Note</h4>
                            <p>All admissions are provisional and subject to verification of documents and eligibility criteria.</p>
                        </div>
                    </div>
                );
            
            case 'application-form':
                return (
                    <div className="section-content">
                        <h3>Application Form Requirements</h3>
                        <div className="info-card">
                            <h4>📋 Form Format</h4>
                            <p><strong>Application should be in the prescribed form</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>⏰ Submission Timeline</h4>
                            <p><strong>Applications by post or in person should reach the Principal soon after the publication of the result of the S.S.L.C. or Pre-University examinations but within the last date notified on the Notice Board of the College</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📊 Marks Entry</h4>
                            <p><strong>Marks obtained should be entered on the application form.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📄 Required Attachments</h4>
                            <ul>
                                <li><strong>Xerox copy of caste certificate</strong> (wherever applicable)</li>
                                <li><strong>Income certificate</strong> (wherever applicable)</li>
                            </ul>
                        </div>
                        <div className="info-card warning">
                            <h4>⚠️ Important</h4>
                            <ul>
                                <li><strong>Incomplete application forms will be rejected.</strong></li>
                                <li><strong>Students will have to opt for one or more co-curricular activities from the list given in the application for admission.</strong></li>
                                <li><strong>Credits will be awarded to the activities and achievements and considered for the marks in the final examination.</strong></li>
                            </ul>
                        </div>
                    </div>
                );
            
            case 'interview-requirements':
                return (
                    <div className="section-content">
                        <h3>Particulars to come with to the Interview</h3>
                        <div className="info-card">
                            <h4>📚 Original Documents Required</h4>
                            <p><strong>All candidates should bring the following original records when they appear for interview along with the prescribed fees:</strong></p>
                            <ul>
                                <li><strong>Transfer certificate</strong> from the institution last attended</li>
                                <li><strong>S.S.L.C. marks card</strong> along with a xerox copy</li>
                                <li><strong>Certificate/marks card</strong> relating to the qualifying examination along with a xerox copy</li>
                                <li><strong>Conduct certificate</strong> from the Head of the Institution last attended</li>
                                <li><strong>Group/caste certificate</strong> issued by the Tahsildar along with a xerox copy</li>
                                <li><strong>Eligibility Certificate</strong> (for non-Karnataka students) along with a xerox copy</li>
                                <li><strong>Three copies of passport size photograph</strong></li>
                                <li><strong>Income Certificate form No.3 or No.4</strong> in the case of students who wish to apply for fee concession (income of parent or guardian should be less than Rs. 44,500/- per year)</li>
                            </ul>
                        </div>
                        <div className="info-card warning">
                            <h4>⚠️ Important Note</h4>
                            <p>All original documents must be brought for verification during the interview process.</p>
                        </div>
                    </div>
                );
            
            case 'post-admission':
                return (
                    <div className="section-content">
                        <h3>Conditions that apply after Admission</h3>
                        <div className="info-card">
                            <h4>📋 Provisional Admissions</h4>
                            <p><strong>According to the P.U. Board/University regulations, all admissions made by the College are provisional and subject to the final approval of the P.U. Board/University.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>💰 Fee Policy</h4>
                            <p><strong>A Candidate who withdraws after completing his/her admission shall forfeit any claim to the fees paid by him/her and no TC will be issued to him/her unless he/she pays a year's tuition fees.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>🏥 Medical Examination</h4>
                            <p><strong>A student who is admitted to the College shall undergo a medical examination arranged by the College.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📚 Academic Standards</h4>
                            <p><strong>The College expects every student to maintain a high standard of conduct, regularity in attendance and urge in studies.</strong></p>
                        </div>
                        <div className="info-card warning">
                            <h4>⚠️ Important</h4>
                            <p><strong>Students must be prepared to abide by the rules and regulations of the institution.</strong></p>
                        </div>
                    </div>
                );
            
            case 'discipline':
                return (
                    <div className="section-content">
                        <h3>Rules of Discipline</h3>
                        <div className="info-card">
                            <h4>🚫 Offenses and Punishments</h4>
                            <p><strong>Irregularity in attendance, habitual inattention, neglect of work, insubordination, disorderly behaviour, obscenity in word or act are punishable by anyone of the following depending on the gravity of the offence:</strong></p>
                            <ul>
                                <li><strong>(a) Warning and intimating the fact to the parent or guardian;</strong></li>
                                <li><strong>(b) Fine;</strong></li>
                                <li><strong>(c) Loss of attendance;</strong></li>
                                <li><strong>(d) Cancellation of scholarships, freeship etc.,</strong></li>
                                <li><strong>(e) Suspension for a definite or indefinite period;</strong></li>
                                <li><strong>(f) Expulsion</strong></li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>🏠 Accommodation Requirements</h4>
                            <p><strong>Students are required to live with relatives or guardians or in hostels or lodging houses approved by the College authorities.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📝 Lodging Slip</h4>
                            <p><strong>Early in the first term every student shall fill a lodging slip giving particulars of his /her place of residence in Udupi.</strong></p>
                        </div>
                        <div className="info-card warning">
                            <h4>⚠️ Important Note</h4>
                            <p><strong>The college, though not responsible for the conduct of its students outside the premises, will take cognizance of any serious misconduct committed outside its precincts.</strong></p>
                        </div>
                    </div>
                );
            
            case 'parent-responsibilities':
                return (
                    <div className="section-content">
                        <h3>Parent's Responsibilities</h3>
                        <div className="info-card">
                            <h4>🤝 Cooperation Required</h4>
                            <p><strong>Parents and guardians are particularly requested to co-operate with the College in above said matters.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📝 Declaration</h4>
                            <p><strong>A declaration will have to be signed by the parent or guardian at the time of admission and in the presence of the Principal/Admission Committee.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📞 Regular Communication</h4>
                            <p><strong>Parents and guardians are earnestly requested to keep in touch with the Principal from time to time at least once in a month regarding the progress, attendance and conduct of their children and wards.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📮 Correspondence</h4>
                            <p><strong>If any other information is required by post, the Principal will be glad to give it, if a stamped, self addressed envelope is sent to him/ her.</strong></p>
                        </div>
                        <div className="info-card">
                            <h4>📧 Contact Address</h4>
                            <p><strong>All correspondence should be addressed to:</strong></p>
                            <ul>
                                <li><strong>Principal, M.G.M. College, Udupi-576102</strong></li>
                                <li><strong>Principal, M.G.M.P.U. College, Udupi-576102</strong></li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>📚 Study Materials</h4>
                            <p><strong>All text books prescribed for various classes, articles of stationery, record and exercise books are available in the M.G.M. College Students' Co-operative Stores. Charges are reasonable and students are expected to buy their requirements from the stores.</strong></p>
                        </div>
                        <div className="info-card warning">
                            <h4>⚠️ Important Policies</h4>
                            <ul>
                                <li><strong>Parents-Guardians are requested to clearly understand that the authorities or teachers of the college do not undertake to organize or lead any excursions, picnics, tours or pleasure trips.</strong></li>
                                <li><strong>The Principal refuses to entertain any requests to arrange excursions or to depute teachers to accompany them on excursions.</strong></li>
                                <li><strong>Students who go on excursions do so at their own risk.</strong></li>
                                <li><strong>While every effort will be made to inform the parents or guardians about any instance of serious misconduct on the part of their children or wards, the authorities of the college do not bind themselves to intimate in advance to the parent or guardian any action which they are compelled to take against any student in the best interests and discipline of the college.</strong></li>
                                <li><strong>Ragging is strictly forbidden. Anyone found indulging in this uncivilized practice will be summarily dismissed.</strong></li>
                                <li><strong>Both PU & Degree students shall wear the prescribed uniform.</strong></li>
                                <li><strong>Use & Possession of mobile phones on the campus is strictly prohibited. If found it will be confiscated and returned only at the end of the academic year.</strong></li>
                                <li><strong>Students and Parents are requested to note that as a matter of policy the college does not hold election for the Students Council.</strong></li>
                                <li><strong>Students vehicles will not be allowed inside the College Campus. They are supposed to park the vehicles in a specified area allotted by the College.</strong></li>
                            </ul>
                        </div>
                    </div>
                );
            
            case 'contact-info':
                return (
                    <div className="section-content">
                        <h3>Contact Information</h3>
                        <div className="info-card">
                            <h4>📍 Address</h4>
                            <p>Udupi Taluk and District<br />Karnataka, India<br />PIN: 576102</p>
                        </div>
                        <div className="info-card">
                            <h4>📞 Office Numbers</h4>
                            <p><strong>Office:</strong> 0820-2520359,0820-253041<br /><strong>Office:</strong> 0820 - 2530410</p>
                        </div>
                        <div className="info-card">
                            <h4>✉️ Email</h4>
                            <p><a href="mailto:principal_mgm@yahoo.com">principal_mgm@yahoo.co.in</a></p>
                        </div>
                        <div className="info-card">
                            <h4>🕒 Working Hours</h4>
                            <div className="working-hours">
                                <p><strong>Morning Session:</strong> 9.00 a.m. to 1.00 p.m.</p>
                                <p><strong>Afternoon Session:</strong> 2.00 p.m. to 5.00 p.m.</p>
                                <p><strong>Saturday:</strong> 9.00 a.m. to 1.00 p.m. only</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <h4>💬 Enquiries</h4>
                            <p>Reach us for all enquiries during working hours.</p>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="admissions-page">
            <div className="admissions-header">
                <h1>🎓 Admissions at MGM College</h1>
                <p>Complete information about our admission process, requirements, and policies</p>
            </div>

            {/* Admission Steps Section - Now positioned below header */}
            <div className="admission-steps-section">
                <div className="admission-steps-container">
                    <h2>🚀 Steps to Follow</h2>
                    <div className="admission-steps-grid">
                        <div className="step-card active">
                            <div className="step-icon">📝</div>
                            <h4>STEP 1</h4>
                            <h5>Register Yourself</h5>
                            <p>Create your account and provide basic information</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">✅</div>
                            <h4>STEP 2</h4>
                            <h5>Verify Email</h5>
                            <p>Confirm your email address through verification</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">📋</div>
                            <h4>STEP 3</h4>
                            <h5>Start Application Form</h5>
                            <p>Fill out the detailed application form</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">💳</div>
                            <h4>STEP 4</h4>
                            <h5>Pay Application Fee</h5>
                            <p>Complete the payment process</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">🚀</div>
                            <h4>STEP 5</h4>
                            <h5>Complete & Submit</h5>
                            <p>Review and submit your application</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admissions-container">
                <div className="sidebar">
                    <h3>Quick Navigation</h3>
                    <ul className="section-nav">
                        {sections.map(section => (
                            <li key={section.id}>
                                <button
                                    className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                                    onClick={() => setActiveSection(section.id)}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="main-content">
                    {renderSectionContent()}
                </div>
            </div>

            <div className="cta-section">
                <h2>Ready to Apply?</h2>
                <p>Start your academic journey with MGM College today</p>
                <a href="/apply" className="cta-btn primary">Apply Now</a>
            </div>
        </div>
    );
};

export default Admissions;