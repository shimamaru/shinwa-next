import React from "react";
import { Marker } from "@react-google-maps/api";
import styled from "styled-components";

const StyledMarker = styled(Marker)`
  color: red;
  font-size: 16px;
`;

const CustomMarker = ({ position }) => {
  return <StyledMarker position={position} />;
};

export default CustomMarker;
