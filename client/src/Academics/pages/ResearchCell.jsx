import React from 'react';
import '../styles/ResearchCell.css';

export default function ResearchCell() {
  return (
    <div className="research-page">
      {/* Header */}
      <section className="research-header">
        <h1>🔬 Research Cell</h1>
        <p>
          True to its Vision & Mission, MGM College encourages research by providing academic, moral, infrastructural, financial, and administrative support to its staff. The Research Cell was established to streamline and promote research and innovation across disciplines.
        </p>
      </section>

      {/* Objectives */}
      <section className="research-section">
        <h2>Objectives</h2>
        <ul className="research-list">
          <li>Promote research activities among faculty.</li>
          <li>Develop a research culture in the institution.</li>
          <li>Encourage research projects useful for society and new knowledge.</li>
          <li>Guide faculty in developing proposals and applying for funding.</li>
          <li>Motivate faculty to undertake doctoral and post-doctoral studies.</li>
          <li>Support publications and student-led research.</li>
          <li>Provide innovation support and conduct research programs.</li>
        </ul>
      </section>

      {/* Scope */}
      <section className="research-section">
        <h2>Scope of Research</h2>
        <div className="research-text">
          <p>
            The Research Cell recognizes disciplinary, interdisciplinary, and multidisciplinary research. It views research as a systematic investigation to establish facts, explore the unexplored, expand past work, or make new discoveries.
          </p>
          <p>
            Research contributes to knowledge, informs policy, nurtures innovation, and enhances pedagogy. MGM College encourages research in Sciences, Arts, Social Sciences, Humanities, Commerce, Management, Computer Science, Physical Education, and interdisciplinary areas.
          </p>
          <p>
            Faculty from departments like Botany, Zoology, Chemistry, Physics, Mathematics, Statistics, Computer Science, Commerce, Kannada, English, Sanskrit, Hindi, History, Economics, Political Science, Journalism, Physical Education, and Library are encouraged to pursue research.
          </p>
        </div>
      </section>

      {/* Composition */}
      <section className="research-section">
        <h2>Composition</h2>
        <div className="research-text">
          <p>
            The Research Cell is chaired by the Principal. A senior faculty member acts as Convener. The IQAC Coordinator is a permanent member. Four to eight experienced faculty members form the committee. HoDs are invited based on proposals from their departments.
          </p>
          <p>
            The Cell meets as needed to plan, guide, approve, and monitor research projects. It notifies procedures and timelines, reviews proposals, and conducts interface meetings before approval.
          </p>
        </div>
      </section>
    </div>
  );
}
