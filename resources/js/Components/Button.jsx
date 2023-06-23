import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    disabled: PropTypes.bool,
    children: PropTypes.node,
};
export default function Button({
    className = "",
    disabled,
    children,
    variant = "primary",
    type = "submit",
    ...props
}) {
    return (
        <button
            type={type}
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                disabled && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
