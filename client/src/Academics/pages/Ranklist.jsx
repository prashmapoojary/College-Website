import React, { useState } from "react";
import '../styles/Ranklist.css';

function App() {
  const [expandedYears, setExpandedYears] = useState({});
  const toggleYear = (year) => {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };
  const ranks = [
    { year: 2024, name: "Pallavi Kodagu", class: "B.A.(E(O)/H)", rank: "IV" },
    { year: 2024, name: "Sushmitha U G", class: "B.Com.(Voc)", rank: "VII" },
    { year: 2024, name: "Vasudha Kamath", class: "B.Sc.(BZ)", rank: "VII" },
    { year: 2024, name: "Vinay Kumar", class: "B.A.(E/H)", rank: "VIII" },
    { year: 2024, name: "Ria Lobo", class: "B.A.(E(O)/H)", rank: "IX" },
    { year: 2024, name: "Rakshitha Rajaram Bhat", class: "B.C.A.", rank: "X" },

    { year: 2023, name: "Prathiksha", class: "B.Sc.", rank: "IX" },
    { year: 2023, name: "Ranjitha Pai B", class: "B.Com", rank: "VII" },
    { year: 2023, name: "Nisha Shetty", class: "B.C.A.", rank: "VI" },
    { year: 2023, name: "Shreya", class: "B.C.A.", rank: "VII" },

    { year: 2022, name: "Pooja R", class: "B.C.A.", rank: "III" },
    { year: 2022, name: "Chinmayi", class: "B.A.(EHE)", rank: "X" },
	
    { year: 2021, name: "Vidyashree Kalkur", class: "B.Com (Voc)", rank: "IV" },
    { year: 2021, name: "Richa Uday Ramnathkar", class: "B.C.A.", rank: "V" },
    { year: 2021, name: "Rolin Priya D'souza", class: "B.C.A.", rank: "VI" },

    { year: 2020, name: "Vaishnavi Kedlaya H", class: "B.C.A.", rank: "VII" },
    { year: 2020, name: "Kamalesh Shenoy B", class: "B.Sc (MPC)", rank: "VIII" },
    { year: 2020, name: "Huda Fathima Ahamed", class: "B.C.A.", rank: "IX" },
    { year: 2020, name: "Sheikh Abdul Zahid", class: "B.Com (Voc)", rank: "IX" },

    { year: 2019, name: "Dhatri K S", class: "B.Com (Voc)", rank: "II" },
    { year: 2019, name: "Sadhana", class: "B.C.A.", rank: "III" },
    { year: 2019, name: "Madhavi H V", class: "B.Com (Voc)", rank: "VII" },

    { year: 2018, name: "Ankush Prabhu", class: "B.C.A.", rank: "I" },
    { year: 2018, name: "Akshatha", class: "M.Sc.(C.Sc)", rank: "I" },
    { year: 2018, name: "Prerana Patnkar", class: "B.Com(Voc)", rank: "V" },
    { year: 2018, name: "Shivani Nayak", class: "B.C.A.", rank: "VI" },
    { year: 2018, name: "Priyashree J Acharya", class: "B.C.A.", rank: "IX" },

    { year: 2017, name: "Pavithra", class: "B.C.A.", rank: "II" },
    { year: 2017, name: "Nilufar", class: "B.C.A.", rank: "III" },
    { year: 2017, name: "Rohith Inston Lobo", class: "M.Sc.(C.Sc)", rank: "III" },
    { year: 2017, name: "Rashmi R Upadhya", class: "B.C.A.", rank: "IV" },
    { year: 2017, name: "Anjum Ali", class: "B.C.A.", rank: "VI" },
    { year: 2017, name: "Anil Kumar N Shetty", class: "B.C.A.", rank: "VII" },
    { year: 2017, name: "Raksha R Rao", class: "B.C.A.", rank: "VIII" },

    { year: 2016, name: "Sudhindra Nayak", class: "B.C.A.", rank: "II" },
    { year: 2016, name: "Shriraksha", class: "B.C.A.", rank: "III" },
    { year: 2016, name: "Mahendra Kumar Hegde", class: "B.C.A.", rank: "IV" },
    { year: 2016, name: "Rathna Rajesh Bhat", class: "B.C.A.", rank: "VII" },
    { year: 2016, name: "Nayamratha", class: "B.C.A.", rank: "X" },
    { year: 2016, name: "Chakitha", class: "B.Sc(M.P.C)", rank: "VI" },

    { year: 2015, name: "Mithila Upadhya", class: "M.Sc.(C.Sc)", rank: "II" },
    { year: 2015, name: "Viona Jeesal Gomes", class: "B.C.A.", rank: "II" },
    { year: 2015, name: "Ramya Hebbar", class: "B.C.A.", rank: "VI" },
    { year: 2015, name: "Kamath Nikitha", class: "B.C.A.", rank: "IX" },
    { year: 2015, name: "Sangeetha Pai Barkur", class: "B.Com(Voc)", rank: "I" },
    { year: 2015, name: "Vismitha Shenoy", class: "B.Com(Gen)", rank: "IV" },
    { year: 2015, name: "Chaithra", class: "B.Com(Voc)", rank: "V" },
    { year: 2015, name: "Anup S Kumar", class: "B.Com(Voc)", rank: "X" },

    { year: 2014, name: "Aishwarya S", class: "B.Sc.(MPC)", rank: "III" },
    { year: 2014, name: "Meenakshi Shetty", class: "B.C.A.", rank: "III" },
    { year: 2014, name: "Melba Deena Lewis", class: "B.C.A.", rank: "V" },
    { year: 2014, name: "Rakshitha", class: "B.C.A.", rank: "VI" },

    { year: 2013, name: "Chethana", class: "B.Sc.(MPC)", rank: "I" },
    { year: 2013, name: "Shravana J", class: "B.Com", rank: "II" },
    { year: 2013, name: "Divya Nayak", class: "B.Com", rank: "IV" },
    { year: 2013, name: "Anandateertha G", class: "B.Com", rank: "V" },
    { year: 2013, name: "Seementhini Carol Fernandes", class: "B.C.A.", rank: "VII" },
    { year: 2013, name: "Praneeth", class: "B.C.A.", rank: "IX" },
    { year: 2013, name: "Shruthi Kamath", class: "B.C.A.", rank: "X" },

    { year: 2012, name: "Swathi S", class: "B.Com", rank: "I" },
    { year: 2012, name: "Soumya Nayak", class: "B.Com", rank: "II" },
    { year: 2012, name: "Prabhu Namratha Narayan", class: "B.Com", rank: "VI" },
    { year: 2012, name: "Shilpa K", class: "B.C.A", rank: "IV" },

    { year: 2011, name: "Shalitha D'Almeida", class: "B.C.A", rank: "II" },
    { year: 2011, name: "Vranda Shenoy K", class: "B.Sc.(BZC)", rank: "VII" },

    { year: 2010, name: "Samudhyatha Acharya", class: "B.A", rank: "III" },
    { year: 2010, name: "Sandhya H", class: "B.Sc.(MPC)", rank: "III" },

    { year: 2009, name: "Sujaya", class: "B.C.A", rank: "I" },
    { year: 2009, name: "Archana Nayak", class: "B.C.A", rank: "VI" },

    { year: 2008, name: "Hariprasad Nayak", class: "B.Com(Voc)", rank: "III" },
    { year: 2008, name: "Chethana K. R.", class: "B.Sc.(M.S.Cs.)", rank: "VIII" },
    { year: 2008, name: "Sindhu Kamath", class: "B.C.A.", rank: "IV" },
    { year: 2008, name: "Vijayalakshmi Nayak", class: "B.C.A", rank: "V" },
    { year: 2008, name: "Asha Bhat", class: "P.G.D.C.A.", rank: "I" },

    { year: 2007, name: "Sandhya Shenoy U", class: "B.Sc.(B.Z.C.)", rank: "IX" },
    { year: 2007, name: "Adithya Shenoy", class: "B.Com(Voc)", rank: "III" },
    { year: 2007, name: "Ramya Baliga", class: "B.Com(Voc)", rank: "IX" },
    { year: 2007, name: "Soumya S. Shenoy", class: "P.G.D.C.A.", rank: "I" },

    { year: 2006, name: "Akshatha G. Pai", class: "B.A. (E.E.Hs)", rank: "VIII" },
    { year: 2006, name: "Abhiram Soori", class: "B.Sc.(M.P.C.)", rank: "VIII" },

    { year: 2005, name: "Seema K.", class: "B.Sc.(M.P.C.)", rank: "V" },
    { year: 2005, name: "Vidya Tantri", class: "B.Com.", rank: "VII" },
    { year: 2005, name: "Smitha Holla", class: "B.Sc.(M.P.C.)", rank: "VIII" },

    { year: 2004, name: "Sharmila Shenoy", class: "B.A.(H.K.P.)", rank: "X" },
    { year: 2004, name: "Akhil Vijay D'Souza", class: "B.Sc.(M.P.Cs.)", rank: "VIII" },
    { year: 2004, name: "Rajesh P.E", class: "B.Sc. (M.P.Cs.)", rank: "X" },
    { year: 2004, name: "Priya G. Rao", class: "B.Com.(Voc)", rank: "I" },
    { year: 2004, name: "Mithun Lakshman Pai", class: "B.Com.(Voc)", rank: "III" },

    { year: 2003, name: "Rashmi P E", class: "III B.Sc (MPCs)", rank: "VI" },
    { year: 2003, name: "Krishna Murthy S", class: "III B.Com", rank: "X" }, 
    { year: 2003, name: "Deepa R Bhat", class: "PGDCA", rank: "I" },

    { year: 2002, name: "Gururaja", class: "III B.Sc (MPC)", rank: "VII" },
    { year: 2002, name: "Prasanna Tantri", class: "III B.Com", rank: "II" },
    { year: 2002, name: "Triveni Nayak", class: "III B.Com", rank: "III" },
    { year: 2002, name: "Nelson O. Vaz", class: "III B.Com", rank: "IX" },

    { year: 2001, name: "Savitha H K", class: "III B.Sc.( MSCs)", rank: "I" },
    { year: 2001, name: "Savitha N", class: "III B.Sc.( MPC)", rank: "IV" },
    { year: 2001, name: "Sumith R Kamath", class: "III B.Com.( Voc)", rank: "II" },
    { year: 2001, name: "Deepa", class: "III B.Com.( Voc)", rank: "IX" },
    { year: 2001, name: "Shilpa Bhat D", class: "III B.A.( EEHs)", rank: "III" },
    { year: 2001, name: "Roopa Pramod Shetty", class: "III B.A.( EEHs)", rank: "V" },
    { year: 2001, name: "Sripriya G", class: "PGDCA", rank: "I" },
    
    { year: 2000, name: "Deepa Ballal", class: "B.A", rank: "II" },
    { year: 2000, name: "Sharath Rao Y", class: "B.Com (Vocational)", rank: "II" },
    
    { year: 1999, name: "Adithya Srikara Paranjape", class: "II PUC (PCMS)", rank: "VII" },
    { year: 1999, name: "Sowmya Rao A", class: "B.A", rank: "X" },

    { year: 1999, name: "Adithya Srikara Paranjape", class: "II PUC (PCMS)", rank: "VII" },
    { year: 1999, name: "Sowmya Rao A", class: "B.A", rank: "X" },

    { year: 1998, name: "Smitha Shyam", class: "II PUC (PCMB)", rank: "I" },
    { year: 1998, name: "Sandeep Mallya", class: "II PUC (PCMB)", rank: "VI" },
    { year: 1998, name: "Amritha", class: "III B.Sc (Comp Sc)", rank: "III" },
    { year: 1998, name: "Vatsala", class: "III B.Sc (Comp Sc)", rank: "IV" },
    { year: 1998, name: "Priya G", class: "III B.Com", rank: "VI" },
    { year: 1998, name: "Suhas Prabhu", class: "III B.Com", rank: "VII" },
    { year: 1998, name: "Divya Pai", class: "III B.A", rank: "VII" },

    { year: 1997, name: "Sharath Rao Y", class: "II PUC (MSAC)", rank: "VI" },
    { year: 1997, name: "Shenoy Aravinda Chidananda", class: "II PUC (PCMS)", rank: "X" },
    { year: 1997, name: "Sangeetha Bhat", class: "III B.Sc", rank: "VII" },
    { year: 1997, name: "Sandhya H K", class: "III B.Sc", rank: "VIII" },
    { year: 1997, name: "Archana S", class: "III B.Com", rank: "II" },
    { year: 1997, name: "Vaishali Bhandary B", class: "III B.Com", rank: "IV" },
    { year: 1997, name: "Kuppar Shobha Udupa", class: "III B.Com", rank: "VI" },
    { year: 1997, name: "Anuradha K Saralaya", class: "III B.Com", rank: "X" },

    { year: 1996, name: "Shrimathi U K", class: "III B.Sc", rank: "II" },
{ year: 1996, name: "Anupama K", class: "III B.Sc", rank: "VI" },

{ year: 1995, name: "Veena Mallya", class: "II PUC", rank: "V" },
{ year: 1995, name: "Vani K", class: "III B.Sc", rank: "III" },
{ year: 1995, name: "Priyadarshini Hegde", class: "III B.Sc", rank: "V" },

{ year: 1994, name: "Divya Rani K", class: "III B.Sc", rank: "IX" },
{ year: 1994, name: "Kadambari N Nanaiah", class: "III B.Com", rank: "IX" },

{ year: 1993, name: "Vidya Shenoy", class: "III B.A", rank: "X" },
{ year: 1993, name: "Ravichandra R Aithal", class: "III B.Sc", rank: "IV" },
{ year: 1993, name: "Savan Rao B", class: "III B.Sc", rank: "X" },
{ year: 1993, name: "Krishna Nanda P Nayak", class: "III B.Com", rank: "IV" },

{ year: 1992, name: "Suma Bhat P", class: "III B.Sc", rank: "I" },
{ year: 1992, name: "Surekha Bhat M", class: "III B.Sc", rank: "V" },
{ year: 1992, name: "Vanishree", class: "III B.Sc", rank: "VI" },
{ year: 1992, name: "Sharmila Prabhu", class: "III B.Sc", rank: "X" },
{ year: 1992, name: "Jayanthi Nayak", class: "III B.A", rank: "IV" },

{ year: 1991, name: "Vidya R Gadiyar", class: "II PUC (MSAC)", rank: "II" },
{ year: 1991, name: "Rajesh Kudva M", class: "II PUC (MSAC)", rank: "VIII" },
{ year: 1991, name: "Sheela Prabhu", class: "III B.Sc.(BZC)", rank: "VIII" },
{ year: 1991, name: "Vasantha Shenoy", class: "III B.Com", rank: "VII" },
{ year: 1991, name: "Shubha T S", class: "III B.Com", rank: "VIII" },
{ year: 1991, name: "Revathi M S", class: "III B.Com", rank: "X" },
{ year: 1991, name: "Nayana K S", class: "III B.A", rank: "X" },

{ year: 1989, name: "Vidya Saraswathi U", class: "II PUC (PCMB)", rank: "IX" },
{ year: 1989, name: "Suma Bhat P", class: "II PUC (PCMB)", rank: "X" },
{ year: 1989, name: "Anitha P Rao", class: "III B.A", rank: "VIII" },

{ year: 1988, name: "U Jayaram Mallya", class: "II PUC", rank: "I" },
{ year: 1988, name: "Prashanth B Bhat", class: "II PUC", rank: "V" },
{ year: 1988, name: "Narayana K S", class: "II PUC", rank: "VI" },
{ year: 1988, name: "Surekha Rao K", class: "III B.Sc", rank: "VI" },
{ year: 1988, name: "Ajay Dutt U", class: "III B.Sc", rank: "VIII" },

{ year: 1987, name: "Vishwanath Pai N", class: "III B.Com", rank: "IV" },
{ year: 1987, name: "Vijayashree U", class: "III B.Sc", rank: "IV" },
{ year: 1987, name: "Madhukar Mallya", class: "III B.Sc", rank: "VI" },
{ year: 1987, name: "Bhagawathi S", class: "III B.Sc", rank: "X" },

{ year: 1986, name: "Vinayambika K", class: "III B.Sc", rank: "I" },
{ year: 1986, name: "Roopashree K", class: "III B.Sc", rank: "V" },
{ year: 1986, name: "Purnima Pai Kochikar", class: "III B.Sc", rank: "VIII" },
{ year: 1986, name: "Tapasi Rai", class: "III B.Sc", rank: "VIII" },
{ year: 1986, name: "Umakanth Pai U", class: "III B.Com", rank: "I" },

{ year: 1985, name: "Prakash Kumar K", class: "III B.Sc", rank: "II" },
{ year: 1985, name: "Varija Adiga", class: "III B.Sc", rank: "X" },
{ year: 1985, name: "Ananthapadmanabha Nayak", class: "II PUC", rank: "IX" },

{ year: 1984, name: "Padmalatha", class: "III B.Sc", rank: "VII" },
{ year: 1984, name: "Jayarama B K", class: "II PUC", rank: "VII" },

{ year: 1983, name: "Arun M G", class: "III B.Com", rank: "I" },
{ year: 1983, name: "Govinda Naik", class: "III B.Sc", rank: "V" },

{ year: 1982, name: "Santa Maria Menezes", class: "III B.Sc", rank: "IV" },
{ year: 1982, name: "Venugopala Bhat", class: "III B.Sc", rank: "V" },
{ year: 1982, name: "Pushpa K N", class: "III B.Sc", rank: "VII" },
{ year: 1982, name: "Ramachandra V", class: "III B.Sc", rank: "VIII" },

{ year: 1981, name: "Kalpana K", class: "II PUC", rank: "V" },
{ year: 1981, name: "Veena Bhat", class: "II PUC", rank: "VI" },
{ year: 1981, name: "Sheela N", class: "III B.A", rank: "IX" },
{ year: 1981, name: "Ananthanarayana Pai", class: "III B.Com", rank: "V" },
{ year: 1981, name: "Vilasini Gadiyar", class: "III B.Com", rank: "X" },
{ year: 1981, name: "Satisha Bhat K", class: "III B.Sc", rank: "I" },
{ year: 1981, name: "Jyothi V Nair", class: "III B.Sc", rank: "II" },
{ year: 1981, name: "P Geetha", class: "III B.Sc", rank: "IX" },

{ year: 1980, name: "Shakunthala Nayak", class: "II PUC", rank: "I" },
{ year: 1980, name: "M G Arun", class: "II PUC", rank: "III" },
{ year: 1980, name: "Sujaya K S", class: "II PUC", rank: "VIII" },
{ year: 1980, name: "Shivdas K", class: "III BBM", rank: "VI" },
{ year: 1980, name: "Krishnamurthy V S", class: "III BBM", rank: "IX" },
{ year: 1980, name: "Ramachandra J K", class: "III B.Sc", rank: "I" },
{ year: 1980, name: "Prabhamani", class: "III B.Sc", rank: "II" },
{ year: 1980, name: "Arun Kumar", class: "III B.Sc", rank: "VI" },

{ year: 1979, name: "Sujaya K S", class: "I PUC", rank: "II" },
{ year: 1979, name: "Arun M G", class: "I PUC", rank: "III" },
{ year: 1979, name: "Sunil D Shetty", class: "I PUC", rank: "IX" },
{ year: 1979, name: "Hari Upadhya", class: "II PUC", rank: "I" },
{ year: 1979, name: "Veena D Kudva", class: "II PUC", rank: "IV" },
{ year: 1979, name: "Subrahmanya", class: "II PUC", rank: "VIII" },
{ year: 1979, name: "H Pattabhirama Somayaji", class: "II BA", rank: "VI" },
{ year: 1979, name: "Muralidhar Kini", class: "III B.Com", rank: "V" },
{ year: 1979, name: "Raghavendra C", class: "III B.Com", rank: "VI" },
{ year: 1979, name: "Srinivas Acharya", class: "III B.Com", rank: "VIII" },
{ year: 1979, name: "Raghavendra S", class: "III B.Sc", rank: "III" },
{ year: 1979, name: "Nagamani Aithal K", class: "III B.Sc", rank: "VI" },
{ year: 1979, name: "Keshava Pai H", class: "III BBM", rank: "IV" },
{ year: 1979, name: "Rajashekara P N", class: "III BBM", rank: "VI" },
{ year: 1979, name: "Vajendra Kumar", class: "III BBM", rank: "VIII" },
{ year: 1979, name: "Narayana Rao P", class: "III BBM", rank: "IX" },

{ year: 1978, name: "Ramamoorthy Achar K", class: "I PUC", rank: "I" },
{ year: 1978, name: "Veena D Kudva", class: "I PUC", rank: "V" },
{ year: 1978, name: "Narasimha Naik", class: "II PUC", rank: "V" },
{ year: 1978, name: "Nagaraja Shenoy U", class: "II PUC", rank: "VII" },
{ year: 1978, name: "Ramachandra Bhatta K", class: "II PUC", rank: "II" },
{ year: 1978, name: "Subhas Chandra Kamath K", class: "III BBM", rank: "I" },
{ year: 1978, name: "Niranjan K Nayak", class: "III BBM", rank: "III" },
{ year: 1978, name: "Ramachandra Kamath U", class: "III BBM", rank: "IV" },
{ year: 1978, name: "Narahari Joshi M", class: "III BBM", rank: "V" },
{ year: 1978, name: "Indumathi Bai K", class: "III BBM", rank: "VI" },
{ year: 1978, name: "Gayathri Bhat B", class: "III BBM", rank: "VII" },
{ year: 1978, name: "Sadananda Nayak K", class: "III BBM", rank: "X" },
{ year: 1978, name: "Kusuma Kamath K", class: "III B.Sc.(RR)", rank: "V" },
{ year: 1978, name: "Ramananda Nayak H", class: "III B.Com.(RR)", rank: "IX" },

{ year: 1977, name: "Bharatheesha Ballal N", class: "II PUC", rank: "V" },
{ year: 1977, name: "Hayavadhana Upadhyaya", class: "II PUC", rank: "V" },
{ year: 1977, name: "Suresha", class: "I PUC", rank: "VI" },
{ year: 1977, name: "Vittal Madivala", class: "III B.Sc.(RR)", rank: "II" },
{ year: 1977, name: "Vijaya Shree", class: "III B.Sc.(RR)", rank: "IV" },
{ year: 1977, name: "Latha Karanth", class: "III B.Sc(RR)", rank: "VI" },
{ year: 1977, name: "Vasanth Rao B", class: "III B.Sc.(RR)", rank: "VIII" },
{ year: 1977, name: "Venkatesh Bhat", class: "III B.A.(RR)", rank: "IX" },
{ year: 1977, name: "Prabhakar Bhat", class: "III B.Com.(RR)", rank: "IX" },

{ year: 1976, name: "Katte Srinivasa Achar", class: "II PUC", rank: "IX" },
{ year: 1976, name: "M Keshava Pai", class: "II PUC", rank: "X" },
{ year: 1976, name: "Keshava Shenoy B", class: "III B.Com", rank: "IV" },
{ year: 1976, name: "Hari Krishna Rao K", class: "III B.Com", rank: "VIII" },
{ year: 1976, name: "Rajeevi K S", class: "III B.Com", rank: "X" },
{ year: 1976, name: "Krishna Murthi Rao P", class: "III B.Sc", rank: "VIII" },
{ year: 1976, name: "Shailaja Kumari", class: "III B.Sc", rank: "IX" },

{ year: 1975, name: "Vishweshwara K S", class: "I PUC (Science)", rank: "III" },
{ year: 1975, name: "Vishwanath Shanbhogue", class: "I PUC (Commerce)", rank: "VIII" },
{ year: 1975, name: "Dayananda Naik K", class: "III B.Com.(NR)", rank: "III" },

{ year: 1974, name: "Krishna Shenai", class: "II PUC (Science)", rank: "III" },
{ year: 1974, name: "Seethavalli Ammal K", class: "II PUC", rank: "X" },
{ year: 1974, name: "Suresh Kumar B V", class: "III B.Sc.(NR)", rank: "II" },
{ year: 1974, name: "Subramanya Achar", class: "III B.Sc.(NR)", rank: "VIII" },
{ year: 1974, name: "Shankarnarayana Nayak S", class: "III B.Sc.(NR)", rank: "IX" },
{ year: 1974, name: "Ramesh Prasad A", class: "III B.COM.(NR)", rank: "IV" },
{ year: 1974, name: "Ajith Kamath N", class: "III B.COM.(NR)", rank: "V" },

{ year: 1973, name: "Mohandas Kamath N", class: "III B.Com", rank: "III" },
  { year: 1973, name: "Jaya Prakash H", class: "I B.Com", rank: "III" },
  { year: 1973, name: "Ajith Kamath", class: "I B.Com", rank: "IV" },
  { year: 1973, name: "Ramesh Prasad", class: "I B.Com", rank: "VII" },
  { year: 1973, name: "Prakash Prabhu", class: "I B.ComS", rank: "IX" },
  { year: 1973, name: "Gururaja Kedlaya", class: "III B.Sc", rank: "I" },
  { year: 1973, name: "Vishnumoorthy M", class: "III B.Sc<", rank: "II" },
  { year: 1973, name: "Jayashree V", class: "II B.A", rank: "VIII" },
  { year: 1973, name: "Shambhu Shastry K", class: "II PUC(Science)", rank: "I" },
  { year: 1973, name: "Prakash Shenoy", class: "II PUC(Science)", rank: "II" },
  { year: 1973, name: "Vijaya Laxmi Bai", class: "II PUC(Commerce)", rank: "VII" },

  { year: 1972, name: "Shambhu K", class: "I PUC", rank: "V" },
  { year: 1972, name: "Gayathri P", class: "III B.A", rank: "VII" },
  { year: 1972, name: "Prameshwari Y S", class: "III B.Sc", rank: "III" },
  { year: 1972, name: "Anil Kumar H", class: "III B.Sc", rank: "V" },
  { year: 1972, name: "Keshava Rao Y V", class: "III B.Sc", rank: "VI" },
  { year: 1972, name: "Kitta Achari. K", class: "III B.Sc", rank: "VII" }, 
  { year: 1972, name: "Ashok Mallya", class: "III B.Sc", rank: "IX" },
  { year: 1972, name: "Srinivasa Rao", class: "III B.Sc", rank: "X" },
  { year: 1972, name: "Rajaram U B", class: "III B.Com", rank: "III" },
  { year: 1972, name: "Dayakar Kamath", class: "III B.Com", rank: "IV" },

  { year: 1971, name: "Ravindranath B", class: "PUC", rank: "II" },
  { year: 1971, name: "Raghavendra Acharya. B", class: "III B.Sc", rank: "III" },
  { year: 1971, name: "Vinoda Pai", class: "III B.Sc", rank: "IX" },
  { year: 1971, name: "Madhava Acharya P N", class: "III B.Sc", rank: "IX" },
  { year: 1971, name: "Ann Jane Rebello", class: "III B.Com", rank: "III" },

  { year: 1970, name: "Raju Poojary M", class: "III B.Com", rank: "IV" },
  { year: 1970, name: "Prakashchandra Kedlaya", class: "III B.Com", rank: "V" },
  { year: 1970, name: "Vedaraja N K", class: "Diploma 2 in German", rank: "II" },
  { year: 1970, name: "Ann J Rebello", class: "Diploma 2 in German", rank: "IV" },
  { year: 1970, name: "Shantha R Hebbar", class: "Diploma 2 in German", rank: "V" },
  { year: 1970, name: "Sridharan C N", class: "Diploma 2 in German", rank: "VI" },
  { year: 1970, name: "Madhusoodan Rao Y V", class: "Diploma 2 in Kannada", rank: "V" },

  { year: 1969, name: "Sudha Prabhu U", class: "PUC", rank: "X" },
  { year: 1969, name: "Nagappaih Maiya P", class: "B.Sc", rank: "V" },
  { year: 1969, name: "Jayagopal Padiyar M", class: "B.Sc", rank: "VI" },
  { year: 1969, name: "Shankernarayana Bhat", class: "B.Sc", rank: "VII" },
  { year: 1969, name: "Ramakanth Kamath N", class: "B.Com", rank: "I" },

  { year: 1967, name: "Vinoda Pai Karkala", class: "PUC", rank: "VIII" },
{ year: 1967, name: "Vedaraja Narayan Kadekar", class: "PUC", rank: "IX" },
{ year: 1967, name: "Meera Chandra Pal", class: "B.Sc", rank: "I" },
{ year: 1967, name: "Jayaram Somayaji", class: "B.Sc", rank: "VI" },
{ year: 1967, name: "Perampalli Narayan Bhat", class: "B.Sc", rank: "VII" },
{ year: 1967, name: "G V Vani", class: "B.Sc", rank: "VIII" },

{ year: 1966, name: "Pangal Rathnakar Nayak", class: "PUC", rank: "II" },
{ year: 1966, name: "Narasimha Pai Karkala", class: "PUC", rank: "IV" },
{ year: 1966, name: "Irvattoor Nagaraja Nayak", class: "PUC", rank: "VI" },
{ year: 1966, name: "Flavin Camil Valentine Lewis", class: "PUC", rank: "VII" },
{ year: 1966, name: "Sabitha Kadekar", class: "B.Sc", rank: "II" },
{ year: 1966, name: "Vedavyasa", class: "B.Sc", rank: "III" },
{ year: 1966, name: "Haridas Udupa A", class: "B.Sc", rank: "V" },
{ year: 1966, name: "Iswara Bhat U", class: "B.Sc", rank: "VI" },
{ year: 1966, name: "Rupert M. Rosario", class: "B.Sc", rank: "VII" },

{ year: 1965, name: "Sudhakara Bhandary K", class: "B.Sc", rank: "I" },
{ year: 1965, name: "Gopala Pujary", class: "B.Sc", rank: "X" },

{ year: 1964, name: "Gururaj Sheshagiri Rao", class: "PUC", rank: "I" },
{ year: 1964, name: "Ramesh Rao S", class: "B.Sc", rank: "V" },
{ year: 1964, name: "Vaman Rao H", class: "B.Sc", rank: "X" },

{ year: 1963, name: "Haridas Bhat K", class: "B.Sc", rank: "VII" },
{ year: 1963, name: "Ramesh Pai K", class: "B.Com", rank: "III" },

{ year: 1962, name: "Krishna Acharya P", class: "PUC", rank: "IX" },
{ year: 1962, name: "Vishnumurthy Acharya", class: "B.A", rank: "V" },
{ year: 1962, name: "Gerald Lobo Prabhu", class: "B.A", rank: "VII" },
{ year: 1962, name: "Surendra Nayak", class: "B.Com", rank: "II" },
{ year: 1962, name: "Raghavendra Rao B", class: "B.Com", rank: "VI" },
{ year: 1962, name: "Ramesh Rao", class: "B.Sc", rank: "IV" },

{ year: 1961, name: "Ramakrishna Hegde K", class: "B.Sc", rank: "VII" },
{ year: 1961, name: "Sudarshana Nayak", class: "B.Sc", rank: "VIII" },
{ year: 1961, name: "Dayananda Shenoy", class: "B.Com", rank: "VII" },
{ year: 1961, name: "Prabhakar Nayak A", class: "B.Com", rank: "VII" },
{ year: 1961, name: "Achutha Acharya P", class: "B.Com", rank: "I" },
{ year: 1961, name: "Govind Bhat M", class: "B.Com", rank: "IV" },

{ year: 1960, name: "Nirmala Kumar", class: "PUC", rank: "III" },
{ year: 1960, name: "Gururaja Bhat M", class: "B.A Part II", rank: "III & VII" },
{ year: 1960, name: "Venkatramana Bhat C", class: "III B.Sc Part II", rank: "II" },
{ year: 1960, name: "Damodara Hegde", class: "B Com Part I, II & III", rank: "IV, I, II" },
{ year: 1960, name: "Aravinda Rao", class: "B.Com Part II", rank: "V" },
{ year: 1960, name: "Umesh Pai T", class: "Part III", rank: "V" },

{ year: 1959, name: "Vishnu Acharya", class: "B.Com", rank: "IV" },

{ year: 1951, name: "Nirmala Pai T", class: "Inter.", rank: "Gold Medal" },
  ];

  // Group ranks by year
  const groupedByYear = ranks.reduce((acc, curr) => {
    (acc[curr.year] = acc[curr.year] || []).push(curr);
    return acc;
  }, {});

  // Sort years descending to show newest first
  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <div className="ranklist-container">
      {/* Header with title and Home link */}
      <div className="ranklist-header">
        <h3 className="ranklist-title">List of Rank Holders</h3>
        <a href="/" className="home-link">
          Home
        </a>
      </div>

      <div className="year-list">
        {years.map((year) => {
          const yearRanks = groupedByYear[year];
          const open = !!expandedYears[year];
          return (
            <section key={year} className={`year-section ${open ? "open" : ""}`}>
  <button
    type="button"
    className={`year-toggle ${open ? "open" : ""}`}
    id={`toggle-${year}`}
    onClick={() => toggleYear(year)}
    aria-expanded={open}
    aria-controls={`year-${year}`}
  >
    <span className="year-label">{year}</span>
  </button>

  <div
    id={`year-${year}`}
    className={`rank-cards ${open ? "open" : "collapsed"}`}
    role="region"
    aria-labelledby={`toggle-${year}`}
  >
    {yearRanks.map((rank, index) => (
      <article key={`${year}-${index}`} className="rank-card">
        <div className="rank-badge">{rank.rank}</div>
        <h4 className="rank-name">{rank.name}</h4>
        <p className="rank-class">{rank.class}</p>
      </article>
    ))}
  </div>  
</section>
  );
        })}
      </div>


<div className="top-button-container">
  <button
    className="top-button"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    Top
  </button>
</div>
</div>
);
}

export default App;
