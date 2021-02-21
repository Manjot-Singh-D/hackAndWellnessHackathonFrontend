import axios from "axios";
import React, { useState } from "react";
import { Header } from "../../utils/Header/Header";
import { Record_Block } from "../../utils/Record_Block/Record_Block";
import "./Create_Record.css";
import { useAuth } from "../../../Context/Context";

export const Create_Record = () => {
  const { currentUser } = useAuth();
  const [records, setRecords] = useState([]);

  const submitRecord = async (record) => {
    console.log("CurrentUser : ", currentUser);
    setRecords([...records, record]);
    await axios
      .post("/manufacturer/create_record", {
        uid: currentUser.uid,
        record: record,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="create_record">
        <h1>CREATE NEW RECORD</h1>
        <div className="create_record_content">
          {records.map((record) => {
            return <Record_Block type="show" detail={record} />;
          })}
          <Record_Block type="add" submit={submitRecord} />
        </div>
      </div>
    </>
  );
};
