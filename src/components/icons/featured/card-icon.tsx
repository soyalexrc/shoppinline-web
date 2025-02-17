const CardIcon = ({
  color = 'currentColor',
  width = '24px',
  height = '24px',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.3125V6.25C1 4.86929 2.11929 3.75 3.5 3.75H5.8125H7.01562M20.25 7.53125V6.25C20.25 4.86929 19.1307 3.75 17.75 3.75H15.4375"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M1 13.375H4.4375C5.57659 13.375 6.5 14.2984 6.5 15.4375V15.4375C6.5 16.5766 5.57659 17.5 4.4375 17.5H1V13.375Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5.125 7.1875L7.07354 1.34189C7.1416 1.13771 7.33266 1 7.54788 1H15.4621C15.7943 1 16.0342 1.31795 15.9429 1.63736L14.75 5.8125L14.0625 7.875"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.4375 23H3.8C2.2536 23 1 21.7464 1 20.2V10.675C1 9.1286 2.2536 7.875 3.8 7.875H20.2C21.7464 7.875 23 9.1286 23 10.675V20.2C23 21.7464 21.7464 23 20.2 23H16.8289H15.0437"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default CardIcon;
