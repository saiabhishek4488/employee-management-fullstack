import './Mystyle.css';
import styles from './ModuleStyles.module.css';
import styled from 'styled-components';
const Title =styled.h1`

background-color:blue;
color:red;
font-size:30px;
`;

function ReactCss() {
    return(
        <div>
            <Title>SAI ABHISHEK</Title>
            <h1 style={{color:'green',fontSize:'30px'}}>hello abhishek</h1>
            <h1 className="para1">Java full stack </h1>
            <h1 className={styles.para1}>vcube software solutions</h1>
            <Title> Avinash</Title>
        </div>
    );
}
export default ReactCss;