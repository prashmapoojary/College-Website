import React from 'react';
import ParkingInfo from './Parking';
import BackToTop from '../BackToTop';
import Canteen from './Annapoorna';
import CoOpStore from './Co-op';
import ClsCompAv from './ClsCompAv';
import Laboratories from './Laboratories';
import Library from './Library';

function Facilities() {
  return (
    <div
      className="college-page-container py-8 px-4 font-sans"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <Canteen/>
        <CoOpStore/>
        <ClsCompAv/>
        <Laboratories/>
        <Library/>
        <ParkingInfo />
      </div>
      <BackToTop />
    </div>
  );
}

export default Facilities;
