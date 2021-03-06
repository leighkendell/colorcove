import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import Theme from "../web/src/components/theme";
import Fonts from "../web/src/components/fonts";
import { withInfo } from "@storybook/addon-info";

// automatically import all files ending in *.stories.js
const req = require.context("../web/src/stories", true, /\.stories\.[jt]sx?$/);
function loadStories() {
  // addDecorator(withInfo);
  // addDecorator(centered);
  addDecorator(story => (
    <>
      <Fonts />
      <Theme>{story()}</Theme>
    </>
  ));
  // addParameters({
  //   info: {
  //     header: false,
  //   },
  // })
  req.keys().forEach(filename => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console
// errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses
// to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};

configure(loadStories, module);
