import styled from 'styled-components';

const Placeholdable = styled.div`
  width: ${({ placeholder, width }) => (placeholder && width) || 'unset'};
  min-height: ${({ placeholder, minHeight }) => (placeholder && minHeight) || 'unset'};
  color: ${({ placeholder }) => (placeholder ? 'lightgray' : 'none')};;
  background-color: ${({ placeholder }) => (placeholder ? 'lightgray' : 'none')};
  border-radius: 5px;
`;

export default Placeholdable;
