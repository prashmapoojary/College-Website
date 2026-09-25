import React, { useState } from 'react';
import CompanyDetails from './CompanyDetails';
import '../styles/PlacementCell.css';

// Importing images
import BalajiImg from '../assets/img/Balaji.jpg';
import DeloitteImg from '../assets/img/Deloitte.jpg';
import CapgeminiImg from '../assets/img/Capgemini.jpg';
import CognizantImg from '../assets/img/Cognizant.jpg'; 
import InfosysImg from '../assets/img/infosys.jpg'; 
import TCSImg from '../assets/img/tcs.jpg'; 
import TechmahindraImg from "../assets/img/techmahindra.jpg";
import AccentureImg from '../assets/img/accenture.jpg';
import OracleImg from '../assets/img/Oracle.jpg';
import  LtinfoImg from '../assets/img/LT.jpg';
import IgateImg from '../assets/img/igate.jpg';
import robosoftImg from '../assets/img/robosoft.jpg';
import LcodeImg from '../assets/img/lcode.jpg';
import TelintixImg from '../assets/img/telenetix.jpg';
import axisImg from '../assets/img/axis.jpg';
import ConcentrixImg from '../assets/img/Concentrix.jpg';
import NorthernImg from '../assets/img/nr.jpg';
import wiproImg from '../assets/img/wipro.jpg';
import DheemahiImg from '../assets/img/Dheemahi.jpg';
import WinmanImg from '../assets/img/winman.jpg';
import vijayaImg from '../assets/img/vijayabank.jpg';
import QspiderImg from '../assets/img/spider.jpg';
import almaImg from '../assets/img/alma.jpg';
// import InfosysImg from '../assets/img/Infosys.jpg';

const companyImages = {
  'Balaji Telefilms': BalajiImg,
  'Deloitte': DeloitteImg,
  'Capgemini': CapgeminiImg,
  'Cognizant': CognizantImg,
   'infosys': InfosysImg,
   'TCS': TCSImg, 
  'techmahindra': TechmahindraImg,
  'Accenture': AccentureImg,
  'Oracle': OracleImg,
  'LTIMindtree': LtinfoImg,
  'igate_global_solutions':IgateImg,
  'robosoft': robosoftImg,
  'lcode': LcodeImg,
  'Telintix Pvt Ltd': TelintixImg,
  'Axis Bank': axisImg,
  'Concentrix': ConcentrixImg,
  'Northern Trust Bank': NorthernImg,
  'wipro':wiproImg,
  'Dheemahi':DheemahiImg,
  'Winman Software':WinmanImg,
  'Vijaya Bank':vijayaImg,
  'Qspiders': QspiderImg,
  'Almasons':almaImg

  }


const companyData = {
  'Balaji Telefilms': {
    salary: '₹7.5 LPA+ (ALTT OTT platform, creative roles)',
    students: [
      { name: 'Vaishali', class: 'B.Sc.' },
      { name: 'Nisha', class: 'B.Sc.' }
    ]
  },
  'Deloitte': {
    salary: '₹6.5–7 LPA (Business Analyst, Tech roles)',
    studentsByYear: {
      2016: [{ totalSelected: 3 }],
      2017: [
        { name: 'Pranathi Acharya', class: 'BCA' },
        { name: 'Akshara', class: 'BCA' },
        { name: 'Ravish', class: 'B.Sc' },
        { totalSelected: 3 }
      ],
      2018: [
        { name: 'Santhosh V', class: 'BCA' },
        { name: 'Kiran Kamath', class: 'BCA' },
        { name: 'Ankush Prabhu', class: 'BCA' },
        { name: 'Akarsh Salian', class: 'BCA' },
        { name: 'Anam Alvira', class: 'BCA' },
        { name: 'Aravid Patkar', class: 'BCA' },
        { name: 'Jason Noronha', class: 'BCA' },
        { name: 'Prajwal Augustine', class: 'BCA' },
        { name: 'Shriraj Gaonkar', class: 'BCA' },
        { name: 'Viraj Kanchan', class: 'B.Sc (MSCs)' },
        { name: 'Megha R', class: 'B.Sc (MPCs)' },
        { name: 'Sanjana Bhat', class: 'B.Sc (MPCs)' },
        { totalSelected: 12 }
      ],
      2019: [
        { name: 'Shubhanidhi Mestha', class: 'B.Sc (MPCs)' },
        { totalSelected: 1 }
      ],
      2020: [
        { name: 'Manoj B V', class: 'BCA' },
        { name: 'Srilakshmi Vasanth', class: 'BCA' },
        { name: 'Radhika K Bhat', class: 'BCA' },
        { name: 'Varun Bhat', class: 'B.Sc (MPCs)' },
        { name: 'Disha G Shetty', class: 'B.Sc (MPCs)' },
        { totalSelected: 5 }
      ],
      2021: [{ totalSelected: 8 }],
      2022: [{ totalSelected: 5 }],
      2023: [
        { name: 'Shashank', class: '3rd BCA' },
        { name: 'Adithya', class: '3rd BCA' },
        { name: 'Sanketh', class: '3rd BCA' },
        { name: 'Rakshitha', class: '3rd BCA' },
        { name: 'Varshini', class: '3rd BCA' },
        { totalSelected: 5 }
      ],
      2024: [
        { name: 'Shreesha', class: 'BCA' },
        { name: 'Pavithra Subbanna Poojary', class: 'Evening BCA' },
        { totalSelected: 2 }
      ]
    }
  },
  'Capgemini': {
    salary: '₹6.75 LPA (Exceller program, full-stack roles)',
    studentsByYear: {
      2022: [{ totalSelected: 14 }]
    }
  },
  'Cognizant': {
    salary: '₹6.75 LPA (GenC Next)',
    studentsByYear: {
      2016: [
        { name: 'Arfan M', class: 'BCA' },
        { name: 'Sanjana Poojary', class: 'BCA' },
        { name: 'Anarghya', class: 'BCA' },
        { name: 'Pavithra', class: 'BCA' },
        { name: 'Sanjana Kidiyoor', class: 'B.Sc' },
        { totalSelected: 5 }
      ],
      2019: [
        { name: 'Varun Bhat', class: 'B.Sc' },
        { name: 'Adarsh Janardhan Acharya', class: 'B.Sc' },
        { name: 'Vishesh S Amin', class: 'B.Sc' },
        { name: 'Narayan Pai', class: 'B.Sc' },
        { name: 'Udupi Prajnashree Naik', class: 'B.Sc' },
        { name: 'Priya S Poojary', class: 'B.Sc' },
        { name: 'Keerthi U Pai', class: 'B.Sc' },
        { name: 'Anusha Rao', class: 'B.Sc' },
        { name: 'Melona Dsouza', class: 'B.Sc' },
        { name: 'Riha Fahika', class: 'BA' },
        { name: 'Adolf Shervin Amanna', class: 'B.Com' },
        { name: 'Chaitra Prabhu', class: 'B.Com' },
        { name: 'Dsouza Melisha Melwyn', class: 'B.Com' },
        { name: 'Sharon Reeshma Prasad', class: 'B.Com' },
        { name: 'Vibha Shanbhogue', class: 'BCA' },
        { name: 'Nidhi Pratap Shetty', class: 'BCA' },
        { name: 'Shreya Kamath', class: 'BCA' },
        { name: 'Deepali Shetty', class: 'BCA' },
        { name: 'K Deeksha Nayak', class: 'BCA' },
        { name: 'Rashmi Shenoy', class: 'BCA' },
        { name: 'Vimanshu Kumar V Bhandary', class: 'BCA' },
        { name: 'Sandhya H B Bhaskar', class: 'BCA' },
        { name: 'Joyce Rashel Saldanha', class: 'BCA' },
        { name: 'Deekshitha Acharya', class: 'BCA' },
        { name: 'Vaishnavi Kedlaya', class: 'BCA' },
        { name: 'Vandana Nayak', class: 'BCA' },
        { name: 'Rachita Patkar', class: 'BCA' },
        { name: 'Priyanka Acharya', class: 'BCA' },
        { name: 'Shradda Thrivikrama Kini', class: 'BCA' },
        { totalSelected: 29 }
      ],
      2020: [{ totalSelected: 2 }],
      2023: [
        { name: 'Anujnya G Bhandary', class: 'BCA' },
        { name: 'Lavanya Bangera', class: 'BCA' },
        { name: 'Disha Poojary', class: 'BCA' },
        { name: 'Rakshitha R Shetty', class: 'BCA' },
        { name: 'Manisha Kotian', class: 'BCA' },
        { name: 'Sumanth Acharya', class: 'BCA' },
        { name: 'Chaya Sudhakara Shetty', class: 'B.Sc' },
        { name: 'Veon Quadros', class: 'Evening BCA' },
        { name: 'Rahul R Shetty', class: 'Evening BCA' },
        { totalSelected: 9 }
      ]
    }
  },'infosys': {
  salary: '₹6.25 LPA (Infosys Elite, full-stack)',
  studentsByYear: {
    2014: [
      { name: 'Aisha Awathif', class: 'BCA' },
      { name: 'Akash Mendon', class: 'BCA' },
      { name: 'Akshatha Ballal', class: 'BCA' },
      { name: 'Balachandra Bhat S', class: 'BCA' },
      { name: 'Bhagyashree', class: 'BCA' },
      { name: 'Briyon Gary Rodrigues', class: 'BCA' },
      { name: 'Chaithra', class: 'BCA' },
      { name: 'Dakshayini', class: 'BCA' },
      { name: 'Haifa Parveen', class: 'BCA' },
      { name: 'Keerthan Nayak', class: 'BCA' },
      { name: 'Koushik A S', class: 'BCA' },
      { name: 'M Siddarth Kumar', class: 'BCA' },
      { name: 'Madhumith Shet', class: 'BCA' },
      { name: 'Madhura', class: 'BCA' },
      { name: 'Maithri R', class: 'BCA' },
      { name: 'Nikhitha Kamath', class: 'BCA' },
      { name: 'Poornima Nayak', class: 'BCA' },
      { name: 'Puneeth Kumar J', class: 'BCA' },
      { name: 'Raksha Bhat', class: 'BCA' },
      { name: 'Ramya Hebbar', class: 'BCA' },
      { name: 'Ranjan R Suvarna', class: 'BCA' },
      { name: 'Sana Parveen', class: 'BCA' },
      { name: 'Sharanya U', class: 'BCA' },
      { name: 'Vilkinson Derick Menzes', class: 'BCA' },
      { name: 'Viona Jeesal Gomes', class: 'BCA' },
      { name: 'Adithi P', class: 'B.Sc' },
      { name: 'Anargya D', class: 'B.Sc' },
      { name: 'Arthika', class: 'B.Sc' },
      { name: 'Ashish Nayak', class: 'B.Sc' },
      { name: 'Ashwini Bhat', class: 'B.Sc' },
      { name: 'Bhargavi', class: 'B.Sc' },
      { name: 'Chaithra', class: 'B.Sc' },
      { name: 'Madhuri Bhat', class: 'B.Sc' },
      { name: 'Mahalaxmi Shenoy', class: 'B.Sc' },
      { name: 'Manoj S P', class: 'B.Sc' },
      { name: 'Meghana N', class: 'B.Sc' },
      { name: 'Pooja Sridhar Hegde', class: 'B.Sc' },
      { name: 'Poornima G S', class: 'B.Sc' },
      { name: 'Ramya', class: 'B.Sc' },
      { name: 'Rohini Kini', class: 'B.Sc' },
      { name: 'Roopa', class: 'B.Sc' },
      { name: 'Santhosh', class: 'B.Sc' },
      { name: 'Shenoy Shridhar T Subraya', class: 'B.Sc' },
      { name: 'Sinchanan D S', class: 'B.Sc' },
      { name: 'Sowmya', class: 'B.Sc' },
      { name: 'Swathi H S', class: 'B.Sc' },
      { name: 'Swathi Rathnakar Shettigar', class: 'B.Sc' },
      { totalSelected: 47 }
    ],
    2015: [
      { name: 'Akash S', class: 'BCA' },
      { name: 'Christan Paul Dsouza', class: 'BCA' },
      { name: 'lnchara G C', class: 'BCA' },
      { name: 'Karthik Nayak', class: 'BCA' },
      { name: 'Mahendra Kumar Hegde', class: 'BCA' },
      { name: 'Manjunatha Upadhya', class: 'BCA' },
      { name: 'Narasimha Kini', class: 'BCA' },
      { name: 'Nayamratha', class: 'BCA' },
      { name: 'Prabhu Pratiksha Venkatesh', class: 'BCA' },
      { name: 'Prashant Hegde', class: 'BCA' },
      { name: 'Vijetha', class: 'BCA' },
      { name: 'Ratna Rajesh Bhat', class: 'BCA' },
      { name: 'Rakshith Shettv', class: 'BCA' },
      { name: 'Shrividya Rao', class: 'BCA' },
      { name: 'Sunil', class: 'BCA' },
      { name: 'Sandeep S Nayak', class: 'BCA' },
      { name: 'Sowmya Kamath', class: 'BCA' },
      { name: 'Sudhindra Nayak', class: 'BCA' },
      { name: 'Rajani Salvankar', class: 'B.Sc' },
      { name: 'Agraja Raghav', class: 'B.Sc' },
      { name: 'Supradha', class: 'B.Sc' },
      { name: 'Surabhi P P', class: 'B.Sc' },
      { name: 'Suraksha Naik', class: 'B.Sc' },
      { name: 'Sushmitha', class: 'B.Sc' },
      { name: 'Gowtham Shetty', class: 'B.Sc' },
      { name: 'Pratheeksha', class: 'B.Sc' },
      { totalSelected: 26 }
    ],
    2016: [
      { name: 'Anam Alvira', class: 'BCA' },
      { name: 'Avanish Anil Chippalkatti', class: 'BCA' },
      { name: 'Ankush Prabhu', class: 'BCA' },
      { name: 'Kiran Kamath', class: 'BCA' },
      { name: 'Hamna Siraj Bava', class: 'BCA' },
      { name: 'Shriraj Narayan Gaonkar', class: 'BCA' },
      { name: 'Vineeth R', class: 'BCA' },
      { name: 'Rajath Kedlaya K', class: 'BCA' },
      { name: 'Suraksha R Poojary', class: 'BCA' },
      { name: 'Amritha Nayak', class: 'B.Sc' },
      { name: 'Ancilla Maria Saldanha', class: 'B.Sc' },
      { name: 'Anupama', class: 'B.Sc' },
      { name: 'Abhishek B', class: 'B.Sc' },
      { name: 'Deola Helena Vas', class: 'B.Sc' },
      { name: 'Divyashree', class: 'B.Sc' },
      { name: 'Divyashree V. Nayak', class: 'B.Sc' },
      { name: 'Pooja S P', class: 'B.Sc' },
      { name: 'Prajna Nayak', class: 'B.Sc' },
      { name: 'Prajna Shreedhar Hegde', class: 'B.Sc' },
      { name: 'Pranitha', class: 'B.Sc' },
      { name: 'Priyanka', class: 'B.Sc' },
      { name: 'Priyanka Milind Datar', class: 'B.Sc' },
      { name: 'Rachana P', class: 'B.Sc' },
      { name: 'Sanjana Sandesh Bhat', class: 'B.Sc' },
      { name: 'Sharath Shettigar', class: 'B.Sc' },
      { name: 'Shreenidhi Shridhar Bhat', class: 'B.Sc' },
      { name: 'Siri S Rao', class: 'B.Sc' },
      { name: 'Sriramachetan S', class: 'B.Sc' },
      { name: 'Tripthi B Palan', class: 'B.Sc' },
      { name: 'Sushma Bhat', class: 'B.Sc' },
      { name: 'Vaishnavi', class: 'B.Sc' },
      { name: 'Vandana', class: 'B.Sc' },
      { name: 'Vidya', class: 'B.Sc' },
      { name: 'Yashaswini', class: 'B.Sc' },
      { totalSelected: 35 }
    ],
    2019: [
      { totalSelected: 71 } // 60 (Tech) + 11 (BPM)
    ],
    2020: [
      { totalSelected: 28 } // Technologies only
    ],
    2021: [
      { totalSelected: 77 } // 7 (Tech) + 70 (BPM)
    ],
    2022: [
      { totalSelected: 23 } ]
  }
},'TCS': {
  salary: '₹3.6–7 LPA (varies by role)',
  studentsByYear: {
    2013: [
      { name: 'Disha S P', class: 'B.Com' },
      { name: 'Amitha R Nayak', class: 'B.Com' },
      { name: 'Chitra Dayanand Shetty', class: 'B.Com' },
      { name: 'Chetana S', class: 'B.Com' },
      { name: 'Prakruthi H P', class: 'B.Sc' },
      { name: 'Pratap Naik U', class: 'B.Com' },
      { name: 'Raiza Verina Sequira', class: 'B.Com' },
      { name: 'Sonal Nayak', class: 'B.Com' },
      { name: 'Divya Silkina Maben', class: 'B.Com' },
      { name: 'Swathy G Nayak', class: 'B.Com' },
      { name: 'Geetha Shenoy Balkunje', class: 'B.Com' },
      { name: 'Pooja D Kanchan', class: 'B.Com' },
      { name: 'Bharath Shetty', class: 'B.Com' },
      { name: 'Suchitra', class: 'B.Com' },
      { name: 'Rakshitha R Shetty', class: 'B.Com' },
      { name: 'Sapthami A', class: 'B.Com' },
      { name: 'Vani S Nayak', class: 'B.Com' },
      { name: 'Slany Jathanna', class: 'B.Com' },
      { name: 'Ganesh P Pai', class: 'B.Com' },
      { name: 'Sudheendra A Acharya', class: 'B.Com' },
      { name: 'Ritesh', class: 'B.Com' },
      { name: 'Pavan Kumar B', class: 'B.Com' },
      { name: 'Shreesha L Kanchan', class: 'B.Com' },
      { name: 'Karthika Marathe', class: 'B.Com' },
      { name: 'Ashwin Kumar', class: 'B.Com' },
      { totalSelected: 25 }
    ],
    2014: [
      { name: 'Amrutha S Devadiga', class: 'B.Com' },
      { name: 'Pallavi Hegde', class: 'B.Com' },
      { name: 'Arpita V Bhat', class: 'B.Com' },
      { name: 'Swathi', class: 'B.Com' },
      { name: 'Vaishnavi L', class: 'B.Com' },
      { name: 'Vismitha Shenoy', class: 'B.Com' },
      { name: 'Vinit Shetty', class: 'B.Com' },
      { name: 'Shamoon', class: 'B.Com' },
      { name: 'Prashanth', class: 'B.Com' },
      { name: 'Jeevraj', class: 'B.Com' },
      { name: 'Vignesh V Nayak', class: 'B.Com' },
      { name: 'Ajith Bhat', class: 'B.Com' },
      { name: 'Nazil Ahmed Udupi', class: 'B.Com' },
      { name: 'Varun Acharya', class: 'B.Com' },
      { name: 'Adarsha B Rao', class: 'B.Com' },
      { name: 'Prathvi K', class: 'B.Com' },
      { name: 'Vidya', class: 'B.Com' },
      { name: 'Kshama D', class: 'B.Com' },
      { name: 'Pragathi N G', class: 'B.Com' },
      { totalSelected: 19 }
    ],
    2015: [
      { name: 'Nayamratha', class: 'BCA' },
      { name: 'Vijetha', class: 'BCA' },
      { name: 'Dayasagar Salian', class: 'BCA' },
      { name: 'Sudhindra Nayak', class: 'BCA' },
      { name: 'Sunil', class: 'BCA' },
      { name: 'Mahendra Hegde', class: 'BCA' },
      { name: 'Sowmya Kamath', class: 'BCA' },
      { name: 'Akshitha', class: 'BCA' },
      { name: 'Christan Dsouza', class: 'BCA' },
      { name: 'Manoj Amin', class: 'BCA' },
      { name: 'Sandeep Nayak', class: 'BCA' },
      { name: 'Ashwin Karkada', class: 'BCA' },
      { name: 'Shrividya Rao', class: 'BCA' },
      { name: 'Naveesh Kumar', class: 'BCA' },
      { name: 'Manjunatha Upadhya', class: 'BCA' },
      { name: 'Arun Kunder', class: 'BCA' },
      { name: 'Mukesh Nayak', class: 'B.Sc' },
      { name: 'Vinay Borkar', class: 'B.Sc' },
      { name: 'Ashwath Jadhava', class: 'B.Sc' },
      { name: 'Brahmananda Nayak', class: 'B.Sc' },
      { name: 'Supradha', class: 'B.Sc' },
      { name: 'Pramoda Bs', class: 'B.Sc' },
      { name: 'Chakitha', class: 'B.Sc' },
      { name: 'Anushree', class: 'B.Sc' },
      { name: 'Pratheeksha', class: 'B.Sc' },
      { name: 'Madhavi', class: 'B.Sc' },
      { name: 'Soumya', class: 'B.Sc' },
      { name: 'Sanjana As', class: 'B.Sc' },
      { name: 'Shruthi Kamath', class: 'B.Sc' },
      { name: 'Srinidhi', class: 'B.Sc' },
      { name: 'Agraj', class: 'B.Sc' },
      { name: 'Suraksha Naik', class: 'B.Sc' },
      { name: 'Deepthi K', class: 'B.Sc' },
      { name: 'Shachidevi', class: 'B.Sc' },
      { name: 'Pratheek', class: 'B.Sc' },
      { totalSelected: 35 }
    ],
    2016: [
      { name: 'Savitha', class: 'B.Com' },
      { name: 'Afreen', class: 'B.Com' },
      { name: 'Gourav', class: 'B.Com' },
      { name: 'Meghana J', class: 'B.Com' },
      { name: 'Chinmay', class: 'B.Com' },
      { name: 'Nithesh Hegde', class: 'B.Com' },
      { name: 'Mahesh', class: 'B.Com' },
      { name: 'Deeksha Prabhu', class: 'B.Com' },
      { name: 'Suchithra', class: 'B.Com' },
      { name: 'Harshitha', class: 'B.Com' },
      { name: 'Ashika', class: 'B.Com' },
      { name: 'Pavan', class: 'B.Com' },
      { name: 'Anupama', class: 'B.Com' },
      { name: 'Prajwal', class: 'B.Com' },
      { name: 'Varsha Shetty', class: 'B.Com' },
      { name: 'Kajal', class: 'B.Com' },
      { name: 'Namratha Ballal', class: 'B.Com' },
      { name: 'Namratha', class: 'B.Com' },
      { name: 'Dheeraj', class: 'B.Com' },
      { name: 'Gautham', class: 'B.Com' },
      { name: 'Suvarna Jois', class: 'B.Com' },
      { name: 'Ravikiran', class: 'B.Com' },
      { name: 'Rekha', class: 'B.Com' },
      { name: 'Akhilesh', class: 'BA' },
      { totalSelected: 24 }
    ],
    2017: [
      { name: 'T Madhava Pai', class: 'BA' },
      { name: 'Shanthi S Rao K', class: 'BA' },
      { name: 'K Karthik Pai', class: 'BA' },
      { name: 'Vishwanatha', class: 'B.Com' },
      { name: 'Kavyashree K R', class: 'B.Com' },
      { name: 'Amrutha Varshini K P', class: 'B.Com' },
       { name: 'Ganapathi Pai', class: 'B.Com' },
      { name: 'Deeksha', class: 'B.Com' },
      { name: 'Bhargavi M B', class: 'B.Com' },
      { name: 'Aishwarya G S', class: 'B.Com' },
      { name: 'B A Deeksha', class: 'B.Com' },
      { name: 'Kumari Rashmitha', class: 'B.Com' },
      { name: 'Unnath K A', class: 'B.Com' },
      { name: 'Sindhu Shetty', class: 'B.Com' },
      { name: 'Princslie Gloria Lewis', class: 'B.Com' },
      { name: 'Shridhar Ganapathi Bhat', class: 'B.Com' },
      { name: 'B Saishree', class: 'B.Com' },
      { name: 'Prathima', class: 'B.Com' },
      { name: 'Jyothi Madhav Bhat', class: 'B.Com' },
      { name: 'Bharath B S', class: 'B.Com' },
      { name: 'Gleeven Cristi Lewis', class: 'B.Com' },
      { name: 'Edrine Reachel D’Souza', class: 'B.Com' },
      { name: 'Shettigar Nikitha Raju', class: 'B.Com' },
      { totalSelected: 23 }
    ],
    2018: [
      { name: 'Kartik Ganesh Hegde', class: 'BCA' },
      { name: 'Sumeeth Kumar S Naik', class: 'BCA' },
      { name: 'Anusha T A', class: 'BCA' },
      { name: 'Keneith Wilton Maben', class: 'BCA' },
      { name: 'Gilroy Maynard Lobo', class: 'BCA' },
      { name: 'Sadhana', class: 'BCA' },
      { name: 'Sudharma', class: 'BCA' },
      { name: 'Amrutha Acharya', class: 'BCA' },
      { name: 'Sunidhi Sudhakar', class: 'BCA' },
      { name: 'Rhia Agha', class: 'B.Sc (MPCs)' },
      { name: 'Nandan Nagapati Hegde', class: 'B.Sc (MSCs)' },
      { name: 'Swarna Mendon', class: 'B.Sc (MSCs)' },
      { totalSelected: 12 }
    ],
    2019: [
      { name: 'Vaishnavi Kedlaya', class: 'BCA' },
      { name: 'Rachita R Patkar', class: 'BCA' },
      { name: 'Soubhagya Vidyadhar Pai', class: 'BCA' },
      { name: 'Rahul Shenoy', class: 'BCA' },
      { name: 'Nihal Prasad', class: 'BCA' },
      { name: 'Sanjay Gautham', class: 'BCA' },
      { name: 'Thashvika', class: 'BCA' },
      { name: 'Preethika V Wagle', class: 'BCA' },
      { name: 'Aleena Bangeera', class: 'BCA' },
      { totalSelected: 9 }
    ],

    2020: [
      { totalSelected: 8 }
    ],

    2021: [
      { totalSelected: 17 }
    ],
     2022: [
      { totalSelected: 2 }
    ],

    2023: [
      { name: 'B G Sampreeta', class: 'B.Sc' },
      { name: 'Chaya Sudhakara Shetty', class: 'B.Sc' },
      { name: 'Karthik R Sherigara', class: 'Evening BCA' },
      { name: 'Divya M G', class: 'B.Com' },
      { totalSelected: 4 }
    ]
  }
},
'techmahindra': {
  salary: '₹5.5 LPA (Tech roles)',
  studentsByYear: {
    2014: [
      { name: 'BALACHANDRA BHAT S', class: 'B.C.A.' },
      { name: 'MANOJ S P', class: 'B.Sc.' },
      { totalSelected: 2 }
    ]
  }
}
,'Accenture': {
  salary: '₹4.8–11.0 LPA',
  studentsByYear: {
    '2022-23': [
      { name: 'Shodhana Srinivas Nayak', class: 'B.C.A.' },
      { name: 'Sharadhi R', class: 'B.C.A.' },
      { name: 'Rashmi', class: 'B.C.A.' },
      { totalSelected: 3 }
    ],
    '2021-22': [
      { totalSelected: 1 } // Add student details if available
    ],
    '2011-12': [
      { totalSelected: 1 } // Add student details if available
    ]
  }
},
'Oracle': {
  salary: '₹4.8 LPA (Business & Tech roles)',
  studentsByYear: {
    2013: [
      { name: 'Sonal Nayak', class: 'B.Com' },
      { name: 'Aishwarya U', class: 'BCA' },
      { name: 'Vijetha', class: 'B.Sc(MPCs)' },
      { totalSelected: 3 }
    ]
  }
}, 
'LTIMindtree': {
  salary: '₹4–5.5 LPA (Tech roles across L&T / LTIMindtree)',
  studentsByYear: {
    '2013-14': [
      { name: 'Ganesh P Pai', class: 'B.Com' },
      { name: 'Ashwath Madival', class: 'B.Com' },
      { name: 'Akshay Kumar', class: 'B.Com' },
      { name: 'Mithun', class: 'B.Com' },
      { name: 'Bharath Shetty', class: 'B.Com' },
      { name: 'Akhil S P', class: 'B.Com' },
      { name: 'Krishna Naik', class: 'B.Com' },
      { name: 'Kishor Shetty', class: 'B.Com' },
      { name: 'Manjunath Subrahmanya Hegde', class: 'B.Com' },
      { totalSelected: 9 }
    ],
    '2014-15': [
      { name: 'Nidhish Shetty', class: 'B.Com' },
      { name: 'Pradeepa Naik', class: 'B.Com' },
      { name: 'Prajwal Ravindra', class: 'B.Com' },
      { name: 'Bharath Kini', class: 'B.Com' },
      { name: 'Vighneshwar Bhat', class: 'B.Com' },
      { name: 'Vignesh Nayak', class: 'B.Com' },
      { name: 'Vijayakumar Hegde', class: 'B.Com' },
      { name: 'Nazil Udupi', class: 'B.Com' },
      { totalSelected: 8 }
    ],
    '2022-23': [
      { totalSelected: 17 }
    ],
    '2023-24': [
      { name: 'Alfred Arouza', class: 'BCA' },
      { name: 'Vamshika Acharya', class: 'BSc' },
      { totalSelected: 2 }
    ]
  }
},
'igate_global_solutions': {
  salary: '₹3.2–3.6 LPA (Typical for 2010–11 tech roles)',
  studentsByYear: {
    '2010-11': [
      { name: 'ALVA ROYSTON ROBERT', class: 'B.C.A.' },
      { totalSelected: 1 }
    ]
  }
}
,'robosoft': {
  salary: '₹3.0–3.5 LPA (Typical for tech roles)',
  studentsByYear: {
    '2010-11': [
      { name: 'Divya', class: 'BCA' },
      { name: 'Suraksha Seetharama', class: 'BCA' },
      { name: 'Bhavani', class: 'BCA' },
      { name: 'Bhamini', class: 'BCA' },
      { name: 'Archana', class: 'BCA' },
      { name: 'Shwetha Shet U', class: 'BCA' },
      { name: "Salitha D'Almeida", class: 'BCA' },
      { name: 'Gautham Nayak', class: 'BCA' },
      { name: 'Siddarth Maiya', class: 'BCA' },
      { totalSelected: 9 }
    ]
  }
},
'lcode': {
  salary: '₹4.2–5 LPA',
  studentsByYear: {
    '2022-23': [
      { totalSelected: 6 }
    ]
  }
},
'Telintix Pvt Ltd': {
  salary: '₹4.5–5.5 LPA',
  studentsByYear: {
    '2023-24': [
      { totalSelected: 2 }
    ]
  }
},
'Axis Bank': {
  salary: '₹3.5–4.2 LPA',
  studentsByYear: {
    '2012-13': [
      { name: 'Ravindra Mattu', class: 'B.Sc' },
      { name: 'Ashish Kanchan', class: 'B.Sc' },
      { name: 'Pavan Kumar', class: 'B.Sc' },
      { name: 'Ashish', class: 'B.Sc' },
      { name: 'Sanjaya', class: 'B.Sc' },
      { name: 'Seema', class: 'B.Sc' },
      { name: 'Vanishree', class: 'B.Sc' }
    ],
    '2013-14': [
      { name: 'TARUNYA SHARADE', class: 'B.Com' },
      { name: 'JOANNA CHALCEDONY SAMUEL', class: 'B.Com' }
    ]
  }
},
'Concentrix': {
  salary: '₹3.0–3.8 LPA',
  studentsByYear: {
    '2016-17': [
      { totalSelected: 9 }
    ],
    '2017-18': [
      { totalSelected: 9 }
    ],
    '2018-19': [
      { name: 'Skanda', class: 'BCA' },
      { name: 'Roopa', class: 'BCA' },
      { name: 'Prathiksha Kotian', class: 'BCA' },
      { name: 'Shreyas', class: 'BCA' },
      { name: 'Nidha', class: 'BCA' },
      { name: 'Chaithanya', class: 'BCA' },
      { totalSelected: 6 }
    ],
    '2019-20': [
      { name: 'Shreyas', class: 'BCA' },
      { name: 'Pooja K', class: 'BCA' },
      { name: 'Niyathi', class: 'BCA' },
      { name: 'Vedamata M', class: 'BCA' },
      { totalSelected: 4 }
    ]
  }
},
'Northern Trust Bank': {
  salary: '₹4.0–4.8 LPA',
  studentsByYear: {
    '2014-15': [
      { name: 'Vivek Nayak', class: 'B.Com.' },
      { totalSelected: 1 }
    ],
    '2015-16': [
      { name: 'SMITHA MOHAN RAO', class: 'B.Com' },
      { name: 'SHEIKH MOHAMMAD FARAN', class: 'B.Com' },
      { totalSelected: 2 }
    ],
    '2016-17': [
      { totalSelected: 2 }
    ]
  }
},
'wipro': {
  salary: '₹3.5–7.5 LPA',
  studentsByYear: {
    '2010-11': [
      { name: 'Apoorva Poojary', class: 'B.Sc.' },
      { name: 'Shruthi', class: 'B.Sc.' },
      { name: 'Chaitra Kotian', class: 'B.Sc.' },
      { name: 'Ambika Rani', class: 'B.Sc.' },
      { name: 'Rohan Bonny Pereira', class: 'B.Sc.' },
      { totalSelected: 5 }
    ],
    '2011-12': [
      { program: 'Wipro-Wista', students: [
        { name: 'Vinutha H V', class: 'BZC' },
        { name: 'Sridevi K Bhat', class: 'BZC' },
        { name: 'Surabhi', class: 'BZC' },
        { name: 'Pooja Shetty B', class: 'BZC' },
        { name: 'Shetty Anusha Krishna', class: 'BZC' },
        { name: 'Sushmitha K N', class: 'BZC' },
        { name: 'Rakshitha A', class: 'BZC' },
        { name: 'Anusha Shenoy', class: 'BZC' },
        { name: 'Vinaya Kallalli', class: 'BZC' },
        { name: 'Sridevi Prabhu M', class: 'BZC' },
        { name: 'Shwetha', class: 'BCA' },
        { name: 'Swathi N', class: 'BCA' },
        { name: 'Shilpashree P', class: 'BCA' },
        { name: 'Nameesha Naik', class: 'BCA' },
        { name: 'Jakson Monteiro', class: 'BCA' }
      ], totalSelected: 15 },
      { program: 'Wipro-WASE', students: [
        { name: 'Shodhana Srinivas Nayak', class: 'BCA' },
        { name: 'Vineetha N Karkera', class: 'BCA' },
        { name: 'Sanketh Shekar', class: 'BCA' },
        { name: 'Sachin P N', class: 'BCA' },
        { name: 'Misba Naaz', class: 'BCA' },
        { name: 'Archana Pai H V', class: 'BCA' },
        { name: 'Vinutha Suvarna', class: 'BCA' },
        { name: 'Laxmi Pradhyumna J', class: 'BCA' },
        { name: 'Sharadhi R', class: 'BCA' },
        { name: 'Sahana K', class: 'BCA' },
        { name: 'Shilpa K', class: 'BCA' },
        { name: 'Kavya B Kotian', class: 'BCA' },
        { name: 'Sana', class: 'BCA' },
        { name: 'Rashmi Shanbhogue', class: 'BCA' },
        { name: 'Puneeth L N', class: 'BSc (MPC)' },
        { name: 'Vigneshwar Bhat', class: 'BSc (MPC)' },
        { name: 'Sabeena', class: 'BSc (MPC)' },
        { name: 'Ashwini A T', class: 'BSc (MPC)' },
        { name: 'Sharanya Shetty', class: 'BSc (MPC)' },
        { name: 'Shreeprabha M', class: 'BSc (MPC)' },
        { name: 'Anoosha S Shetty', class: 'BSc (MPC)' },
        { name: 'Nagesh Ganiga Manjunath', class: 'BSc (MPC)' },
        { name: 'Deepak Kamath', class: 'BSc (MPC)' },
        { name: 'Rajani Acharya', class: 'BSc (MSP)' },
        { name: 'Ashwini K', class: 'BSc (MSP)' },
        { name: 'Manasa S P', class: 'BSc (MPCs)' },
        { name: 'Chaitra N S Adiga', class: 'BSc (MPCs)' },
        { name: 'Shwetha Kiran', class: 'BSc (MPCs)' },
        { name: 'Deepthi K R', class: 'BSc (MPCs)' },
        { name: 'Maithri S N', class: 'BSc (MPCs)' },
        { name: 'Anusha G Shetty', class: 'BSc (MPCs)' },
        { name: 'Karthika A G', class: 'BSc (MPCs)' },
        { name: 'Devdas Nayak', class: 'BSc (MPCs)' },
        { name: 'Vanditha Pai', class: 'BSc (MSCs)' },
        { name: 'Namitha Ballal', class: 'BSc (MSCs)' }
      ], totalSelected: 35 },
      { program: 'Wipro Infotech', students: [
        { name: 'Samprada K J', class: '5th Sem B.Sc' },
        { name: 'Saritha Bhandary', class: '5th Sem B.Sc' },
        { name: 'Anona Laura Lewis', class: '5th Sem B.Sc' },
        { name: 'Laxmi Pradhyumna J', class: '5th Sem BCA' },
        { name: 'Shreeprabha M', class: '5th Sem B.Sc' },
        { name: 'Shilpashree P', class: '5th Sem BCA' },
        { name: 'Swathi N', class: '5th Sem BCA' },
        { name: 'Manasa S P', class: '5th Sem B.Sc' },
        { name: 'Shodhana Srinivas Nayak', class: '5th Sem BCA' },
        { name: 'Reenarose A Soans', class: '5th Sem BCA' },
        { name: 'Sahana K', class: '5th Sem BCA' },
        { name: 'Deepa V Prabhu', class: '5th Sem B.Sc' },
        { name: 'Vanditha Pai', class: '5th Sem B.Sc' },
        { name: 'Sanjana N R', class: '5th Sem B.Sc' },
        { name: 'Vineetha N K', class: '5th Sem BCA' },
        { name: 'Deepthi K R', class: '5th Sem B.Sc' },
        { name: 'Shilpa K', class: '5th Sem BCA' },
        { name: 'Sanketh Shekar', class: '5th Sem BCA' },
        { name: 'Shwetha Suvarna', class: '5th Sem BCA' },
        { name: 'Vinutha', class: '5th Sem BCA' },
        { name: 'Rajesh Nayak', class: '5th Sem BCA' },
        { name: 'Namitha Ballal', class: '5th Sem B.Sc' },
        { name: 'Rashmi Shanbhogue', class: '5th Sem BCA' },
        { name: 'Nikhitha V Poojary', class: '5th Sem BCA' },
        { name: 'Madhura R Somayaji', class: '5th Sem B.Sc' },
        { name: 'Misba Naaz', class: '5th Sem BCA' },
        { name: 'Chaithra N S', class: '5th Sem B.Sc' },
        { name: 'Sachin P N', class: '5th Sem BCA' },
        { name: 'Jakson James Monterio', class: '5th Sem BCA' }
      ], totalSelected: 29 }
    ],
    '2012-13': [
      { name: 'Rashmi', class: 'BCA' },
      { name: 'Sushmitha', class: 'BCA' },
      { name: 'Sahana', class: 'BCA' },
      { name: 'Shilpa', class: 'BCA' },
      { name: 'Vinutha', class: 'BCA' },
      { name: 'Deepa', class: 'BCA' },
      { name: 'Namitha', class: 'BCA' },
      { name: 'Shwetha', class: 'BCA' },
      { name: 'Misba', class: 'BCA' },
      { name: 'Sachin', class: 'BCA' },
      { name: 'Sanketh', class: 'BCA' },
      { name: 'Sharanya', class: 'B.Sc' },
      { name: 'Ashwini', class: 'B.Sc' },
      { name: 'Rajani', class: 'B.Sc' },
      { name: 'Anoosha', class: 'B.Sc' },
      { name: 'Deepak', class: 'B.Sc' },
      { name: 'Nagesh', class: 'B.Sc' },
      { name: 'Maithri', class: 'B.Sc' },
      { name: 'Devdas', class: 'B.Sc' },
      { name: 'Vanditha', class: 'B.Sc' },
      { name: 'Namitha Ballal', class: 'B.Sc' },
      { totalSelected: 21 }
    ],
    '2013-14': [
      { name: 'Puneeth L N', class: 'B.Sc' },
      { name: 'Vigneshwar Bhat', class: 'B.Sc' },
      { name: 'Sabeena', class: 'B.Sc' },
      { name: 'Ashwini A T', class: 'B.Sc' },
      { name: 'Sharanya Shetty', class: 'B.Sc' },
      { name: 'Shreeprabha M', class: 'B.Sc' },
      { name: 'Anoosha S Shetty', class: 'B.Sc' },
      { name: 'Nagesh Ganiga Manjunath', class: 'B.Sc' },
      { name: 'Deepak Kamath', class: 'B.Sc' },
      { name: 'Rajani Acharya', class: 'B.Sc' },
      { name: 'Ashwini K', class: 'B.Sc' },
      { name: 'Manasa S P', class: 'B.Sc' },
      { name: 'Chaitra N S Adiga', class: 'B.Sc' },
      { name: 'Shwetha Kiran', class: 'B.Sc' },
      { name: 'Deepthi K R', class: 'B.Sc' },
      { name: 'Maithri S N', class: 'B.Sc' },
      { name: 'Anusha G Shetty', class: 'B.Sc' },
      { name: 'Karthika A G', class: 'B.Sc' },
      { name: 'Devdas Nayak', class: 'B.Sc' },
      { name: 'Vanditha Pai', class: 'B.Sc' },
      { name: 'Namitha Ballal', class: 'B.Sc' },
      { totalSelected: 21 }
    ],
    '2014-15': [
      { name: 'Shilpa K', class: 'BCA' },
      { name: 'Sanketh Shekar', class: 'BCA' },
      { name: 'Misba Naaz', class: 'BCA' },
      { name: 'Sachin P N', class: 'BCA' },
      { name: 'Vinutha Suvarna', class: 'BCA' },
      { name: 'Sharadhi R', class: 'BCA' },
      { name: 'Sahana K', class: 'BCA' },
      { name: 'Kavya B Kotian', class: 'BCA' },
      { name: 'Sana', class: 'BCA' },
      { name: 'Rashmi Shanbhogue', class: 'BCA' },
      { name: 'Puneeth L N', class: 'B.Sc' },
      { name: 'Vigneshwar Bhat', class: 'B.Sc' },
      { name: 'Sabeena', class: 'B.Sc' },
      { name: 'Ashwini A T', class: 'B.Sc' },
      { name: 'Sharanya Shetty', class: 'B.Sc' },
      { name: 'Shreeprabha M', class: 'B.Sc' },
      { name: 'Anoosha S Shetty', class: 'B.Sc' },
      { name: 'Nagesh Ganiga Manjunath', class: 'B.Sc' },
      { name: 'Deepak Kamath', class: 'B.Sc' },
      { name: 'Rajani Acharya', class: 'B.Sc' },
      { totalSelected: 20 }
    ],
    '2015-16': [
      { name: 'Manasa S P', class: 'B.Sc' },
      { name: 'Chaitra N S Adiga', class: 'B.Sc' },
      { name: 'Shwetha Kiran', class: 'B.Sc' },
      { name: 'Deepthi K R', class: 'B.Sc' },
      { name: 'Maithri S N', class: 'B.Sc' },
      { name: 'Anusha G Shetty', class: 'B.Sc' },
      { name: 'Karthika A G', class: 'B.Sc' },
      { name: 'Devdas Nayak', class: 'B.Sc' },
      { name: 'Vanditha Pai', class: 'B.Sc' },
      { name: 'Namitha Ballal', class: 'B.Sc' },
      { name: 'Shilpa K', class: 'BCA' },
      { name: 'Sanketh Shekar', class: 'BCA' },
      { name: 'Misba Naaz', class: 'BCA' },
      { name: 'Sachin P N', class: 'BCA' },
      { name: 'Vinutha Suvarna', class: 'BCA' },
      { name: 'Sharadhi R', class: 'BCA' },
      { name: 'Sahana K', class: 'BCA' },
      { name: 'Kavya B Kotian', class: 'BCA' },
      { name: 'Sana', class: 'BCA' },
      { name: 'Rashmi Shanbhogue', class: 'BCA' },
      { totalSelected: 20 }
    ]
  }
},
'Dheemahi': {
  salary: '₹4.5–5.2 LPA',
  studentsByYear: {
    '2023-24': [
      { name: 'Swathi Deepak', class: 'M.Sc.' },
      { totalSelected: 1 }
    ]
  }
},
'Winman Software': {
  salary: '₹3.8–4.5 LPA', // Optional — update if known
  studentsByYear: {
    '2011-12': [
      { name: 'Nikitha V Poojary', class: 'B.C.A.' },
      { name: 'Rashmi', class: 'B.C.A.' },
      { totalSelected: 2 }
    ]
  }
},
'Vijaya Bank': {
  salary: '₹3.5–4.2 LPA', // Optional — update if known
  studentsByYear: {
    '2010-11': [
      { name: 'Raghuvaran', class: 'B.C.A.' },
      { name: 'Sushma Poojary', class: 'B.Sc.' },
      { name: 'Suraksha Seetharama Gundibail', class: 'B.C.A.' },
      { name: 'Rahul K.A.', class: 'B.C.A.' },
      { name: 'Shetty Deepa Suman', class: 'B.Sc.' },
      { name: 'Shetty Spoorthi Sudhakar', class: 'B.Sc.' },
      { name: 'Subramanya', class: 'B.Sc.' },
      { name: 'Pushpalatha B', class: 'B.Sc.' },
      { name: 'Askhatha', class: 'B.Sc.' },
      { name: 'Divya', class: 'B.C.A.' },
      { totalSelected: 10 }
    ]
  }
},
'Qspiders': {
  salary: '₹4.9–12.1 LPA',
  studentsByYear: {
    '2023-24': [
      { name: 'Deekshitha T C', class: 'B.Com' },
      { name: 'Naik Sangeeta Ananth', class: 'B.Com' },
      { name: 'Shetty Shravya Shashindra', class: 'B.Com' },
      { totalSelected: 3 },
      {totalSelectedAllCourses: 52}
    ]
  }
},
'Almasons': {
  salary: '₹3.8–8.2 LPA',
  studentsByYear: {
    '2023-24': [
      { name: 'Niveditha Pai', class: 'B.C.A.' },
      { name: 'Pranitha D Salian', class: 'B.C.A.' },
      { totalSelected: 2 }
    ]
  }
}














};

const companyList = Object.keys(companyData);

const PlacementCell = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleBack = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="placement-cell">
      <header className="placement-header">
        <h1>Placement Cell</h1>
      </header>

           <section className="placement-highlights">
        <h2>The highlights of the academic years speaks for itself</h2>
        <p>
          Our students from <strong>B.A./B.Sc./B.Com./B.C.A. and P.G.D.C.A.</strong> were placed as Software Junior Engineers,
          Test Engineers, Quality Analysts, Process Executives, Unit Managers with a salary of up to <strong>Rs. 35,000/- per month</strong> in lead Companies like:
        </p>
        <p>
          Wipro Infotech, Infosys Technologies Ltd., Wipro Technologies, Tata Consultancy Services, Convergys, IBM,
          Infosys B.P.O., Outsource Partner International, First Source, Mphasis B.P.O., ICICI Prudential, TV9 (English Channel).
          Some of the Companies even offer opportunity for higher studies like <strong>MS-Software, MCA & MBA</strong>.
        </p>
      </section>

      {!selectedCompany ? (
        <section className="company-card-section">
          <h2>Final Company List</h2>
          <div className="company-card-grid">
            {companyList.map((company, index) => {
              const imageSrc = companyImages[company];
              return (
                <div
                  key={index}
                  className="company-card glass-card"
                  onClick={() => setSelectedCompany(company)}
                >
                  <div className="company-media">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={`${company} logo`}
                        className="company-icon"
                      />
                    ) : (
                      <div className="company-icon-placeholder">📄</div>
                    )}
                  </div>
                  <span className="company-name">{company}</span>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="company-details-section">
          <CompanyDetails
            companyName={selectedCompany}
            salary={companyData[selectedCompany].salary}
            students={companyData[selectedCompany].students}
            studentsByYear={companyData[selectedCompany].studentsByYear}
          />
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button className="back-button" onClick={handleBack}>
              ⬅ Back to Company List
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default PlacementCell;
