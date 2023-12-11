import './MyButton.css';

export const MyButton = () => {
    const showText = () => {
        const wrapper = document.getElementById('wrapper');
        const text = document.createElement('p');
        text.textContent = 'I am just a button with no functionality';
        wrapper.appendChild(text);
        text.classList.add('text');
    };
    return (
        <button className={'button'} onClick={showText}>Component button</button>
    )
};

export default MyButton;