import { useState } from 'react';
import {useAuth} from '../Authentication'
import WelcomeBanner from '../HealthOverview/WelcomeBanner';
import HealthForm from '../HealthOverview/HealthForm';

const HealthOverviewPage = () => {
  const {user} = useAuth(); 

  const [showForm, setShowForm] = useState(false);
  const [records, setRecords] = useState([]);
  if(!user){
    return <P className="p-4">please register or login first</P>
  }

  const advice = [
    {
      title: 'Blood Pressure',
      message:
        'Your blood pressure is in the prehypertension range. Maintain a healthy diet low in sodium, exercise 30 minutes daily, and monitor your readings.',
    },
    {
      title: 'Blood Sugar',
      message:
        'Your blood sugar is well-controlled. Continue with your current diet and medication regimen.',
    },
    {
      title: 'Weight',
      message:
        'Maintain a healthy weight through balanced nutrition and regular exercise. Aim for at least 150 minutes of moderate activity per week.',
    },
    {
      title: 'General',
      message:
        'Remember: Stay hydrated, get 7–8 hours of sleep, manage stress through relaxation techniques, and never skip your medications.',
    },
  ];

  const submitForm = (data) => {
    setRecords([
      {
        ...data,
        id: Date.now(),
        date: new Date().toISOString().slice(0, 10),
      },
      ...records,
    ]);
    setShowForm(false);
  };

  return (
    <div className="p-4">
      
      <WelcomeBanner user={user} />

      
      <button
        onClick={() => setShowForm(true)}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        + Submit Health Data
      </button>

      
      {showForm && (
        <HealthForm
          onSubmit={submitForm}
          onCancel={() => setShowForm(false)}
        />
      )}

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            💡 Personalized Health Advice
          </h3>

          {advice.map((a, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3"
            >
              <div className="text-blue-600 mt-1">ℹ️</div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-blue-700 text-sm">
                    {a.title}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {new Date().toISOString().slice(0, 10)}
                  </span>
                </div>

                <p className="text-sm text-blue-900 mt-1">
                  {a.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-white border rounded-xl p-4 shadow-sm h-fit">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
            📄 Recent Entries
          </h3>

          {records.length === 0 ? (
            <p className="text-sm text-gray-500">
              No health records yet
            </p>
          ) : (
            records.map((record) => (
              <div key={record.id} className="text-sm text-gray-700 mb-4">
                <div className="text-xs text-gray-500 mb-2">
                  {record.date}
                </div>

                <div className="flex justify-between">
                  <span>BP:</span>
                  <span>{record.bloodPressure}</span>
                </div>

                <div className="flex justify-between">
                  <span>BS:</span>
                  <span>{record.bloodSugar}</span>
                </div>

                <div className="flex justify-between">
                  <span>Weight:</span>
                  <span>{record.weight}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
        <strong>Medical Disclaimer:</strong> MediBridge provides general health
        guidance based on standard medical guidelines. This advice is educational
        and does not replace professional medical consultation, diagnosis, or
        treatment. Always consult qualified healthcare professionals for medical
        decisions.
      </div>
    </div>
  );
};

export default HealthOverviewPage;
