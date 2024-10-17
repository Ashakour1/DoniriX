import React from "react";

const RecipientStatus = ({ recipient }) => {
  return (
    <div>
      {recipient.status === "pending" ? (
        <span className="text-white bg-blue-300 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Registered" ? (
        <span className="text-yellow-500 bg-yellow-100 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Eligible" ? (
        <span className="text-blue-500 bg-blue-100 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Ineligible" ? (
        <span className="text-red-500 bg-red-100 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Appointment Set" ? (
        <span className="text-blue-600 bg-blue-200 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Donation_completed" ? (
        <span className="text-green-600 bg-green-200 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Post_donation_followup" ? (
        <span className="text-orange-500 bg-orange-100 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Withdrawn" ? (
        <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : recipient.status === "Completed" ? (
        <span className="text-green-500 bg-green-100 px-2 py-1 rounded">
          {recipient.status}
        </span>
      ) : null}
    </div>
  );
};

export default RecipientStatus;
