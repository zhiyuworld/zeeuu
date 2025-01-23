        // 检测浏览器语言并设置默认语言
        function detectBrowserLanguage() {
            const browserLanguage = navigator.language || navigator.languages[0];
            if (browserLanguage.startsWith('zh')) {
                return 'zh'; // 中文
            } else {
                return 'en'; // 默认英文
            }
        }

        // 默认语言
        let currentLanguage = detectBrowserLanguage();

        // // 切换语言函数
        // function switchLanguage(lang) {
        //     currentLanguage = lang;
        //     updateContent();
        // }

        // 切换语言函数
        function switchLanguage() {
            // 切换语言
            currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
            updateContent();
        }