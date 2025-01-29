const MailIcon: React.FC<React.SVGAttributes<object>> = ({ ...rest }) => {
  return (
    <svg
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M47.6624 52.3463C47.8268 52.5976 47.9401 52.8788 47.9958 53.1739C48.0514 53.469 48.0484 53.7721 47.9869 54.066C47.9254 54.3599 47.8066 54.6388 47.6372 54.8868C47.4679 55.1348 47.2514 55.347 47 55.5112C42.2484 58.6196 36.6926 60.273 31.0146 60.2683H31.001C25.2325 60.2683 19.5927 58.5637 14.7899 55.3687C9.98709 52.1737 6.2355 47.6307 4.00636 42.3103C1.77722 36.99 1.16993 31.1296 2.26077 25.4652C3.35161 19.8008 6.09195 14.5851 10.1376 10.4732C12.8316 7.71942 16.0462 5.52856 19.5943 4.02791C23.1424 2.52726 26.9534 1.74674 30.8058 1.73171H31.001C37.0989 1.727 43.0433 3.64339 47.9902 7.20878C52.9046 10.7074 56.6256 15.6313 58.6497 21.3141C58.7506 21.597 58.7947 21.897 58.7796 22.1969C58.7645 22.4969 58.6905 22.7909 58.5617 23.0622C58.433 23.3336 58.2521 23.5769 58.0293 23.7783C57.8066 23.9797 57.5463 24.1353 57.2634 24.2361C56.9805 24.3369 56.6805 24.3811 56.3806 24.3659C56.0807 24.3508 55.7866 24.2768 55.5153 24.1481C55.244 24.0193 55.0007 23.8384 54.7993 23.6157C54.5978 23.3929 54.4423 23.1326 54.3415 22.8498C52.6301 18.023 49.4691 13.8428 45.2911 10.8811C41.1132 7.91949 36.1222 6.32101 31.001 6.30439H30.8351C24.3084 6.36098 18.0695 8.99905 13.4821 13.642C8.8947 18.2849 6.33186 24.5551 6.35378 31.082C6.3757 37.6089 8.98058 43.8617 13.5991 48.4737C18.2176 53.0858 24.474 55.6819 31.001 55.6946H31.0117C35.8017 55.6993 40.4889 54.305 44.4976 51.6829C44.7489 51.5186 45.0302 51.4054 45.3253 51.3498C45.6204 51.2942 45.9235 51.2973 46.2174 51.3589C46.5114 51.4205 46.7903 51.5394 47.0382 51.7088C47.2861 51.8783 47.4982 52.0949 47.6624 52.3463V52.3463ZM60.2693 33.401C60.2695 35.6484 59.5418 37.8355 58.1951 39.6349C56.8484 41.4342 54.9551 42.7489 52.7987 43.3823C50.6423 44.0157 48.3388 43.9336 46.233 43.1483C44.1272 42.3631 42.3323 40.9169 41.1171 39.0263C39.5146 41.0482 37.3435 42.544 34.8835 43.3211C32.4234 44.0983 29.787 44.1211 27.3138 43.3867C24.8407 42.6523 22.644 41.1943 21.0068 39.2005C19.3695 37.2067 18.3667 34.7684 18.1274 32.1996C17.8881 29.6309 18.4233 27.0493 19.6641 24.7874C20.9049 22.5255 22.7944 20.6868 25.0894 19.5082C27.3843 18.3296 29.9795 17.8651 32.5408 18.1744C35.1021 18.4838 37.5121 19.5528 39.4605 21.2439V20.84C39.4542 20.5358 39.5087 20.2334 39.6208 19.9505C39.7328 19.6676 39.9002 19.4099 40.1132 19.1925C40.3261 18.9751 40.5803 18.8025 40.8608 18.6846C41.1413 18.5667 41.4425 18.5059 41.7468 18.5059C42.0511 18.5059 42.3523 18.5667 42.6329 18.6846C42.9134 18.8025 43.1675 18.9751 43.3805 19.1925C43.5934 19.4099 43.7608 19.6676 43.8729 19.9505C43.985 20.2334 44.0394 20.5358 44.0332 20.84V33.401C44.053 34.9343 44.676 36.3981 45.7674 37.4754C46.8587 38.5527 48.3304 39.1568 49.8639 39.1568C51.3974 39.1568 52.8691 38.5527 53.9604 37.4754C55.0518 36.3981 55.6748 34.9343 55.6946 33.401C55.6883 33.0968 55.7428 32.7943 55.8549 32.5114C55.967 32.2286 56.1344 31.9709 56.3473 31.7535C56.5602 31.5361 56.8144 31.3634 57.0949 31.2455C57.3755 31.1276 57.6767 31.0669 57.981 31.0669C58.2853 31.0669 58.5865 31.1276 58.867 31.2455C59.1475 31.3634 59.4017 31.5361 59.6146 31.7535C59.8275 31.9709 59.9949 32.2286 60.107 32.5114C60.2191 32.7943 60.2736 33.0968 60.2673 33.401H60.2693ZM39.3463 31C39.3463 29.3492 38.8568 27.7355 37.9397 26.3629C37.0225 24.9903 35.7189 23.9206 34.1938 23.2889C32.6686 22.6572 30.9904 22.492 29.3713 22.8141C27.7523 23.1362 26.2651 23.9312 25.0979 25.0986C23.9307 26.2659 23.1358 27.7532 22.8139 29.3723C22.492 30.9914 22.6574 32.6696 23.2893 34.1947C23.9211 35.7198 24.991 37.0232 26.3637 37.9402C27.7364 38.8572 29.3502 39.3465 31.001 39.3463C33.2137 39.3438 35.335 38.4636 36.8995 36.8988C38.4641 35.3341 39.344 33.2127 39.3463 31Z"
        fill="#8C969F"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default MailIcon;
