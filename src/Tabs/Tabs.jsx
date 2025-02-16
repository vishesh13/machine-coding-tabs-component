import { useState } from "react";
import Interests from "../compoents/Interests";
import Profile from "../compoents/Profile";
import Settings from "../compoents/Settings";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "light",
  });

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",

    interests: "Interests is not valid",
    theme: "Theme is not valid",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!formData.name || formData.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!formData.age || formData.age < 18) {
          err.age = "Age is not valid";
        }
        if (!formData.email || formData.email.length < 5) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.age || err.name || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (!formData.interests || formData.interests.length < 1) {
          err.interests = "Interests is not valid";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        const err = {};
        if (!formData.theme || formData.theme.length < 1) {
          err.theme = "Theme is not valid";
        }
        setErrors(err);
        return err.theme ? false : true;
      },
    },
  ];

  const ActiveComponentDetails = tabs[activeTab]?.component;

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div>
      <div className="header-container">
        {tabs.map((tabDetails, index) => {
          return (
            <h3
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              className="tab-header"
            >
              {tabDetails?.name}
            </h3>
          );
        })}
      </div>
      <div className="tab-body">
        {
          <ActiveComponentDetails
            errors={errors}
            formData={formData}
            setFormData={setFormData}
          />
        }
      </div>
      <div>
        {activeTab === tabs?.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Previous</button>}
      </div>
      <div>
        {activeTab < tabs?.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Tabs;
