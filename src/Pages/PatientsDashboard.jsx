import React from "react";
import Education from "./EducationPage"
import HealthOverview from "./HealthOverviewPage"
import Medication from "./MedicationPage"
const PatientDashboard = () => {
  return (
<div>
  <HealthOverview/>
  <Education/>
  <Medication/>
</div>
  )
}    
export default PatientDashboard