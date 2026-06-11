import { FaMapMarkerAlt, FaHotel, FaUtensils, FaCamera } from "react-icons/fa";
import "../styles/SearchTabs.css";

function SearchTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { name: "Search All", icon: <FaMapMarkerAlt /> },
    { name: "Hotels", icon: <FaHotel /> },
    { name: "Restaurants", icon: <FaUtensils /> },
    { name: "Things to Do", icon: <FaCamera /> },
  ];

  return (
    <div className="search-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={activeTab === tab.name ? "search-tab active" : "search-tab"}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.icon}
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default SearchTabs;