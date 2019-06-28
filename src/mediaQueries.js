import { css } from "styled-components";

export const queries = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1000px)",
  desktop: "(min-width: 1001px)"
};

const media = {
  mobile: (...args) => css`
    @media ${queries.mobile} {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media ${queries.tablet} {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media ${queries.desktop} {
      ${css(...args)};
    }
  `
};

export default {
  ...media
};
