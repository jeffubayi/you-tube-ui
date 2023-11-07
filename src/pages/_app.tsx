import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import createEmotionCache from '../../utility/createEmotionCache';
import ThemeOptions from '../styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
}

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsWithLayout) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={ThemeOptions}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
