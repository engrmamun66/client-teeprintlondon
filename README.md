# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies in production and development:

```bash

# npm
npm install


```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Nuxt cache clean
```bash
npx nuxi clean
```


# add the following variable in .env

To set theme  change  the value:
THEME=default




# add custom.config.js file in root directory

``` 
==============================
How to convert to mobile app 
https://capacitorjs.com/docs/getting-started
==============================
 ```
# npx nuxt generate
# npm i @capacitor/core
# npm i -D @capacitor/cli
# npx cap init [note: we can ignore if available '~/capacitor/config.json']
# npm i @capacitor/android @capacitor/ios
# npx cap add android
# npx cap add ios
# npx cap sync android
# npx cap open android

``` 
==================================
How to build for dev and production
Look at link (https://nuxt.com/docs/api/commands/generate)  to learn commads
==================================
 ```
# npm run generate
# npm run generate-dev
# npm run generate-prod
`` =======OR========
# npx nuxt generate --dotenv .env.dev
# npx nuxt generate --dotenv .env.prod

``` 
====================================================================================
How delect browsers and devices in vue file ( e.g. v-if="$device.isMobileOrTablet" )
====================================================================================
 ```
# $device.isDesktop
# $device.isMobile
# $device.isTablet
# $device.isMobileOrTablet
# $device.isDesktopOrTablet
# $device.isIos
# $device.isWindows
# $device.isMacOS
# $device.isApple
# $device.isAndroid
# $device.isFirefox
# $device.isEdge
# $device.isChrome
# $device.isSafari
# $device.isSamsung
# $device.isCrawler

``` 
====================================================================================================================
How To create an EventBus (https://dev.to/israelortuno/event-bus-pattern-in-nuxt-3-with-full-typescript-support-1okp)
====================================================================================================================
 ```

