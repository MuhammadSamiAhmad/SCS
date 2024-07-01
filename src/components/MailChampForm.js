import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://saharacloudsolutions.us14.list-manage.com/subscribe/post?u=2e438cf31587ada9ec1bcb98f&amp;id=6d8f994041&amp;f_id=00d628e1f0";

const SimpleForm = ({ onSubmitted }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onSubmitted({
        EMAIL: email,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
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
  );
};

const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="text-center">
        <h4 className="text-xl font-bold mb-4">Our Newsletter</h4>
        <p className="mb-4">
          Discover the latest news and innovations from Sahara Cloud Solutions!
        </p>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed!</div>
        )}
      </div>
    )}
  />
);

export default CustomForm;
