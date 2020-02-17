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

-----------------------------

I started this experiment wanting to code my own components. I realised there's no easy fix solution... App drawer is successful and has been a good exercise of knowing my CSS widths and options. Even for MUI app drawer they also use the state and seems complicated code. Currently my app drawer can't suppress the y-scrolling. And the display structure breaks on some components, some width problem I have yet investigate properly. A lot of trial and error.

Yet if you used someone else's code, you'd be less inclined to modify it, even if you don't like the looks. And debugging would be a heck of pain.

Do I really want to HTML code out all my components? Maybe. But changing the UI styling, would be going through the HTML code line-by-line.

If you want a central styling place, welcome to the 1000 lines CSS code. I guess the best answer is to have strict CSS rules in place (e.g. BEM) so people don't name rubbish confusing CSS rules.
