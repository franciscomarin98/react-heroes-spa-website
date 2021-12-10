interface AlertProps {
    className: string;
    msg: string;
}


export const Alert = ({className, msg}: AlertProps) => {
    return (
        <div className={`alert alert-${className} animate__animated animate__fadeIn`}>
            {msg}
        </div>
    );
};
