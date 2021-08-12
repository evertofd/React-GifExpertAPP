import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue(" ");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="shadow-lg p-3 mb-5 bg-white rounded"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </Container>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
