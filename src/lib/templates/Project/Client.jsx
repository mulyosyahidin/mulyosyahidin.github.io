import React, { useEffect, useState } from "react";

function Client(props) {
  const { client, roles, startDate, endDate } = props;

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  const formatRoles = (roles) => {
    if (roles.length === 1) {
      return roles[0];
    } else if (roles.length == 2) {
      return `${roles[0]} and ${roles[1]}`;
    } else {
      return `${roles[roles.length - 1]}, ${roles[roles.length - 2]}, and ${
        roles[roles.length - 3]
      }`;
    }
  };

  return (
    <p>
      Working at {client} as {formatRoles(roles)} from {formatDate(startDate)}{" "}
      to {formatDate(endDate)}.
    </p>
  );
}

export default Client;
