import cn from 'classnames';
const AccountIcon = ({
  className = '',
  color = 'currentColor',
  width = '23',
  height = '23',
}) => {
  return (
    <svg
      className={cn(className)}
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8548 21.3333C21.6915 19.3654 20.0317 17.734 18.0398 16.6004C16.0478 15.4669 13.7928 14.8706 11.4979 14.8706C9.20304 14.8706 6.94798 15.4669 4.95601 16.6004C2.96405 17.734 1.30427 19.3654 0.141025 21.3333C-0.00138538 21.5885 -0.0376415 21.889 0.0400248 22.1705C0.0766559 22.3139 0.143667 22.4478 0.236568 22.5633C0.329469 22.6789 0.446115 22.7733 0.578691 22.8403C0.74972 22.9368 0.943214 22.9868 1.1398 22.9854C1.33475 22.9937 1.52817 22.9479 1.69855 22.8533C1.86893 22.7587 2.0096 22.619 2.10491 22.4496C3.06783 20.8197 4.44211 19.4683 6.09163 18.5294C7.74115 17.5905 9.60864 17.0965 11.5091 17.0965C13.4096 17.0965 15.2771 17.5905 16.9266 18.5294C18.5761 19.4683 19.9504 20.8197 20.9133 22.4496C21.0632 22.703 21.3076 22.8874 21.5934 22.9627C21.8792 23.0379 22.1832 22.998 22.4396 22.8515C22.5672 22.7838 22.6791 22.6902 22.768 22.5767C22.8569 22.4633 22.9209 22.3325 22.9558 22.1928C22.9973 22.0501 23.0098 21.9005 22.9924 21.7529C22.9751 21.6053 22.9283 21.4626 22.8548 21.3333Z"
        fill={color}
      />
      <path
        d="M11.5001 13.8C13.3084 13.8003 15.0445 13.0842 16.3349 11.8057C17.6254 10.5272 18.3669 8.78854 18.4001 6.96384C18.4001 5.11691 17.6731 3.34563 16.3791 2.03966C15.0851 0.733688 13.3301 0 11.5001 0C9.6701 0 7.91506 0.733688 6.62106 2.03966C5.32706 3.34563 4.6001 5.11691 4.6001 6.96384C4.63325 8.78854 5.37482 10.5272 6.66525 11.8057C7.95567 13.0842 9.69181 13.8003 11.5001 13.8ZM6.9001 6.96384C6.9001 5.73255 7.38474 4.5517 8.24741 3.68105C9.11007 2.8104 10.2801 2.32128 11.5001 2.32128C12.7201 2.32128 13.8901 2.8104 14.7528 3.68105C15.6155 4.5517 16.1001 5.73255 16.1001 6.96384C16.1001 8.19512 15.6155 9.37597 14.7528 10.2466C13.8901 11.1173 12.7201 11.6064 11.5001 11.6064C10.2801 11.6064 9.11007 11.1173 8.24741 10.2466C7.38474 9.37597 6.9001 8.19512 6.9001 6.96384Z"
        fill={color}
      />
    </svg>
  );
};

export default AccountIcon;
