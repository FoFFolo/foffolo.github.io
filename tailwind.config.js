/** @type {import('tailwindcss').Config} */
const surnameAnimDuration = .8;
const nameAnimDelay = surnameAnimDuration - .1;
const nameAnimDuration = .8;
const descriptionDelay = surnameAnimDuration + nameAnimDuration

const firstAnimDuration = .7;
const secondAnimDelay = descriptionDelay + firstAnimDuration + .2;
const thirdAnimDelay = secondAnimDelay + .2;
const thirdAnimDuration = .3;

export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#202225',
        developer: "#F7DD72",
        programmer: "#00F0B5"
      },
      backgroundImage: {
        'titlescreen-bg': "url('../assets/title_bg.png')",
      },
      fontSize: {
        ts_nav_clamp: "clamp(1em, 4vw, 1.3em)",
        fn_clamp: "clamp(2em, 7vw, 3.5em)",
        dsc_clamp: "clamp(1em, 4vw, 1.3em)",
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
        }
      },
      animation: {
        typing: `typing ${surnameAnimDuration}s steps(9, end) forwards`,
        blink_caret: `blink_caret ${nameAnimDuration}s step-end forwards`,
        surname_anim: `typing ${surnameAnimDuration}s steps(9, end) forwards, 
                      blink_caret ${nameAnimDuration}s step-end forwards`,
        name_anim: `typing ${nameAnimDuration}s steps(8, end) ${nameAnimDuration}s forwards, 
                    blink_caret ${nameAnimDuration}s step-end ${nameAnimDuration}s forwards`,
        first_anim: `textAppears ${firstAnimDuration}s ${descriptionDelay}s forwards`,
        second_anim: `textAppears ${firstAnimDuration}s ${secondAnimDelay}s forwards`,
        third_anim: `textAppears ${thirdAnimDuration}s ${thirdAnimDelay}s forwards`,
      },
    },
    fontFamily: {
      righteous: ['Righteous', 'sans-serif'],
      kodemono: ['Kode Mono', 'monospace'],
    },
  },
  plugins: [],
}

