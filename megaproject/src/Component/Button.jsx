// This is a reusable Button component in React.
// It allows customization of button styles and behavior through props.
// The component uses default values for props like `type`, `bgColor`, `textColor`, and `className`.
// The `...props` spread operator ensures that any additional attributes (e.g., onClick, disabled) can be passed to the button element.
// The `children` prop is used to render the content inside the button.

import React from "react";
function Button({
        children,
        type="button",
        bgColor="bg-blur-600",
        textColor = "text-white",
        className= "",
        ...prompt
            }){
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button