import { Button, ButtonProps } from '@mui/material';
import "./styles.scss";

interface BaseButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const BaseButton = ({ children, ...props }: BaseButtonProps) => {
    return (
        <Button className="base-button" {...props}>
            {children}
        </Button>
    );
};

export default BaseButton;
