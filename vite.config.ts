import { defineConfig } from 'vite'

import { setViteconfig } from "./config/vite.config.js"


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode);
  if(command === 'serve') {
    return setViteconfig()
  }else if(command === 'build') {
    return setViteconfig()
  }
})
