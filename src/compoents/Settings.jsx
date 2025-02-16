const Settings = ({ formData, setFormData }) => {
  const { theme } = formData;

  const handleDataChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      theme: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={(e) => handleDataChange(e)}
        />
        <label>Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={(e) => handleDataChange(e)}
        />
        <label>Light</label>
      </div>
    </div>
  );
};

export default Settings;
