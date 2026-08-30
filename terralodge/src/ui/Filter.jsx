import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";
const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
function Filter({filterField,Options}){
 const [searchParams,setSearchParams]=useSearchParams();
const currentFilter=searchParams.get(filterField)||Options[0].value;

  function handleClick(value){
    // use a copy of current searchParams to avoid mutating the original object
    const newParams=new URLSearchParams(searchParams);
    newParams.set(filterField,value);
    setSearchParams(newParams);
  }
  return (
    <StyledFilter>
      {Options.map(option=>
      <FilterButton  key={option.value}  active={option.value===currentFilter?"active":""} onClick={()=>handleClick(option.value)}>{option.label}</FilterButton>
      // <FilterButton onClick={()=>handleClick("no-discount")}>No discount</FilterButton>
      // <FilterButton onClick={()=>handleClick("with-discount")}>With discount</FilterButton>
)}
    </StyledFilter>
  )
}
export default Filter;
