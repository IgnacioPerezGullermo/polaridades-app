import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import theme from '../styles/theme';

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <CSSReset/>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
