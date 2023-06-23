import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

forwardRef.propTypes = {
    type: PropTypes.oneOf(["text", "password", "email", "file", "number"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variants: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    isFocused: PropTypes.bool,
    isError: PropTypes.bool,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    handleChange: PropTypes.func,
};

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        defaultValue,
        isError,
        variants = "primary",
        placeholder,
        required,
        autoComplete,
        value,
        handleChange,
        name,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e)}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variants} ${className}` + className
            }
            ref={input}
        />
    );
});
