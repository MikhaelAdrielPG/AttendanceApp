"use client";

import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const validatePassword = (password: string, passwordConf: string) => {
    let isValid = true;
    let errorsCopy = { ...errors };

    if (password !== passwordConf) {
      isValid = false;
      errorsCopy.passwordConf = "Passwords do not match";
    }

    if (!/(?=.*\d)(?=.*[A-Z]).{8,}/.test(password)) {
      isValid = false;
      errorsCopy.password =
        "Password must be 8 characters long with at least one digit and uppercase letter";
    }

    setErrors(errorsCopy);
    return isValid;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const { password, passwordConf } = formData;

    if (validatePassword(password, passwordConf)) {
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto max-w-md">
      <h1 className="text-white text-3xl mb-4">Welcome</h1>
      <form
        className="mt-6 w-full max-w-xs md:max-w-md xl:max-w-lg"
        onSubmit={handleRegister}
      >
        <div className="mb-2">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-2 relative">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-2">{errors.password}</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="passwordConf" className="text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            id="passwordconf"
            name="passwordconf"
            value={formData.passwordConf}
            onChange={(e) =>
              setFormData({ ...formData, passwordConf: e.target.value })
            }
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-md focus:outline-none focus:ring"
            required
          />
          {errors.passwordConf && (
            <span className="text-red-500 text-sm mt-2">
              {errors.passwordConf}
            </span>
          )}
        </div>
        <div className="mt-auto">
          <input type="checkbox" className="h-3 w-3" required />
          <label htmlFor="acceptTerms" className="ml-2 text-sm text-white">
            I accept the terms and conditions
          </label>
          <button className="w-full px-4 py-2 mt-5 text-white bg-gray-700 rounded-md hover:bg-gray-600">
            Register
          </button>
        </div>
        <div className="flex justify-center mt-5 text-sm">
          <span className="me-1">Already have an account?</span>
          <a
            href="/auth/login"
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}
