function MedzSchedule({ time, medications }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        ⏰ {time}
      </div>

      {medications.map((med) => (
        <div
          key={med.id}
          className="flex justify-between items-start border-b last:border-none pb-2"
        >
          <div>
            <p className="font-medium text-gray-900">
              {med.name} – {med.dosage}
            </p>
            {med.notes && (
              <p className="text-sm text-gray-500">{med.notes}</p>
            )}
          </div>

          <div className="w-5 h-5 border border-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedzSchedule;
