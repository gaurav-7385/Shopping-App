import styled from "styled-components";

const Spinner = () => {
  return <Spinner1></Spinner1>;
};

export default Spinner;

const Spinner1 = styled.div`
  width: 56px;
  height: 56px;
  margin: auto;
  margin-top: 150px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #474bff 94%, #0000) top/9px 9px
      no-repeat,
    conic-gradient(#0000 30%, #474bff);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-c7wet2 1s infinite linear;

  @keyframes spinner-c7wet2 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
