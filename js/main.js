/**
 * 詠楙企業網站 - 主要JavaScript功能
 */

// 當整個HTML文檔加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化行動裝置選單
    initMobileMenu();
    
    // 初始化輪播功能（如果有需要）
    initSolutionSlider();
});

/**
 * 初始化行動裝置選單功能
 */
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // 如果找到行動裝置選單按鈕
    if (mobileToggle) {
        // 為選單按鈕添加點擊事件
        mobileToggle.addEventListener('click', function() {
            // 切換主導航的active類別來顯示/隱藏選單
            mainNav.classList.toggle('active');
        });
    }
    
    // 處理下拉選單在行動裝置上的點擊事件
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            
            // 下拉選單連結被點擊時
            link.addEventListener('click', function(e) {
                // 如果是行動裝置模式，阻止連結的默認行為（不跳轉）
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    // 找到該下拉選單的所有兄弟下拉選單
                    const siblings = Array.from(dropdowns).filter(item => item !== dropdown);
                    
                    // 關閉所有兄弟下拉選單
                    siblings.forEach(sibling => {
                        sibling.classList.remove('active');
                    });
                    
                    // 切換當前下拉選單的顯示狀態
                    dropdown.classList.toggle('active');
                }
            });
        });
    }
    
    // 當視窗大小改變時，重置選單狀態
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

/**
 * 初始化解決方案輪播功能
 * 這是一個簡單的自動輪播實現
 */
function initSolutionSlider() {
    // 獲取輪播容器
    const slider = document.querySelector('.solutions-slider');
    
    // 如果頁面上沒有輪播元素，則退出函數
    if (!slider) return;
    
    // 獲取所有輪播項目
    const slides = slider.querySelectorAll('.solution-slide');
    
    // 如果輪播項目少於2個，則不需要輪播功能
    if (slides.length < 2) return;
    
    // 設置當前顯示的輪播項目索引
    let currentIndex = 0;
    
    // 設置輪播間隔時間（毫秒）
    const interval = 5000;
    
    // 創建輪播指示器容器
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';
    slider.appendChild(indicators);
    
    // 為每個輪播項目創建一個指示器
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = index === 0 ? 'indicator active' : 'indicator';
        
        // 點擊指示器切換到對應的輪播項目
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
        
        indicators.appendChild(indicator);
    });
    
    // 獲取所有指示器
    const indicatorDots = indicators.querySelectorAll('.indicator');
    
    // 切換到指定索引的輪播項目
    function goToSlide(index) {
        // 移除所有輪播項目和指示器的active類別
        slides.forEach(slide => slide.classList.remove('active'));
        indicatorDots.forEach(dot => dot.classList.remove('active'));
        
        // 為當前輪播項目和指示器添加active類別
        slides[index].classList.add('active');
        indicatorDots[index].classList.add('active');
        
        // 更新當前索引
        currentIndex = index;
    }
    
    // 顯示下一個輪播項目
    function nextSlide() {
        // 計算下一個索引，如果到達末尾則返回第一個
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }
    
    // 初始化輪播：為第一個輪播項目添加active類別
    slides[0].classList.add('active');
    
    // 設置自動輪播定時器
    let slideInterval = setInterval(nextSlide, interval);
    
    // 當鼠標懸停在輪播上時暫停自動輪播
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // 當鼠標離開輪播時恢復自動輪播
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, interval);
    });
}

/**
 * 平滑捲動功能
 * 點擊導航連結時平滑捲動到對應區塊
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // 獲取目標元素的id（去掉#符號）
        const targetId = this.getAttribute('href').substring(1);
        
        // 如果id不為空，找到對應元素並平滑捲動
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // 減去頭部導航的高度
                    behavior: 'smooth'
                });
            }
        }
    });
});

/**
 * 視窗捲動事件處理
 */
window.addEventListener('scroll', function() {
    // 獲取導航元素
    const header = document.querySelector('.header');
    
    // 如果捲動超過100像素，為導航添加陰影類別
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
