import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { ref, push } from "firebase/database"; 

const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      setStatus("sending");

      try {
        await push(ref(db, "subscribers"), {
          email: email,
          subscribedAt: new Date().toISOString(),
        });
        setStatus("success");
        setEmail("");
        setTimeout(() => {
          setStatus("");
        }, 3000); // Clear the success message after 3 seconds
      } catch (error) {
        console.error("Error saving email to Firebase:", error);
        setStatus("error");
        setErrorMessage("error occurred, please try again.");
        setTimeout(() => {
          setStatus("");
          setErrorMessage("");
        }, 3000); // Clear the error message after 3 seconds
      }
    } else {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => {
        setStatus("");
        setErrorMessage("");
      }, 3000); // Clear the error message after 3 seconds
    }
  };

  return (
    <div className="text-center">
      <h4 className="text-xl font-bold mb-4">Our Newsletter</h4>
      <p className="mb-4">
        Discover the latest news and innovations from Sahara Cloud Solutions!
      </p>
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-l w-64 text-gray-950 h-10"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white hover:text-gray-800 px-6 py-2 rounded-r hover:bg-blue-600 transition-colors duration-300 border-blue-500 h-10"
        >
          Subscribe
        </button>
      </form>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div style={{ color: "red" }}>{errorMessage}</div>
      )}
      {status === "success" && (
        <div style={{ color: "green" }}>Subscribed successfully!</div>
      )}
    </div>
  );
};

export default SimpleForm;
