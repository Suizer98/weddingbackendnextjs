import React from "react";

type SidebarProps = {
  toggleSidebar: () => void;
  sidebarExpanded: boolean;
  layersVisible: { osm: boolean; vector: boolean };
  setLayersVisible: React.Dispatch<
    React.SetStateAction<{ osm: boolean; vector: boolean }>
  >;
};

const Sidebar: React.FC<SidebarProps> = ({
  toggleSidebar,
  sidebarExpanded,
  layersVisible,
  setLayersVisible,
}) => {
  return (
    <div>
      <button
        className="absolute top-4 left-4 z-50 bg-white border border-gray-300 rounded-md p-2"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 ${sidebarExpanded ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div
        className={`${
          sidebarExpanded ? "w-60" : "w-20"
        } h-full bg-white shadow-md overflow-y-auto transition-all duration-500`}
      >
        {sidebarExpanded && (
          <div className="p-4 pt-16">
            <div className="flex flex-col space-y-4">
              <label className="text-sm font-medium text-gray-700">
                This is a client side rendered react component. The main goal of
                this website is to showcase complete workflow of auto deploy
                pipeline using:
              </label>
              <label className="text-sm text-gray-700">
                1. Github Action pipeline
              </label>
              <label className="text-sm text-gray-700">
                2. Docker login and push to Azure Container Registry
              </label>
              <label className="text-sm text-gray-700">
                3. Deploy image as web app on Azure Web App Service
              </label>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="osm-toggle"
                  className="text-sm font-medium text-gray-700"
                >
                  OSM Layer
                </label>
                <input
                  id="osm-toggle"
                  type="checkbox"
                  checked={layersVisible.osm}
                  onChange={() =>
                    setLayersVisible((prev) => ({ ...prev, osm: !prev.osm }))
                  }
                  className="toggle-checkbox"
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="vector-toggle"
                  className="text-sm font-medium text-gray-700"
                >
                  Vector Layer
                </label>
                <input
                  id="vector-toggle"
                  type="checkbox"
                  checked={layersVisible.vector}
                  onChange={() =>
                    setLayersVisible((prev) => ({
                      ...prev,
                      vector: !prev.vector,
                    }))
                  }
                  className="toggle-checkbox"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;