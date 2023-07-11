# Modal dialog component for React.JS

## Installation

To install, you can use [npm](https://npmjs.org/) :

    $ npm install --save @soeunlee/reactjs-modal

## Features

- Provides a straightforward implementation of a modal interface, featuring a dark background, a body section, and a footer that includes a close button.
- Enhance the customization of the modal by assigning classnames to the modal content, button, and individual containers, allowing for personalized styling and layout adjustments.
- Seamlessly integrate with widely adopted CSS frameworks such as Tailwind and Bootstrap to leverage their extensive styling capabilities and streamline the development process.

![스크린샷 2023-07-11 17 41 30](https://github.com/soun1005/reactjs-modal/assets/79379473/ca6677e4-b162-451b-8801-2a99f1af9117)

## Mandatory props

| Name         | Type              | Description                                                                         |
| ------------ | ----------------- | ----------------------------------------------------------------------------------- |
| onClose      | MouseEventHandler | A function to handle the close event of the modal when the close button is clicked. |
| setModalOpen | boolean           | A boolean value indicating whether the modal should be open or closed.              |
| children     | React.ReactNode   | The content or components that will be displayed inside the modal.                  |
| btnLabel     | string            | A string representing the label or text content of the close button.                |

## Optional props for customization

| Name            | Type              | Description                                                                                         |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| backgroundClass | string (optional) | A string representing additional CSS class names for the background element of the modal.           |
| containerClass  | string (optional) | A string representing additional CSS class names for the container element of the modal.            |
| bodyClass       | string (optional) | A string representing additional CSS class names for the body element of the modal.                 |
| footerClass     | string (optional) | A string representing additional CSS class names for the footer element of the modal.               |
| btnClass        | string (optional) | A string representing additional CSS class names for the close button of the modal.                 |
| btnLabelClass   | string (optional) | A string representing additional CSS class names for the label or text content of the close button. |

## Basic examples

Here is a simple example of react-modal being used in an app with some custom classnames to style the modal

```jsx
import React, { useState } from 'react';
import { Modal } from '@soeunlee/reactjs-modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState < boolean > false;

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Click to open Modal</button>
      <Modal
        onClose={() => setIsModalOpen(false)}
        setModalOpen={isModalOpen}
        children={
          <div>
            <h1>Modal is opened!</h1>
          </div>
        }
        btnLabel="close"
      />
    </>
  );
}

export default App;
```

<!-- ## Demos -->
