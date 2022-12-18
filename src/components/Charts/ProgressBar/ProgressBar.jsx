export const ProgressBar = ({ percentComplete, color }) => {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-lg">
      <div
        style={{
          width: `${percentComplete > 100 ? 100 : percentComplete}%`,
        }}
        className={`${color ? color : "bg-blue-300"} h-2 rounded-lg  w-full`}
      />
    </div>
  );
};
