import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validaciones
    if (!formData.name) {
      newErrors.name = "Name can not be empty";
    }
    if (!formData.email) {
      newErrors.email = "E-mail can not be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail format is not valid";
    }
    if (!formData.password) {
      newErrors.password = "Password can not be empty";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 caracters long";
    }

    // Si hay errores, actualiza el estado de errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage(""); // Limpia el mensaje de éxito si hay errores
    } else {
      setErrors({}); // Limpia errores
      setSuccessMessage("Succesfull registry"); // Muestra el mensaje de éxito
      // Aquí puedes hacer el manejo del registro
      console.log("Registry data:", formData);
      // Reinicia el formulario si es necesario
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-dark-light text-violet-light rounded shadow">
      <h2 className="text-center text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-violet"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-dark text-violet-light"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-violet"
          >
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-dark text-violet-light"
          />
          {errors.email && (
            <p className="text-red-600  text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-violet"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-dark text-violet-light"
          />
          {errors.password && (
            <p className="text-red-600  text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-violet hover:bg-violet-dark text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {successMessage && (
        <p className="text-green-500 text-sm text-center mt-4">
          {successMessage}
        </p>
      )}

      <div className="mt-6">
        <p className="text-violet-light text-center">Or login with:</p>
        <div className="flex justify-center mt-4">
          <GoogleLogin
            onSuccess={(response) => {
              console.log("Google Login Success:", response);
              // Aquí puedes manejar el inicio de sesión exitoso
            }}
            onError={() => console.log("Failed ti login with Google")}
          />
        </div>
      </div>
    </div>
  );
}
