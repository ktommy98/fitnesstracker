import React, { useEffect } from "react";
import InputField from "./InputField";

function GeneralDetails({data,disabled}) {
  console.log('general details')
  console.log(disabled)
  console.log('from input field')
  return (
    <>
      <InputField
        classes={"col-5"}
        type={"text"}
        id={"userName"}
        placeholder={"userName"}
        label={"UserName"}
        value={data.userName}
        disable={disabled}
        onChangeF={(e) => {
          console.log(e);
        }}
      />
      <InputField
        classes={"col-5 offset-1"}
        type={"email"}
        id={"email"}
        placeholder={"email"}
        label={"Email"}
        value={data.email}
        disable={disabled}
        onChangeF={(e) => {
          console.log(e);
        }}
      />
    </>
  );
}

export default GeneralDetails;
