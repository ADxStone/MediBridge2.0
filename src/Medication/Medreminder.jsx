import { useState } from "react";
import MedzSchedule from "./MedzSchedule";

function MedzReminder() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [medications, setMedications] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "Once daily",
    notes: "",
  });

  const frequencyTimesMap = {
    "Once daily": ["08:00"],
    "Twice daily": ["08:00", "20:00"],
    "Three times daily": ["08:00", "14:00", "20:00"],
    "Four times daily": ["08:00", "12:00", "16:00", "20:00"],
  };

  const scheduleMap = medications.reduce((acc, med) => {
    med.times.forEach((time) => {
      if (!acc[time]) acc[time] = [];
      acc[time].push(med);
    });
    return acc;
  }, {});

  const handleSubmit = () => {
    if (!formData.name || !formData.dosage) return;

    setMedications((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: formData.name,
        dosage: formData.dosage,
        frequency: formData.frequency,
        times: frequencyTimesMap[formData.frequency],
        notes: formData.notes,
      },
    ]);

    setFormData({
      name: "",
      dosage: "",
      frequency: "Once daily",
      notes: "",
    });

    setIsFormOpen(false);
  };

  const handleDelete = (id) => {
    setMedications((prev) => prev.filter((med) => med.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            💊 Medication Reminders
          </h1>
          <p className="text-sm text-gray-500">
            Manage and track your daily medications
          </p>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
        >
          + Add Medication
        </button>
      </div>

      {/* ADD MEDICATION FORM */}
      {isFormOpen && (
        <div className="bg-white border rounded-xl p-6 space-y-4">
          <h2 className="font-semibold text-gray-900">New Medication</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">
                Medication Name :
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Metformin"
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Dosage :
              </label>
              <input
                value={formData.dosage}
                onChange={(e) =>
                  setFormData({ ...formData, dosage: e.target.value })
                }
                placeholder="e.g. 500mg"
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Frequency :
              </label>
              <select
                value={formData.frequency}
                onChange={(e) =>
                  setFormData({ ...formData, frequency: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option>Once daily</option>
                <option>Twice daily</option>
                <option>Three times daily</option>
                <option>Four times daily</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Notes : 
              </label>
              <input
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="e.g. Take with meals"
                className="w-full border rounded-lg px-3 py-2 mt-1 "
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Add Medication
            </button>
            <button
              onClick={() => setIsFormOpen(false)}
              className="bg-gray-100 px-4 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* TODAY'S SCHEDULE */}
      <section className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="text-sm font-semibold text-gray-700">
          📅 Today’s Schedule
        </h2>

        {Object.keys(scheduleMap).length === 0 ? (
          <p className="text-sm text-gray-500">
            No medications scheduled yet.
          </p>
        ) : (
          Object.entries(scheduleMap).map(([time, meds]) => (
            <MedzSchedule key={time} time={time} medications={meds} />
          ))
        )}
      </section>

      {/* ALL MEDICATIONS */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-700">
          All Medications
        </h2>

        {medications.length === 0 ? (
          <p className="text-sm text-gray-500">
            No medications added yet.
          </p>
        ) : (
          medications.map((med) => (
            <div
              key={med.id}
              className="bg-white border rounded-xl p-4 flex justify-between"
            >
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900">💊{med.name}</h3>
                <p className="text-sm text-gray-600">
                  Dosage: {med.dosage}
                </p>
                <p className="text-sm text-gray-600">
                  Frequency: {med.frequency}
                </p>
                <p className="text-sm text-gray-600">
                  Times: {med.times.join(", ")}
                </p>
                {med.notes && (
                  <p className="text-sm text-gray-500">
                    Notes: {med.notes}
                  </p>
                )}
              </div>

              <button
                onClick={() => handleDelete(med.id)}
                className="text-red-500 text-sm"
              >
                🗑
              </button>
            </div>
          ))
        )}
      </section>

      {/* INFO */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        🔔 You’ll receive notifications when it’s time to take your medications.
      </div>
    </div>
  );
}

export default MedzReminder;
