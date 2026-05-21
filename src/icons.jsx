/* global React */
const { useState, useEffect, useRef, useCallback } = React;

const MIcon = ({ name, size = 24, style = {}, className = '', weight = 300 }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontSize: size,
      fontVariationSettings: `'wght' ${weight}, 'FILL' 0, 'GRAD' 0, 'opsz' 24`,
      ...style,
    }}
  >{name}</span>
);

const IconWhatsApp = ({ size = 18 }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_168_399)">
    <path d="M6.62845 20.2835L6.99129 20.4986C8.51592 21.4034 10.2639 21.8819 12.0464 21.8828H12.0503C17.5246 21.8828 21.98 17.4284 21.9821 11.9538C21.983 9.30054 20.9509 6.80601 19.0757 4.92912C17.2004 3.05257 14.7071 2.0184 12.0538 2.0173C6.5754 2.0173 2.11997 6.471 2.1179 11.9457C2.11718 13.8217 2.64198 15.6488 3.63633 17.2295L3.87267 17.6052L2.86909 21.2691L6.62845 20.2835ZM0.000244141 24.1072L1.69548 17.9171C0.649838 16.1055 0.0997553 14.0504 0.100616 11.9451C0.103165 5.35857 5.46332 0 12.0505 0C15.2469 0.00137779 18.2471 1.24538 20.5033 3.50338C22.7592 5.76133 24.0011 8.76274 24.0001 11.9547C23.9973 18.5409 18.636 23.9005 12.0505 23.9005H12.0454C10.0456 23.8998 8.08049 23.3982 6.33518 22.4463L0.000244141 24.1072Z" fill="white" />
    <path d="M0.51234 11.9516C0.511616 13.9839 1.04262 15.9679 2.0523 17.717L0.415619 23.6928L6.53094 22.0893C8.21584 23.0075 10.1129 23.4922 12.0435 23.4928H12.0485C18.4063 23.4928 23.5813 18.3192 23.584 11.9607C23.5852 8.87924 22.3864 5.98213 20.2083 3.80212C18.0305 1.62242 15.1342 0.421369 12.0479 0.419922C5.68979 0.419922 0.515095 5.5928 0.51234 11.9516Z" fill="url(#paint0_linear_168_399)" />
    <path d="M0.100372 11.9474C0.099649 14.0527 0.649732 16.108 1.69537 17.9195L0 24.1092L6.33473 22.4482C8.08015 23.4 10.0451 23.9017 12.045 23.9025H12.0501C18.6356 23.9025 23.9969 18.5429 23.9997 11.9567C24.0008 8.76453 22.7588 5.76318 20.5028 3.50533C18.2466 1.24748 15.2466 0.00333092 12.0501 0.00195312C5.46322 0.00195312 0.102927 5.36052 0.100171 11.947M3.87256 17.6074L3.63609 17.2318C2.64174 15.6509 2.11694 13.8238 2.11767 11.9479C2.11984 6.47364 6.57516 2.01959 12.0536 2.01959C14.7066 2.02062 17.2 3.0549 19.0755 4.93141C20.9508 6.80806 21.9827 9.3028 21.982 11.9557C21.9796 17.4304 17.5241 21.8848 12.0498 21.8848H12.046C10.2635 21.8837 8.51537 21.4053 6.99084 20.5006L6.628 20.2855L2.8687 21.2711L3.87256 17.6074Z" fill="url(#paint1_linear_168_399)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.06359 6.95354C8.83989 6.45629 8.60451 6.44634 8.39175 6.43759C8.21762 6.43019 8.01847 6.43067 7.81955 6.43067C7.62039 6.43067 7.29692 6.5054 7.02339 6.80419C6.74962 7.10299 5.97827 7.82527 5.97827 9.29423C5.97827 10.7633 7.04833 12.1828 7.19741 12.3822C7.34675 12.5813 9.26303 15.6923 12.2976 16.889C14.8199 17.8836 15.3332 17.6858 15.8806 17.6359C16.428 17.5862 17.6472 16.9139 17.8959 16.2167C18.1447 15.5195 18.1447 14.922 18.0701 14.7972C17.9955 14.6727 17.7964 14.598 17.4978 14.4488C17.1991 14.2994 15.7312 13.5771 15.4576 13.4774C15.1838 13.3779 14.9848 13.3282 14.7856 13.6271C14.5866 13.9257 14.0147 14.598 13.8405 14.7972C13.6664 14.9967 13.4921 15.0216 13.1935 14.8723C12.8949 14.7224 11.9332 14.4075 10.7924 13.3904C9.90479 12.599 9.30559 11.6217 9.13134 11.3227C8.95721 11.0242 9.11275 10.8624 9.26245 10.7136C9.3966 10.5798 9.56113 10.365 9.71047 10.1907C9.85945 10.0163 9.90915 9.8919 10.0087 9.69274C10.1083 9.49345 10.0585 9.31908 9.98388 9.16973C9.90915 9.02039 9.32909 7.54396 9.06359 6.95354Z" fill="#475569" />
  </g>

  <defs>
    <linearGradient id="paint0_linear_168_399" x1="11.9999" y1="23.6904" x2="11.9999" y2="0.417476" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0F172A" />
      <stop offset="1" stopColor="#0F172A" />
    </linearGradient>

    <linearGradient id="paint1_linear_168_399" x1="12" y1="24.1099" x2="12" y2="0.00267732" gradientUnits="userSpaceOnUse">
      <stop stopColor="#475569" />
      <stop offset="1" stopColor="#475569" />
    </linearGradient>

    <clipPath id="clip0_168_399">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
  /*<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 3.4 3.4l-4.7.8z"/>
    <path d="M8.5 9.2c.1-.6.4-.8.7-.8h.5c.2 0 .4.1.6.6l.7 1.8c.1.2.1.4 0 .6l-.3.5c-.1.1-.2.3 0 .6.2.3.7 1.2 1.6 2 1 .9 1.9 1.2 2.2 1.4.2.1.4.1.5 0l.6-.7c.1-.2.3-.2.5-.1.2.1 1.4.7 1.7.8.2.1.4.2.4.3.1.1.1.6-.1 1.2-.2.6-1.1 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.2-1.5-.5-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.1.3-.2.5-.3.7-.3h.3z" fill="currentColor" stroke="none"/>
  </svg>*/
);

const IconTelegram = ({ size = 18 }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_168_396)">
    <path d="M12.005 24.01C18.6352 24.01 24.01 18.6352 24.01 12.005C24.01 5.37482 18.6352 0 12.005 0C5.37482 0 0 5.37482 0 12.005C0 18.6352 5.37482 24.01 12.005 24.01Z" fill="#475569" />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.42773 11.8749C8.92627 10.3555 11.2553 9.34591 12.4248 8.85611C15.7534 7.46669 16.4531 7.22679 16.9029 7.2168C17.0029 7.2168 17.2228 7.23679 17.3728 7.35674C17.4927 7.4567 17.5227 7.58664 17.5427 7.6866C17.5627 7.78656 17.5827 7.99647 17.5627 8.15641C17.3827 10.0556 16.6031 14.6637 16.2032 16.7828C16.0333 17.6824 15.7034 17.9823 15.3836 18.0123C14.6839 18.0723 14.1541 17.5525 13.4844 17.1127C12.4248 16.423 11.8351 15.9931 10.8055 15.3134C9.61598 14.5337 10.3857 14.1039 11.0654 13.4042C11.2453 13.2243 14.314 10.4255 14.374 10.1756C14.384 10.1456 14.384 10.0256 14.314 9.96565C14.2441 9.90568 14.1441 9.92567 14.0641 9.94566C13.9542 9.96565 12.2749 11.0852 9.00624 13.2943C8.52644 13.6241 8.09662 13.7841 7.70678 13.7741C7.27696 13.7641 6.4573 13.5342 5.83756 13.3342C5.08787 13.0943 4.48812 12.9644 4.5381 12.5446C4.56809 12.3247 4.86796 12.1048 5.42773 11.8749Z"
      fill="#0F172A"
    />
  </g>

  <defs>
    <clipPath id="clip0_168_396">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
  /*<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M7.8 12.4l8.3-3.4c.4-.2.8.1.7.5l-1.4 6.8c-.1.4-.5.6-.9.3l-2.3-1.7-1.1 1.1c-.2.2-.5.1-.5-.1l-.1-2.3 4.2-3.8c.2-.2 0-.3-.2-.2l-5.2 3.3-2.2-.7c-.4-.1-.4-.6 0-.8z" fill="currentColor" stroke="none"/>
  </svg>*/
);

const IconMax = ({ size = 18 }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_168_410)">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2578 23.9315C9.90253 23.9315 8.80799 23.5862 6.90543 22.2048C5.70199 23.7588 1.89113 24.9733 1.72492 22.8955C1.72492 21.3358 1.38108 20.0178 0.991393 18.5789C0.527223 16.8062 0 14.832 0 11.9715C0 5.13969 5.58166 0 12.1948 0C18.8137 0 23.9999 5.39294 23.9999 12.0348C24.0221 18.574 18.7687 23.8966 12.2578 23.9315ZM12.3553 5.90517C9.13465 5.73827 6.62461 7.97718 6.06875 11.4881C5.6103 14.3946 6.42405 17.9342 7.11745 18.1184C7.44983 18.199 8.28651 17.5198 8.80799 16.9961C9.6703 17.5944 10.6745 17.9537 11.7192 18.0378C15.0563 18.1991 17.9077 15.6475 18.1317 12.2996C18.2622 8.94459 15.6928 6.10294 12.3553 5.91094V5.90517Z"
      fill="#475569"
    />
  </g>

  <defs>
    <clipPath id="clip0_168_410">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
  /*<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 15.5V8.5l4 4 4-4v7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>*/
);

const IconArrow = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const IconChevronDown = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const IconChevronLeft = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const IconChevronRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6"/>
  </svg>
);

const IconClose = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </svg>
);

const IconMenu = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </svg>
);

Object.assign(window, {
  MIcon, IconWhatsApp, IconTelegram, IconMax,
  IconArrow, IconChevronDown, IconChevronLeft, IconChevronRight,
  IconClose, IconMenu,
});
