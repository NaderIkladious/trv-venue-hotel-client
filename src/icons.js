import React from 'react';

export const ICONS = {
  FREE_WIFI: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <path
          {...props}
          d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
        />
      );
    }
  },
  FREE_PARKING: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <path {...props} d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      );
    }
  },
  PETS: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <g {...props}>
          <circle cx="4.5" cy="9.5" r="2.5" />
          <circle cx="9" cy="5.5" r="2.5" />
          <circle cx="15" cy="5.5" r="2.5" />
          <circle cx="19.5" cy="9.5" r="2.5" />
          <path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </g>
      );
    }
  },
  RESTAURANT: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <path
          {...props}
          d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"
        />
      );
    }
  },
  SPA: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <g {...props}>
          <path
            fill="none"
            d="M0 0h24v24H0V0zm13.97 21.49c-.63.23-1.29.4-1.97.51.68-.12 1.33-.29 1.97-.51zM12 22c-.68-.12-1.33-.29-1.97-.51.64.22 1.29.39 1.97.51z"
          />
          <path
            fill="#607D8B"
            d="M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z"
          />
          <path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z" />
        </g>
      );
    }
  },
  GYM: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <path
          {...props}
          d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"
        />
      );
    }
  },
  POOL: {
    viewbox: '0 0 24 24',
    path(props) {
      return (
        <g {...props}>
          <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z" />
          <circle cx="16.5" cy="5.5" r="2.5" />
          <path fill="none" d="M0 0h24v24H0z" />
        </g>
      );
    }
  },
  CIRCLE: {
    viewbox: '0 0 473.66 473.66',
    path(props) {
      return (
        <g id="Layer_2" data-name="Layer 2" {...props}>
          <g id="Layer_1-2" data-name="Layer 1">
            <circle cx="236.83" cy="236.83" r="236.83" />
            <path d="M205.8,122H137.47a11.33,11.33,0,0,0-11.3,11.14q0,34.16,0,68.33c0,14.49,22.44,14.61,22.44.16q0-20.67,0-41.33L197,208.75c10.22,10.22,26-5.7,15.79-16l-48.32-48.32h41.15C220.13,144.49,220.26,122,205.8,122Z" />
            <path d="M323.06,261.75q0,20.67,0,41.32l-48.41-48.41c-10.22-10.22-26,5.7-15.79,16l48.32,48.32H266c-14.49,0-14.61,22.45-.16,22.45h68.33a11.34,11.34,0,0,0,11.3-11.14q0-34.16,0-68.32C345.51,247.43,323.06,247.3,323.06,261.75Z" />
            <path d="M265.88,144.49H307.2l-48.41,48.4c-10.22,10.22,5.7,26,16,15.79l48.32-48.32q0,20.57,0,41.15c0,14.49,22.45,14.61,22.45.16q0-34.16,0-68.33A11.33,11.33,0,0,0,334.37,122H266C251.56,122.05,251.43,144.49,265.88,144.49Z" />
            <path d="M205.8,318.93H164.48l48.4-48.4c10.22-10.22-5.7-26-16-15.79l-48.32,48.32V261.91c0-14.49-22.44-14.61-22.44-.16v68.33a11.33,11.33,0,0,0,11.14,11.3h68.33C220.13,341.37,220.26,318.93,205.8,318.93Z" />
          </g>
        </g>
      );
    }
  }
};