import React from 'react'
import styled from 'styled-components'

const SideBarWrapper = styled.section`
  color: #DAD7CD;
  background-color: #32566E;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  height: 1500px;
  text-align: center;
  h2 {
    font-size: 28px;
  }
  p {
    font-size: 22px;
    margin-bottom: 28px;
  }
  .zoom {
    transition: transform .2s;
    height: 48px;
    margin: 0 auto;
  }
  .zoom:hover {
    transform: scale(1.5);
  }
`

function SideBar() {
  return (
    <React.Fragment>
      <SideBarWrapper>
        <h2>Resources</h2>
          <p className="zoom">Document 1</p>
          <p className="zoom">Document 2</p>
          <p className="zoom">Document 3</p>
          <p className="zoom">Document 4</p>
          <p className="zoom">Document 5</p>
      </SideBarWrapper>
    </React.Fragment>
  );
}

export default SideBar
