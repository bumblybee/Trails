import styled from "styled-components";

export const StyledSuccess = styled.div`
  text-align: center;
  padding: 8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 2px 16px rgba(0, 0, 0, 0.2);
  width: 30%;
  margin: 10% auto;
  color: rgba(255, 255, 255, 0.9);
  background: linear-gradient(
      to bottom right,
      rgba(254, 119, 98, 0.2) 5%,
      rgba(52, 66, 59, 0.85) 80%,
      rgba(254, 119, 98, 0.3)
    ),
    url("https://images.unsplash.com/photo-1589064090574-7be967916250?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgzfHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.9);
    padding: 1rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  }
`;
