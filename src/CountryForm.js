import React from "react";
import { Form, Input, ColumnForm } from "./styledComponents";

const CountryForm = ({ onEnter }) => (
  <Form>
    <ColumnForm>
      <Input
        data-test="add-country-input"
        type="text"
        placeholder="add country name and hit enter"
        onKeyDown={e => {
          if (e.keyCode === 13) onEnter(e.target.value);
        }}
      />
    </ColumnForm>
  </Form>
);

export default CountryForm;
