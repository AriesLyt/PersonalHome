import react from '@vitejs/plugin-react'
import { resolve } from "path"

export function setViteconfig() {
    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@':resolve(__dirname, '../src'),
                'views':resolve(__dirname, '../src/views'),
                'comp':resolve(__dirname, '../src/components'),
                'assets':resolve(__dirname, '../src/assets')
            }
        }
    }
}