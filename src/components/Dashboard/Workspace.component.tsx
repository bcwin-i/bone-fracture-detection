import React from "react";
import styled from "styled-components";
import { FlexSeperate, Link } from "../../styles/index.style";
import { Link as NavLink, useLocation } from "react-router-dom";

const Workspace = () => {
  const routes = [
    { to: "/", name: "All groups" },
    { to: "/train", name: "Train" },
    { to: "/value", name: "Value" },
    { to: "/test", name: "Test" },
  ];

  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <Container>
      <FlexSeperate style={{ alignItems: "flex-end" }}>
        <Title>Bone-fracture-detection</Title>
        <PageSize>
          <span style={{ fontWeight: 600 }}>54</span> of{" "}
          <span style={{ fontWeight: 600 }}>100</span> images
        </PageSize>
      </FlexSeperate>
      <div style={{ display: "flex" }}>
        {routes.map((data, index) => (
          <RouterLink
            to={data.to}
            style={{
              color: currentRoute === data.to ? "#FFD75C" : "black",
              backgroundColor:
                currentRoute === data.to ? "#fffbef" : "transparent",
                borderBottomColor: currentRoute === data.to ? "#FFD75C" : '#d1d1d6',
            }}
            key={index}
          >
            {data.name}
          </RouterLink>
        ))}
        <span style={{ flex: 1, borderBottom: "1px solid #d1d1d6" }} />
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', flex: 1}}>

      </div>
      <div >
            
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
  color: #041d32;
`;

const PageSize = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

const RouterLink = styled(NavLink)`
  padding: 5px 12px;
  border: 0px 0px 1px 0px;
  gap: 10px;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  border-bottom: 1px solid #d1d1d6;
  color: black;

  &:hover {
    text-decoration: none;
    color: black;
    border-bottom-color: #ffd75c;
    background-color: #fffbef;
  }
`;

export default Workspace;
