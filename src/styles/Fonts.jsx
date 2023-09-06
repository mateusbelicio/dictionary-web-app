import { css } from 'styled-components';

import LoraBoldItalicWOFF2 from '../fonts/Lora-BoldItalic.woff2';
import LoraBoldItalicWOFF from '../fonts/Lora-BoldItalic.woff';
import LoraBoldItalicTTF from '../fonts/Lora-BoldItalic.ttf';

import LoraBoldWOFF2 from '../fonts/Lora-Bold.woff2';
import LoraBoldWOFF from '../fonts/Lora-Bold.woff';
import LoraBoldTTF from '../fonts/Lora-Bold.ttf';

import LoraRegularWOFF2 from '../fonts/Lora-Regular.woff2';
import LoraRegularWOFF from '../fonts/Lora-Regular.woff';
import LoraRegularTTF from '../fonts/Lora-Regular.ttf';

import InterRegularWOFF2 from '../fonts/Inter-Regular.woff2';
import InterRegularWOFF from '../fonts/Inter-Regular.woff';
import InterRegularTTF from '../fonts/Inter-Regular.ttf';

import InterBoldWOFF2 from '../fonts/Inter-Bold.woff2';
import InterBoldWOFF from '../fonts/Inter-Bold.woff';
import InterBoldTTF from '../fonts/Inter-Bold.ttf';

import InterBoldItalicWOFF2 from '../fonts/Inter-BoldItalic.woff2';
import InterBoldItalicWOFF from '../fonts/Inter-BoldItalic.woff';
import InterBoldItalicTTF from '../fonts/Inter-BoldItalic.ttf';

import InconsolataRegularWOFF2 from '../fonts/Inconsolata-Regular.woff2';
import InconsolataRegularWOFF from '../fonts/Inconsolata-Regular.woff';
import InconsolataRegularTTF from '../fonts/Inconsolata-Regular.ttf';

import InconsolataBoldWOFF2 from '../fonts/Inconsolata-Bold.woff2';
import InconsolataBoldWOFF from '../fonts/Inconsolata-Bold.woff';
import InconsolataBoldTTF from '../fonts/Inconsolata-Bold.ttf';

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
