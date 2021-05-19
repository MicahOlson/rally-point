import React from 'react'
import styled from 'styled-components'

const SideBarWrapper = styled.section`
  color: #DAD7CD;
  background-color: #32566E;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  height: 1500px;
  h2 {
    font-size: 28px;
    margin-left: 24px;
  }
  li {
    list-style-type: none;
    font-size: 24px;
    margin-bottom: 24px;
  }
`

function SideBar() {
  return (
    <React.Fragment>
      <SideBarWrapper>
        <h2>Resources</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </SideBarWrapper>
    </React.Fragment>
  );
}

export default SideBar
