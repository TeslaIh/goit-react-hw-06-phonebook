import React from "react";
import PropTypes from "prop-types";
import { Label } from "./Filter.styled";

const Filter = ({ changeFilter, filter }) => (
  <Label>
    Find contacts by Name
    <input onChange={changeFilter} type="text" name="filter" value={filter} />
  </Label>
);

export default Filter;

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};