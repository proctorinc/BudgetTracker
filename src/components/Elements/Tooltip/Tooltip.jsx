import { useState } from "react";

export const Tooltip = ({ content, className, children }) => {
  const [showTooltip, setShowToolTip] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      {children}
      {showTooltip && (
        <div
          role="tooltip"
          className="flex flex-col p-3 absolute max-h-64 my-1 overflow-auto rounded-md bg-gray-200 py-1 text-base shadow-lg border border-gray-300 focus:outline-none sm:text-sm z-40 w-fit font-light text-gray-500"
        >
          {content}
        </div>
      )}
    </div>
  );
};
