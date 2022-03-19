import * as React from "react";

export const TitleLogo = ({
  width = "269",
  height = "37",
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 269 37"
    // fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M9.49613 29.808L0.904125 3.312L3.16013 3.456L5.36813 3.312C5.52813 3.792 5.76813 4.624 6.08813 5.808C6.31213 6.672 6.55213 7.536 6.80813 8.4L9.64013 18.144L13.6721 30.816H14.1041C14.7121 29.024 15.8801 25.648 17.6081 20.688C19.5281 15.088 20.7121 11.632 21.1601 10.32C22.3441 6.736 23.0961 4.4 23.4161 3.312L24.8081 3.456L26.1521 3.312L35.2721 30.816H35.7041C36.3441 29.184 36.9841 27.36 37.6241 25.344L43.2401 7.248L44.3921 3.312L46.0721 3.456L47.7521 3.312C46.8561 5.392 46.0561 7.44 45.3521 9.456L36.1841 36.144L34.6001 36L33.0161 36.144L24.3281 9.216H23.9441L14.6321 36.144L13.0481 36L11.4161 36.144L9.49613 29.808ZM68.1521 20.976V32.112C68.1521 32.592 68.1521 33.056 68.1521 33.504C68.2481 34.176 68.6801 34.512 69.4481 34.512C69.8641 34.512 70.3281 34.448 70.8401 34.32V35.376C70.6801 35.44 70.4401 35.536 70.1201 35.664C69.8321 35.76 69.4961 35.84 69.1121 35.904C68.7601 35.968 68.3281 36 67.8161 36C66.8881 36 66.1201 35.776 65.5121 35.328C64.9361 34.88 64.5841 34.128 64.4561 33.072L64.0241 33.504C62.0081 35.52 59.6401 36.528 56.9201 36.528C55.1601 36.528 53.6561 35.984 52.4081 34.896C51.1601 33.808 50.5361 32.4 50.5361 30.672C50.5361 28.24 51.4481 26.496 53.2721 25.44C54.3921 24.8 56.4401 24.24 59.4161 23.76C61.4961 23.408 62.8081 23.088 63.3521 22.8C64.1201 22.384 64.5041 21.632 64.5041 20.544C64.5041 18.752 64.0081 17.376 63.0161 16.416C62.0561 15.424 60.6801 14.928 58.8881 14.928C57.3521 14.928 56.0081 15.344 54.8561 16.176C53.9601 16.816 53.4001 17.504 53.1761 18.24H52.6481V15.552C53.8961 14.688 55.1441 14.032 56.3921 13.584C57.6721 13.136 59.0001 12.912 60.3761 12.912C65.5601 12.912 68.1521 15.6 68.1521 20.976ZM64.3121 31.2V24.192L62.6321 24.528C59.8481 25.072 58.0881 25.504 57.3521 25.824C55.4321 26.688 54.4721 28.08 54.4721 30C54.4721 31.472 54.8881 32.592 55.7201 33.36C56.5521 34.128 57.7041 34.512 59.1761 34.512C59.7841 34.512 60.4561 34.336 61.1921 33.984C61.9281 33.6 62.5361 33.168 63.0161 32.688C63.2721 32.464 63.5441 32.208 63.8321 31.92C64.1521 31.6 64.3121 31.36 64.3121 31.2ZM75.3521 31.488H75.7361C76.3441 32.512 77.1441 33.36 78.1361 34.032C79.1281 34.704 80.1681 35.04 81.2561 35.04C82.4721 35.04 83.5601 34.624 84.5201 33.792C85.4801 32.96 85.9601 31.92 85.9601 30.672C85.9601 28.688 84.0721 27.152 80.2961 26.064C76.5201 24.976 74.6321 22.96 74.6321 20.016C74.6321 17.776 75.3681 16.032 76.8401 14.784C78.3121 13.536 80.1841 12.912 82.4561 12.912C83.5761 12.912 84.6321 13.056 85.6241 13.344C86.6481 13.6 87.4001 13.872 87.8801 14.16C87.4001 15.248 87.0161 16.384 86.7281 17.568H86.2961C85.9761 16.736 85.4321 16 84.6641 15.36C83.8961 14.72 83.0801 14.4 82.2161 14.4C80.9681 14.4 79.9281 14.752 79.0961 15.456C78.2641 16.16 77.8481 17.136 77.8481 18.384C77.8481 20.304 79.7361 21.872 83.5121 23.088C87.2881 24.304 89.1761 26.256 89.1761 28.944C89.1761 31.344 88.2321 33.248 86.3441 34.656C84.6801 35.904 82.6801 36.528 80.3441 36.528C79.3521 36.528 78.2961 36.384 77.1761 36.096C76.0881 35.84 75.1441 35.472 74.3441 34.992C74.5361 34.416 74.7281 33.84 74.9201 33.264C75.1121 32.656 75.2561 32.064 75.3521 31.488ZM112.248 31.2L112.2 33.696C110.952 34.592 109.64 35.296 108.264 35.808C106.888 36.288 105.448 36.528 103.944 36.528C100.552 36.528 97.8164 35.472 95.7364 33.36C93.6564 31.248 92.6164 28.368 92.6164 24.72C92.6164 21.232 93.5444 18.432 95.4004 16.32C97.3844 14.048 100.12 12.912 103.608 12.912C106.456 12.912 108.744 13.856 110.472 15.744C112.392 17.824 113.352 20.8 113.352 24.672L103.608 24.528H96.8404C96.8404 27.408 97.4964 29.744 98.8084 31.536C100.28 33.52 102.392 34.512 105.144 34.512C106.616 34.512 108.04 34.128 109.416 33.36C110.344 32.848 111.288 32.128 112.248 31.2ZM96.8404 22.752H109.608C109.608 20.288 109.208 18.368 108.408 16.992C107.416 15.264 105.816 14.4 103.608 14.4C101.464 14.4 99.7684 15.28 98.5204 17.04C97.4004 18.608 96.8404 20.512 96.8404 22.752ZM138.36 0.0959988V36.144L136.44 36L134.52 36.144V31.536C132.568 34.864 129.816 36.528 126.264 36.528C123.416 36.528 121.144 35.584 119.448 33.696C117.592 31.648 116.664 28.72 116.664 24.912C116.664 21.52 117.608 18.672 119.496 16.368C121.384 14.064 123.88 12.912 126.984 12.912C128.584 12.912 130.024 13.328 131.304 14.16C132.584 14.96 133.656 16.096 134.52 17.568V0.0959988L136.44 0.239997L138.36 0.0959988ZM134.52 24.048C134.52 21.648 134.056 19.616 133.128 17.952C131.976 15.904 130.28 14.88 128.04 14.88C125.288 14.88 123.336 16.048 122.184 18.384C121.32 20.112 120.888 22.512 120.888 25.584C120.888 28.016 121.352 30.064 122.28 31.728C123.432 33.776 125.16 34.8 127.464 34.8C129.96 34.8 131.832 33.568 133.08 31.104C134.04 29.184 134.52 26.832 134.52 24.048ZM161.48 20.976V32.112C161.48 32.592 161.48 33.056 161.48 33.504C161.576 34.176 162.008 34.512 162.776 34.512C163.192 34.512 163.656 34.448 164.168 34.32V35.376C164.008 35.44 163.768 35.536 163.448 35.664C163.16 35.76 162.824 35.84 162.44 35.904C162.088 35.968 161.656 36 161.144 36C160.216 36 159.448 35.776 158.84 35.328C158.264 34.88 157.912 34.128 157.784 33.072L157.352 33.504C155.336 35.52 152.968 36.528 150.248 36.528C148.488 36.528 146.984 35.984 145.736 34.896C144.488 33.808 143.864 32.4 143.864 30.672C143.864 28.24 144.776 26.496 146.6 25.44C147.72 24.8 149.768 24.24 152.744 23.76C154.824 23.408 156.136 23.088 156.68 22.8C157.448 22.384 157.832 21.632 157.832 20.544C157.832 18.752 157.336 17.376 156.344 16.416C155.384 15.424 154.008 14.928 152.216 14.928C150.68 14.928 149.336 15.344 148.184 16.176C147.288 16.816 146.728 17.504 146.504 18.24H145.976V15.552C147.224 14.688 148.472 14.032 149.72 13.584C151 13.136 152.328 12.912 153.704 12.912C158.888 12.912 161.48 15.6 161.48 20.976ZM157.64 31.2V24.192L155.96 24.528C153.176 25.072 151.416 25.504 150.68 25.824C148.76 26.688 147.8 28.08 147.8 30C147.8 31.472 148.216 32.592 149.048 33.36C149.88 34.128 151.032 34.512 152.504 34.512C153.112 34.512 153.784 34.336 154.52 33.984C155.256 33.6 155.864 33.168 156.344 32.688C156.6 32.464 156.872 32.208 157.16 31.92C157.48 31.6 157.64 31.36 157.64 31.2ZM181.352 5.616V36.24L179.24 36.096L177.128 36.24V5.616C174.632 5.616 172.856 5.648 171.8 5.712C170.744 5.776 169.016 5.936 166.616 6.192L166.76 4.752L166.616 3.312H191.384L191.24 4.752L191.384 6.192C190.2 6.064 188.696 5.936 186.872 5.808C185.08 5.68 183.24 5.616 181.352 5.616ZM200.92 13.2V36.144L199 36L197.08 36.144V13.2L199 13.344L200.92 13.2ZM201.448 4.992C201.448 5.664 201.208 6.24 200.728 6.72C200.248 7.2 199.672 7.44 199 7.44C198.328 7.44 197.752 7.2 197.272 6.72C196.792 6.24 196.552 5.664 196.552 4.992C196.552 4.32 196.792 3.744 197.272 3.264C197.752 2.784 198.328 2.544 199 2.544C199.64 2.544 200.2 2.784 200.68 3.264C201.192 3.712 201.448 4.288 201.448 4.992ZM209.096 36.144V13.2L211.016 13.344L212.936 13.2V17.328C213.736 15.92 214.712 14.832 215.864 14.064C217.048 13.296 218.44 12.912 220.04 12.912C221.64 12.912 223.08 13.328 224.36 14.16C225.672 14.992 226.568 16.16 227.048 17.664C228.936 14.496 231.448 12.912 234.584 12.912C237.4 12.912 239.416 13.728 240.632 15.36C241.752 16.832 242.312 19.136 242.312 22.272V36.144L240.392 36L238.472 36.144V23.376C238.472 20.784 238.184 18.928 237.608 17.808C236.808 16.208 235.32 15.408 233.144 15.408C231 15.408 229.48 16.272 228.584 18C227.944 19.248 227.624 20.976 227.624 23.184V36.144L225.704 36L223.784 36.144V22.08C223.784 17.632 222.088 15.408 218.696 15.408C216.456 15.408 214.888 16.096 213.992 17.472C213.288 18.56 212.936 20.128 212.936 22.176V36.144L211.016 36L209.096 36.144ZM266.936 31.2L266.888 33.696C265.64 34.592 264.328 35.296 262.952 35.808C261.576 36.288 260.136 36.528 258.632 36.528C255.24 36.528 252.504 35.472 250.424 33.36C248.344 31.248 247.304 28.368 247.304 24.72C247.304 21.232 248.232 18.432 250.088 16.32C252.072 14.048 254.808 12.912 258.296 12.912C261.144 12.912 263.432 13.856 265.16 15.744C267.08 17.824 268.04 20.8 268.04 24.672L258.296 24.528H251.528C251.528 27.408 252.184 29.744 253.496 31.536C254.968 33.52 257.08 34.512 259.832 34.512C261.304 34.512 262.728 34.128 264.104 33.36C265.032 32.848 265.976 32.128 266.936 31.2ZM251.528 22.752H264.296C264.296 20.288 263.896 18.368 263.096 16.992C262.104 15.264 260.504 14.4 258.296 14.4C256.152 14.4 254.456 15.28 253.208 17.04C252.088 18.608 251.528 20.512 251.528 22.752Z" />
  </svg>
);
