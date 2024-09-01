export const CustomButton = ({children, textOnly, className, ...props}) => {
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;

    return (
        <>
            <button className={cssClasses} {...props}>  {/* Use lowercase 'button' */}
                {children}
            </button>
        </>
    )
}
