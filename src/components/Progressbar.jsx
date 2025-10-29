const ProgressBar = ({ value, label }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold text-foreground text-lg">{label}</p>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#e77504] to-[#f0a510] transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;