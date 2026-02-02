import { useState } from 'react';

const HealthForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    bloodPressure: '',
    bloodSugar: '',
    weight: '',
    symptoms: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      bloodPressure: '',
      bloodSugar: '',
      weight: '',
      symptoms: '',
      notes: '',
    });
  };

  return (
    <form
      onSubmit={submitForm}
      className="bg-white rounded-2xl shadow-sm p-5 mt-4 max-w-2xl"
    >
      
      <h2 className="text-lg font-semibold mb-4">
        New Health Entry
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-gray-600">Blood Pressure</label>
          <input
            name="bloodPressure"
            value={formData.bloodPressure}
            placeholder="120/80"
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Blood Sugar</label>
          <input
            name="bloodSugar"
            value={formData.bloodSugar}
            placeholder="110 mg/dl"
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Weight</label>
          <input
            name="weight"
            value={formData.weight}
            placeholder="70 kg"
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      
      <div className="mt-4">
        <label className="text-sm text-gray-600">Symptoms</label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          rows={3}
          placeholder="Any symptoms you are experiencing..."
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm text-gray-600">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Optional notes..."
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      
      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg text-sm bg-gray-100 hover:bg-gray-200"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Save Health Data
        </button>
      </div>
    </form>
  );
};

export default HealthForm;
