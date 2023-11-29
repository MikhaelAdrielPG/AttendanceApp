"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  arrival: string;
  departure: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-xl font-bold">
            Attendance App
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/about" className="text-white">
              About
            </a>
            {/* Add other navigation links here */}
          </div>
        </div>
      </nav>

      <div className="mt-8 mx-4 md:mx-auto md:max-w-4xl">
        <h1 className="text-4xl font-bold">Daftar Pengguna</h1>
        <div className="overflow-x-auto mt-4">
          <div className="-mx-4 sm:-mx-0">
            <table className="w-full table-auto sm:overflow-hidden border-collapse border border-gray-800">
              <thead className="bg-black-200">
                <tr>
                  <th className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                    Username
                  </th>
                  <th className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                    Email
                  </th>
                  <th className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                    Arrival Time
                  </th>
                  <th className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                    Departure Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                      {user.name}
                    </td>
                    <td className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                      {user.email}
                    </td>
                    <td className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                      {user.arrival}
                    </td>
                    <td className="border border-gray-600 px-4 py-2 sm:w-1/2 md:w-auto lg:w-auto">
                      {user.departure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
