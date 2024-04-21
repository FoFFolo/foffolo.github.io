/** @type {import('tailwindcss').Config} */
const surnameAnimDuration = .8;

const nameAnimDuration = .8;
const nameAnimDelay = surnameAnimDuration - .4;

const firstAnimDuration = 1;
// const firstAnimDelay = greaterAnimDelay + .4;
const firstAnimDelay = surnameAnimDuration + nameAnimDuration - nameAnimDelay + .2;

const greaterAnim = .1;
const greaterAnimDelay = firstAnimDelay - .2;

const secondAnimDuration = .8;
const secondAnimDelay = firstAnimDelay + firstAnimDuration;

export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        developer: "#F7DD72",
        programmer: "#00F0B5",
        'ability-card': "gold",
        projectcard: "#DDFFD9",
        description: "#8338EC",
        backToTop: "#FE938C"
      },
      width: {
        '100vh-mx3-m2': "calc(100vw - (theme('spacing.3')*2) - 16px)",
        '100vh-mx5-m2': "calc(100vw - (theme('spacing.5')*2) - 16px)",
        '100vh-mx7-m2': "calc(100vw - (theme('spacing.7')*2) - 16px)",
        '100vh-mx8-m2': "calc(100vw - (theme('spacing.8')*2) - 16px)",
      },
      backgroundImage: {
        'titlescreen-bg': "url('../assets/title_bg.png')",
      },
      fontSize: {
        ts_nav_clamp: "clamp(1em, 4vw, 1.3em)",
        fn_clamp: "clamp(2em, 7vw, 3.5em)",
        dsc_clamp: "clamp(1em, 4vw, 1.3em)",
      },
      boxShadow: {
        'inset-abilities': 'inset 0 0 10px #424242',
        abilitycard_sh: '0 5px 10px #000c',
        projectcard_sh: '#0006 0 2px 4px, #0000004d 0 7px 13px -3px, #0003 0 -3px inset'
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink_caret: {
          '0%, 99%': { borderRight: '.1em solid black' },
          '100%': { borderRight: 'transparent' },
        },
        textAppears: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        btnAppears: {
          'from': { bottom: '-4rem' },
          'to': { bottom: '10px' }
        },
        btnDisappears: {
          'from': { bottom: '10px' },
          'to': { bottom: '-4rem' }
        }
      },
      animation: {
        typing: `typing ${surnameAnimDuration}s steps(9, end) forwards`,
        blink_caret: `blink_caret ${nameAnimDuration}s step-end forwards`,
        'surname-anim': `textAppears ${surnameAnimDuration}s forwards`,
        'name-anim': `textAppears ${nameAnimDuration}s ${nameAnimDelay}s forwards`,
        // name_anim: `typing ${nameAnimDuration}s steps(8, end) ${nameAnimDuration}s forwards, 
        //             blink_caret ${nameAnimDuration}s step-end ${nameAnimDuration}s forwards`,
        // name_anim: `typing ${nameAnimDuration}s steps(8, end) ${nameAnimDuration}s forwards, 
        //             blink_caret ${nameAnimDuration}s step-end ${nameAnimDuration}s forwards`,
        // first_anim: `textAppears ${firstAnimDuration}s ${descriptionDelay}s forwards`,
        'greater-anim': `textAppears ${greaterAnim}s ${firstAnimDelay}s forwards`,
        'first-anim': `typing ${firstAnimDuration}s steps(13, end) ${firstAnimDelay}s forwards,
                       blink_caret ${firstAnimDuration}s step-end ${firstAnimDelay}s forwards`,
        'second-anim': `typing ${secondAnimDuration}s steps(10, end) ${secondAnimDelay}s forwards,
                       blink_caret ${secondAnimDuration}s step-end ${secondAnimDelay}s forwards`,
        // second_anim: `textAppears ${firstAnimDuration}s ${secondAnimDelay}s forwards`,
        // third_anim: `textAppears ${thirdAnimDuration}s ${thirdAnimDelay}s forwards`,
        btn_appears: 'btnAppears .2s forwards',
        btn_disappears: 'btnDisappears .2s forwards',
      },
      transition: {
        'carousel-anim': 'all 0.3s ease',
      }
    },
    fontFamily: {
      righteous: ['Righteous', 'sans-serif'],
      kodemono: ['Kode Mono', 'monospace'],
    },
  },
  plugins: [],
}

