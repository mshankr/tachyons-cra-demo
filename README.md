This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start the app:
```
npm i
npm start
```

It uses [tachyons](https://tachyons.io/), a functional CSS helper. It is an amazing CSS standardiser. I did not have to write any CSS, except for moving animations. I followed Material UI's guidelines for [animation speed / styling](https://material.io/design/motion/speed.html#easing).

#### Inspired by:
[Material UI's Mini Variant App Drawer](https://material-ui.com/components/drawers/#mini-variant-drawer)

But I did not want to use Material UI because the package is heavy and the app drawer seems hard to configure.

The gallery of music artists is a [vinyl gallery component](https://tachyons.io/components/collections/vinyl/index.html) provided by tachyons. I can't seem to get it nicely next to the app drawer. So I just threw it below the app drawer, if you scroll down you'll see it LOL.


Reflections
-------------------

I realised there's a problem with state management that I have not considered. I would like to use Redux to solve the global state management problem. The learning curve is steep.

### Update
I realised it's just a matter of figuring out the app url routing (react-router-dom)!

And in future if I need a global state, I will see React Context API first.
