﻿(function() {

    // 四种康养模式
    var modeNames = ["文化+健康养生", "生态+健康养生", "休闲+健康养生", "医疗+健康养生"];

    // 四种模式的核心特征向量 [文化, 生态, 休闲, 医疗]
    var modeFeatures = [
        [9, 1, 0, 2],
        [2, 8, 1, 1],
        [1, 2, 9, 1],
        [1, 1, 1, 9]
    ];

    // 各模式的详细信息，包括适合人群、推荐理由、活动、费用档次、图片
    var modeDetail = {
        0: {
            who: "文化探寻者",
            reason: "您对传统文化、历史遗产与民俗风情具有浓厚兴趣，追求旅途中的精神滋养。文化+模式精准匹配您的文化求知需求。",
            activities: "推荐游乐方式：参观历史文化名城、博物馆、非遗体验、传统手工艺课程、禅修静养、文化讲座等。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '2,000 - 4,000 元',
                    detail: '本地文化景点游览、社区文化中心活动、免费博物馆参观、公园太极晨练、老年大学文化课程。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '4,000 - 8,000 元',
                    detail: '周边历史文化名城2-3日游、博物馆深度导览、非遗手工艺体验课、禅修静养周末营、文化主题民宿。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '8,000 - 15,000 元',
                    detail: '跨省文化之旅5-7日、非遗传承人亲授工坊、历史文化研学团、高端禅修度假村、私人文化导游。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '15,000 元以上',
                    detail: '私人定制文化之旅、国际文化交流参访、豪华文化主题酒店、专属摄影师跟拍、头等舱+五星级全程。' }
            ],
            images: [
                { src: 'photos/2.jpg', alt: ' ' },
                { src: 'photos/3.jpg', alt: ' ' },
                { src: 'photos/4.jpg', alt: ' ' }
            ]
        },
        1: {
            who: "自然热衷者",
            reason: "您追求自然环境的疗愈功效，乐于亲近自然、呼吸清新空气。生态+模式提供森林徒步、生态观光、冥想静养、温泉疗养等活动。",
            activities: "推荐游乐方式：森林浴、湿地漫步、海滨冥想、自然瑜伽、生态摄影、温泉疗养。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '1,500 - 3,500 元',
                    detail: '近郊森林公园一日游、社区绿道徒步、免费湿地公园观鸟、公园自然瑜伽晨练、生态摄影基础课。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '3,500 - 7,000 元',
                    detail: '省内生态景区2-3日游、温泉疗养周末、森林徒步跟团、海滨冥想营地、生态民宿体验。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '7,000 - 12,000 元',
                    detail: '跨省生态度假5-7日、国家级森林公园深度游、森林康养基地疗养、专业自然瑜伽导师陪同、高端温泉度假村。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '12,000 元以上',
                    detail: '高端生态度假村私人定制、瑞士/新西兰自然疗愈之旅、直升机观光+徒步、专属养生管家、有机膳食全程。' }
            ],
            images: [
                { src: 'photos/5.jpg', alt: ' ' },
                { src: 'photos/6.jpg', alt: ' ' },
                { src: 'photos/7.jpg', alt: ' ' }
            ]
        },
        2: {
            who: "都市逃离者",
            reason: "您意在缓解压力，享受轻松愉悦的假期，注重高品质住宿与休闲娱乐。休闲+模式为您量身打造轻度假体验。",
            activities: "推荐游乐方式：海滨度假村、温泉酒店、美食之旅、轻松水上活动、SPA护理、文化市集。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '2,500 - 5,000 元',
                    detail: '本地度假酒店1-2晚、周边美食一日游、公园野餐放松、社区SPA体验、轻松市集逛逛。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '5,000 - 10,000 元',
                    detail: '省内海滨/温泉度假村2-3晚、美食探店之旅、水上活动体验、专业SPA护理、高尔夫练习场。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '10,000 - 20,000 元',
                    detail: '跨省高品质度假5-7日、邮轮旅行、豪华温泉酒店、米其林/黑珍珠餐厅体验、私人SPA疗程。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '20,000 元以上',
                    detail: '豪华度假村私人别墅、国际邮轮头等舱、私人厨师定制美食、直升机海岛游、24小时管家服务。' }
            ],
            images: [
                { src: 'photos/8.jpg', alt: ' ' },
                { src: 'photos/9.jpg', alt: ' ' },
                { src: 'photos/10.jpg', alt: ' ' }
            ]
        },
        3: {
            who: "活力养护者",
            reason: "您关注健康管理或康复疗养，需要专业医疗与养生结合的服务。医疗+模式整合优质医疗资源与中医养生。",
            activities: "推荐游乐方式：专业健康体检、中医理疗、康复训练、养生课程、温泉药浴、营养膳食计划。",
            priceTiers: [
                { label: 'A档 · 经济型', tierClass: 'tier-a', price: '3,000 - 6,000 元',
                    detail: '基础健康体检套餐、社区中医理疗、养生讲座与课程、基础康复训练指导、药膳食疗入门。' },
                { label: 'B档 · 舒适型', tierClass: 'tier-b', price: '6,000 - 12,000 元',
                    detail: '综合体检+专业报告解读、专业中医理疗疗程、康复训练私教、养生度假村2-3日、温泉药浴体验。' },
                { label: 'C档 · 品质型', tierClass: 'tier-c', price: '12,000 - 25,000 元',
                    detail: '高端体检+多学科会诊、中医名家调理、定制康复疗程5-7日、高端养生度假、营养师一对一膳食计划。' },
                { label: 'D档 · 高端型', tierClass: 'tier-d', price: '25,000 元以上',
                    detail: '顶级医疗康养综合体、海外医疗旅游、私人医生全程陪护、干细胞/抗衰等前沿项目、总统套房级疗养环境。' }
            ],
            images: [
                { src: 'photos/11.jpg', alt: ' ' },
                { src: 'photos/12.jpg', alt: ' ' },
                { src: 'photos/13.jpg', alt: ' ' }
            ]
        }
    };

    var usrVec = null;
    var bestIdx = null;
    var simScores = null;
    var navStack = [];

    var deepseekApiKey = 'sk-dd48e050272f472b89991d2ff9303b2b';
    var deepseekApiUrl = 'https://api.deepseek.com/chat/completions';
    var chatHistory = [];
    var isAiLoading = false;

    function buildSystemPrompt() {
        var currentResult = '暂无计算结果，用户尚未完成数据化选择。';
        if (bestIdx !== null && simScores) {
            currentResult = '当前计算结果：' +
                modeNames.map(function(name, i) { return name + '相似度' + simScores[i].toFixed(4); }).join('，') +
                '。推荐模式：' + modeNames[bestIdx] + '（匹配度' + simScores[bestIdx].toFixed(4) + '）。' +
                '适合人群：' + modeDetail[bestIdx].who + '。推荐理由：' + modeDetail[bestIdx].reason +
                '。' + modeDetail[bestIdx].activities;
        }
        return '你是"小旅"，一个友好、专业的康养旅游智能助手，服务于"健康养生旅游模式可视化选择系统"（石家庄铁道大学开发）。' +
            '你的职责是帮助用户了解康养旅游模式、使用平台功能、解答相关问题。' +
            '请用简洁、亲切的中文回复，适当使用emoji增加亲和力。' +
            '\n\n【系统功能】' +
            '\n- 左侧导航栏包含：系统首页、研究背景、模式简介、养生方式、数据化选择、可视化分析' +
            '\n- 数据化选择：用户输入文化/生态/休闲/医疗兴趣值（0-10分），系统用余弦相似度算法匹配最佳康养模式' +
            '\n- 可视化分析：提供折线图、饼状图、散点图三种图表对比' +
            '\n- 养生方式：展示四种模式的图片、消费档次（ABCD四档，从经济型到高端型）' +
            '\n- 支持导出Excel和Word报告' +
            '\n- 支持语音朗读推荐结果' +
            '\n\n【四种康养模式】' +
            '\n1. 文化+健康养生：以文化浸润+身心养生为核心，适合文化探寻者，活动包括参观历史文化名城、博物馆、非遗体验、禅修静养等' +
            '\n2. 生态+健康养生：以生态资源+身心修复为核心，适合自然热衷者，活动包括森林浴、湿地漫步、海滨冥想、温泉疗养等' +
            '\n3. 休闲+健康养生：以舒适度假、放松身心为核心，适合都市逃离者，活动包括海滨度假村、温泉酒店、美食之旅、SPA护理等' +
            '\n4. 医疗+健康养生：以专业医疗+健康管理为核心，适合活力养护者，活动包括健康体检、中医理疗、康复训练、营养膳食等' +
            '\n\n【消费档次】每种模式均有ABCD四档：' +
            '\n- A档经济型：低价位，基础体验' +
            '\n- B档舒适型：中等价位，品质体验' +
            '\n- C档品质型：较高价位，高端体验' +
            '\n- D档高端型：高价位，定制奢华体验' +
            '\n\n【算法说明】使用K均值聚类将老年游客划分为四类用户画像（文化探寻者、自然热衷者、都市逃离者、活力养护者），再用余弦相似度量化用户与模式的匹配度' +
            '\n\n【当前状态】' + currentResult +
            '\n\n【注意事项】' +
            '\n- 如果用户问朗读/语音相关，告诉他们点击聊天框下方的&#x1F50A;按钮或快捷按钮中的"朗读推荐"' +
            '\n- 如果用户问页面缩放，告诉他们使用聊天面板中的放大+/缩小-按钮' +
            '\n- 回复控制在200字以内，简洁明了' +
            '\n- 不要编造不存在的功能或数据';
    }

    var allPages = document.querySelectorAll('.page');
    var detailContent = document.getElementById('detailContent');
    var backFromDetail = document.getElementById('backFromDetail');
    var calcResultDisplay = document.getElementById('calcResultDisplay');
    var gotoVisualBtn = document.getElementById('gotoVisualBtn');
    var exportExcelFromCalcBtn = document.getElementById('exportExcelFromCalcBtn');
    var chartSelectionArea = document.getElementById('chartSelectionArea');
    var chartDisplayArea = document.getElementById('chartDisplayArea');
    let myChart = null;

    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    var navItems = document.querySelectorAll('.nav-item[data-page]');
    var homeCards = document.querySelectorAll('.home-card[id]');

    var aiAvatarBtn = document.getElementById('aiAvatarBtn');
    var aiChatPanel = document.getElementById('aiChatPanel');
    var aiChatClose = document.getElementById('aiChatClose');
    var aiChatBody = document.getElementById('aiChatBody');
    var aiChatInput = document.getElementById('aiChatInput');
    var aiSendBtn = document.getElementById('aiSendBtn');
    var aiSpeakLastBtn = document.getElementById('aiSpeakLastBtn');
    var aiBubble = document.getElementById('aiBubble');
    var aiQuickBtns = document.getElementById('aiQuickBtns');
    let lastAiMsg = '';
    let speaking = false;
    let voiceList = [];
    let speechMode = null;
    let audioEl = null;
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    function loadVoices() {
        if (!('speechSynthesis' in window)) return;
        voiceList = window.speechSynthesis.getVoices();
    }

    function getZhVoice() {
        if (voiceList.length === 0) loadVoices();
        return voiceList.find(function(v) { return v.lang === 'zh-CN'; }) ||
               voiceList.find(function(v) { return v.lang.startsWith('zh-CN'); }) ||
               voiceList.find(function(v) { return v.lang.startsWith('zh'); }) ||
               null;
    }

    function showPage(pageId) {
        allPages.forEach(function(p) { p.classList.remove('active'); });
        var target = document.getElementById(pageId);
        if (target) target.classList.add('active');
        updateSidebarActive(pageId);
        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        closeSidebarOnMobile();
    }

    function updateSidebarActive(pageId) {
        navItems.forEach(function(item) {
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function closeSidebarOnMobile() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    }

    function renderResearchBackground() {
        var el = document.getElementById('researchContent');
        el.innerHTML =
            '<div class="detail-title">&#x1F4D6; 研究背景</div>' +
            '<div class="detail-text">当前，全球人口老龄化进程不断加快，中国作为人口大国，老龄化态势尤为突出，已正式步入中度老龄化社会。截至近年，我国60岁及以上老年人口突破3亿，占总人口比例超五分之一，且老年人口规模持续扩大，高龄化、空巢化、失能化趋势日益明显，传统家庭养老与公共养老服务体系面临严峻压力，养老供需矛盾逐渐凸显。与此同时，国家将积极应对人口老龄化上升为国家战略，陆续出台多项政策扶持银发经济发展，从顶层设计为产业发展指明方向，推动养老服务、健康医疗、适老用品、老年文旅等领域规范化、规模化发展。随着社会经济发展，老年群体消费观念逐步转变，从基础的生存型消费，向健康养生、精神文化、智慧养老等品质型、多元化消费升级，消费潜力持续释放。银发经济不仅是破解养老难题、保障老年群体福祉的重要抓手，更成为新时代扩大内需、培育经济发展新动能的关键领域，蕴含巨大市场空间。在此背景下，深入研究银发经济的发展现状、产业痛点与未来趋势，具有极强的现实意义与实践价值。</div>';
    }

    function renderModeIntroduction() {
        var el = document.getElementById('modeIntroContent');
        el.innerHTML =
            '<div class="detail-title">&#x1F9F2; 模式简介</div>' +
            '<div class="detail-text">本文构建文化+、生态+、休闲+、医疗+四类康养旅游模式，并运用K均值聚类+余弦相似度实现用户画像与旅游模式精准匹配。K均值聚类算法以文化体验、自然疗愈、休闲享乐、健康需求为维度，对样本数据迭代聚类，将老年游客划分为自然热衷者、都市逃离者、文化探寻者、活力养护者四类用户画像，实现需求群体精准细分。余弦相似度算法用于量化匹配度，先将用户特征与模式特征转化为四维向量，再通过向量夹角计算相似度，取值范围为[-1,1]，数值越接近1表示匹配度越高。基于算法计算，自然热衷者匹配生态+模式，都市逃离者匹配休闲+模式，文化探寻者匹配文化+模式，活力养护者匹配医疗+模式。该方法以数据驱动实现供需精准对接，有效解决康养旅游同质化、供需错配问题，为老年康养旅游精准服务提供科学支撑。</div>';
    }

    function renderHealthStylePage() {
        var el = document.getElementById('healthStyleContent');
        var html =
            '<div class="detail-title">&#x1F33F; 养生方式总览</div>' +
            '<div class="mode-cards">' +
            '<div class="mode-card" data-mode-index="0">' +
                '<span class="card-title">&#x1F4DA; 文化体验旅游模式</span>' +
                '<div class="card-desc">文化体验康养旅游以文化浸润+身心养生为核心，融合历史文化、民俗风情、传统技艺与禅修静养等内容，依托文化古迹、传统村落、非遗资源打造沉浸式体验场景。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '<div class="mode-card" data-mode-index="1">' +
                '<span class="card-title">&#x1F331; 自然疗愈旅游模式</span>' +
                '<div class="card-desc">自然疗愈康养旅游以生态资源+身心修复为核心，依托森林、湿地、海滨、温泉等自然生态环境，突出自然环境的疗愈功效与生态互动体验。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '<div class="mode-card" data-mode-index="2">' +
                '<span class="card-title">&#x1F9CB; 休闲享乐旅游模式</span>' +
                '<div class="card-desc">休闲享乐康养旅游以舒适度假、放松身心为核心，面向追求高品质旅居体验的老年群体，主打轻松舒适的轻度假形态。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '<div class="mode-card" data-mode-index="3">' +
                '<span class="card-title">&#x1F3E5; 健康需求旅游模式</span>' +
                '<div class="card-desc">健康需求康养旅游以专业医疗+健康管理为核心，面向存在健康维护、康复疗养或亚健康调理需求的老年群体，提供健康体检、中医理疗等服务。</div>' +
                '<div class="card-hint">>> 点击查看图片展示 & 消费档次</div>' +
            '</div>' +
            '</div>';
        el.innerHTML = html;

        setTimeout(function() {
            el.querySelectorAll('.mode-card[data-mode-index]').forEach(function(card) {
                card.addEventListener('click', function() {
                    var modeIdx = parseInt(this.getAttribute('data-mode-index'));
                    showModeDetail(modeIdx);
                });
            });
        }, 100);
    }

    function showModeDetail(modeIdx) {
        var detail = modeDetail[modeIdx];
        var imgHtml = renderImageGallery(detail.images);
        var tiersHtml = renderPriceTiers(detail.priceTiers);
        var contentHtml =
            '<h3 style="color:#2d4a2c; margin-bottom:10px;">' + modeNames[modeIdx] + '</h3>' +
            '<p style="color:#3a5535; line-height:1.7;">' + detail.reason + '</p>' +
            '<p style="color:#3a5535; line-height:1.7;"><strong>' + detail.activities + '</strong></p>' +
            '<h4 style="color:#4a6b3a; margin-top:18px;">🖼 图片展示</h4>' +
            imgHtml +
            '<h4 style="color:#4a6b3a; margin-top:18px;">&#x1F4B5; 消费档次推荐</h4>' +
            tiersHtml;

        detailContent.innerHTML =
            '<div class="detail-title">&#x1F33F; ' + modeNames[modeIdx] + ' · 详情</div>' +
            '<div class="detail-text">' + contentHtml + '</div>';

        navStack.push('healthStyle');
        showPage('detailPage');
        backFromDetail.textContent = '<< 返回养生方式';
    }

    function renderPriceTiers(tiers) {
        var html = '<div class="price-tiers">';
        tiers.forEach(function(t) {
            html +=
                '<div class="tier-card">' +
                  '<span class="tier-label ' + t.tierClass + '">' + t.label + '</span>' +
                  '<div class="tier-price">&#x1F4B0; ' + t.price + '</div>' +
                  '<div class="tier-detail">' + t.detail + '</div>' +
                '</div>';
        });
        html += '</div>';
        return html;
    }

    function renderImageGallery(images) {
        var html = '<div class="image-gallery">';
        images.forEach(function(img) {
            html +=
                '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy" decoding="async" onerror="this.style.display=\'none\';if(this.nextElementSibling)this.nextElementSibling.style.display=\'flex\';">' +
                '<div class="img-fallback" style="display:none;width:100%;max-width:320px;height:220px;background:#e8f0dd;border-radius:20px;align-items:center;justify-content:center;color:#7a9a60;font-size:0.9rem;text-align:center;padding:20px;">' +
                  '🖼 ' + img.alt + '<br><small>（图片待添加）</small>' +
                '</div>';
        });
        html += '</div>';
        return html;
    }

    // 余弦相似度计算函数
    // 通过计算两个向量的夹角余弦值来衡量相似程度
    // 返回值范围 [-1, 1]，值越大表示越相似
    function cosineSim(vecA, vecB) {
        var dot = 0, magA = 0, magB = 0;
        for (var i = 0; i < vecA.length; i++) {
            dot += vecA[i] * vecB[i];
            magA += vecA[i] ** 2;
            magB += vecB[i] ** 2;
        }
        magA = Math.sqrt(magA);
        magB = Math.sqrt(magB);
        if (magA === 0 || magB === 0) return 0;
        return dot / (magA * magB);
    }

    // 执行兴趣匹配计算
    // 读取用户输入的四维兴趣向量，与各模式特征向量计算余弦相似度
    function performCalculation() {
        var culture = parseFloat(document.getElementById('cultureInput').value);
        var eco = parseFloat(document.getElementById('ecoInput').value);
        var leisure = parseFloat(document.getElementById('leisureInput').value);
        var medical = parseFloat(document.getElementById('medicalInput').value);
        if (isNaN(culture) || isNaN(eco) || isNaN(leisure) || isNaN(medical)) {
            alert('请填写所有兴趣值（0-10分）');
            return null;
        }
        if ([culture, eco, leisure, medical].some(function(v) { return v < 0 || v > 10; })) {
            alert('每项兴趣值需在0到10之间');
            return null;
        }
        var userVec = [culture, eco, leisure, medical];
        var sims = modeFeatures.map(function(feat) { return cosineSim(userVec, feat); });
        var best = sims.indexOf(Math.max.apply(null, sims));
        return { userVec: userVec, sims: sims, bestIdx: best };
    }

    function displayResult(result) {
        var sims = result.sims;
        var best = result.bestIdx;
        var detail = modeDetail[best];
        var html = '<strong>🧮 余弦相似度计算结果：</strong><br>';
        modeNames.forEach(function(name, i) {
            html += name + '：' + sims[i].toFixed(4) + '<br>';
        });
        html += '<br>&#x1F929; <span style="color:#1e4a1e; font-weight:bold;">为您推荐：' + modeNames[best] + ' (匹配度 ' + sims[best].toFixed(4) + ')</span>';
        html += '<br><br><strong>&#x26A0; 推荐理由：</strong>' + detail.reason + '<br><strong>&#x26A0; ' + detail.activities + '</strong>';
        html += '<br><br><strong>&#x1F4B5; 消费档次推荐：</strong>';
        html += renderPriceTiers(detail.priceTiers);
        calcResultDisplay.innerHTML = html;
        calcResultDisplay.style.display = 'block';
        gotoVisualBtn.style.display = 'inline-block';
        exportExcelFromCalcBtn.style.display = 'inline-block';

        calcResultDisplay.setAttribute('data-recommend-text',
            '为您推荐' + modeNames[best] + '。' + detail.reason + ' ' + detail.activities);
    }

    function exportSimsToExcel() {
        if (!simScores || bestIdx === null) {
            alert('暂无计算结果，请先完成数据化选择。');
            return;
        }
        var rows = [
            ['康养模式', '余弦相似度']
        ];
        modeNames.forEach(function(name, i) { rows.push([name, simScores[i].toFixed(4)]); });
        rows.push([]);
        rows.push(['推荐模式', modeNames[bestIdx]]);
        rows.push(['用户文化兴趣', usrVec[0]]);
        rows.push(['用户生态兴趣', usrVec[1]]);
        rows.push(['用户休闲兴趣', usrVec[2]]);
        rows.push(['用户医疗兴趣', usrVec[3]]);
        var ws = XLSX.utils.aoa_to_sheet(rows);
        ws['!cols'] = [{ wch: 20 }, { wch: 18 }];
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '康养模式推荐');
        XLSX.writeFile(wb, '康养模式匹配结果.xlsx');
    }

    function exportChartToWord() {
        var canvases = document.querySelectorAll('#chartDisplayArea canvas');
        if (canvases.length === 0) {
            alert('未找到图表，请先生成可视化图表。');
            return;
        }
        if (typeof docx === 'undefined') {
            alert('Word导出组件正在加载，请稍后重试。如持续无法导出，请检查网络连接。');
            return;
        }

        var explanationEl = document.getElementById('chartExplanation');
        var summaryEl = document.getElementById('recommendSummaryBox');
        var explanationText = explanationEl ? explanationEl.innerText : '';
        var summaryText = summaryEl ? summaryEl.innerText : '';

        var Document = docx.Document;
        var Packer = docx.Packer;
        var Paragraph = docx.Paragraph;
        var TextRun = docx.TextRun;
        var ImageRun = docx.ImageRun;
        var HeadingLevel = docx.HeadingLevel;
        var AlignmentType = docx.AlignmentType;
        var BorderStyle = docx.BorderStyle;

        var children = [];

        children.push(new Paragraph({
            children: [new TextRun({ text: '康养模式可视化分析报告', bold: true, size: 36, color: '2D4A2C', font: 'SimSun' })],
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
        }));

        children.push(new Paragraph({
            children: [new TextRun({ text: '图表展示', bold: true, size: 30, font: 'SimSun' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 150 },
        }));

        canvases.forEach(function(canvas) {
            var tempCanvas = document.createElement('canvas');
            var scale = 2;
            tempCanvas.width = canvas.width * scale;
            tempCanvas.height = canvas.height * scale;
            var tempCtx = tempCanvas.getContext('2d');
            tempCtx.scale(scale, scale);
            tempCtx.fillStyle = '#ffffff';
            tempCtx.fillRect(0, 0, canvas.width, canvas.height);
            tempCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

            var dataUrl = tempCanvas.toDataURL('image/png');
            var base64 = dataUrl.split(',')[1];
            var binaryString = atob(base64);
            var bytes = new Uint8Array(binaryString.length);
            for (var i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            var imgWidth = 480;
            var imgHeight = Math.round(480 * canvas.height / canvas.width);

            children.push(new Paragraph({
                children: [
                    new ImageRun({
                        data: bytes,
                        transformation: { width: imgWidth, height: imgHeight },
                        type: 'png',
                    }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
            }));
        });

        if (explanationText) {
            children.push(new Paragraph({
                children: [new TextRun({ text: '图表解读', bold: true, size: 30, font: 'SimSun' })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 150 },
            }));
            explanationText.split('\n').forEach(function(line) {
                if (line.trim()) {
                    children.push(new Paragraph({
                        children: [new TextRun({ text: line.trim(), size: 22, font: 'SimSun' })],
                        spacing: { after: 80 },
                    }));
                }
            });
        }

        if (summaryText) {
            children.push(new Paragraph({
                children: [new TextRun({ text: '推荐总结', bold: true, size: 30, font: 'SimSun' })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 150 },
            }));
            summaryText.split('\n').forEach(function(line) {
                if (line.trim()) {
                    children.push(new Paragraph({
                        children: [new TextRun({ text: line.trim(), size: 22, font: 'SimSun' })],
                        spacing: { after: 80 },
                    }));
                }
            });
        }

        children.push(new Paragraph({
            children: [new TextRun({ text: '由石家庄铁道大学 · 健康养生旅游模式系统生成', size: 20, color: '888888', font: 'SimSun' })],
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC', space: 10 } },
            spacing: { before: 300 },
        }));

        var doc = new Document({
            sections: [{
                properties: {},
                children: children,
            }],
        });

        Packer.toBlob(doc).then(function(blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = '康养模式分析报告.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }).catch(function(err) {
            alert('导出Word失败: ' + err.message);
        });
    }

    function resetToChartSelection() {
        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        chartSelectionArea.style.display = 'block';
        chartDisplayArea.style.display = 'none';
        chartDisplayArea.innerHTML = '';
    }

    function ensureStandardChartLayout() {
        if (!document.getElementById('myChart')) {
            chartDisplayArea.innerHTML =
                '<div class="chart-container"><canvas id="myChart"></canvas></div>' +
                '<div id="chartExplanation" class="result-box" style="margin-top:10px;"></div>' +
                '<div id="recommendSummaryBox" class="recommend-summary"></div>' +
                '<div class="button-row">' +
                  '<button class="btn-return-chart" id="backToChartSelection">🔄 重新选择图表</button>' +
                  '<button class="btn-export-excel" id="exportExcelChart">&#x1F4E4; 导出 Excel</button>' +
                  '<button class="btn-export-word" id="exportWordChart">&#x1F4C4; 导出 Word</button>' +
                  '<button class="btn-return-home" id="backToHomeFromChart">&#x21A9; 返回主页</button>' +
                '</div>';
        }
    }

    function renderPieLayout() {
        chartDisplayArea.innerHTML =
            '<div style="display:flex; gap:25px; flex-wrap:wrap; justify-content:center;">' +
              '<div style="flex:1; min-width:260px;"><canvas id="pieUser" height="260"></canvas></div>' +
              '<div style="flex:1; min-width:260px;"><canvas id="pieMode" height="260"></canvas></div>' +
            '</div>' +
            '<div id="chartExplanation" class="result-box" style="margin-top:15px;"></div>' +
            '<div id="recommendSummaryBox" class="recommend-summary"></div>' +
            '<div class="button-row">' +
              '<button class="btn-return-chart" id="backToChartSelection">🔄 重新选择图表</button>' +
              '<button class="btn-export-excel" id="exportExcelChart">&#x1F4E4; 导出 Excel</button>' +
              '<button class="btn-export-word" id="exportWordChart">&#x1F4C4; 导出 Word</button>' +
              '<button class="btn-return-home" id="backToHomeFromChart">&#x21A9; 返回主页</button>' +
            '</div>';
    }

    function renderChart(chartType) {
        if (!usrVec || bestIdx === null) {
            alert('请先完成数据计算');
            return;
        }
        var userVec = usrVec;
        var bestModeIdx = bestIdx;
        var modeVec = modeFeatures[bestModeIdx];
        var dimLabels = ['文化兴趣', '生态兴趣', '休闲兴趣', '医疗兴趣'];
        var detail = modeDetail[bestModeIdx];

        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        chartSelectionArea.style.display = 'none';
        chartDisplayArea.style.display = 'block';

        if (chartType === 'pie') {
            renderPieLayout();
            var userColors = ['#6a994e', '#a7c957', '#f2e8cf', '#bc6c25'];
            var modeColors = ['#386641', '#dda15e', '#fefae0', '#a98467'];
            new Chart(document.getElementById('pieUser'), {
                type: 'pie',
                data: {
                    labels: dimLabels,
                    datasets: [{ data: userVec, backgroundColor: userColors, borderColor: '#ffffff', borderWidth: 2 }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: { display: true, text: '您的兴趣分布', color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 12 : 15 } },
                        legend: { position: 'bottom', labels: { font: { size: window.innerWidth < 768 ? 10 : 12 }, padding: 10 } }
                    }
                }
            });
            new Chart(document.getElementById('pieMode'), {
                type: 'pie',
                data: {
                    labels: dimLabels,
                    datasets: [{ data: modeVec, backgroundColor: modeColors, borderColor: '#ffffff', borderWidth: 2 }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: { display: true, text: '推荐模式：' + modeNames[bestModeIdx], color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 12 : 15 } },
                        legend: { position: 'bottom', labels: { font: { size: window.innerWidth < 768 ? 10 : 12 }, padding: 10 } }
                    }
                }
            });
            document.getElementById('chartExplanation').innerHTML =
                '<strong>&#x1F967; 饼图解读：</strong>左侧为用户兴趣占比（多彩自然色），右侧为推荐模式特征占比（大地暖色系），颜色对比鲜明且结构相似度极高。';
        } else {
            ensureStandardChartLayout();
            var canvas = document.getElementById('myChart');
            var ctx = canvas.getContext('2d');
            if (chartType === 'line') {
                myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: dimLabels,
                        datasets: [
                            { label: '您的兴趣值', data: userVec, borderColor: '#4c8b4c',
                                backgroundColor: 'rgba(76,139,76,0.1)', tension: 0.2, pointRadius: 6,
                                pointBackgroundColor: '#2d5a2d', borderWidth: 3 },
                            { label: '推荐模式：' + modeNames[bestModeIdx], data: modeVec,
                                borderColor: '#d98c5f', backgroundColor: 'rgba(217,140,95,0.1)',
                                tension: 0.2, pointRadius: 6, pointBackgroundColor: '#b45f2a',
                                borderWidth: 3, borderDash: [6, 3] }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: { intersect: false, mode: 'index' },
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: { font: { size: window.innerWidth < 768 ? 11 : 13 }, padding: 15, usePointStyle: true }
                            }
                        },
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { font: { size: window.innerWidth < 768 ? 10 : 12 } }
                            },
                            y: {
                                beginAtZero: true,
                                max: 10,
                                grid: { color: 'rgba(0,0,0,0.06)' },
                                ticks: { font: { size: window.innerWidth < 768 ? 10 : 12 } }
                            }
                        }
                    }
                });
                document.getElementById('chartExplanation').innerHTML =
                    '<strong>&#x1F4C9; 折线图解读：</strong>绿色实线代表您的兴趣分布，橙色虚线为推荐模式的特征。两者在关键维度上高度重合。';
            } else if (chartType === 'scatter') {
                myChart = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [
                            { label: '您的兴趣点', data: userVec.map(function(v, i) { return { x: i, y: v }; }),
                                backgroundColor: '#2d6a4f', pointRadius: window.innerWidth < 768 ? 8 : 10, pointHoverRadius: 13 },
                            { label: '推荐模式点', data: modeVec.map(function(v, i) { return { x: i, y: v }; }),
                                backgroundColor: '#d97c4a', pointRadius: window.innerWidth < 768 ? 8 : 10, pointHoverRadius: 13, pointStyle: 'triangle' }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: { intersect: false, mode: 'index' },
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: { font: { size: window.innerWidth < 768 ? 11 : 13 }, padding: 15, usePointStyle: true }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        var dimLabels = ['文化', '生态', '休闲', '医疗'];
                                        return context.dataset.label + ' - ' + dimLabels[context.parsed.x] + ': ' + context.parsed.y;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                min: -0.5,
                                max: 3.5,
                                ticks: {
                                    stepSize: 1,
                                    callback: function(value) {
                                        var labels = ['文化', '生态', '休闲', '医疗'];
                                        return labels[value] || '';
                                    },
                                    font: { size: window.innerWidth < 768 ? 9 : 12 }
                                },
                                title: { display: true, text: '兴趣维度', color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 10 : 13 } },
                                grid: { color: 'rgba(0,0,0,0.06)' }
                            },
                            y: {
                                beginAtZero: true,
                                max: 10,
                                title: { display: true, text: '兴趣值', color: '#2d4a2c', font: { size: window.innerWidth < 768 ? 10 : 13 } },
                                grid: { color: 'rgba(0,0,0,0.06)' },
                                ticks: { font: { size: window.innerWidth < 768 ? 9 : 12 } }
                            }
                        }
                    }
                });
                document.getElementById('chartExplanation').innerHTML =
                    '<strong>&#x26AA; 散点图解读：</strong>绿色圆点为您，橙色三角为推荐模式，位置越接近匹配越佳。';
            }
        }

        var summaryEl = document.getElementById('recommendSummaryBox');
        if (summaryEl) {
            summaryEl.innerHTML =
                '<strong>&#x26A0; 最终推荐：' + modeNames[bestModeIdx] + '</strong><br><em>适合人群：' + detail.who + '</em><br><strong>推荐理由：</strong>' + detail.reason + '<br><strong>' + detail.activities + '</strong>';
            summaryEl.innerHTML += '<br><br><strong>&#x1F4B5; 消费档次推荐：</strong>';
            summaryEl.innerHTML += renderPriceTiers(detail.priceTiers);

            summaryEl.setAttribute('data-recommend-text',
                '最终推荐' + modeNames[bestModeIdx] + '。适合人群：' + detail.who + '。' + detail.reason + ' ' + detail.activities);
        }
    }

    function speakText(text) {
        if (speaking) {
            stopSpeaking();
            return;
        }
        if ('speechSynthesis' in window && window.speechSynthesis) {
            tryNativeSpeech(text);
        } else {
            tryAudioTTS(text);
        }
    }

    function tryNativeSpeech(text) {
        window.speechSynthesis.cancel();
        loadVoices();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        utterance.volume = 1;
        var zhVoice = getZhVoice();
        if (zhVoice) {
            utterance.voice = zhVoice;
        }
        utterance.onstart = function() {
            speaking = true;
            speechMode = 'native';
            updateSpeakBtnState();
        };
        utterance.onend = function() {
            speaking = false;
            speechMode = null;
            updateSpeakBtnState();
        };
        utterance.onerror = function(e) {
            if (e.error !== 'canceled') {
                tryAudioTTS(text);
            } else {
                speaking = false;
                speechMode = null;
                updateSpeakBtnState();
            }
        };
        if (isIOS) {
            window.speechSynthesis.speak(utterance);
        } else {
            setTimeout(function() {
                window.speechSynthesis.speak(utterance);
            }, 50);
        }
    }

    function tryAudioTTS(text) {
        var maxLen = 200;
        var chunks = [];
        var remaining = text;
        while (remaining.length > 0) {
            chunks.push(remaining.substring(0, maxLen));
            remaining = remaining.substring(maxLen);
        }
        speaking = true;
        speechMode = 'audio';
        updateSpeakBtnState();
        playAudioChunks(chunks, 0, text);
    }

    function playAudioChunks(chunks, index, originalText) {
        if (index >= chunks.length || !speaking) {
            speaking = false;
            speechMode = null;
            updateSpeakBtnState();
            return;
        }
        var audio = new Audio();
        audio.src = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=' + encodeURIComponent(chunks[index]);
        audioEl = audio;
        audio.onended = function() {
            playAudioChunks(chunks, index + 1, originalText);
        };
        audio.onerror = function() {
            speaking = false;
            speechMode = null;
            audioEl = null;
            updateSpeakBtnState();
            copyTextFallback(originalText);
        };
        audio.play().catch(function() {
            speaking = false;
            speechMode = null;
            audioEl = null;
            updateSpeakBtnState();
            copyTextFallback(originalText);
        });
    }

    function copyTextFallback(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                alert('当前浏览器不支持语音朗读，推荐内容已复制到剪贴板，您可以使用手机自带的朗读功能阅读。');
            }).catch(function() {
                fallbackCopyText(text);
            });
        } else {
            fallbackCopyText(text);
        }
    }

    function fallbackCopyText(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('当前浏览器不支持语音朗读，推荐内容已复制到剪贴板，您可以使用手机自带的朗读功能阅读。');
        } catch (e) {
            alert('当前浏览器不支持语音朗读，请使用Chrome、Safari或Edge浏览器访问。');
        }
        document.body.removeChild(textarea);
    }

    function stopSpeaking() {
        if (speechMode === 'native' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        if (audioEl) {
            audioEl.pause();
            audioEl.currentTime = 0;
            audioEl = null;
        }
        speaking = false;
        speechMode = null;
        updateSpeakBtnState();
    }

    function updateSpeakBtnState() {
        var btn = document.getElementById('aiSpeakLastBtn');
        if (btn) {
            if (speaking) {
                btn.textContent = '&#x23F9;';
                btn.title = '停止朗读';
                btn.classList.add('speaking');
            } else {
                btn.textContent = '&#x1F50A;';
                btn.title = '朗读最后一条回复';
                btn.classList.remove('speaking');
            }
        }
    }

    function speakLastRecommendation() {
        var textToSpeak = '';
        var summaryEl = document.getElementById('recommendSummaryBox');
        if (summaryEl && summaryEl.getAttribute('data-recommend-text')) {
            textToSpeak = summaryEl.getAttribute('data-recommend-text');
        } else if (calcResultDisplay && calcResultDisplay.getAttribute('data-recommend-text')) {
            textToSpeak = calcResultDisplay.getAttribute('data-recommend-text');
        } else if (bestIdx !== null) {
            var detail = modeDetail[bestIdx];
            textToSpeak = '为您推荐' + modeNames[bestIdx] + '。适合人群：' + detail.who + '。' + detail.reason + ' ' + detail.activities;
        } else {
            textToSpeak = '暂无推荐结果，请先完成数据化选择。';
        }
        speakText(textToSpeak);
    }

    function addChatMessage(type, text) {
        var msgDiv = document.createElement('div');
        msgDiv.className = 'ai-msg ' + type;
        msgDiv.innerHTML = text;
        aiChatBody.appendChild(msgDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
        if (type === 'assistant') {
            lastAiMsg = text.replace(/<[^>]*>/g, '');
        }
    }

    function handleLocalCommand(query) {
        var q = query.trim().toLowerCase();
        if (q.includes('朗读') || q.includes('读出') || q.includes('语音播报')) {
            if (speaking) {
                stopSpeaking();
                return '&#x23F9; 已停止语音朗读。再次点击"朗读推荐"可重新朗读。';
            } else {
                if (bestIdx === null) {
                    return '&#x26A0; 暂无推荐结果，请先完成数据化选择后再使用朗读功能。';
                } else {
                    speakLastRecommendation();
                    return '&#x1F50A; 正在朗读推荐内容！点击聊天框下方的 &#x23F9; 按钮可停止朗读。';
                }
            }
        }
        return null;
    }

    // 调用DeepSeek API进行智能对话
    // 将用户消息和历史对话发送给DeepSeek模型，返回AI回复
    function callDeepSeekAPI(userMessage) {
        chatHistory.push({ role: 'user', content: userMessage });

        var messages = [{ role: 'system', content: buildSystemPrompt() }];
        var recentHistory = chatHistory.slice(-10);
        messages = messages.concat(recentHistory);

        return fetch(deepseekApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + deepseekApiKey
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: messages,
                max_tokens: 500,
                temperature: 0.7,
                stream: false
            })
        }).then(function(res) {
            if (!res.ok) {
                throw new Error('API请求失败: ' + res.status);
            }
            return res.json();
        }).then(function(data) {
            var reply = data.choices && data.choices[0] && data.choices[0].message
                ? data.choices[0].message.content
                : '抱歉，我暂时无法回答，请稍后再试。';
            chatHistory.push({ role: 'assistant', content: reply });
            if (chatHistory.length > 20) {
                chatHistory = chatHistory.slice(-16);
            }
            return reply;
        }).catch(function(err) {
            chatHistory.pop();
            return '&#x26A0; 网络连接异常，请检查网络后重试。(' + err.message + ')';
        });
    }

    function handleAIQuery(query) {
        if (!query.trim() || isAiLoading) return;
        addChatMessage('user', query);
        aiChatInput.value = '';

        var localResponse = handleLocalCommand(query);
        if (localResponse !== null) {
            setTimeout(function() {
                addChatMessage('assistant', localResponse);
            }, 200);
            return;
        }

        isAiLoading = true;
        var loadingDiv = document.createElement('div');
        loadingDiv.className = 'ai-msg assistant';
        loadingDiv.id = 'aiLoadingMsg';
        loadingDiv.innerHTML = '🤔 思考中<span class="loading-dots">...</span>';
        aiChatBody.appendChild(loadingDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;

        callDeepSeekAPI(query).then(function(reply) {
            var loadEl = document.getElementById('aiLoadingMsg');
            if (loadEl) loadEl.remove();
            isAiLoading = false;
            var safeReply = reply
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n/g, '<br>');
            addChatMessage('assistant', safeReply);
        });
    }

    function toggleAIChat() {
        var isOpen = aiChatPanel.classList.contains('open');
        if (isOpen) {
            aiChatPanel.classList.remove('open');
            aiBubble.style.display = 'block';
        } else {
            aiChatPanel.classList.add('open');
            aiBubble.style.display = 'none';
            aiChatBody.scrollTop = aiChatBody.scrollHeight;
        }
    }

    function zoomPage(factor) {
        var body = document.body;
        var currentZoom = parseFloat(body.style.fontSize || '1') || 1;
        var newZoom = Math.max(0.7, Math.min(1.6, currentZoom + factor));
        body.style.fontSize = newZoom + 'rem';
    }

    function resetZoom() {
        document.body.style.fontSize = '1rem';
    }

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var pageId = this.getAttribute('data-page');
            if (pageId === 'researchPage') renderResearchBackground();
            if (pageId === 'modeIntroPage') renderModeIntroduction();
            if (pageId === 'healthStylePage') renderHealthStylePage();
            if (pageId === 'visualPage') {
                if (!usrVec || bestIdx === null) {
                    alert('请先通过"数据化选择"完成计算。');
                    return;
                }
                resetToChartSelection();
            }
            showPage(pageId);
        });
    });

    homeCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var cardId = this.id;
            if (cardId === 'homeCardResearch') {
                renderResearchBackground();
                showPage('researchPage');
            } else if (cardId === 'homeCardMode') {
                renderModeIntroduction();
                showPage('modeIntroPage');
            } else if (cardId === 'homeCardHealth') {
                renderHealthStylePage();
                showPage('healthStylePage');
            } else if (cardId === 'homeCardData') {
                showPage('dataSelectPage');
            } else if (cardId === 'homeCardVisual') {
                if (!usrVec || bestIdx === null) {
                    alert('请先通过"数据化选择"完成计算。');
                    return;
                }
                resetToChartSelection();
                showPage('visualPage');
            }
        });
    });

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    backFromDetail.addEventListener('click', function() {
        if (navStack.length > 0) {
            var prevPage = navStack.pop();
            if (prevPage === 'healthStyle') {
                renderHealthStylePage();
                showPage('healthStylePage');
            } else {
                showPage('homePage');
            }
        } else {
            showPage('homePage');
        }
    });

    document.getElementById('quickCalcBtn').addEventListener('click', function() {
        var r = performCalculation();
        if (r) {
            usrVec = r.userVec;
            bestIdx = r.bestIdx;
            simScores = r.sims;
            displayResult(r);
        }
    });

    exportExcelFromCalcBtn.addEventListener('click', exportSimsToExcel);

    gotoVisualBtn.addEventListener('click', function() {
        resetToChartSelection();
        showPage('visualPage');
    });

    chartSelectionArea.addEventListener('click', function(e) {
        if (e.target.classList.contains('chart-type-btn')) {
            renderChart(e.target.getAttribute('data-chart'));
        }
    });

    chartDisplayArea.addEventListener('click', function(e) {
        if (e.target.id === 'backToChartSelection') resetToChartSelection();
        if (e.target.id === 'backToHomeFromChart') {
            resetToChartSelection();
            showPage('homePage');
        }
        if (e.target.id === 'exportExcelChart') exportSimsToExcel();
        if (e.target.id === 'exportWordChart') exportChartToWord();
    });

    aiAvatarBtn.addEventListener('click', toggleAIChat);
    aiChatClose.addEventListener('click', function() {
        aiChatPanel.classList.remove('open');
        aiBubble.style.display = 'block';
    });
    aiSendBtn.addEventListener('click', function() { handleAIQuery(aiChatInput.value); });
    aiChatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleAIQuery(aiChatInput.value);
    });
    aiSpeakLastBtn.addEventListener('click', function() {
        if (speaking) {
            stopSpeaking();
        } else if (lastAiMsg) {
            speakText(lastAiMsg);
        } else {
            speakLastRecommendation();
        }
    });

    aiQuickBtns.addEventListener('click', function(e) {
        if (e.target.classList.contains('ai-quick-btn')) {
            var q = e.target.getAttribute('data-q');
            handleAIQuery(q);
        }
    });

    document.getElementById('aiZoomIn').addEventListener('click', function() { zoomPage(0.1); });
    document.getElementById('aiZoomOut').addEventListener('click', function() { zoomPage(-0.1); });
    document.getElementById('aiZoomReset').addEventListener('click', resetZoom);

    if ('speechSynthesis' in window) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = function() {
            loadVoices();
        };
        setInterval(function() {
            if (speaking && speechMode === 'native' && !window.speechSynthesis.speaking) {
                speaking = false;
                speechMode = null;
                updateSpeakBtnState();
            }
        }, 1000);
    }

    // 首页打字机效果的文字列表
    var typewriterTexts = [
        '实时化旅游模式系统',
        '健康养生 · 智能推荐',
        '康养旅游 · 数据驱动',
        '余弦相似度 · 精准匹配',
        '银发经济 · 品质生活'
    ];
    var typewriterIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typewriterEl = document.getElementById('homeTypewriterText');
    var cursorEl = document.getElementById('typewriterCursor');

    // 打字机效果核心函数
    // 实现打字->停顿->删除->下一条的打字机动画效果
    function typewriterTick() {
        var currentText = typewriterTexts[typewriterIndex];
        if (!isDeleting) {
            charIndex++;
            typewriterEl.textContent = currentText.substring(0, charIndex);
            if (charIndex === currentText.length) {
                setTimeout(function() {
                    isDeleting = true;
                    typewriterTick();
                }, 2000);
                return;
            }
            setTimeout(typewriterTick, 120);
        } else {
            charIndex--;
            typewriterEl.textContent = currentText.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
                setTimeout(typewriterTick, 500);
                return;
            }
            setTimeout(typewriterTick, 60);
        }
    }
    typewriterTick();

    // 轮播图数据列表
    var carouselImages = [
        { src: 'photos/1.jpg', caption: '&#x1F33F; 康养旅游 · 自然疗愈之旅' },
        { src: 'photos/2.jpg', caption: '&#x1F4DA; 文化体验 · 历史名城探秘' },
        { src: 'photos/5.jpg', caption: '&#x1F331; 生态养生 · 森林氧吧漫步' },
        { src: 'photos/8.jpg', caption: '&#x1F9CB; 休闲度假 · 温泉SPA享乐' },
        { src: 'photos/11.jpg', caption: '&#x1F3E5; 健康管理 · 中医理疗养生' },
        { src: 'photos/3.jpg', caption: '&#x1F3DE; 银发旅游 · 品质生活新方式' },
        { src: 'photos/6.jpg', caption: '&#x1F30A; 滨海康养 · 海天一色' },
        { src: 'photos/9.jpg', caption: '&#x267B; 温泉疗养 · 身心舒展' },
        { src: 'photos/12.jpg', caption: '&#x1F48A; 医养结合 · 科学养生' },
        { src: 'photos/4.jpg', caption: '&#x1F3EF; 非遗体验 · 文化传承' },
        { src: 'photos/7.jpg', caption: '&#x1F3D4; 生态度假 · 回归自然' },
        { src: 'photos/10.jpg', caption: '&#x1F37D; 美食之旅 · 舌尖养生' },
        { src: 'photos/13.jpg', caption: '&#x1F9D8; 康养理疗 · 活力焕新' }
    ];
    var currentSlide = 0;
    var carouselTrack = document.getElementById('carouselTrack');
    var carouselDots = document.getElementById('carouselDots');
    var autoSlideTimer = null;

    // 初始化轮播图组件
    // 动态生成幻灯片和指示点，并启动自动播放
    function initCarousel() {
        var trackHtml = '';
        var dotsHtml = '';
        carouselImages.forEach(function(img, i) {
            trackHtml +=
                '<div class="carousel-slide">' +
                    '<img src="' + img.src + '" alt="' + img.caption + '" loading="lazy" decoding="async">' +
                    '<div class="carousel-slide-overlay">' + img.caption + '</div>' +
                '</div>';
            dotsHtml += '<button class="carousel-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
        });
        carouselTrack.innerHTML = trackHtml;
        carouselDots.innerHTML = dotsHtml;
        startAutoSlide();
    }

    function goToSlide(index) {
        currentSlide = index;
        if (currentSlide >= carouselImages.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = carouselImages.length - 1;
        carouselTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        var dots = carouselDots.querySelectorAll('.carousel-dot');
        dots.forEach(function(d, i) {
            d.classList.toggle('active', i === currentSlide);
        });
    }

    function startAutoSlide() {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(function() {
            goToSlide(currentSlide + 1);
        }, 4000);
    }

    document.getElementById('carouselPrev').addEventListener('click', function() {
        goToSlide(currentSlide - 1);
        startAutoSlide();
    });
    document.getElementById('carouselNext').addEventListener('click', function() {
        goToSlide(currentSlide + 1);
        startAutoSlide();
    });
    carouselDots.addEventListener('click', function(e) {
        if (e.target.classList.contains('carousel-dot')) {
            goToSlide(parseInt(e.target.getAttribute('data-index')));
            startAutoSlide();
        }
    });
    initCarousel();

    var newsData = [
        {
            tag: '政策',
            tagClass: 'news-tag-policy',
            title: '国务院办公厅印发《关于发展银发经济增进老年人福祉的意见》',
            date: '2025-01',
            url: 'https://www.gov.cn/zhengfu/content/202401/content_6926519.htm'
        },
        {
            tag: '行业',
            tagClass: 'news-tag-industry',
            title: '文旅部：推动康养旅游高质量发展，打造一批国家级康养基地',
            date: '2025-03',
            url: 'https://www.mct.gov.cn/'
        },
        {
            tag: '健康',
            tagClass: 'news-tag-health',
            title: '国家卫健委：老龄健康促进行动持续推进，中医养生融入社区',
            date: '2025-02',
            url: 'https://www.nhc.gov.cn/'
        },
        {
            tag: '养老',
            tagClass: 'news-tag-aging',
            title: '民政部：全国养老服务体系建设取得新进展，社区养老覆盖率达90%',
            date: '2025-04',
            url: 'https://www.mca.gov.cn/'
        },
        {
            tag: '行业',
            tagClass: 'news-tag-industry',
            title: '2025中国康养旅游市场规模预计突破千亿，生态疗愈成新热点',
            date: '2025-05',
            url: 'https://www.ctaweb.org.cn/'
        },
        {
            tag: '政策',
            tagClass: 'news-tag-policy',
            title: '十四五老龄事业规划：构建居家社区机构相协调的养老服务体系',
            date: '2024-12',
            url: 'https://www.gov.cn/'
        }
    ];

    function initNews() {
        var grid = document.getElementById('homeNewsGrid');
        var html = '';
        newsData.forEach(function(news) {
            html +=
                '<a class="home-news-card" href="' + news.url + '" target="_blank" rel="noopener noreferrer">' +
                    '<span class="home-news-card-tag ' + news.tagClass + '">' + news.tag + '</span>' +
                    '<div class="home-news-card-title">' + news.title + '</div>' +
                    '<div class="home-news-card-date">' + news.date + '</div>' +
                '</a>';
        });
        grid.innerHTML = html;
    }
    initNews();

    var cSlider = document.getElementById('cSlider');
    var eSlider = document.getElementById('eSlider');
    var lSlider = document.getElementById('lSlider');
    var mSlider = document.getElementById('mSlider');
    var cVal = document.getElementById('cVal');
    var eVal = document.getElementById('eVal');
    var lVal = document.getElementById('lVal');
    var mVal = document.getElementById('mVal');
    var sideResult = document.getElementById('sideResult');
    var currentChartType = null;

    function syncSlidersFromUserVec() {
        if (usrVec) {
            cSlider.value = usrVec[0];
            eSlider.value = usrVec[1];
            lSlider.value = usrVec[2];
            mSlider.value = usrVec[3];
            cVal.textContent = usrVec[0];
            eVal.textContent = usrVec[1];
            lVal.textContent = usrVec[2];
            mVal.textContent = usrVec[3];
        }
        updateVisualSidebarResult();
    }

    function updateVisualSidebarResult() {
        var vec = [
            parseFloat(cSlider.value),
            parseFloat(eSlider.value),
            parseFloat(lSlider.value),
            parseFloat(mSlider.value)
        ];
        var sims = modeFeatures.map(function(mf) { return cosineSim(vec, mf); });
        var maxSim = -1;
        var maxIdx = 0;
        sims.forEach(function(s, i) {
            if (s > maxSim) { maxSim = s; maxIdx = i; }
        });
        sideResult.innerHTML =
            '<strong>&#x1F929; 推荐模式：</strong>' + modeNames[maxIdx] + '<br>' +
            '<strong>匹配度：</strong>' + maxSim.toFixed(4) + '<br>' +
            sims.map(function(s, i) {
                return modeNames[i] + '：' + s.toFixed(4);
            }).join('<br>');
    }

    function onSliderChange() {
        cVal.textContent = parseFloat(cSlider.value).toFixed(1);
        eVal.textContent = parseFloat(eSlider.value).toFixed(1);
        lVal.textContent = parseFloat(lSlider.value).toFixed(1);
        mVal.textContent = parseFloat(mSlider.value).toFixed(1);
        updateVisualSidebarResult();

        var vec = [
            parseFloat(cSlider.value),
            parseFloat(eSlider.value),
            parseFloat(lSlider.value),
            parseFloat(mSlider.value)
        ];
        usrVec = vec;
        var sims = modeFeatures.map(function(mf) { return cosineSim(vec, mf); });
        var maxSim = -1;
        var maxIdx = 0;
        sims.forEach(function(s, i) {
            if (s > maxSim) { maxSim = s; maxIdx = i; }
        });
        bestIdx = maxIdx;
        simScores = sims;

        if (currentChartType && chartDisplayArea.style.display !== 'none') {
            renderChart(currentChartType);
        }
    }

    cSlider.addEventListener('input', onSliderChange);
    eSlider.addEventListener('input', onSliderChange);
    lSlider.addEventListener('input', onSliderChange);
    mSlider.addEventListener('input', onSliderChange);

    var sidePanel = document.getElementById('sidePanel');
    var sideHead = document.getElementById('sideHead');
    var sideExpanded = false;

    function toggleSidePanel() {
        sideExpanded = !sideExpanded;
        if (sideExpanded) {
            sidePanel.classList.add('expanded');
        } else {
            sidePanel.classList.remove('expanded');
        }
    }

    if (sideHead) {
        sideHead.addEventListener('click', toggleSidePanel);
    }

    var origRenderChart = renderChart;
    renderChart = function(chartType) {
        currentChartType = chartType;
        origRenderChart(chartType);
    };

    var origResetToChartSelection = resetToChartSelection;
    resetToChartSelection = function() {
        currentChartType = null;
        origResetToChartSelection();
    };

    var origShowPage = showPage;
    showPage = function(pageId) {
        origShowPage(pageId);
        if (pageId === 'visualPage' && usrVec) {
            syncSlidersFromUserVec();
        }
    };

    var origRenderPriceTiers = renderPriceTiers;
    renderPriceTiers = function(tiers) {
        var html = '<div class="price-tiers">';
        tiers.forEach(function(t, idx) {
            html +=
                '<div class="tier-card tier-card-clickable" data-tier-label="' + t.label + '" data-tier-price="' + t.price + '" data-tier-detail="' + t.detail.replace(/"/g, '&quot;') + '">' +
                  '<div class="tier-tooltip">&#x1F4AC; 点击问我了解详情！</div>' +
                  '<span class="tier-label ' + t.tierClass + '">' + t.label + '</span>' +
                  '<div class="tier-price">&#x1F4B0; ' + t.price + '</div>' +
                  '<div class="tier-detail">' + t.detail + '</div>' +
                '</div>';
        });
        html += '</div>';
        setTimeout(function() {
            document.querySelectorAll('.tier-card-clickable').forEach(function(card) {
                card.onclick = function() {
                    var label = this.getAttribute('data-tier-label');
                    var price = this.getAttribute('data-tier-price');
                    var detail = this.getAttribute('data-tier-detail');
                    var question = '请详细介绍一下' + label + '（价格：' + price + '），包括适合人群、具体体验内容和注意事项';
                    if (!aiChatPanel.classList.contains('open')) {
                        aiChatPanel.classList.add('open');
                        aiBubble.style.display = 'none';
                    }
                    handleAIQuery(question);
                };
            });
        }, 200);
        return html;
    };

})();
