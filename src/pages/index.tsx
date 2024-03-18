import styled from "styled-components";
import { useEffect, useRef } from "react";
import anime from "animejs";

// import ExpandImg from "@/assets/images/symbols/expand.svg";

const LogoAnimation = () => {
  const svgEl = useRef<SVGSVGElement>(null);

  useEffect(() => {
    anime({
      targets: svgEl.current?.children,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2500,
      delay: function (_, i) {
        return i * 500;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <>
      <ResponsiveSvg
        ref={svgEl}
        viewBox="0 0 411 334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90.8184 260.834C90.8184 275.711 102.053 287.963 116.137 287.963C179.453 287.963 230.773 232.577 230.773 164.725C230.773 149.849 219.539 137.596 205.455 137.596C191.371 137.596 180.137 149.849 180.137 164.725C180.137 202.862 151.321 233.705 116.137 233.705C102.053 233.705 90.8184 245.958 90.8184 260.834Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M230.863 164.706V164.705L230.774 28.6088V28.6085C230.761 13.739 219.533 1.5 205.455 1.5L205.437 1.5L205.436 1.5C191.353 1.51372 180.125 13.7721 180.137 28.6492C180.137 28.6493 180.137 28.6494 180.137 28.6495L180.159 62.5481C161.873 49.2652 139.837 41.4941 116.137 41.4941C52.8207 41.4876 1.5 96.8801 1.5 164.725V305.371C1.5 320.248 12.7346 332.5 26.8183 332.5C40.902 332.5 52.1365 320.248 52.1365 305.371V164.725C52.1365 126.588 80.9524 95.7457 116.137 95.7457C151.321 95.7457 180.137 126.588 180.137 164.725C180.137 165.626 180.179 166.519 180.257 167.396C181.583 234.021 232.38 287.963 294.863 287.963C357.369 287.963 409.5 232.584 409.5 164.725C409.5 96.8736 358.179 41.4877 294.863 41.4877C280.779 41.4877 269.545 53.74 269.545 68.6167C269.545 83.4933 280.779 95.7457 294.863 95.7457C330.048 95.7457 358.863 126.588 358.863 164.725C358.863 202.862 330.048 233.705 294.863 233.705C259.679 233.705 230.863 202.863 230.863 164.706Z"
          stroke="white"
          stroke-width="3"
        />
      </ResponsiveSvg>
    </>
  );
};

const ResponsiveSvg = styled.svg`
  width: 411px;
  height: 334px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Index = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <LogoAnimation />
        </LogoWrapper>

        {/* <DownArrow src={ExpandImg} alt="화살표" /> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000000;
`;

const LogoWrapper = styled.div`
  position: relative;
`;

// const DownArrow = styled.img`
//   position: absolute;

//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
// `;

export default Index;
