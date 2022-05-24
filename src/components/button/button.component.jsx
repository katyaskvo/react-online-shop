import './button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    blue: 'blue',
    inverted: 'inverted'
};

const Button = ({children, buttonType, ...properties}) => {
    
    return (
        <button 
            className={`button-container ${buttonType}`}
            {...properties}
        >
            {children}
        </button>
    )
}

export default Button;