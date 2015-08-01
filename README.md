React Composition Demo
======================

(based on [react-hot-boilerplate](http://github.com/gaearon/react-hot-boilerplate) by Dan Abramov)

This slideshow and demo will be/was presented by [Ronald ChanOu](http://twitter.com/ronaldchanou)
at PeopleSpace (Irvine, CA), for the ReactJS OC Meetup group.

### Goals

* Demo webpack build processes for both development and production
* Demo goodness enabled by webpack such as: live-reloading, ES6+ and JSX transpilation with Babel, and asset bundling (CSS, fonts, etc.)
* With ES6, demo various methods of component composition, from simple to advanced
* Demo React v0.14

### Usage

(Note: you may need to use npm 3: `npm install -g npm@3.0-latest`)

After cloning/downloading this repo and navigating to it in the command line:
```
npm install
node dev
```
Then open `http://localhost:3000` in your favorite browser.

Now edit `src/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

To run the production build process:
```
node prod
```

### Using `0.0.0.0` as Host

You may want to change the host in `dev.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* Ping dan_abramov on Twitter or #reactjs IRC
