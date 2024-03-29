import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  *,
  *::before,
  *::after {
	  box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }

  /* Forms */

  /**
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  Remove the inheritance of text transform in Edge and Firefox.
  1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
  Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
  Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
  */

  legend {
    padding: 0;
  }

  /**
  Add the correct vertical alignment in Chrome and Firefox.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  Correct the cursor style of increment and decrement buttons in Safari.
  */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  1. Correct the odd appearance in Chrome and Safari.
  2. Correct the outline style in Safari.
  */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  Remove the inner padding in Chrome and Safari on macOS.
  */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Typography */
  /**
  GRT Typeface setting: Roboto @ 14px
  Source: https://grtcalculator.com/
   */ 
  body {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    line-height: 34px;  
  }
  h1 {
    font-size: 37px;
    line-height: 61px;
    margin-bottom: 28px;  
  }
  h2 {
    font-size: 29px;
    line-height: 50px;
    margin-top: 55px;
    margin-bottom: 21px;
    }
  h3 {
    font-size: 23px;
    line-height: 41px;
    margin-top: 34px;
    margin-bottom: 13px;
    }
  h4 {
    font-size: 18px;
    line-height: 34px;
    font-weight: bold;
    margin-bottom: 8px;
    }
`

export { GlobalStyle }