const Interests = ({ errors, formData, setFormData }) => {
  const { interests } = formData;

  const handleDataChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name]
        : prevData.interests.filter((item) => item !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={(e) => handleDataChange(e)}
        />
        <label>Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
          onChange={(e) => handleDataChange(e)}
        />
        <label>Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
          onChange={(e) => handleDataChange(e)}
        />
        <label>JavaScript</label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
