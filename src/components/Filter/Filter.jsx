import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts-slice';
import { getFilter } from 'redux/contacts-slice';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: #000000;
`;

const Input = styled.input`
  width: 95%;
  margin-top: 5px;
  &:focus {
   outline: 1px solid #00000;
      }
    @media (min-width: 769px){
    width: 80%;
  };
  @media (min-width: 1024px) {
    width: 30%;
  })
`;


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInputHandler = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  // const filterReset = () => {
  //   dispatch(clearFilter());
  // };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={onInputHandler}
        // onBlur={filterReset}
      />
      </Label>
  );
};

export default Filter;
