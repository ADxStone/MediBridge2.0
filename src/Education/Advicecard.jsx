const Advicecard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Advicecard;

