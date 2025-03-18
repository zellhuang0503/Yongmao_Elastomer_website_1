// 頁尾模板 - 用於在所有頁面中統一顯示頁尾
document.addEventListener('DOMContentLoaded', function() {
    // 獲取相對路徑前綴，用於不同層級頁面的資源引用
    const getPathPrefix = () => {
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            if (path.includes('/industries/') || path.includes('/solutions/')) {
                return '../../'; // 二級子目錄 (如 /pages/industries/mechanical.html)
            } else {
                return '../'; // 一級子目錄 (如 /pages/about.html)
            }
        }
        return './'; // 根目錄 (如 index.html)
    };

    const pathPrefix = getPathPrefix();
    
    // 創建頁尾HTML
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-container">
                <!-- 左側：公司基本聯繫資訊 -->
                <div class="footer-left">
                    <div class="footer-logo">
                        <img src="${pathPrefix}images/LOGO-white.png" alt="詠楙企業有限公司標誌">
                        <p>專業彈性體加工解決方案</p>
                    </div>
                    <div class="footer-description">
                        詠楙企業有限公司是台灣專業的彈性體加工公司，提供各產業的彈性體客製化解決方案。
                    </div>
                    <div class="footer-contact-info">
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="footer-contact-text">
                                <h5>公司地址</h5>
                                <p>434台中市龍井區龍西里龍門路120號</p>
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="footer-contact-text">
                                <h5>電話</h5>
                                <p>(04)2639-1847</p>
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <i class="fas fa-fax"></i>
                            </div>
                            <div class="footer-contact-text">
                                <h5>傳真</h5>
                                <p>(04)2630-2646</p>
                            </div>
                        </div>
                        <div class="footer-contact-item">
                            <div class="footer-contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="footer-contact-text">
                                <h5>電子郵件</h5>
                                <p>yongmao.a214@msa.hinet.net</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 中間：網站頁面連結 (第一部分) -->
                <div class="footer-center">
                    <h3 class="footer-title">網站導覽</h3>
                    <ul class="footer-links">
                        <li><a href="${pathPrefix}index.html">首頁</a></li>
                        <li><a href="${pathPrefix}pages/about.html">關於詠楙</a></li>
                        <li><a href="${pathPrefix}pages/about.html#history">公司歷史</a></li>
                        <li><a href="${pathPrefix}pages/about.html#mission">企業理念</a></li>
                        <li><a href="${pathPrefix}pages/about.html#advantage">核心優勢</a></li>
                        <li><a href="${pathPrefix}pages/industries/mechanical.html">機械製造業</a></li>
                        <li><a href="${pathPrefix}pages/industries/sports.html">運動器材業</a></li>
                        <li><a href="${pathPrefix}pages/industries/food.html">食品製造業</a></li>
                        <li><a href="${pathPrefix}pages/industries/semiconductor.html">半導體製造業</a></li>
                        <li><a href="${pathPrefix}pages/industries/aerospace.html">航太配件</a></li>
                        <li><a href="${pathPrefix}pages/industries/musical.html">樂器配件</a></li>
                    </ul>
                </div>
                
                <!-- 右側：網站頁面連結 (第二部分) 和 CTA -->
                <div class="footer-right">
                    <h3 class="footer-title">解決方案</h3>
                    <ul class="footer-links">
                        <li><a href="${pathPrefix}pages/solutions/surface-precision.html">表面精度優化</a></li>
                        <li><a href="${pathPrefix}pages/solutions/heat-resistant.html">耐高溫彈性體開發</a></li>
                        <li><a href="${pathPrefix}pages/solutions/oil-improvement.html">出油問題改善</a></li>
                        <li><a href="${pathPrefix}pages/solutions/material-bonding.html">異材質結合技術</a></li>
                        <li><a href="${pathPrefix}pages/solutions/surface-treatment.html">表面處理/抗沾黏</a></li>
                        <li><a href="${pathPrefix}pages/news.html">最新消息</a></li>
                        <li><a href="${pathPrefix}pages/contact.html">聯絡我們</a></li>
                        <li><a href="${pathPrefix}pages/contact.html#faq">常見問題</a></li>
                    </ul>
                    <div style="margin-top: var(--spacing-lg);">
                        <h3 class="footer-title">有任何問題嗎？</h3>
                        <p style="color: #ccc; margin-bottom: var(--spacing-md);">填寫表單，我們將盡快回覆您</p>
                        <a href="${pathPrefix}pages/contact.html" class="btn btn-primary">立即諮詢</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 詠楙企業有限公司. 統一編號：27446363. 保留所有權利.</p>
            </div>
        </div>
    </footer>
    `;
    
    // 獲取頁面中的footer元素並替換內容
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.outerHTML = footerHTML;
    } else {
        // 如果頁面中沒有footer元素，則在body結尾添加
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
