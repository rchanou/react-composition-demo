React Composition Demo
======================

(based on [react-hot-boilerplate](http://github.com/gaearon/react-hot-boilerplate) by [Dan Abramov](https://twitter.com/dan_abramov?lang=en))

This slideshow and demo will be/was presented by [Ronald ChanOu](http://twitter.com/ronaldchanou)
at PeopleSpace (Irvine, CA), for the [ReactJS OC Meetup group](http://www.meetup.com/ReactJS-OC). The slideshow is itself a React
component built using the techniques in the talk. Build it, browse to it, and use the left and right arrows to scroll through the slides.

You can also just open **index.html** in the **dist** folder.

### Goals

* Demo webpack build processes for both development and production
* Demo goodness enabled by webpack such as: live-reloading, ES6+ and JSX transpilation with Babel, and asset bundling (CSS, fonts, etc.)
* With ES6, demo various methods of component composition, from simple to advanced
* Demo React v0.14

### Usage

#### Important note

Because I am using React 0.14, you will get peer dependency issues with npm versions less than 3, so unless you know how to solve that yourself (I don't), I recommend installing npm 3:
```
npm install -g npm@3.0-latest
```
On Windows, it may not update PATH correctly (`npm -v` still shows a version less than 3). To fix that:
* Type `where npm` to list all locations for `npm`
* Try `npm -v` in the folder for each one until you get the one with version 3+
* Edit the system variable `PATH` to use this. I highly recommend installing [Rapid Environment Editor](http://www.rapidee.com) and running it as administrator to more easily and safely edit `PATH`. In the editor, right-click "Path", select "Add Value", enter the correct npm 3 path,  make sure it is above any other npm paths, and save. Close and re-open any `cmd` windows for the new `PATH` to take.

(I do apologize for any inconvenience this causes. I tend to live on the edge.)


#### Initialization and build

After cloning/downloading this repo and navigating to it in the command line:
```
npm install
node dev
```
Then open `http://localhost:3000` in your favorite browser.

Now make valid changes in `src/slides/5-basic-composition.js`.
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

To run the production build process:
```
node prod
```

### Using `0.0.0.0` as Host

You may want to change the host in `dev.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Resources

* Look up articles and videos by Dan Abramov on higher-order components and
  hot reloading
* [Cheng Lou](https://github.com/chenglou) uses the "child render function"
  pattern such as in [react-motion](https://github.com/chenglou/react-motion)
* The [react-future](https://github.com/reactjs/react-future) repo also demos some of these patterns
* React maintainer [Sebastian Markbåge](https://twitter.com/sebmarkbage/) also has a lot to say about React composition.
