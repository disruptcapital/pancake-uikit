import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig, LangType } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        cakePriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bYEvPH cNGsRF"
      >
        <nav
          class="sc-kLgntA jnPcoJ"
        >
          <div
            class="sc-gsTCUz dwpdGQ"
          >
            <button
              aria-label="Toggle menu"
              class="sc-hKgILt cKEpBT sc-eCssSg bnCIUu"
              type="button"
            >
              <svg
                class="sc-dlfnbm jqIkeH"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="Wifeswap home page"
              class="sc-jSgupP jRnhKc"
              href="/"
            >
              <svg
                class="sc-dlfnbm jqIkeH mobile-icon"
                color="text"
                viewBox="0 0 32 32"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <lineargradient
                    gradientUnits="userSpaceOnUse"
                    id="lollipop-gradient-mobile-"
                    x1="14.74"
                    x2="27.47"
                    y1="12.65"
                    y2="12.65"
                  >
                    <stop
                      offset="0"
                      stop-color="#CC2774"
                    />
                    <stop
                      offset="0.11"
                      stop-color="#cd2d78"
                    />
                    <stop
                      offset="0.25"
                      stop-color="#d13d82"
                    />
                    <stop
                      offset="0.4"
                      stop-color="#d75792"
                    />
                    <stop
                      offset="0.56"
                      stop-color="#e07ba9"
                    />
                    <stop
                      offset="0.73"
                      stop-color="#eba9c7"
                    />
                    <stop
                      offset="0.91"
                      stop-color="#f8e0eb"
                    />
                    <stop
                      offset="1"
                      stop-color="#FFFFFF"
                    />
                  </lineargradient>
                </defs>
                <path
                  d="M2.26,17a15.5,15.5,0,1,1,15.5,15.5,16,16,0,0,1-9-2.9A15.71,15.71,0,0,1,2.26,17Z"
                  fill="#a8d9c1"
                  stroke="#231F20"
                  stroke-miterlimit="10"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M23.11,27.07a16.53,16.53,0,0,0,5.46-5.72A17.42,17.42,0,0,0,29.82,8.1a14.47,14.47,0,0,1,2.12,4,15.34,15.34,0,0,1-1.12,12.31A14.88,14.88,0,0,1,23.18,31a15.13,15.13,0,0,1-7.87.77A15.29,15.29,0,0,1,9,29.15C10.52,29.51,17.07,30.91,23.11,27.07Z"
                  fill="#27CC7f"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M8.57,26.49a1.07,1.07,0,0,0,.77-.32L16,19.39l.09.09a.68.68,0,0,0,.46.19h.15a.66.66,0,0,0,.47-.43l.17-.49a7,7,0,0,0,3.75,1.09h.38a7,7,0,0,0,4.61-2.09,7.26,7.26,0,0,0,0-10.14,7,7,0,0,0-10,0,7.28,7.28,0,0,0-1,8.87l-.49.18a.63.63,0,0,0-.41.48.65.65,0,0,0,.17.61l.09.1L7.8,24.61a1.14,1.14,0,0,0,0,1.56A1.07,1.07,0,0,0,8.57,26.49Z"
                  fill="#231F20"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M16.6,8.09a6.29,6.29,0,0,1,9,0,6.54,6.54,0,0,1,0,9.15,6.31,6.31,0,0,1-4.08,1.88L21.25,19c-2.86-1.3-5.16-4.77-4-7.49a3.92,3.92,0,0,1,5.33-2.22,3.45,3.45,0,0,1,1.7,4.51,2.61,2.61,0,0,1-1.46,1.4,2.53,2.53,0,0,1-2,0,2.09,2.09,0,0,1-1-2.72,1.61,1.61,0,0,1,.86-.84,1.54,1.54,0,0,1,1.19,0,1.2,1.2,0,0,1,.6,1.57.86.86,0,0,1-1.15.45A.63.63,0,0,1,21,13.3a.64.64,0,0,1,0-.49.35.35,0,1,0-.63-.29,1.36,1.36,0,0,0,0,1,1.32,1.32,0,0,0,.69.74,1.56,1.56,0,0,0,2.06-.8,1.9,1.9,0,0,0-.95-2.5,2.16,2.16,0,0,0-1.71-.05,2.26,2.26,0,0,0-1.25,1.2,2.79,2.79,0,0,0,1.38,3.65,3.27,3.27,0,0,0,2.53.07A3.34,3.34,0,0,0,25,14.08,4.14,4.14,0,0,0,22.9,8.65a4.58,4.58,0,0,0-6.24,2.57c-1.19,2.71.6,6,3.18,7.78a6.25,6.25,0,0,1-3.24-1.76A6.56,6.56,0,0,1,16.6,8.09Z"
                  fill="url(#lollipop-gradient-mobile-)"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M15.53,17.05a6.3,6.3,0,0,0,.58.68,7.56,7.56,0,0,0,.67.6l-.22.61-1.64-1.66Z"
                  fill="#27CC7f"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M8.29,25.1,15,18.32l.56.57L8.85,25.67a.39.39,0,0,1-.56,0,.4.4,0,0,1-.12-.28A.45.45,0,0,1,8.29,25.1Z"
                  fill="#27CC7f"
                  transform="translate(-1.76 -1)"
                />
              </svg>
              <svg
                class="sc-dlfnbm jqIkeH desktop-icon"
                color="text"
                viewBox="0 0 148.92 32"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <lineargradient
                    gradientUnits="userSpaceOnUse"
                    id="lollipop-gradient"
                    x1="14.74"
                    x2="27.47"
                    y1="12.65"
                    y2="12.65"
                  >
                    <stop
                      offset="0"
                      stop-color="#CC2774"
                    />
                    <stop
                      offset="0.11"
                      stop-color="#cd2d78"
                    />
                    <stop
                      offset="0.25"
                      stop-color="#d13d82"
                    />
                    <stop
                      offset="0.4"
                      stop-color="#d75792"
                    />
                    <stop
                      offset="0.56"
                      stop-color="#e07ba9"
                    />
                    <stop
                      offset="0.73"
                      stop-color="#eba9c7"
                    />
                    <stop
                      offset="0.91"
                      stop-color="#f8e0eb"
                    />
                    <stop
                      offset="1"
                      stop-color="#FFFFFF"
                    />
                  </lineargradient>
                </defs>
                <path
                  d="M2.26,17a15.5,15.5,0,1,1,15.5,15.5,16,16,0,0,1-9-2.9A15.71,15.71,0,0,1,2.26,17Z"
                  fill="#a8d9c1"
                  stroke="#231F20"
                  stroke-miterlimit="10"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M23.11,27.07a16.53,16.53,0,0,0,5.46-5.72A17.42,17.42,0,0,0,29.82,8.1a14.47,14.47,0,0,1,2.12,4,15.34,15.34,0,0,1-1.12,12.31A14.88,14.88,0,0,1,23.18,31a15.13,15.13,0,0,1-7.87.77A15.29,15.29,0,0,1,9,29.15C10.52,29.51,17.07,30.91,23.11,27.07Z"
                  fill="#27CC7f"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M8.57,26.49a1.07,1.07,0,0,0,.77-.32L16,19.39l.09.09a.68.68,0,0,0,.46.19h.15a.66.66,0,0,0,.47-.43l.17-.49a7,7,0,0,0,3.75,1.09h.38a7,7,0,0,0,4.61-2.09,7.26,7.26,0,0,0,0-10.14,7,7,0,0,0-10,0,7.28,7.28,0,0,0-1,8.87l-.49.18a.63.63,0,0,0-.41.48.65.65,0,0,0,.17.61l.09.1L7.8,24.61a1.14,1.14,0,0,0,0,1.56A1.07,1.07,0,0,0,8.57,26.49Z"
                  fill="#231F20"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M16.6,8.09a6.29,6.29,0,0,1,9,0,6.54,6.54,0,0,1,0,9.15,6.31,6.31,0,0,1-4.08,1.88L21.25,19c-2.86-1.3-5.16-4.77-4-7.49a3.92,3.92,0,0,1,5.33-2.22,3.45,3.45,0,0,1,1.7,4.51,2.61,2.61,0,0,1-1.46,1.4,2.53,2.53,0,0,1-2,0,2.09,2.09,0,0,1-1-2.72,1.61,1.61,0,0,1,.86-.84,1.54,1.54,0,0,1,1.19,0,1.2,1.2,0,0,1,.6,1.57.86.86,0,0,1-1.15.45A.63.63,0,0,1,21,13.3a.64.64,0,0,1,0-.49.35.35,0,1,0-.63-.29,1.36,1.36,0,0,0,0,1,1.32,1.32,0,0,0,.69.74,1.56,1.56,0,0,0,2.06-.8,1.9,1.9,0,0,0-.95-2.5,2.16,2.16,0,0,0-1.71-.05,2.26,2.26,0,0,0-1.25,1.2,2.79,2.79,0,0,0,1.38,3.65,3.27,3.27,0,0,0,2.53.07A3.34,3.34,0,0,0,25,14.08,4.14,4.14,0,0,0,22.9,8.65a4.58,4.58,0,0,0-6.24,2.57c-1.19,2.71.6,6,3.18,7.78a6.25,6.25,0,0,1-3.24-1.76A6.56,6.56,0,0,1,16.6,8.09Z"
                  fill="url(#lollipop-gradient)"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M15.53,17.05a6.3,6.3,0,0,0,.58.68,7.56,7.56,0,0,0,.67.6l-.22.61-1.64-1.66Z"
                  fill="#27CC7f"
                  transform="translate(-1.76 -1)"
                />
                <path
                  d="M8.29,25.1,15,18.32l.56.57L8.85,25.67a.39.39,0,0,1-.56,0,.4.4,0,0,1-.12-.28A.45.45,0,0,1,8.29,25.1Z"
                  fill="#27CC7f"
                  transform="translate(-1.76 -1)"
                />
                <text
                  fill="#231F20"
                  font-family="ElenaBasic-Regular, Elena Basic"
                  font-size="24"
                  transform="translate(35.34 22.95) scale(1.11 1)"
                >
                  <tspan>
                    WifeSwap
                  </tspan>
                </text>
              </svg>
            </a>
          </div>
          <div
            class="sc-gsTCUz dwpdGQ"
          >
            <div>
              <button
                class="sc-hKgILt fuzEoT"
                type="button"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-iktFzd dABFdo"
        >
          <div
            class="sc-hHftDr kbPZub"
          >
            <div
              class="sc-jrAGrp gTTHkW"
            >
              <div
                class="sc-iBPRYJ ixBWFQ"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="sc-dlfnbm eyxShN"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC krVPty"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ bhpSte"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm eyxShN"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC krVPty"
                  >
                    Trade
                  </div>
                  <svg
                    class="sc-dlfnbm jqIkeH"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ jDRdjj"
                />
              </div>
              <div
                class="sc-iBPRYJ bhpSte"
                role="button"
              >
                <a
                  href="/farms"
                >
                  <svg
                    class="sc-dlfnbm eyxShN"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC krVPty"
                  >
                    Farms
                  </div>
                </a>
              </div>
              <div
                class="sc-iBPRYJ bhpSte"
                role="button"
              >
                <a
                  href="/pools"
                >
                  <svg
                    class="sc-dlfnbm eyxShN"
                    color="text"
                    viewBox="0 0 100 100"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M76.3,53.4c-1,0-1.9-0.5-2.5-1.3c-1.4-2-3.8-3.3-6.3-3.3c-1.6,0-3.1,0.5-4.4,1.4c-0.2,0.2-0.4,0.3-0.6,0.5
    		c-1,0.9-2.4,1.4-3.7,1.4c-1.4,0-2.7-0.5-3.7-1.4c-1.4-1.2-3.2-1.9-5-1.9s-3.6,0.7-5,1.9c-1,0.9-2.4,1.4-3.7,1.4
    		c-1.4,0-2.7-0.5-3.7-1.4c-1.4-1.2-3.2-1.9-5-1.9c-2.2,0-4.3,1-5.8,2.6c-0.2,0.2-0.3,0.4-0.5,0.6c-0.6,0.8-1.5,1.3-2.5,1.3
    		c-0.6,0-1.2-0.2-1.8-0.6c-0.6-0.4-1.1-1.1-1.2-1.9c-0.1-0.8,0-1.6,0.5-2.3c0.3-0.4,0.6-0.8,0.9-1.1c2.6-3,6.4-4.7,10.4-4.7
    		c1.7,0,3.4,0.3,5,0.9V17.4c0-5.2,4.3-9.5,9.5-9.5s9.5,4.3,9.5,9.5c0,1.1-0.6,2-1.4,2.6h1.7v-2.6c0-5.2,4.3-9.5,9.5-9.5
    		c5.2,0,9.5,4.3,9.5,9.5c0,1.7-1.4,3-3,3c-1.7,0-3-1.4-3-3c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4v26.2
    		c1.5-0.6,3.1-0.8,4.7-0.8c4.5,0,8.7,2.2,11.3,5.8c0.5,0.7,0.6,1.5,0.5,2.3c-0.1,0.8-0.6,1.5-1.3,2C77.5,53.2,76.9,53.4,76.3,53.4z
    		 M55.6,43.9c0.4,0.2,0.8,0.4,1.1,0.6v-0.6H55.6z M43.5,44.4c0.3-0.2,0.6-0.3,0.9-0.4h-0.9V44.4z M56.7,37.8V35H43.5v2.8H56.7z
    		 M56.7,28.9v-2.8H43.5v2.8H56.7z M51.8,20c-0.9-0.5-1.4-1.5-1.4-2.6c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4V20H51.8z"
                      />
                    </g>
                    <g>
                      <path
                        d="M8.5,92.1c-0.3,0-0.5,0-0.8,0c-1.7-0.2-3.2-1-4.2-2.4c-1-1.3-1.5-3-1.3-4.7l6.7-55c0.4-3.2,3.1-5.6,6.3-5.6h21.1
    		c1.7,0,3,1.4,3,3s-1.4,3-3,3H15.2c-0.1,0-0.2,0.1-0.3,0.2l-6.7,55c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1l83,0
    		c0.1,0,0.3-0.1,0.3-0.3l-6.7-55c0-0.1-0.1-0.2-0.3-0.2H63.9c-1.7,0-3-1.4-3-3s1.4-3,3-3h20.9c3.2,0,5.9,2.4,6.3,5.6l6.7,55
    		c0,0.2,0,0.5,0,0.8c0,3.5-2.8,6.3-6.3,6.3H8.5z"
                      />
                    </g>
                     
                  </svg>
                  <div
                    class="sc-gKsewC krVPty"
                  >
                    Pools
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ bhpSte"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm eyxShN"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC krVPty"
                  >
                    Info
                  </div>
                  <svg
                    class="sc-dlfnbm jqIkeH"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ jDRdjj"
                />
              </div>
            </div>
            <div
              class="sc-fFubgz kaEsai"
            >
              <button
                class="sc-hKgILt jGrvuP sc-fodVxV isuojT"
                type="button"
              >
                <svg
                  class="sc-dlfnbm jqIkeH"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="sc-jJEJSO jxRCvt"
          >
            body
          </div>
          <div
            class="sc-bdfBwQ sc-hiSbYr kBaJkf klxusr"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
