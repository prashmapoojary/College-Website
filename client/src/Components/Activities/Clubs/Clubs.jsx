import React, { useState } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
import BackToTop from "../BackToTop";

// Import all images from assets folder
// Example imports; replace or add your actual images here

const vishwanathImg = "/assets/Activities/Clubs/vishwanath.jpg";
const anupamaImg = "/assets/Activities/Clubs/anupama.jpg";
const anilImg = "/assets/Activities/Clubs/anil.gif";
const vidyanathImg = "/assets/Activities/Clubs/vidyanath.jpg";
const puthiImg = "/assets/Activities/Clubs/puthi.jpg";
const arunImg = "/assets/Activities/Clubs/Aruna.gif";
const vasumathiImg = "/assets/Activities/Clubs/vasumathi.jpg";
const ashwiniImg = "/assets/Activities/Clubs/ashwini.jpg";
const subodhImg = "/assets/Activities/Clubs/Subhod.gif";
const vanithaImg = "/assets/Activities/Clubs/Vanitha.gif";
const veeraImg = "/assets/Activities/Clubs/Veera_Ida_Pinto.gif";
const noImg = "/assets/Activities/Clubs/noimag.jpg";
const rashmiImg = "/assets/Activities/Clubs/rashmi.jpg";
const rajamoorthyImg = "/assets/Activities/Clubs/rajmoorthy.jpg";
const adithiImg = "/assets/Activities/Clubs/adithi.jpg";
const ragvendraImg = "/assets/Activities/Clubs/ragvendra.jpg";
const rekhaImg = "/assets/Activities/Clubs/rekha.jpg";
const jyothsnaImg = "/assets/Activities/Clubs/jyothsna.jpg";

// Clubs data with images imported from assets
const clubs = [
  {
    name: "Commerce Club",
    convener: "Mr.Vikas Shetty",
    convenerImg: noImg,
    coConvener: "Mrs.Kavya B",
    coConvenerImg:noImg,
    description:
      "Offer students valuable opportunities to develop practical skills, expand their knowledge of business and finance, and build confidence in their abilities.",
  },
  {
    name: "IT Club",
    convener: "Dr.Vishwanath Pai M",
    convenerImg: vishwanathImg,
    coConvener: "Mrs.Anupama Ajith",
    coConvenerImg: anupamaImg,
    description:
      "Provides a platform for learning, collaboration, and skill development in various areas of information technology.",
  },
  {
    name: "Science Club",
    convener: "Mrs.Umadevi",
    convenerImg: noImg,
    coConvener: "Mrs.Vasavi",
    coConvenerImg: noImg,
    description:
      "It provides a platform for students to explore scientific concepts beyond the classroom, engage in hands-on activities, and participate in projects that enhance their scientific knowledge and skills.",
  },
  {
    name: "Arts Club",
    convener: "Mr.Chenna Poojary",
    convenerImg: noImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description:"Arts club provide a platform for students to explore their creative talents in various art forms like visual arts, performing arts, literature, and more.",
  },
  {
    name: "Fine Arts Club",
    convener: "Dr.Puthi Vasanth Kumar",
    convenerImg: puthiImg,
    coConvener: "Mrs.Spoorthy Fernandes",
    coConvenerImg: noImg,
    description: "Students can discover and engage with a wide range of artistic disciplines, including visual arts, performing arts, and literary arts.",
  },
  {
    name: "Yakshagana and Nataka Ranga",
    convener: "Mr.Ragavendra Thunga",
    convenerImg: ragvendraImg ,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Offer a creative outlet, boost confidence, and provide a strong sense of identity rooted in tradition",
  },
  {
    name: "Eco club",
    convener: "Dr.Maneetha",
    convenerImg: noImg,
    coConvener: "Mrs.Shruthi",
    coConvenerImg: noImg,
    description: "Promote environmental awareness, organize hands-on activities like tree planting and waste management, and educate students on eco-friendly practices.",
  },
  {
    name: "Literary Forum",
    convener: "Dr.Vasumathi Bhat",
    convenerImg: vasumathiImg,
    coConvener: "Mrs.Ashwini Acharya",
    coConvenerImg: ashwiniImg,
    description: "Enhances communication skills, fostering creativity, and providing a platform for intellectual discussion and social interaction.",
  },
  {
    name: "Sports Club",
    convener: "Mrs.Jayashree Nayak",
    convenerImg: noImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Encourage regular physical activity, helping students maintain a healthy lifestyle and combat the sedentary nature of college life.",
  },
];

// Cells data
const cells = [
  {
    name: "Teaching and Learning Centre",
    convener: "Mr.Arun Kumar B",
    convenerImg: arunImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Focuses on enhancing pedagogical practices, faculty development, and improving the overall learning experience for students.",
  },
  {
    name: "Placement Cell",
    convener: "Dr.Vishwanath Pai M",
    convenerImg: vishwanathImg,
    coConvener: "Mrs.Rashmi",
    coConvenerImg: rashmiImg,
    description: "Facilitates career opportunities for students by organizing recruitment drives, internships, and providing training for interviews and resume building.",
  },
  {
    name: "Skill Development Cell",
    convener: "Mr.Rajmoorthy Rao",
    convenerImg: rajamoorthyImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Aims to equip students with essential life and professional skills beyond academics, through workshops, training programs, and certifications.",
  },
  {
    name: "Alumini Cell",
    convener: "Mrs.Adithi",
    convenerImg: adithiImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Maintains connections with former students, fostering a network for mentorship, career guidance, and support for current students and the institution.",
  },
  {
    name: "Research Cell",
    convener: "Dr.Vasumathi Bhat",
    convenerImg: vasumathiImg,
    coConvener: "Dr.Vijayalakshmi",
    coConvenerImg: noImg,
    description: "Promotes and supports research activities among faculty and students, including providing resources, guidance on projects, and facilitating publications.",
  },
  {
    name: "Human Rights and Religious Harmony Cell",
    convener: "Mr.Subodh Pai",
    convenerImg: subodhImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Works to ensure a safe, inclusive, and respectful environment within the college by addressing issues related to human rights and promoting inter-religious understanding and harmony.",
  },
  {
    name: "Scholarship Counselling Cell",
    convener: "Mr.Vidhyanath",
    convenerImg: vidyanathImg,
    coConvener: "Mrs.Asha Kedilaya",
    coConvenerImg: noImg,
    description: "Provides information and guidance to students regarding various scholarship opportunities, assisting them with applications and eligibility criteria.",
  },
];

// Committees data
const committees = [
  {
    name: "Anti-Ragging Committee",
    convener: "Principal",
    convenerImg: noImg,
    coConvener: "Staff Council(Members)",
    coConvenerImg: noImg,
    description: "Works to prevent and eliminate ragging and aims to create a safe and respectful environment.",
  },
  {
    name: "SC and ST Cell",
    convener: "Mr.Anil Kumar",
    convenerImg: anilImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Addresses the specific needs and concerns of students belonging to Scheduled Castes (SC) and Scheduled Tribes (ST), ensuring their welfare and addressing any issues they may face.",
  },
  {
    name: "Student Grievance and Counselling Cell",
    convener: "Mrs.Vanitha ",
    convenerImg: vanithaImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Provides a platform for students to voice their grievances and offers counseling services to help them cope with academic, personal, or emotional challenges.",
  },
  {
    name: "Women's Harassment Redressal Cell",
    convener: "Mrs.Veera Ida Pinto",
    convenerImg: veeraImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Specifically addresses complaints of harassment faced by female students and staff, ensuring a safe and equitable environment for women on campus.",
  },
  {
    name: "Women's Counsellor",
    convener: "Mrs.Rekha N Chandra",
    convenerImg: rekhaImg,
    coConvener: "Mrs.Jyothsna",
    coConvenerImg: jyothsnaImg,
    description: "A dedicated counsellor provides support and guidance to female students regarding various issues, including academic stress, personal problems, or mental health concerns.",
  },
  {
    name: "Women's Welfare Cell",
    convener: "Mrs.Jyothsna",
    convenerImg: jyothsnaImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Focuses on promoting the overall well-being and welfare of female students and staff, often organizing activities and initiatives related to health, safety, and empowerment.",
  },
];

function Section({ items, sectionTitle, onRowClick }) {
  return (
    <div className="mb-10">
      <h3 className="mt-7 mb-3 text-slate-900 font-bold text-2xl flex items-center gap-2">
        <span className="w-2.5 h-6 bg-amber-500 rounded-full inline-block"></span>
        {sectionTitle}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-md">
        <table className="min-w-full table-fixed bg-white border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-amber-400">
              <th className="w-1/3 text-lg sm:text-xl text-center font-bold py-3.5 px-5 border-b border-amber-500/30">
                Name
              </th>
              <th className="w-1/3 text-lg sm:text-xl text-center font-bold py-3.5 px-5 border-b border-amber-500/30">
                Convener
              </th>
              <th className="w-1/3 text-lg sm:text-xl text-center font-bold py-3.5 px-5 border-b border-amber-500/30">
                Co-Convener
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick(item)}
                className={`
                  cursor-pointer
                  transition
                  ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  hover:bg-amber-50/80
                `}
              >
                <td className="w-1/3 py-3 px-4 text-base sm:text-lg font-semibold text-slate-900 border-b border-slate-200">{item.name}</td>
                <td className="w-1/3 py-3 px-4 border-b border-slate-200">
                  <div className="flex items-center gap-3 min-h-[40px]">
                    {item.convenerImg && (
                      <img
                        src={item.convenerImg}
                        alt={item.convener}
                        className="w-11 h-11 object-cover rounded-full border-2 border-amber-500/60 bg-slate-100 shadow-sm"
                      />
                    )}
                    <span className="text-sm sm:text-base font-medium text-slate-800">{item.convener}</span>
                  </div>
                </td>
                <td className="w-1/3 py-3 px-4 border-b border-slate-200">
                  <div className="flex items-center gap-3 min-h-[40px]">
                    {item.coConvenerImg && (
                      <img
                        src={item.coConvenerImg}
                        alt={item.coConvener}
                        className="w-11 h-11 object-cover rounded-full border-2 border-amber-500/60 bg-slate-100 shadow-sm"
                      />
                    )}
                    <span className="text-sm sm:text-base font-medium text-slate-800">{item.coConvener}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Clubs() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div
      className="college-page-container min-h-screen py-10 px-4 font-sans"
    >
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/92 rounded-2xl shadow-2xl border border-slate-200/80 p-6 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 rounded-xl py-4 px-6 mb-4 shadow-xl border border-amber-500/30 tracking-wide">
            Activities: Clubs, Cells & Committees
          </h2>
          <div className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover the vibrant student life at MGM College. Explore the clubs, cells, and committees driving student engagement and excellence.
          </div>
        </div>
        <Section items={clubs} sectionTitle="Clubs" onRowClick={setSelectedItem} />
        <Section items={cells} sectionTitle="Cells" onRowClick={setSelectedItem} />
        <Section items={committees} sectionTitle="Committees" onRowClick={setSelectedItem} />

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-amber-500/30 max-w-lg w-full text-center animate-modal-in"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "modalIn 0.26s" }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3 border-b border-amber-500/20 pb-2">{selectedItem.name}</h3>
              <p className="text-base text-slate-700 mb-6 leading-relaxed">{selectedItem.description}</p>
              <button
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-8 rounded-xl shadow-md hover:shadow-lg transition"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Modal animation */}
        <style>
          {`@keyframes modalIn {
            from {transform: translateY(50px) scale(0.97); opacity:0.5;}
            to {transform: translateY(0) scale(1); opacity: 1;}
          }
          .animate-modal-in {
            animation: modalIn 0.26s;
          }`}
        </style>
      </div>
      <BackToTop/>
    </div>
  );
}

export default Clubs;