const Profile = ({ errors, formData, setFormData }) => {
  const { name, age, email } = formData;

  const handleDataChange = (e, item) => {
    setFormData((prevData) => ({
      ...prevData,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      {errors.age && <span className="error">{errors.age}</span>}
      <div>
        <label>Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
      {errors.email && <span className="error">{errors.email}</span>}
    </div>
  );
};

export default Profile;
