import { css } from 'styled-components';

import LoraBoldItalicWOFF2 from '../assets/fonts/Lora-BoldItalic.woff2';
import LoraBoldItalicWOFF from '../assets/fonts/Lora-BoldItalic.woff';
import LoraBoldItalicTTF from '../assets/fonts/Lora-BoldItalic.ttf';

import LoraBoldWOFF2 from '../assets/fonts/Lora-Bold.woff2';
import LoraBoldWOFF from '../assets/fonts/Lora-Bold.woff';
import LoraBoldTTF from '../assets/fonts/Lora-Bold.ttf';

import LoraRegularWOFF2 from '../assets/fonts/Lora-Regular.woff2';
import LoraRegularWOFF from '../assets/fonts/Lora-Regular.woff';
import LoraRegularTTF from '../assets/fonts/Lora-Regular.ttf';

import InterRegularWOFF2 from '../assets/fonts/Inter-Regular.woff2';
import InterRegularWOFF from '../assets/fonts/Inter-Regular.woff';
import InterRegularTTF from '../assets/fonts/Inter-Regular.ttf';

import InterBoldWOFF2 from '../assets/fonts/Inter-Bold.woff2';
import InterBoldWOFF from '../assets/fonts/Inter-Bold.woff';
import InterBoldTTF from '../assets/fonts/Inter-Bold.ttf';

import InterBoldItalicWOFF2 from '../assets/fonts/Inter-BoldItalic.woff2';
import InterBoldItalicWOFF from '../assets/fonts/Inter-BoldItalic.woff';
import InterBoldItalicTTF from '../assets/fonts/Inter-BoldItalic.ttf';

import InconsolataRegularWOFF2 from '../assets/fonts/Inconsolata-Regular.woff2';
import InconsolataRegularWOFF from '../assets/fonts/Inconsolata-Regular.woff';
import InconsolataRegularTTF from '../assets/fonts/Inconsolata-Regular.ttf';

import InconsolataBoldWOFF2 from '../assets/fonts/Inconsolata-Bold.woff2';
import InconsolataBoldWOFF from '../assets/fonts/Inconsolata-Bold.woff';
import InconsolataBoldTTF from '../assets/fonts/Inconsolata-Bold.ttf';

const fontDeclarations = css`
  @font-face {
    font-family: 'Lora';
    src: url(${LoraBoldItalicWOFF2}) format('woff2'), url(${LoraBoldItalicWOFF}) format('woff'),
      url(${LoraBoldItalicTTF}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraBoldWOFF2}) format('woff2'), url(${LoraBoldWOFF}) format('woff'),
      url(${LoraBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${LoraRegularWOFF2}) format('woff2'), url(${LoraRegularWOFF}) format('woff'),
      url(${LoraRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularWOFF2}) format('woff2'), url(${InterRegularWOFF}) format('woff'),
      url(${InterRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBoldWOFF2}) format('woff2'), url(${InterBoldWOFF}) format('woff'),
      url(${InterBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBoldItalicWOFF2}) format('woff2'), url(${InterBoldItalicWOFF}) format('woff'),
      url(${InterBoldItalicTTF}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataRegularWOFF2}) format('woff2'),
      url(${InconsolataRegularWOFF}) format('woff'),
      url(${InconsolataRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url(${InconsolataBoldWOFF2}) format('woff2'), url(${InconsolataBoldWOFF}) format('woff'),
      url(${InconsolataBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;

export default fontDeclarations;
