import React, { useEffect, useState, useRef } from "react";


const Footer = () => {
    return(

        <div className="w-full h-36 bg-blue-900 custom-mt2">
            <div className="w-28 h-16 relative">
                <div className="flex items-center p-10 ml-96 pl-80 ">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="63" viewBox="0 0 120 63" fill="none">
  <path d="M0 61.3918L1.7405 61.1653V47.6196L0.0881267 47.3024V45.9207H3.28272C3.56179 45.9207 3.87023 45.9131 4.20805 45.898C4.54587 45.8829 4.80291 45.8678 4.97916 45.8527C5.74292 45.7923 6.3745 45.7621 6.87388 45.7621C8.38673 45.7621 9.59847 45.9207 10.5091 46.2378C11.4198 46.5549 12.0807 47.0382 12.492 47.6875C12.9032 48.3369 13.1088 49.1901 13.1088 50.2472C13.1088 51.2891 12.8371 52.2556 12.2937 53.1466C11.7502 54.0375 10.9644 54.6491 9.93629 54.9814C10.5238 55.2381 11.0452 55.7062 11.5005 56.3858C11.9559 57.0653 12.4406 57.9487 12.9546 59.036C13.3218 59.776 13.6009 60.312 13.7918 60.6443C13.9975 60.9614 14.1957 61.1426 14.3867 61.1879L15.1137 61.4144V62.7509H11.3683C11.1333 62.7509 10.8836 62.5093 10.6193 62.026C10.3696 61.5277 10.0391 60.75 9.62784 59.6929C9.14315 58.4546 8.72454 57.4881 8.37204 56.7935C8.01953 56.0988 7.64499 55.6685 7.24842 55.5023H4.97916V61.1653L7.00607 61.3918V62.7509H0V61.3918ZM7.00607 54.1206C7.84328 54.1206 8.49688 53.811 8.96689 53.1919C9.4369 52.5727 9.67191 51.644 9.67191 50.4057C9.67191 49.3033 9.4369 48.4879 8.96689 47.9593C8.51157 47.4308 7.71843 47.1665 6.58747 47.1665C6.17621 47.1665 5.82371 47.1892 5.52995 47.2345C5.25088 47.2647 5.06729 47.2798 4.97916 47.2798V54.0753C5.15541 54.1055 5.58136 54.1206 6.257 54.1206H7.00607Z" fill="#F3F3FA"/>
  <path d="M21.5625 63C19.6237 63 18.1769 62.4186 17.2222 61.2559C16.2822 60.078 15.8122 58.4773 15.8122 56.4537C15.8122 55.0946 16.0546 53.9167 16.5392 52.9201C17.0386 51.9234 17.7363 51.1608 18.6323 50.6322C19.5282 50.1037 20.5637 49.8394 21.7387 49.8394C23.2075 49.8394 24.3385 50.2396 25.1316 51.04C25.9247 51.8252 26.336 52.9503 26.3654 54.4151C26.3654 55.4117 26.3066 56.1517 26.1891 56.6349H19.0288C19.0876 58.0091 19.4034 59.0813 19.9762 59.8515C20.549 60.6065 21.3642 60.984 22.4217 60.984C22.9945 60.984 23.582 60.8859 24.1842 60.6896C24.8011 60.4933 25.2858 60.2592 25.6383 59.9874L26.1891 61.2332C25.7926 61.6711 25.1463 62.0789 24.2503 62.4564C23.3691 62.8188 22.4731 63 21.5625 63ZM23.2809 55.2758C23.3103 54.853 23.325 54.5283 23.325 54.3018C23.325 52.2934 22.6714 51.2891 21.3642 51.2891C20.6445 51.2891 20.0863 51.5836 19.6898 52.1726C19.2932 52.7615 19.0729 53.7959 19.0288 55.2758H23.2809Z" fill="#F3F3FA"/>
  <path d="M27.8813 59.2172C27.8813 57.843 28.5496 56.8086 29.8861 56.1139C31.2374 55.4193 32.9779 55.0644 35.1076 55.0493V54.5283C35.1076 53.9092 35.0416 53.4259 34.9094 53.0786C34.7919 52.7313 34.5642 52.4746 34.2264 52.3085C33.9033 52.1272 33.4259 52.0366 32.7943 52.0366C32.0746 52.0366 31.4284 52.1348 30.8555 52.3311C30.2827 52.5123 29.6879 52.7539 29.071 53.056L28.388 51.6063C28.6083 51.4099 28.9755 51.1759 29.4896 50.9041C30.0183 50.6322 30.6426 50.3982 31.3623 50.2019C32.082 49.9904 32.8237 49.8847 33.5875 49.8847C34.7184 49.8847 35.5997 50.0357 36.2313 50.3378C36.8775 50.6398 37.3402 51.123 37.6193 51.7875C37.8983 52.4519 38.0379 53.3429 38.0379 54.4604V61.3918H39.2276V62.6603C38.9338 62.7358 38.5152 62.8113 37.9718 62.8868C37.4283 62.9623 36.951 63 36.5397 63C36.0403 63 35.7025 62.9245 35.5263 62.7735C35.3647 62.6225 35.2839 62.3129 35.2839 61.8448V61.2332C34.8873 61.6862 34.3733 62.094 33.7417 62.4564C33.1101 62.8188 32.3978 63 31.6046 63C30.929 63 30.3047 62.8566 29.7319 62.5697C29.1738 62.2676 28.7258 61.8373 28.388 61.2785C28.0502 60.7047 27.8813 60.0176 27.8813 59.2172ZM33.0146 61.12C33.3231 61.12 33.6756 61.0294 34.0722 60.8481C34.4687 60.6518 34.8139 60.4178 35.1076 60.1459V56.4311C33.7857 56.4311 32.7943 56.6651 32.1334 57.1333C31.4871 57.5863 31.164 58.1752 31.164 58.9001C31.164 59.6249 31.3255 60.1761 31.6487 60.5537C31.9865 60.9312 32.4418 61.12 33.0146 61.12Z" fill="#F3F3FA"/>
  <path d="M41.8803 46.1925L40.25 45.898V44.6749L44.3258 44.1765H44.3699L44.9648 44.6069V61.2106L46.5731 61.3918V62.7509H40.3381V61.3918L41.8803 61.1879V46.1925Z" fill="#F3F3FA"/>
  <path d="M54.9263 47.6196L53.1638 47.3251V45.9207H64.9067L65.1931 49.7262H63.6509L62.9238 47.4837L58.165 47.2798V53.3731L61.2274 53.3051L61.5799 51.4477H62.9899V56.9294H61.5799L61.2274 54.9814L58.165 54.9134V61.3012L63.4967 61.0293L64.7745 58.1299L66.4269 58.6056L65.8541 62.7509H53.1858V61.3918L54.9263 61.1653V47.6196Z" fill="#F3F3FA"/>
  <path d="M70.2003 60.8934C70.3178 61.0747 70.5822 61.2483 70.9935 61.4144C71.4194 61.5654 71.8454 61.6409 72.2713 61.6409C72.9616 61.6409 73.4757 61.4975 73.8135 61.2106C74.166 60.9085 74.3423 60.5159 74.3423 60.0327C74.3423 59.5343 74.1293 59.1342 73.7034 58.8321C73.2774 58.515 72.5577 58.1299 71.5443 57.6769L70.9274 57.4051C69.9139 56.9672 69.1575 56.4386 68.6581 55.8195C68.1587 55.2003 67.909 54.4 67.909 53.4184C67.909 52.7388 68.1073 52.1348 68.5039 51.6063C68.9005 51.0626 69.4586 50.6398 70.1783 50.3378C70.898 50.0357 71.7279 49.8847 72.6679 49.8847C73.3582 49.8847 73.9457 49.93 74.4304 50.0206C74.9298 50.1112 75.4512 50.2321 75.9947 50.3831C76.2884 50.4888 76.5087 50.5492 76.6556 50.5643V53.5317H74.9151L74.4084 51.8101C74.3202 51.6591 74.122 51.5232 73.8135 51.4024C73.5051 51.2816 73.1526 51.2212 72.756 51.2212C72.1538 51.2212 71.6691 51.3571 71.3019 51.6289C70.9494 51.8856 70.7731 52.2481 70.7731 52.7162C70.7731 53.139 70.898 53.4939 71.1477 53.7808C71.3974 54.0526 71.6691 54.2641 71.9629 54.4151C72.2566 54.5661 72.8001 54.8152 73.5932 55.1626C74.3863 55.5099 75.0399 55.8421 75.554 56.1592C76.0828 56.4764 76.5161 56.8916 76.8539 57.4051C77.2064 57.9034 77.3827 58.515 77.3827 59.2399C77.3827 60.3573 76.9567 61.2634 76.1048 61.9581C75.2529 62.6527 74.0265 63 72.4255 63C71.6764 63 71.0008 62.9321 70.3986 62.7962C69.8111 62.6603 69.1281 62.4791 68.3497 62.2525L67.865 62.094V59.104H69.6936L70.2003 60.8934Z" fill="#F3F3FA"/>
  <path d="M82.8808 62.9547C81.9554 62.9547 81.2724 62.7358 80.8318 62.2978C80.3912 61.8599 80.1709 61.1653 80.1709 60.2139V51.9007H78.7388V50.7228C78.8563 50.6775 79.0693 50.602 79.3777 50.4963C79.6862 50.3755 79.9212 50.2774 80.0827 50.2019C80.3324 50.0055 80.5454 49.6658 80.7217 49.1825C80.8538 48.8654 81.0962 48.0802 81.4487 46.8268H83.2112L83.2994 50.1566H86.6702V51.9007H83.3214V58.2658C83.3214 59.1115 83.3434 59.708 83.3875 60.0553C83.4316 60.4027 83.527 60.6292 83.6739 60.7349C83.8208 60.8255 84.0778 60.8708 84.445 60.8708C84.8122 60.8708 85.1941 60.833 85.5907 60.7575C85.9872 60.6669 86.3177 60.5612 86.5821 60.4404L87.0007 61.7089C86.5894 62.026 85.9872 62.3129 85.1941 62.5697C84.4009 62.8264 83.6298 62.9547 82.8808 62.9547Z" fill="#F3F3FA"/>
  <path d="M87.9305 59.2172C87.9305 57.843 88.5988 56.8086 89.9354 56.1139C91.2866 55.4193 93.0271 55.0644 95.1569 55.0493V54.5283C95.1569 53.9092 95.0908 53.4259 94.9586 53.0786C94.8411 52.7313 94.6134 52.4746 94.2756 52.3085C93.9525 52.1272 93.4751 52.0366 92.8436 52.0366C92.1238 52.0366 91.4776 52.1348 90.9048 52.3311C90.3319 52.5123 89.7371 52.7539 89.1202 53.056L88.4372 51.6063C88.6575 51.4099 89.0247 51.1759 89.5388 50.9041C90.0676 50.6322 90.6918 50.3982 91.4115 50.2019C92.1312 49.9904 92.8729 49.8847 93.6367 49.8847C94.7677 49.8847 95.6489 50.0357 96.2805 50.3378C96.9268 50.6398 97.3894 51.123 97.6685 51.7875C97.9475 52.4519 98.0871 53.3429 98.0871 54.4604V61.3918H99.2768V62.6603C98.983 62.7358 98.5644 62.8113 98.021 62.8868C97.4775 62.9623 97.0002 63 96.5889 63C96.0896 63 95.7517 62.9245 95.5755 62.7735C95.4139 62.6225 95.3331 62.3129 95.3331 61.8448V61.2332C94.9366 61.6862 94.4225 62.094 93.7909 62.4564C93.1593 62.8188 92.447 63 91.6538 63C90.9782 63 90.354 62.8566 89.7811 62.5697C89.223 62.2676 88.775 61.8373 88.4372 61.2785C88.0994 60.7047 87.9305 60.0176 87.9305 59.2172ZM93.0639 61.12C93.3723 61.12 93.7248 61.0294 94.1214 60.8481C94.518 60.6518 94.8631 60.4178 95.1569 60.1459V56.4311C93.835 56.4311 92.8435 56.6651 92.1826 57.1333C91.5363 57.5863 91.2132 58.1752 91.2132 58.9001C91.2132 59.6249 91.3748 60.1761 91.6979 60.5537C92.0357 60.9312 92.491 61.12 93.0639 61.12Z" fill="#F3F3FA"/>
  <path d="M104.353 62.9547C103.428 62.9547 102.745 62.7358 102.304 62.2978C101.863 61.8599 101.643 61.1653 101.643 60.2139V51.9007H100.211V50.7228C100.329 50.6775 100.542 50.602 100.85 50.4963C101.158 50.3755 101.393 50.2774 101.555 50.2019C101.805 50.0055 102.018 49.6658 102.194 49.1825C102.326 48.8654 102.568 48.0802 102.921 46.8268H104.684L104.772 50.1566H108.142V51.9007H104.794V58.2658C104.794 59.1115 104.816 59.708 104.86 60.0553C104.904 60.4027 104.999 60.6292 105.146 60.7349C105.293 60.8255 105.55 60.8708 105.917 60.8708C106.284 60.8708 106.666 60.833 107.063 60.7575C107.459 60.6669 107.79 60.5612 108.054 60.4404L108.473 61.7089C108.062 62.026 107.459 62.3129 106.666 62.5697C105.873 62.8264 105.102 62.9547 104.353 62.9547Z" fill="#F3F3FA"/>
  <path d="M115.197 63C113.258 63 111.812 62.4186 110.857 61.2559C109.917 60.078 109.447 58.4773 109.447 56.4537C109.447 55.0946 109.689 53.9167 110.174 52.9201C110.673 51.9234 111.371 51.1608 112.267 50.6322C113.163 50.1037 114.198 49.8394 115.373 49.8394C116.842 49.8394 117.973 50.2396 118.766 51.04C119.559 51.8252 119.971 52.9503 120 54.4151C120 55.4117 119.941 56.1517 119.824 56.6349H112.663C112.722 58.0091 113.038 59.0813 113.611 59.8515C114.184 60.6065 114.999 60.984 116.056 60.984C116.629 60.984 117.217 60.8859 117.819 60.6896C118.436 60.4933 118.92 60.2592 119.273 59.9874L119.824 61.2332C119.427 61.6711 118.781 62.0789 117.885 62.4564C117.004 62.8188 116.108 63 115.197 63ZM116.916 55.2758C116.945 54.853 116.96 54.5283 116.96 54.3018C116.96 52.2934 116.306 51.2891 114.999 51.2891C114.279 51.2891 113.721 51.5836 113.324 52.1726C112.928 52.7615 112.708 53.7959 112.663 55.2758H116.916Z" fill="#F3F3FA"/>
  <path d="M69.7861 0L60.5882 6.95606L51.3827 0L32.9412 13.9358V35.2941H43.644V30.6067H37.4713V16.323L51.3827 5.80989L56.738 9.85706L51.3369 13.9358V35.2941H58.6096H64.2246H69.8243V13.9358L64.4232 9.85706L69.7784 5.80989L83.6898 16.323V30.6067H77.0206V35.2941H88.2353V13.9358L69.7861 0ZM65.2941 16.323V30.6067H64.2322H58.6173H55.8747V16.323L60.5806 12.766L65.2941 16.323Z" fill="#F3F3FA"/>
</svg>
                    </div>
                </div>
            </div>
        </div>


    ); 
}



export default Footer;