import React from 'react';
import  { useState } from 'react';
function Formulaire() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
  };

  const isNameValid = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]{2,}$/;
    return namePattern.test(name);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <label>
          Prénom:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]{2,}$"
            title="Veuillez entrer un prénom valide."
          />
        </label>
        <label>
          Nom:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]{2,}$"
            title="Veuillez entrer un nom valide."
          />
        </label>
        
        <label>
          Genre:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Choisissez</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
            title="Le mot de passe doit contenir au moins 8 caractères."
          />
        </label>
        <label>
          Confirmer le mot de passe:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Formulaire