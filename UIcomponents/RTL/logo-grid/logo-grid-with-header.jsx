export default () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        من يستخدم Float UI؟
                    </h3>
                    <p className="text-gray-600 mt-3">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">

                        {/* LOGO 1 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 163 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.0503 14.0131H52.6724C57.5318 14.0131 61.546 16.8247 61.546 23.2442V24.5931C61.546 31.0613 57.7918 33.9704 52.8187 33.9704H45.0503V14.0131ZM49.3083 17.6373V30.33H52.5749C55.3377 30.33 57.1905 28.526 57.1905 24.5118V23.4555C57.1905 19.4412 55.2402 17.6373 52.4287 17.6373H49.3083ZM63.805 17.8323H67.2179L67.7705 21.5865C68.4205 19.0349 70.0782 17.6698 73.0848 17.6698H74.1412V21.9765H72.386C68.9243 21.9765 68.0792 23.1792 68.0792 26.5921V34.0192H63.87V17.8323H63.805ZM74.9863 26.2508V25.7957C74.9863 20.3838 78.448 17.426 83.161 17.426C87.9716 17.426 91.3357 20.3838 91.3357 25.7957V26.2508C91.3357 31.5652 88.0691 34.4255 83.161 34.4255C77.9441 34.3767 74.9863 31.5814 74.9863 26.2508ZM87.029 26.202V25.7957C87.029 22.7891 85.5175 20.9852 83.1123 20.9852C80.7557 20.9852 79.1955 22.6429 79.1955 25.7957V26.202C79.1955 29.1111 80.707 30.7688 83.1123 30.7688C85.5175 30.7201 87.029 29.1111 87.029 26.202ZM93.546 17.8323H97.0564L97.4627 20.8877C98.3078 18.8399 100.112 17.426 102.777 17.426C106.889 17.426 109.603 20.3838 109.603 25.8607V26.3158C109.603 31.6302 106.596 34.4417 102.777 34.4417C100.226 34.4417 98.4703 33.2879 97.6089 31.4351V39.6098H93.4972L93.546 17.8323ZM105.329 26.202V25.8445C105.329 22.6266 103.671 21.0339 101.461 21.0339C99.1041 21.0339 97.5439 22.8379 97.5439 25.8445V26.1533C97.5439 29.0136 99.0554 30.8176 101.412 30.8176C103.833 30.7688 105.329 29.2249 105.329 26.202ZM115.827 31.0288L115.47 33.9867H111.862V12.4204H115.974V20.6926C116.884 18.5799 118.688 17.426 121.239 17.426C125.107 17.4748 127.968 20.1401 127.968 25.5032V26.007C127.968 31.3701 125.253 34.4417 121.142 34.4417C118.428 34.3767 116.672 33.1253 115.827 31.0288ZM123.645 26.007V25.6007C123.645 22.6429 122.036 20.9852 119.777 20.9852C117.469 20.9852 115.86 22.8379 115.86 25.6495V26.007C115.86 29.0136 117.42 30.7688 119.728 30.7688C122.198 30.7688 123.645 29.2249 123.645 26.007ZM129.771 26.2508V25.7957C129.771 20.3838 133.233 17.426 137.946 17.426C142.757 17.426 146.121 20.3838 146.121 25.7957V26.2508C146.121 31.5652 142.806 34.4255 137.946 34.4255C132.729 34.3767 129.771 31.5814 129.771 26.2508ZM141.847 26.202V25.7957C141.847 22.7891 140.335 20.9852 137.93 20.9852C135.573 20.9852 134.013 22.6429 134.013 25.7957V26.202C134.013 29.1111 135.525 30.7688 137.93 30.7688C140.351 30.7201 141.847 29.1111 141.847 26.202ZM151.63 25.6007L145.958 17.8323H150.818L154.084 22.6916L157.4 17.8323H162.21L156.457 25.5519L162.519 33.9867H157.757L154.052 28.6236L150.444 33.9867H145.471L151.63 25.6007Z" fill="black" />
                            <path d="M18.8522 14.0132L9.42611 20.0264L18.8522 26.0396L9.42611 32.0528L0 26.0071L9.42611 19.9939L0 14.0132L9.42611 8L18.8522 14.0132ZM9.37735 33.9868L18.8035 27.9736L28.2296 33.9868L18.8035 40L9.37735 33.9868ZM18.8522 26.0071L28.2783 19.9939L18.8522 14.0132L28.2296 8L37.6557 14.0132L28.2296 20.0264L37.6557 26.0396L28.2296 32.0528L18.8522 26.0071Z" fill="#0061FF" />
                        </svg>
                      </li>

                        {/* LOGO 2 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 129 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.9356 34.7749V20.2199H45.1949L55.7896 34.7749H59.1236V13.4006H55.4192V27.919H55.1598L44.5652 13.4006H41.2312V34.7749H44.9356ZM69.6071 35.1049C74.497 35.1049 77.4976 31.9519 77.4976 26.6725C77.4976 21.4297 74.497 18.2401 69.6071 18.2401C64.7543 18.2401 61.7167 21.4297 61.7167 26.6725C61.7537 31.9519 64.7173 35.1049 69.6071 35.1049ZM69.6071 32.0252C67.014 32.0252 65.5322 30.0821 65.5322 26.6725C65.5322 23.2995 67.014 21.3198 69.6071 21.3198C72.2002 21.3198 73.682 23.2995 73.682 26.6725C73.682 30.0821 72.2002 32.0252 69.6071 32.0252ZM80.8686 14.6105V18.68H78.2755V21.6131H80.8686V30.4487C80.8686 33.6017 82.3504 34.8483 86.1289 34.8483C86.8327 34.8483 87.5366 34.7749 88.0922 34.6649V31.8053C87.6477 31.8419 87.3513 31.8786 86.8327 31.8786C85.2769 31.8786 84.573 31.182 84.573 29.5688V21.6131H88.0922V18.68H84.573V14.6105H80.8686ZM90.3149 34.7749H94.0193V18.5701H90.3149V34.7749ZM92.1671 15.8937C93.3896 15.8937 94.3898 14.9038 94.3898 13.6939C94.3898 12.4474 93.3896 11.4575 92.1671 11.4575C90.9446 11.4575 89.9444 12.4474 89.9444 13.6939C89.9444 14.9038 90.9446 15.8937 92.1671 15.8937ZM104.169 35.1049C109.059 35.1049 112.06 31.9519 112.06 26.6725C112.06 21.4297 109.059 18.2401 104.169 18.2401C99.3166 18.2401 96.279 21.4297 96.279 26.6725C96.279 31.9519 99.2426 35.1049 104.169 35.1049ZM104.169 32.0252C101.576 32.0252 100.095 30.0821 100.095 26.6725C100.095 23.2995 101.576 21.3198 104.169 21.3198C106.726 21.3198 108.244 23.2995 108.244 26.6725C108.207 30.0821 106.726 32.0252 104.169 32.0252ZM114.245 34.7749H117.95V25.3526C117.95 22.9696 119.358 21.4664 121.543 21.4664C123.803 21.4664 124.84 22.7129 124.84 25.1693V34.7749H128.545V24.2894C128.545 20.4032 126.544 18.2401 122.914 18.2401C120.469 18.2401 118.839 19.34 118.061 21.1731H117.802V18.5701H114.208C114.245 18.5701 114.245 34.7749 114.245 34.7749Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71206 12.0326C6.79023 12.9024 7.18021 12.8337 9.19893 12.6964L28.2162 11.5519C28.6291 11.5519 28.285 11.1399 28.1474 11.0941L24.9816 8.82806C24.3852 8.37028 23.5594 7.82093 22.0224 7.95826L3.62452 9.30874C2.95926 9.37741 2.82162 9.72075 3.0969 9.97254L5.71206 12.0326ZM6.85905 16.4502V36.4098C6.85905 37.4857 7.38667 37.8748 8.60249 37.8061L29.5008 36.593C30.7166 36.5243 30.8543 35.7918 30.8543 34.922V15.0998C30.8543 14.23 30.5102 13.7493 29.7761 13.818L7.93723 15.0998C7.13433 15.1684 6.85905 15.5804 6.85905 16.4502ZM27.4821 17.5261C27.6197 18.1212 27.4821 18.7392 26.8857 18.8079L25.8763 19.0139V33.7547C25.0046 34.2125 24.2017 34.4871 23.5135 34.4871C22.4353 34.4871 22.16 34.1438 21.3571 33.1367L14.7733 22.8135V32.7933L16.8609 33.2511C16.8609 33.2511 16.8609 34.4642 15.1863 34.4642L10.5524 34.7389C10.4148 34.4642 10.5524 33.8005 11.0112 33.6631L12.227 33.3198V20.1355L10.5524 19.9981C10.4148 19.403 10.7589 18.5332 11.6994 18.4645L16.6774 18.1212L23.5364 28.5588V19.3343L21.793 19.1283C21.6553 18.3959 22.2059 17.8465 22.8712 17.7778L27.4821 17.5261ZM2.08754 7.47759L21.2424 6.08133C23.5823 5.87532 24.2017 6.01266 25.6698 7.08847L31.7719 11.3688C32.7812 12.1013 33.1253 12.3073 33.1253 13.1084V36.6159C33.1253 38.0808 32.5977 38.9506 30.7166 39.0879L8.48779 40.4384C7.06552 40.5071 6.40026 40.3011 5.66618 39.3626L1.147 33.5258C0.3441 32.45 0 31.6488 0 30.7104V9.81231C0 8.59917 0.550559 7.61492 2.08754 7.47759Z" fill="black" />
                        </svg>
                      </li>

                        {/* LOGO 3 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 135 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.43 5C7.79992 5 0 12.7999 0 22.43C0 30.1428 4.98934 36.6572 11.9178 38.9667C12.7893 39.1192 13.1161 38.5963 13.1161 38.1388C13.1161 37.7248 13.0943 36.3522 13.0943 34.8924C8.715 35.6986 7.58205 33.8249 7.23345 32.8444C7.03736 32.3433 6.18765 30.7964 5.44687 30.3824C4.83682 30.0556 3.96532 29.2495 5.42509 29.2277C6.7977 29.2059 7.77814 30.4914 8.10495 31.0143C9.67365 33.6506 12.1792 32.9098 13.1814 32.4522C13.3339 31.3193 13.7915 30.5567 14.2926 30.121C10.4144 29.6852 6.36195 28.1819 6.36195 21.5149C6.36195 19.6194 7.03736 18.0507 8.14852 16.8306C7.97422 16.3949 7.36417 14.6083 8.32282 12.2117C8.32282 12.2117 9.78259 11.7541 13.1161 13.9982C14.5105 13.6061 15.992 13.41 17.4736 13.41C18.9551 13.41 20.4367 13.6061 21.8311 13.9982C25.1646 11.7323 26.6243 12.2117 26.6243 12.2117C27.583 14.6083 26.9729 16.3949 26.7986 16.8306C27.9098 18.0507 28.5852 19.5976 28.5852 21.5149C28.5852 28.2037 24.5109 29.6852 20.6328 30.121C21.2646 30.6657 21.8093 31.7115 21.8093 33.3455C21.8093 35.6768 21.7875 37.5505 21.7875 38.1388C21.7875 38.5963 22.1143 39.141 22.9858 38.9667C26.446 37.7986 29.4527 35.5748 31.5828 32.6083C33.7129 29.6418 34.8591 26.082 34.86 22.43C34.86 12.7999 27.0601 5 17.43 5Z" fill="#24292E" />
                            <path d="M81.2557 30.843H81.2151C81.2334 30.843 81.2456 30.8633 81.2639 30.8654H81.2761L81.2557 30.845V30.843ZM81.2639 30.8654C81.0748 30.8674 80.5989 30.9671 80.0966 30.9671C78.5105 30.9671 77.9615 30.235 77.9615 29.2793V22.9124H81.1947C81.3777 22.9124 81.5201 22.7497 81.5201 22.526V19.0691C81.5201 18.886 81.3574 18.7234 81.1947 18.7234H77.9615V14.4327C77.9615 14.27 77.8598 14.1683 77.6768 14.1683H73.2844C73.1014 14.1683 72.9997 14.27 72.9997 14.4327V18.8454C72.9997 18.8454 70.7832 19.3944 70.6409 19.4147C70.4782 19.4554 70.3765 19.5978 70.3765 19.7604V22.526C70.3765 22.7497 70.5392 22.9124 70.7222 22.9124H72.9794V29.5822C72.9794 34.544 76.4363 35.0524 78.7952 35.0524C79.873 35.0524 81.1744 34.7067 81.3777 34.605C81.4998 34.5643 81.5608 34.422 81.5608 34.2796V31.2294C81.5636 31.1429 81.5351 31.0582 81.4806 30.991C81.426 30.9238 81.3491 30.8785 81.2639 30.8633V30.8654ZM129.45 26.3897C129.45 22.709 127.965 22.221 126.399 22.3837C125.179 22.465 124.203 23.075 124.203 23.075V30.233C124.203 30.233 125.2 30.9244 126.684 30.965C128.779 31.026 129.45 30.2736 129.45 26.3897ZM134.391 26.0643C134.391 33.0392 132.134 35.032 128.189 35.032C124.854 35.032 123.064 33.3442 123.064 33.3442C123.064 33.3442 122.983 34.2796 122.881 34.4016C122.82 34.5236 122.719 34.5643 122.597 34.5643H119.587C119.384 34.5643 119.201 34.4016 119.201 34.2186L119.242 11.6264C119.242 11.4434 119.404 11.2808 119.587 11.2808H123.919C124.102 11.2808 124.264 11.4434 124.264 11.6264V19.2927C124.264 19.2927 125.932 18.215 128.372 18.215L128.352 18.1743C130.792 18.1743 134.391 19.0894 134.391 26.0643ZM116.659 18.7234H112.389C112.165 18.7234 112.043 18.886 112.043 19.1097V30.172C112.043 30.172 110.924 30.965 109.399 30.965C107.874 30.965 107.427 30.2736 107.427 28.7485V19.0894C107.427 18.9064 107.264 18.7437 107.081 18.7437H102.729C102.546 18.7437 102.384 18.9064 102.384 19.0894V29.4806C102.384 33.9543 104.885 35.0727 108.322 35.0727C111.148 35.0727 113.446 33.5069 113.446 33.5069C113.446 33.5069 113.548 34.3 113.609 34.422C113.649 34.5236 113.792 34.605 113.934 34.605H116.659C116.883 34.605 117.005 34.4423 117.005 34.2593L117.045 19.0691C117.045 18.886 116.883 18.7234 116.659 18.7234ZM68.465 18.703H64.1337C63.9507 18.703 63.788 18.886 63.788 19.1097V34.0356C63.788 34.4423 64.0523 34.5847 64.398 34.5847H68.3023C68.709 34.5847 68.8107 34.4016 68.8107 34.0356V19.0487C68.8107 18.8657 68.648 18.703 68.465 18.703ZM66.3298 11.8298C64.7641 11.8298 63.5236 13.0702 63.5236 14.636C63.5236 16.2018 64.7641 17.4423 66.3298 17.4423C67.855 17.4423 69.0954 16.2018 69.0954 14.636C69.0954 13.0702 67.855 11.8298 66.3298 11.8298ZM99.8623 11.3214H95.5716C95.3886 11.3214 95.2259 11.4841 95.2259 11.6671V19.9841H88.495V11.6671C88.495 11.4841 88.3323 11.3214 88.1493 11.3214H83.818C83.6349 11.3214 83.4723 11.4841 83.4723 11.6671V34.2593C83.4723 34.4423 83.6553 34.605 83.818 34.605H88.1493C88.3323 34.605 88.495 34.4423 88.495 34.2593V24.6002H95.2259L95.1852 34.2593C95.1852 34.4423 95.3479 34.605 95.5309 34.605H99.8623C100.045 34.605 100.208 34.4423 100.208 34.2593V11.6671C100.208 11.4841 100.045 11.3214 99.8623 11.3214ZM61.4901 21.3262V32.9985C61.4901 33.0799 61.4698 33.2222 61.3681 33.2629C61.3681 33.2629 58.8262 35.0727 54.6372 35.0727C49.5738 35.0727 43.575 33.4866 43.575 23.0344C43.575 12.5822 48.8214 10.4267 53.9458 10.447C58.3789 10.447 60.1683 11.4434 60.453 11.6264C60.5344 11.7281 60.575 11.8095 60.575 11.9111L59.721 15.5308C59.721 15.7138 59.538 15.9375 59.3143 15.8765C58.5822 15.6528 57.4841 15.2054 54.9016 15.2054C51.9123 15.2054 48.6994 16.0595 48.6994 22.7904C48.6994 29.5212 51.7497 30.3143 53.9458 30.3143C55.8167 30.3143 56.4877 30.0906 56.4877 30.0906V25.4136H53.4985C53.2748 25.4136 53.1121 25.2509 53.1121 25.0679V21.3262C53.1121 21.1432 53.2748 20.9805 53.4985 20.9805H61.1038C61.3274 20.9805 61.4901 21.1432 61.4901 21.3262Z" fill="#24292E" />
                        </svg>
                      </li>

                        {/* LOGO 4 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 164 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M163.858 21.8339V18.9522H160.279V14.4722L160.159 14.5093L156.798 15.5377L156.731 15.5579V18.9523H151.426V17.0613C151.426 16.1808 151.623 15.507 152.011 15.0576C152.396 14.6136 152.948 14.3879 153.65 14.3879C154.156 14.3879 154.679 14.507 155.206 14.7417L155.338 14.8007V11.7659L155.276 11.743C154.784 11.5665 154.116 11.4775 153.288 11.4775C152.244 11.4775 151.296 11.7047 150.469 12.1548C149.641 12.6056 148.99 13.2492 148.534 14.0674C148.08 14.8847 147.849 15.8286 147.849 16.8732V18.9522H145.357V21.8339H147.849V33.9739H151.426V21.8339H156.731V29.5486C156.731 32.726 158.23 34.3361 161.186 34.3361C161.671 34.3361 162.183 34.2792 162.704 34.1677C163.236 34.0533 163.598 33.939 163.811 33.817L163.858 33.7891V30.8807L163.712 30.977C163.518 31.1063 163.276 31.212 162.993 31.2907C162.708 31.3707 162.471 31.4108 162.286 31.4108C161.594 31.4108 161.082 31.2242 160.764 30.856C160.442 30.4845 160.279 29.8348 160.279 28.9259V21.8339H163.858ZM137.369 31.4113C136.071 31.4113 135.047 30.9808 134.326 30.1327C133.6 29.2804 133.232 28.0653 133.232 26.5214C133.232 24.9286 133.6 23.6819 134.326 22.8146C135.048 21.9529 136.062 21.5156 137.34 21.5156C138.58 21.5156 139.568 21.9332 140.275 22.7577C140.986 23.5863 141.346 24.823 141.346 26.4344C141.346 28.0656 141.007 29.3186 140.338 30.1568C139.674 30.9887 138.675 31.4113 137.369 31.4113ZM137.528 18.5903C135.051 18.5903 133.084 19.3161 131.681 20.7476C130.279 22.1793 129.568 24.1605 129.568 26.6367C129.568 28.9886 130.262 30.8804 131.631 32.2587C132.999 33.6374 134.862 34.3358 137.166 34.3358C139.567 34.3358 141.495 33.5998 142.897 32.1485C144.299 30.6988 145.01 28.7363 145.01 26.3179C145.01 23.9292 144.343 22.0233 143.028 20.6542C141.712 19.2846 139.862 18.5903 137.528 18.5903ZM123.801 18.5903C122.116 18.5903 120.722 19.0213 119.658 19.8711C118.586 20.7259 118.043 21.847 118.043 23.2037C118.043 23.9089 118.16 24.5353 118.391 25.0667C118.623 25.5997 118.983 26.0691 119.46 26.463C119.934 26.8537 120.665 27.2629 121.634 27.6793C122.449 28.0146 123.057 28.2982 123.443 28.5217C123.82 28.7407 124.088 28.9609 124.239 29.1754C124.386 29.3852 124.46 29.6724 124.46 30.0269C124.46 31.0361 123.704 31.5271 122.149 31.5271C121.572 31.5271 120.915 31.4067 120.194 31.1692C119.478 30.9354 118.803 30.5929 118.191 30.1538L118.043 30.0473V33.4912L118.097 33.5166C118.603 33.7502 119.241 33.9473 119.994 34.1023C120.744 34.2575 121.426 34.3364 122.019 34.3364C123.847 34.3364 125.32 33.9034 126.394 33.0485C127.475 32.1878 128.023 31.0402 128.023 29.6366C128.023 28.6241 127.728 27.7558 127.147 27.0555C126.569 26.3609 125.567 25.7232 124.169 25.1595C123.055 24.7125 122.342 24.3415 122.048 24.0566C121.764 23.7815 121.62 23.3923 121.62 22.8995C121.62 22.4627 121.798 22.1127 122.163 21.8293C122.531 21.5444 123.043 21.3996 123.685 21.3996C124.281 21.3996 124.891 21.4937 125.497 21.6782C126.103 21.8627 126.636 22.1098 127.08 22.4121L127.226 22.512V19.2451L127.17 19.221C126.76 19.0452 126.219 18.8948 125.563 18.7727C124.909 18.6515 124.317 18.5903 123.801 18.5903ZM108.718 31.4113C107.42 31.4113 106.396 30.9808 105.675 30.1327C104.949 29.2804 104.581 28.0656 104.581 26.5214C104.581 24.9286 104.949 23.6819 105.675 22.8146C106.397 21.9529 107.41 21.5156 108.689 21.5156C109.929 21.5156 110.916 21.9332 111.624 22.7577C112.335 23.5863 112.695 24.823 112.695 26.4344C112.695 28.0656 112.356 29.3186 111.687 30.1568C111.023 30.9887 110.024 31.4113 108.718 31.4113ZM108.877 18.5903C106.4 18.5903 104.432 19.3161 103.03 20.7476C101.628 22.1793 100.917 24.1605 100.917 26.6367C100.917 28.9896 101.611 30.8804 102.98 32.2587C104.348 33.6374 106.211 34.3358 108.515 34.3358C110.916 34.3358 112.844 33.5998 114.247 32.1485C115.648 30.6988 116.359 28.7363 116.359 26.3179C116.359 23.9292 115.692 22.0233 114.377 20.6542C113.061 19.2846 111.21 18.5903 108.877 18.5903ZM95.487 21.5536V18.9522H91.9536V33.9736H95.487V26.2895C95.487 24.983 95.7833 23.9095 96.3679 23.0988C96.945 22.2977 97.7141 21.8917 98.6531 21.8917C98.9714 21.8917 99.3287 21.9442 99.7156 22.048C100.099 22.1512 100.376 22.2633 100.54 22.3812L100.688 22.4888V18.9265L100.631 18.9019C100.302 18.7621 99.8362 18.6916 99.2472 18.6916C98.3592 18.6916 97.5646 18.9769 96.884 19.5387C96.2866 20.0324 95.8548 20.7094 95.5246 21.5536H95.487ZM85.6258 18.5903C84.0047 18.5903 82.5588 18.9379 81.3289 19.6231C80.0965 20.31 79.1434 21.2905 78.4949 22.5373C77.8493 23.7811 77.5215 25.234 77.5215 26.8543C77.5215 28.2736 77.8393 29.5761 78.4675 30.724C79.096 31.8738 79.9855 32.7733 81.1116 33.3972C82.2361 34.0203 83.5357 34.3362 84.9746 34.3362C86.6538 34.3362 88.0876 34.0005 89.2371 33.3384L89.2835 33.3118V30.0746L89.135 30.183C88.6143 30.5623 88.0324 30.8651 87.4063 31.0832C86.7818 31.3011 86.2124 31.4113 85.7131 31.4113C84.3266 31.4113 83.2136 30.9774 82.4057 30.1221C81.596 29.2657 81.1855 28.0631 81.1855 26.5498C81.1855 25.027 81.6136 23.7935 82.4573 22.8834C83.2985 21.9759 84.4136 21.5156 85.7714 21.5156C86.9328 21.5156 88.0646 21.9088 89.1353 22.6855L89.2835 22.7932V19.3822L89.2356 19.3553C88.8327 19.1297 88.2832 18.9435 87.6009 18.8022C86.9216 18.6613 86.2571 18.5903 85.6258 18.5903ZM75.088 18.9523H71.5545V33.9736H75.088V18.9523ZM73.3574 12.5532C72.7758 12.5532 72.2686 12.7512 71.8518 13.1435C71.4334 13.5369 71.2211 14.0322 71.2211 14.6168C71.2211 15.1922 71.4308 15.6785 71.8453 16.0615C72.2571 16.4433 72.766 16.6368 73.3575 16.6368C73.9489 16.6368 74.4596 16.4433 74.8763 16.0621C75.2958 15.6785 75.5085 15.1923 75.5085 14.6168C75.5085 14.0527 75.3015 13.5624 74.8936 13.1593C74.4861 12.757 73.969 12.5532 73.3574 12.5532ZM64.5411 17.844V33.9736H68.1472V13.013H63.1562L56.8124 28.5819L50.6561 13.013H45.4619V33.9734H48.8507V17.8425H48.967L55.4679 33.9736H58.0253L64.4248 17.844H64.5411Z" fill="#706D6E" />
                            <path d="M16.6225 22.6313H0V6.00879H16.6225V22.6313Z" fill="#F1511B" />
                            <path d="M34.9757 22.6313H18.3535V6.00879H34.9757V22.6313Z" fill="#80CC28" />
                            <path d="M16.622 40.991H0V24.3687H16.622V40.991Z" fill="#00ADEF" />
                            <path d="M34.9757 40.991H18.3535V24.3687H34.9757V40.991Z" fill="#FBBC09" />
                        </svg>
                      </li>

                        {/* LOGO 5 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 148 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.239289 26.2057L15.7943 41.7607C7.85086 40.418 1.582 34.1491 0.239289 26.2057Z" fill="#5E6AD2" />
                            <path d="M0 21.9828L20.0172 42C21.2077 41.9364 22.3691 41.7633 23.4914 41.4906L0.509432 18.5086C0.236716 19.631 0.0636084 20.7923 0 21.9828Z" fill="#5E6AD2" />
                            <path d="M1.50586 15.5212L26.4789 40.4943C27.3885 40.1039 28.2615 39.6446 29.0913 39.123L2.87713 12.9088C2.3555 13.7386 1.89623 14.6116 1.50586 15.5212Z" fill="#5E6AD2" />
                            <path d="M4.56891 10.6172C8.05582 6.56555 13.2214 4 18.9863 4C29.4873 4 38 12.5127 38 23.0137C38 28.7786 35.4345 33.9442 31.3828 37.4311L4.56891 10.6172Z" fill="#5E6AD2" />
                            <path d="M57.8101 34.3999H71.7418V30.6061H62.4115V12.6363H57.8101V34.3999ZM74.7039 34.3999H79.2311V18.0772H74.7039V34.3999ZM76.978 16.1431C78.2959 16.1431 79.4329 15.1442 79.4329 13.8477C79.4329 12.5619 78.2959 11.563 76.978 11.563C75.671 11.563 74.534 12.5619 74.534 13.8477C74.534 15.1442 75.671 16.1431 76.978 16.1431ZM87.3845 24.9633C87.3949 22.8593 88.6489 21.6265 90.4767 21.6265C92.294 21.6265 93.3886 22.8167 93.3779 24.8146V34.3999H97.9049V24.0069C97.9049 20.2026 95.6733 17.8647 92.2727 17.8647C89.8498 17.8647 88.0963 19.0549 87.3632 20.9571H87.1718V18.0772H82.8573V34.3999H87.3845V24.9633ZM108.954 34.7188C113.003 34.7188 115.713 32.7527 116.35 29.7241L112.174 29.4478C111.717 30.6912 110.537 31.3394 109.039 31.3394C106.776 31.3394 105.341 29.841 105.341 27.4075V27.3969H116.457V26.1535C116.457 20.6064 113.099 17.8647 108.784 17.8647C103.981 17.8647 100.867 21.2759 100.867 26.313C100.867 31.4882 103.938 34.7188 108.954 34.7188ZM105.341 24.5914C105.426 22.7317 106.85 21.244 108.858 21.244C110.814 21.244 112.174 22.6467 112.195 24.5914H105.341ZM124.129 34.7082C126.541 34.7082 128.104 33.6561 128.901 32.1364H129.028V34.3999H133.321V23.3906C133.321 19.5012 129.995 17.8647 126.467 17.8647C122.45 17.8647 119.91 19.735 119.283 22.7105L123.47 23.0505C123.778 21.9666 124.745 21.1696 126.371 21.1696C127.933 21.1696 128.784 21.9347 128.794 23.3056C128.805 24.3789 127.678 24.5383 124.841 24.8146C121.611 25.1121 118.709 26.1961 118.709 29.841C118.709 33.0716 121.015 34.7082 124.129 34.7082ZM125.426 31.5838C124.033 31.5838 123.035 30.9356 123.035 29.6922C123.035 28.4171 124.087 27.79 125.681 27.5669C126.669 27.4288 128.284 27.195 128.826 26.8337V28.5659C128.826 30.2768 127.413 31.5838 125.426 31.5838ZM136.833 34.3999H141.361V25.1653C141.371 23.1674 142.816 21.7966 144.644 21.7966C145.26 21.7966 145.76 21.9666 146.185 22.1791L147.545 18.4385C146.95 18.0772 146.185 17.8434 145.314 17.8434C143.475 17.8434 141.987 18.9061 141.392 20.9252H141.222V18.0772H136.833V34.3999Z" fill="#040406" />
                        </svg>
                      </li>

                        {/* LOGO 6 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3997 41.6001C24.3162 40.4106 25.927 38.959 27.2897 37.4474C28.2655 39.44 30.2235 40.8001 32.2998 40.8001C33.8998 40.8001 35.4998 40.0001 36.5998 38.5001C36.9998 39.9001 37.9998 40.8001 39.6998 40.8001C40.9755 40.8001 43.7567 39.4982 46.2784 37.569L45.9997 39.0001C45.8997 39.4001 45.8997 39.7001 45.8997 39.9001C45.9997 40.5001 46.3997 40.8001 46.9997 40.8001C48.1997 40.8001 49.8997 39.7001 50.2997 37.9001L50.8997 35.4001C51.5997 32.2001 56.2997 27.4001 57.5997 27.4001C57.6997 27.4001 57.8997 27.5001 57.8997 27.7001C57.9393 28.0176 57.7112 28.6187 57.3779 29.497C56.8714 30.8318 56.1218 32.8068 55.6997 35.4001C55.4997 36.2001 55.4997 37.0001 55.5997 37.6001C55.7997 39.5001 56.8997 40.8001 58.9997 40.8001C60.7968 40.8001 64.6931 39.2661 67.424 36.198C67.6298 37.8634 67.9821 39.2799 68.4997 40.2001C68.6997 40.6001 69.1997 40.7001 69.6997 40.7001C70.2997 40.7001 71.0997 40.5001 71.9997 40.0001C74.0997 38.9001 76.7997 36.3001 79.3997 32.5001C79.7997 32.6001 80.0997 32.6001 80.3997 32.6001C81.4373 32.6001 82.597 32.2339 83.6737 31.586C83.2262 32.9373 83.0518 34.3174 83.1998 35.6001C83.5998 38.6001 86.0998 40.9001 88.7998 40.9001C90.2998 40.9001 91.8998 40.0001 92.9998 38.6001C93.3998 40.5001 94.5998 42.5001 97.5998 43.7001C97.7998 43.8001 97.9997 43.8001 98.1998 43.8001C98.7998 43.8001 99.1998 43.4001 99.0998 42.9001C99.0998 42.7001 98.9997 42.4001 98.6998 42.2001C97.9997 41.6001 97.1998 40.5001 96.9998 38.8001C96.8998 38.0001 96.8998 37.0001 97.3998 36.0001C97.9998 33.3001 98.0998 32.5001 98.0998 32.2001C97.9998 31.5001 97.4998 31.2001 96.8998 31.2001C95.6998 31.2001 93.9998 32.4001 93.5998 34.1001C92.8997 36.7001 91.0998 38.4001 89.8998 38.4001C88.3998 38.4001 87.5998 36.8001 87.3998 35.1001C86.8998 30.9001 89.4998 25.8001 93.3998 25.8001C94.4998 25.8001 95.7998 26.2001 95.8998 27.4001C96.0226 28.5061 95.3527 28.7815 94.841 28.9918C94.52 29.1238 94.2612 29.2302 94.2998 29.5001C94.3998 30.3001 95.6998 30.5001 96.5998 30.5001C97.3997 30.5001 99.9998 29.9001 99.5998 27.0001C99.2998 24.7001 96.7998 23.6001 93.9998 23.6001C90.6572 23.6001 87.8124 25.2925 85.8752 27.6344C85.6073 27.7926 85.3246 28.0752 84.9997 28.4001C84.3997 29.1001 83.1997 29.8001 81.6997 29.8001C81.4997 29.8001 81.0997 29.7001 81.0997 29.7001C82.0997 27.8001 82.7997 25.8001 82.7997 24.1001C82.7997 21.3001 81.0997 19.9001 79.1997 19.9001C76.7997 19.9001 74.2997 22.0001 74.2997 26.2001C74.2997 28.7001 75.2997 30.7001 76.9997 31.8001C74.9997 35.0001 72.2997 37.7001 71.8997 37.7001C71.7616 37.7001 71.7189 37.5571 71.6727 37.4028C71.652 37.3336 71.6307 37.2621 71.5997 37.2001C71.2997 36.1001 70.9997 33.9001 70.9997 32.6001C70.9997 30.2001 71.3997 27.8001 72.2997 25.3001C72.3997 25.0001 72.4997 24.7001 72.4997 24.5001C72.4997 23.8001 71.9997 23.5001 71.3997 23.5001C70.1997 23.5001 68.2997 24.9001 67.7997 26.4001C67.3997 27.8001 67.1997 29.8001 67.1997 32.2001C67.1997 32.6403 67.2068 33.0769 67.2213 33.5068C64.8348 36.7239 61.8899 37.8001 60.9997 37.8001C59.8997 37.8001 59.6997 36.8001 59.8997 36.4001C60.5997 33.5001 61.4997 30.2001 62.2997 27.9001C62.6997 26.8001 62.8997 25.8001 62.7997 25.2001C62.5997 24.1001 61.8997 23.6001 60.8997 23.6001C58.4997 23.6001 54.6997 26.0001 52.1997 29.3001L52.9997 25.7001C53.0997 25.3001 53.0997 25.0001 53.0997 24.8001C52.9997 24.1001 52.5997 23.8001 51.9997 23.8001C49.1997 23.8001 48.6997 25.2001 48.3997 26.6001C48.3417 26.9476 47.5459 31.0518 46.8863 34.4447C44.7524 36.4031 42.3614 37.7001 41.6998 37.7001C40.8998 37.7001 40.5998 37.1001 40.5998 36.6001C40.5998 36.2548 40.7985 35.3132 40.9863 34.4236C41.1248 33.7676 41.2573 33.1397 41.2998 32.8001C41.3998 32.4001 41.3998 32.1001 41.3998 31.9001C41.2998 31.3001 40.7998 31.0001 40.1998 31.0001C38.9998 31.0001 37.2998 32.2001 36.8998 33.9001C36.2998 36.5001 34.4998 38.2001 33.2998 38.2001C31.7998 38.2001 30.9998 36.6001 30.7998 35.0001C30.2998 31.4001 32.5998 25.6001 36.7998 25.6001C37.9998 25.6001 39.1998 26.0001 39.2998 27.2001C39.4209 28.3506 38.8087 28.6211 38.3291 28.8331C38.0166 28.9713 37.7603 29.0845 37.7998 29.4001C37.8998 30.2001 39.1998 30.4001 39.9998 30.4001C40.8998 30.4001 43.3998 29.8001 42.9998 26.9001C42.6998 24.6001 40.2998 23.4001 37.3998 23.4001C30.6739 23.4001 26.1982 30.0526 26.682 35.3262C24.9739 37.325 23.2674 38.5269 20.1997 40.1001C18.4997 41.0001 16.4997 41.5001 14.6997 41.5001C9.09971 41.5001 6.39971 36.4001 5.89971 32.0001C4.49971 20.8001 14.4997 5.3001 21.3997 5.3001C22.9997 5.3001 24.3997 6.7001 24.6997 8.9001C25.0997 12.3001 24.9997 14.7001 21.4997 17.6001C21.0997 17.9001 20.9997 18.4001 21.1997 18.7001C21.4997 19.1001 22.4997 19.2001 24.3997 18.2001C28.1997 16.3001 29.4997 13.4001 29.0997 10.0001C28.6997 6.2001 25.3997 3.1001 20.9997 3.1001C18.7997 3.1001 16.4997 3.7001 14.3997 5.0001C5.29971 10.6001 -0.600288 23.2001 0.499712 32.8001C0.899712 35.9001 2.19971 39.2001 4.59971 41.5001C6.19971 43.0001 9.09971 44.8001 12.5997 44.8001C16.3997 44.8001 19.5997 43.4001 22.3997 41.6001ZM78.5997 28.4001C77.5997 27.3001 76.7997 25.6001 76.7997 24.0001C76.7997 23.1001 77.0997 22.1001 77.7997 22.1001C78.3997 22.1001 79.1997 23.0001 79.1997 25.1001C79.1997 26.2001 78.9997 27.3001 78.5997 28.4001Z" fill="#24BECA" />
                        </svg>
                      </li>

                        {/* LOGO 7 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 98 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.7073 20.5972C80.0815 21.2429 80.2039 21.9774 80.2443 22.8032L80.2975 23.9039V31.6007L80.3517 32.7025C80.4603 34.502 81.7874 35.8325 83.6007 35.9457L84.6968 36V23.9039L84.7511 22.8032C84.7961 21.9867 84.9174 21.2382 85.2974 20.588C85.6846 19.921 86.2404 19.3677 86.9091 18.9835C87.5778 18.5993 88.3358 18.3978 89.107 18.3992C89.8782 18.4006 90.6355 18.6049 91.3028 18.9915C91.97 19.3781 92.5239 19.9335 92.9086 20.6018C93.2829 21.2475 93.3995 21.9959 93.4446 22.8032L93.4988 23.9005V31.6007L93.5531 32.7025C93.6663 34.5112 94.983 35.8418 96.8021 35.9457L97.8981 36V22.8032C97.8981 20.4697 96.9714 18.2317 95.3216 16.5813C93.6719 14.9309 91.4342 14.0032 89.1007 14.0023C87.8517 14.001 86.6168 14.2662 85.4786 14.7803C84.3403 15.2944 83.3248 16.0454 82.5 16.9833C81.6748 16.0458 80.6593 15.2949 79.5211 14.7807C78.3829 14.2665 77.1482 14.0007 75.8993 14.0012C74.0721 14.0012 72.3766 14.5555 70.9722 15.513C70.1152 14.5567 68.1979 14.0012 67.0972 14.0012V36L68.1979 35.9457C70.039 35.8244 71.3695 34.5297 71.4411 32.7025L71.5 31.6007V23.9039L71.5543 22.8032C71.6005 21.9728 71.716 21.2429 72.0913 20.5926C72.4789 19.9261 73.0345 19.3728 73.7027 18.9882C74.3709 18.6035 75.1283 18.4009 75.8993 18.4005C76.6709 18.4006 77.4289 18.6037 78.0973 18.9893C78.7656 19.3748 79.3209 19.9294 79.7073 20.5972ZM4.39931 35.9469L5.5 36H21.9988L21.9446 34.9028C21.7956 33.0941 20.5147 31.7728 18.7002 31.655L17.5995 31.6007H7.70139L20.8982 18.3993L20.8439 17.3032C20.7584 15.4761 19.4232 14.1559 17.5995 14.0554L16.4988 14.0058L0 14.0012L0.0542839 15.1019C0.198656 16.8932 1.498 18.2422 3.29746 18.3462L4.39931 18.4005H14.2975L1.10069 31.6018L1.15498 32.7025C1.26354 34.5159 2.57213 35.8291 4.39931 35.9457V35.9469ZM62.7788 17.2212C63.8004 18.2426 64.6107 19.4552 65.1636 20.7898C65.7165 22.1244 66.0011 23.5548 66.0011 24.9994C66.0011 26.444 65.7165 27.8744 65.1636 29.209C64.6107 30.5436 63.8004 31.7562 62.7788 32.7776C60.7148 34.8399 57.9165 35.9983 54.9988 35.9983C52.0812 35.9983 49.2829 34.8399 47.2189 32.7776C42.9236 28.4823 42.9236 21.5166 47.2189 17.2212C48.2396 16.2002 49.4513 15.3902 50.785 14.8375C52.1187 14.2848 53.5482 14.0002 54.9919 14C56.4379 13.999 57.87 14.2831 59.2061 14.836C60.5423 15.3889 61.7563 16.1999 62.7788 17.2224V17.2212ZM59.6661 20.3362C60.9033 21.5744 61.5983 23.2531 61.5983 25.0035C61.5983 26.7538 60.9033 28.4326 59.6661 29.6707C58.4279 30.908 56.7492 31.6029 54.9988 31.6029C53.2485 31.6029 51.5697 30.908 50.3316 29.6707C49.0944 28.4326 48.3994 26.7538 48.3994 25.0035C48.3994 23.2531 49.0944 21.5744 50.3316 20.3362C51.5697 19.099 53.2485 18.404 54.9988 18.404C56.7492 18.404 58.4279 19.099 59.6661 20.3362ZM31.9062 14C33.35 14.0004 34.7795 14.2851 36.1133 14.8381C37.4469 15.391 38.6587 16.2012 39.6792 17.2224C43.9757 21.5166 43.9757 28.4834 39.6792 32.7776C37.6153 34.8399 34.817 35.9983 31.8993 35.9983C28.9816 35.9983 26.1833 34.8399 24.1194 32.7776C19.824 28.4823 19.824 21.5166 24.1194 17.2212C25.14 16.2002 26.3518 15.3902 27.6855 14.8375C29.0192 14.2848 30.4487 14.0002 31.8924 14H31.9062ZM36.5666 20.3339C37.8041 21.5721 38.4994 23.2511 38.4994 25.0017C38.4994 26.7524 37.8041 28.4314 36.5666 29.6696C35.3284 30.9068 33.6497 31.6018 31.8993 31.6018C30.1489 31.6018 28.4702 30.9068 27.232 29.6696C25.9948 28.4314 25.2998 26.7527 25.2998 25.0023C25.2998 23.252 25.9948 21.5732 27.232 20.335C28.4702 19.0978 30.1489 18.4028 31.8993 18.4028C33.6497 18.4028 35.3284 19.0978 36.5666 20.335V20.3339Z" fill="#2D8CFF" />
                        </svg>
                      </li>

                        {/* LOGO 8 */}
                      <li>
                        <svg className="w-28 my-auto" viewBox="0 0 121 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.9251 32.4265L39.3932 28.995C41.0006 30.1854 43.0973 30.8155 45.1945 30.8155C46.7323 30.8155 47.7107 30.2205 47.7107 29.3103C47.6756 26.7891 38.4494 28.7499 38.3792 22.4113C38.3441 19.1898 41.2102 16.7037 45.2646 16.7037C47.6756 16.7037 50.0875 17.2992 51.7997 18.665L50.4279 22.1697C48.8525 21.1567 46.9067 20.4504 45.0546 20.4504C43.7965 20.4504 42.9575 21.0454 42.9575 21.8163C42.9925 24.3024 52.2895 22.9366 52.3942 28.995C52.3942 32.2866 49.5978 34.5978 45.6135 34.5978C42.6783 34.5978 39.9871 33.8976 37.9246 32.4265H37.9251ZM96.3831 27.7524C96.0125 28.4109 95.4735 28.9589 94.8212 29.3403C94.169 29.7217 93.427 29.9227 92.6715 29.9228C90.3167 29.9228 88.4079 28.0101 88.4079 25.6508C88.4079 23.2914 90.3167 21.3787 92.6715 21.3787C93.427 21.3788 94.169 21.5798 94.8212 21.9612C95.4735 22.3426 96.0125 22.8906 96.3831 23.5491L100.465 21.2835C98.9359 18.5513 96.0197 16.7037 92.6715 16.7037C87.7398 16.7037 83.742 20.7091 83.742 25.6508C83.742 30.5919 87.7398 34.5978 92.6715 34.5978C96.0197 34.5978 98.9359 32.7502 100.465 30.018L96.3831 27.7524ZM55.0427 34.2474H60.1453V9.25586H55.0432L55.0427 34.2474ZM103.042 9.25586V34.2474H108.144V26.76L114.19 34.2474H120.713L113.024 25.3525L120.153 17.0526H113.911L108.144 23.9531V9.25586H103.042ZM75.8655 17.0536V19.0851C75.027 17.6841 72.9649 16.7037 70.7981 16.7037C66.3245 16.7037 62.7948 20.661 62.7948 25.6332C62.7948 30.6055 66.3245 34.5978 70.7981 34.5978C72.9649 34.5978 75.027 33.6174 75.8655 32.2164V34.2474H80.9681V17.0536H75.8655ZM75.8655 27.787C75.1317 29.0125 73.5939 29.9223 71.8817 29.9223C69.5264 29.9223 67.6177 28.0101 67.6177 25.6508C67.6177 23.2914 69.5264 21.3787 71.8817 21.3787C73.5939 21.3787 75.1317 22.3241 75.8655 23.5842V27.787Z" fill="black" />
                            <path d="M10.9783 8.70361C9.32472 8.70361 7.98442 10.0469 7.98442 11.7035C7.98402 12.0971 8.06115 12.4868 8.21139 12.8506C8.36163 13.2143 8.58205 13.5449 8.86006 13.8235C9.13806 14.1021 9.46822 14.3231 9.83166 14.4741C10.1951 14.6251 10.5847 14.703 10.9783 14.7034H13.9727V11.7035C13.9733 10.9086 13.6582 10.1461 13.0967 9.58348C12.5352 9.0209 11.7732 8.70441 10.9783 8.70361ZM10.9783 16.7033H2.99412C1.34055 16.7033 0.000244141 18.0466 0.000244141 19.7037C0.000244141 21.3603 1.34055 22.7036 2.99412 22.7036H10.9788C12.6319 22.7036 13.9727 21.3603 13.9727 19.7037C13.9727 18.0466 12.6319 16.7033 10.9783 16.7033Z" fill="#36C5F0" />
                            <path d="M29.9412 19.7037C29.9412 18.0466 28.6004 16.7033 26.9468 16.7033C25.2932 16.7033 23.9529 18.0466 23.9529 19.7037V22.7036H26.9468C27.7417 22.7028 28.5037 22.3863 29.0652 21.8237C29.6268 21.2612 29.9418 20.4986 29.9412 19.7037ZM21.957 19.7037V11.7035C21.9577 10.9086 21.6426 10.1461 21.081 9.58348C20.5195 9.0209 19.7575 8.70441 18.9626 8.70361C17.3091 8.70361 15.9688 10.0469 15.9688 11.7035V19.7032C15.9688 21.3608 17.3091 22.7041 18.9626 22.7041C19.7575 22.7033 20.5195 22.3868 21.081 21.8242C21.6426 21.2617 21.9577 20.4991 21.957 19.7042" fill="#2EB67D" />
                            <path d="M18.9626 38.7036C19.7575 38.7028 20.5195 38.3863 21.081 37.8237C21.6426 37.2612 21.9577 36.4986 21.957 35.7037C21.9577 34.9088 21.6426 34.1463 21.081 33.5837C20.5195 33.0211 19.7575 32.7046 18.9626 32.7038H15.9688V35.7037C15.9688 37.3603 17.3091 38.7036 18.9626 38.7036ZM18.9626 30.7039H26.9473C28.6004 30.7039 29.9412 29.3606 29.9412 27.7035C29.9418 26.9086 29.6268 26.1461 29.0652 25.5835C28.5037 25.0209 27.7417 24.7044 26.9468 24.7036H18.9626C17.3091 24.7036 15.9688 26.0469 15.9688 27.7035C15.9684 28.0971 16.0455 28.4868 16.1957 28.8506C16.346 29.2143 16.5664 29.5449 16.8444 29.8235C17.1224 30.1021 17.4526 30.3231 17.816 30.4741C18.1794 30.6251 18.5691 30.703 18.9626 30.7034" fill="#ECB22E" />
                            <path d="M1.51064e-06 27.7035C-0.000393626 28.0971 0.0767319 28.4868 0.226974 28.8506C0.377217 29.2143 0.597634 29.5449 0.875642 29.8235C1.15365 30.1021 1.4838 30.3231 1.84725 30.4741C2.2107 30.6251 2.60032 30.703 2.99388 30.7034C3.78875 30.7026 4.55075 30.3861 5.11229 29.8235C5.67383 29.261 5.98892 28.4984 5.98826 27.7035V24.7036H2.99388C1.3403 24.7036 1.51064e-06 26.0469 1.51064e-06 27.7035ZM7.98417 27.7035V35.7032C7.98417 37.3603 9.32448 38.7036 10.9781 38.7036C11.7729 38.7028 12.5349 38.3863 13.0965 37.8237C13.658 37.2612 13.9731 36.4986 13.9724 35.7037V27.7035C13.9728 27.3099 13.8957 26.9201 13.7454 26.5563C13.5951 26.1925 13.3747 25.8619 13.0966 25.5833C12.8186 25.3048 12.4883 25.0837 12.1248 24.9327C11.7613 24.7818 11.3716 24.7039 10.9781 24.7036C9.32448 24.7036 7.98417 26.0469 7.98417 27.7035Z" fill="#E01E5A" />
                        </svg>
                      </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}