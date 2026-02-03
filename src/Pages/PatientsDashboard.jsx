import React, { useState } from "react";
import Navbar from "../Mainpage/Navbar";
import HealthOverview from "./HealthOverviewPage";
import Education from "./EducationPage";
import Medication from "./MedicationPage";
import Account from "./AccountPage";

const PatientsDashboard = () => {
  const [activePage, setActivePage] = useState("health-overview");

  const renderPage = () => {
    switch (activePage) {
      case "health-overview":
        return <HealthOverview />;
      case "medication":
        return <Medication />;
      case "education":
        return <Education />;
      case "account":
        return <Account />;
      default:
        return <HealthOverview />;
    }
  };

  return (
    <div>
     <Navbar
        setActivePage={setActivePage}
      />
      <div className="p-4">
        {renderPage()}
      </div>
    </div>
  );
};

export default PatientsDashboard;
