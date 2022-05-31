import { BaseButton, BlueButton, InvertedButton } from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    blue: 'blue',
    inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.blue]: BlueButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);


const Button = ({children, buttonType, ...properties}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...properties}>
            {children}
        </CustomButton>
    )
}

export default Button;