// import { useEffect, useState } from 'react';
// import './style.css';

// export default function ControlFont() {
//   const [font, setFont] = useState({ name: 'Sans Serif', type: 'sans' });

//   const toggleFont = function () {
//     const fontSelected = document.querySelector('.control-font__input:checked + label');
//     window.localStorage.setItem('font', fontSelected.htmlFor);

//     setFont({
//       name: fontSelected.textContent,
//       type: fontSelected.htmlFor,
//     });
//   };

//   useEffect(() => {
//     const prefersFont = window.localStorage.getItem('font');

//     if (prefersFont) {
//       setFont({
//         name: { sans: 'Sans Serif', serif: 'Serif', mono: 'Mono' }[prefersFont],
//         type: prefersFont,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     document.querySelector('html').dataset.font = font.type;
//     document.querySelector('.control-font__button').checked = false;
//   }, [font]);

//   return (
//     <div className='control-font'>
//       <input className='control-font__button' type='checkbox' name='font-button' id='font-button' />
//       <label htmlFor='font-button'>{font.name}</label>

//       <ul className='control-font__list'>
//         <li className='control-font__item'>
//           <input
//             id='sans'
//             type='radio'
//             name='font'
//             className='control-font__input'
//             onClick={toggleFont}
//           />
//           <label htmlFor='sans' className='control-font__label'>
//             Sans Serif
//           </label>
//         </li>
//         <li className='control-font__item'>
//           <input
//             id='serif'
//             type='radio'
//             name='font'
//             className='control-font__input'
//             onClick={toggleFont}
//           />
//           <label htmlFor='serif' className='control-font__label'>
//             Serif
//           </label>
//         </li>
//         <li className='control-font__item'>
//           <input
//             id='mono'
//             type='radio'
//             name='font'
//             className='control-font__input'
//             onClick={toggleFont}
//           />
//           <label htmlFor='mono' className='control-font__label'>
//             Mono
//           </label>
//         </li>
//       </ul>
//     </div>
//   );
// }
