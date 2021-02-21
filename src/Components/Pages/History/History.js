import React, { useState } from "react";
import { Header } from "../../utils/Header/Header";
import "./History.css";

export const History = () => {
  const [details, setDetails] = useState([
    {
      vaccine_name: "Manjot",
      manufacturing_date: "19012001",
      expiry_date: "19012020",
      MRP: "20000",
      product_id: "1234567890",
    },
    {
      vaccine_name: "Manjot",
      manufacturing_date: "19012001",
      expiry_date: "19012020",
      MRP: "20000",
      product_id: "1234567890",
    },
    {
      vaccine_name: "Manjot",
      manufacturing_date: "19012001",
      expiry_date: "19012020",
      MRP: "20000",
      product_id: "1234567890",
    },
    {
      vaccine_name: "Manjot",
      manufacturing_date: "19012001",
      expiry_date: "19012020",
      MRP: "20000",
      product_id: "1234567890",
    },
  ]);
  return (
    <>
      <Header />
      <div className="history">
        <h1>My History</h1>
        {window.location.pathname.includes("manufacturer") && (
          <div className="history__manufacturer">
            <div>
              <h3>S No.</h3>
              {details.map((detail, index) => {
                return <p style={{ textAlign: "center" }}>{index + 1}</p>;
              })}
            </div>
            <div>
              <h3>Vaccine Name</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>{detail.vaccine_name}</p>
                );
              })}
            </div>
            <div>
              <h3>Manufacturing Date</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>
                    {detail.manufacturing_date}
                  </p>
                );
              })}
            </div>
            <div>
              <h3>Expiry Date</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>{detail.expiry_date}</p>
                );
              })}
            </div>
            <div>
              <h3>MRP</h3>
              {details.map((detail, index) => {
                return <p style={{ textAlign: "center" }}>{detail.MRP}</p>;
              })}
            </div>
            <div>
              <h3>Product ID</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>{detail.product_id}</p>
                );
              })}
            </div>
          </div>
        )}
        {window.location.pathname.includes("hospital") && (
          <div className="history__hospital">
            <div>
              <h3>S No.</h3>
              {details.map((detail, index) => {
                return <p style={{ textAlign: "center" }}>{index + 1}</p>;
              })}
            </div>
            <div>
              <h3>Vaccine Name</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>{detail.vaccine_name}</p>
                );
              })}
            </div>
            <div>
              <h3>Manufacturing Date</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>
                    {detail.manufacturing_date}
                  </p>
                );
              })}
            </div>
            <div>
              <h3>Expiry Date</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>{detail.expiry_date}</p>
                );
              })}
            </div>
            <div>
              <h3>MRP</h3>
              {details.map((detail, index) => {
                return <p style={{ textAlign: "center" }}>{detail.MRP}</p>;
              })}
            </div>
            <div>
              <h3>Product ID</h3>
              {details.map((detail, index) => {
                return (
                  <p style={{ textAlign: "center" }}>{detail.product_id}</p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
