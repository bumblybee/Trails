import styled from "styled-components";
import { Marker } from "@react-google-maps/api";

export const StyledMapMarker = styled(Marker)`
  :hover {
    background: #333;
    color: #333;
    svg path {
      fill: #333;
    }
  }
`;
