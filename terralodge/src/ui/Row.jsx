import styled,{css} from "styled-components";
const Row=styled.div`
display:flex;
width:100%;
${
    (props)=>
    props.type==="horizontal"&&css`
justify-content: space-between;
align-items: center; 
/* gap:1.6rem; */
    `}
    ${(props)=>
            props.type==="vertical"&&css`
            flex-direction: column;
            gap:1.6rem;
                justify-content: space-between;
                align-items: center;
            `
    }
        
    `
// For default props we can use the defaultProps
Row.defaultProps={
    type:"vertical"
}
    export default Row;
