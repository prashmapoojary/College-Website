import React from 'react';
import '../styles/E-Resources.css';

export default function EResources() {
  return (
    <div className="eresources-page">
      <section className="eresources-header">
        <h1>📚 E-Resources</h1>
        <p>
          The MGM College library has subscribed to e-resources like <strong>INFLIBNET-N List</strong> and <strong>DELNET</strong>, providing access to over <strong>6000+</strong> e-journals and <strong>1,64,300+</strong> e-books.
        </p>
      </section>

      <section className="eresources-section">
        <h2>Digital Access & Services</h2>
        <div className="eresources-text">
          <p>
            Inter Library Loan (ILL) services are available through DELNET, enabling students and faculty to borrow resources from partner institutions.
          </p>
          <p>
            The library also provides access to national repositories such as <strong>Shodhganga</strong> and <strong>NDLI</strong>, supporting research and academic excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
