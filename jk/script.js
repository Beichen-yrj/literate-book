        (function() {

            var modeNames = ["文化+健康养生", "生态+健康养生", "休闲+健康养生", "医疗+健康养生"];
            var modeFeatures = [
                [9, 1, 0, 2],
                [2, 8, 1, 1],
                [1, 2, 9, 1],
                [1, 1, 1, 9]
            ];

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
                        { src: 'photos/2.jpg', alt: ' '
                             },
                        { src: 'photos/3.jpg', alt: ' '
                         },
                        { src: 'photos/4.jpg', alt: ' '
                            }
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
                        { src: 'photos/5.jpg', alt: ' '
                            },
                        { src: 'photos/6.jpg', alt: ' '
                            },
                        { src: 'photos/7.jpg', alt: ' '
                             }
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
                        { src: 'photos/8.jpg', alt: ' '
                           },
                        { src: 'photos/9.jpg', alt: ' '
                            },
                        { src: 'photos/10.jpg', alt: ' '
                            }
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
                        { src: 'photos/11.jpg', alt: ' '
                          },
                        { src: 'photos/12.jpg', alt: ' '
                           },
                        { src: 'photos/13.jpg', alt: ' '
                            }
                    ]
                }
            };

            let usrVec = null;
            let bestIdx = null;
            let simScores = null;
            let navStack = []; // 用于详情页返回导航

            var homePage = document.getElementById('homePage');
            var detailPage = document.getElementById('detailPage');
            var analysisPage = document.getElementById('analysisPage');
            var detailContent = document.getElementById('detailContent');
            var backFromDetail = document.getElementById('backFromDetail');
            var viewA = document.getElementById('viewA');
            var viewB = document.getElementById('viewB');
            const calcDisplay = document.getElementById('calcDisplay');
            var gotoVisualBtn = document.getElementById('gotoVisualBtn');
            var excelBtn = document.getElementById('excelBtn');
            var chartSelArea = document.getElementById('chartSelArea');
            var chartShowArea = document.getElementById('chartShowArea');
            let myChart = null;

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
                homePage.classList.remove('active');
                detailPage.classList.remove('active');
                analysisPage.classList.remove('active');
                document.getElementById(pageId).classList.add('active');
                if (myChart) {
                    myChart.destroy();
                    myChart = null;
                }

            }

            function showDetail(title, contentHtml, pushToStack = true, stackKey = null) {
                if (pushToStack && stackKey) {
                    navStack.push(stackKey);
                }
                detailContent.innerHTML =
                    `<div class="detail-title">${title}</div><div class="detail-text">${contentHtml}</div>`;
                showPage('detailPage');
                updateBackButtonVisibility();
            }

            function updateBackButtonVisibility() {
                if (navStack.length > 1) {
                    backFromDetail.textContent = '<< 返回上一页';
                } else {
                    backFromDetail.textContent = '<< 返回主页';
                }
            }

            function popDetailStack() {
                if (navStack.length > 1) {
                    navStack.pop();
                    return navStack[navStack.length - 1];
                }
                return null;
            }

            function renderPriceTiers(tiers) {
                let html = '<div class="price-tiers">';
                tiers.forEach(function(t) {
                    html += `
                <div class="tier-card">
                  <span class="tier-label ${t.tierClass}">${t.label}</span>
                  <div class="tier-price">💰 ${t.price}</div>
                  <div class="tier-detail">${t.detail}</div>
                </div>`;
                });
                html += '</div>';
                return html;
            }

            function renderImageGallery(images) {
                let html = '<div class="image-gallery">';
                images.forEach(function(img) {
                    html +=
                        `
                ${img.note || ''}
                <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';">
                <div class="img-fallback" style="display:none;width:100%;max-width:320px;height:220px;background:#e8f0dd;border-radius:20px;align-items:center;justify-content:center;color:#7a9a60;font-size:0.9rem;text-align:center;padding:20px;">
                  🖼 ${img.alt}<br><small>（图片待添加）</small>
                </div>`;
                });
                html += '</div>';
                return html;
            }

            function cosineSim(vecA, vecB) {
                let dot = 0,
                    magA = 0,
                    magB = 0;
                for (let i = 0; i < vecA.length; i++) {
                    dot += vecA[i] * vecB[i];
                    magA += vecA[i] ** 2;
                    magB += vecB[i] ** 2;
                }
                magA = Math.sqrt(magA);
                magB = Math.sqrt(magB);
                if (magA === 0 || magB === 0) return 0;
                return dot / (magA * magB);
            }

            function performCalculation() {
                let culture = parseFloat(document.getElementById('cultureInput').value);
                let eco = parseFloat(document.getElementById('ecoInput').value);
                let leisure = parseFloat(document.getElementById('leisureInput').value);
                let medical = parseFloat(document.getElementById('medicalInput').value);
                if (isNaN(culture) || isNaN(eco) || isNaN(leisure) || isNaN(medical)) {
                    alert('请填写所有兴趣值（0-10分）');
                    return null;
                }
                if ([culture, eco, leisure, medical].some(function(v) { return v < 0 || v > 10; })) {
                    alert('每项兴趣值需在0到10之间');
                    return null;
                }
                const userVec = [culture, eco, leisure, medical];
                const sims = modeFeatures.map(function(feat) { return cosineSim(userVec, feat); })
                const bestIdx = sims.indexOf(Math.max(...sims));
                return { userVec, sims, bestIdx };
            }

            function displayResult(result) {
                const { sims, bestIdx } = result;
                const detail = modeDetail[bestIdx];
                let html = `<strong>🧮 余弦相似度计算结果：</strong><br>`;
                modeNames.forEach(function(name, i) {
                    html += `${name}：${sims[i].toFixed(4)}<br>`;
                });
                html +=
                    `<br>🌟 <span style="color:#1e4a1e; font-weight:bold;">为您推荐：${modeNames[bestIdx]} (匹配度 ${sims[bestIdx].toFixed(4)})</span>`;
                html +=
                    `<br><br><strong>⚠ 推荐理由：</strong>${detail.reason}<br><strong>⚠ ${detail.activities}</strong>`;
                html += `<br><br><strong>💵 消费档次推荐：</strong>`;
                html += renderPriceTiers(detail.priceTiers);
                calcDisplay.innerHTML = html;
                calcDisplay.style.display = 'block';
                gotoVisualBtn.style.display = 'inline-block';
                excelBtn.style.display = 'inline-block';

                calcDisplay.setAttribute('data-recommend-text',
                    `为您推荐${modeNames[bestIdx]}。${detail.reason} ${detail.activities}`);
            }

            function exportSimsToExcel() {
                if (!simScores || bestIdx === null) {
                    alert('暂无计算结果，请先完成数据化选择。');
                    return;
                }
                const rows = [
                    ['康养模式', '余弦相似度'],
                    ...modeNames.map(function(name, i) { return [name, simScores[i].toFixed(4)]; }),
                    [],
                    ['推荐模式', modeNames[bestIdx]],
                    ['用户文化兴趣', usrVec[0]],
                    ['用户生态兴趣', usrVec[1]],
                    ['用户休闲兴趣', usrVec[2]],
                    ['用户医疗兴趣', usrVec[3]]
                ];
                const ws = XLSX.utils.aoa_to_sheet(rows);
                ws['!cols'] = [{ wch: 20 }, { wch: 18 }];
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, '康养模式推荐');
                XLSX.writeFile(wb, '康养模式匹配结果.xlsx');
            }

            function exportChartToWord() {
                const canvases = document.querySelectorAll('#chartShowArea canvas');
                if (canvases.length === 0) {
                    alert('未找到图表，请先生成可视化图表。');
                    return;
                }
                if (typeof docx === 'undefined') {
                    alert('Word导出组件正在加载，请稍后重试。如持续无法导出，请检查网络连接。');
                    return;
                }

                const explanationEl = document.getElementById('chartExplanation');
                const summaryEl = document.getElementById('recommendSummaryBox');
                const explanationText = explanationEl ? explanationEl.innerText : '';
                const summaryText = summaryEl ? summaryEl.innerText : '';

                const { Document, Packer, Paragraph, TextRun, ImageRun, HeadingLevel, AlignmentType, BorderStyle } = docx;

                const children = [];

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
                    const tempCanvas = document.createElement('canvas');
                    const scale = 2;
                    tempCanvas.width = canvas.width * scale;
                    tempCanvas.height = canvas.height * scale;
                    const tempCtx = tempCanvas.getContext('2d');
                    tempCtx.scale(scale, scale);
                    tempCtx.fillStyle = '#ffffff';
                    tempCtx.fillRect(0, 0, canvas.width, canvas.height);
                    tempCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

                    const dataUrl = tempCanvas.toDataURL('image/png');
                    const base64 = dataUrl.split(',')[1];
                    const binaryString = atob(base64);
                    const bytes = new Uint8Array(binaryString.length);
                    for (let i = 0; i < binaryString.length; i++) {
                        bytes[i] = binaryString.charCodeAt(i);
                    }

                    const imgWidth = 480;
                    const imgHeight = Math.round(480 * canvas.height / canvas.width);

                    children.push(new Paragraph({
                        children: [
                            new ImageRun({
                                data: bytes,
                                transformation: { width: imgWidth, height: imgHeight },
                                type: 'png',
                            }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                    }));
                });

                children.push(new Paragraph({
                    children: [new TextRun({ text: '图表解读', bold: true, size: 30, font: 'SimSun' })],
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 150 },
                }));

                if (explanationText) {
                    const lines = explanationText.split('\n');
                    lines.forEach(function(line) {
                        if (line.trim()) {
                            children.push(new Paragraph({
                                children: [new TextRun({ text: line, size: 22, font: 'SimSun' })],
                                spacing: { after: 80 },
                            }));
                        }
                    });
                }

                children.push(new Paragraph({
                    children: [new TextRun({ text: '推荐总结', bold: true, size: 30, font: 'SimSun' })],
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 150 },
                }));

                if (summaryText) {
                    const lines = summaryText.split('\n');
                    lines.forEach(function(line) {
                        if (line.trim()) {
                            children.push(new Paragraph({
                                children: [new TextRun({ text: line, size: 22, font: 'SimSun' })],
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

                const doc = new Document({
                    sections: [{
                        properties: {},
                        children: children,
                    }],
                });

                Packer.toBlob(doc).then(function(blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
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

            excelBtn.addEventListener('click', exportSimsToExcel);

            function resetToChartSelection() {
                if (myChart) {
                    myChart.destroy();
                    myChart = null;
                }
                chartSelArea.style.display = 'block';
                chartShowArea.style.display = 'none';
                chartShowArea.innerHTML = '';
            }

            function ensureStandardChartLayout() {
                if (!document.getElementById('myChart')) {
                    chartShowArea.innerHTML = `
                <div class="chart-container"><canvas id="myChart"></canvas></div>
                <div id="chartExplanation" class="result-box" style="margin-top:10px;"></div>
                <div id="recommendSummaryBox" class="recommend-summary"></div>
                <div class="button-row">
                  <button class="btn-return-chart" id="backToChartSelection">🔄 重新选择图表</button>
                  <button class="btn-export-excel" id="exportExcelChart">📤 导出 Excel</button>
                  <button class="btn-export-word" id="exportWordChart">📄 导出 Word</button>
                  <button class="btn-return-home" id="backToHomeFromB">↩ 返回主页</button>
                </div>
              `;
                }
            }

            function renderPieLayout() {
                chartShowArea.innerHTML = `
              <div style="display:flex; gap:25px; flex-wrap:wrap; justify-content:center;">
                <div style="flex:1; min-width:260px;"><canvas id="pieUser" height="260"></canvas></div>
                <div style="flex:1; min-width:260px;"><canvas id="pieMode" height="260"></canvas></div>
              </div>
              <div id="chartExplanation" class="result-box" style="margin-top:15px;"></div>
              <div id="recommendSummaryBox" class="recommend-summary"></div>
              <div class="button-row">
                <button class="btn-return-chart" id="backToChartSelection">🔄 重新选择图表</button>
                <button class="btn-export-excel" id="exportExcelChart">📤 导出 Excel</button>
                <button class="btn-export-word" id="exportWordChart">📄 导出 Word</button>
                <button class="btn-return-home" id="backToHomeFromB">↩ 返回主页</button>
              </div>
            `;
            }

            function renderChart(chartType) {
                if (!usrVec || bestIdx === null) {
                    alert('请先完成数据计算');
                    return;
                }
                const userVec = usrVec;
                const bestModeIdx = bestIdx;
                const modeVec = modeFeatures[bestModeIdx];
                const dimLabels = ['文化兴趣', '生态兴趣', '休闲兴趣', '医疗兴趣'];
                const detail = modeDetail[bestModeIdx];

                if (myChart) {
                    myChart.destroy();
                    myChart = null;
                }
                chartSelArea.style.display = 'none';
                chartShowArea.style.display = 'block';

                if (chartType === 'pie') {
                    renderPieLayout();
                    const userColors = ['#6a994e', '#a7c957', '#f2e8cf', '#bc6c25'];
                    const modeColors = ['#386641', '#dda15e', '#fefae0', '#a98467'];
                    new Chart(document.getElementById('pieUser'), {
                        type: 'pie',
                        data: {
                            labels: dimLabels,
                            datasets: [{ data: userVec, backgroundColor: userColors, borderColor: '#ffffff',
                                borderWidth: 2 }]
                        },
                        options: {
                            plugins: {
                                title: { display: true, text: '您的兴趣分布', color: '#2d4a2c', font: { size: 15 } }
                            }
                        }
                    });
                    new Chart(document.getElementById('pieMode'), {
                        type: 'pie',
                        data: {
                            labels: dimLabels,
                            datasets: [{ data: modeVec, backgroundColor: modeColors, borderColor: '#ffffff',
                                borderWidth: 2 }]
                        },
                        options: {
                            plugins: {
                                title: { display: true, text: `推荐模式：${modeNames[bestModeIdx]}`,
                                    color: '#2d4a2c', font: { size: 15 } }
                            }
                        }
                    });
                    document.getElementById('chartExplanation').innerHTML =
                        `<strong>🥧 饼图解读：</strong>左侧为用户兴趣占比（多彩自然色），右侧为推荐模式特征占比（大地暖色系），颜色对比鲜明且结构相似度极高。`;
                } else {
                    ensureStandardChartLayout();
                    const canvas = document.getElementById('myChart');
                    const ctx = canvas.getContext('2d');
                    if (chartType === 'line') {
                        myChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: dimLabels,
                                datasets: [
                                    { label: '您的兴趣值', data: userVec, borderColor: '#4c8b4c',
                                        backgroundColor: 'rgba(76,139,76,0.1)', tension: 0.2, pointRadius: 6,
                                        pointBackgroundColor: '#2d5a2d', borderWidth: 3 },
                                    { label: `推荐模式：${modeNames[bestModeIdx]}`, data: modeVec,
                                        borderColor: '#d98c5f', backgroundColor: 'rgba(217,140,95,0.1)',
                                        tension: 0.2, pointRadius: 6, pointBackgroundColor: '#b45f2a',
                                        borderWidth: 3, borderDash: [6, 3] }
                                ]
                            },
                            options: { responsive: true, maintainAspectRatio: false }
                        });
                        document.getElementById('chartExplanation').innerHTML =
                            `<strong>📉 折线图解读：</strong>绿色实线代表您的兴趣分布，橙色虚线为推荐模式的特征。两者在关键维度上高度重合。`;
                    } else if (chartType === 'scatter') {
                        myChart = new Chart(ctx, {
                            type: 'scatter',
                            data: {
                                datasets: [
                                    { label: '您的兴趣点', data: userVec.map(function(v, i) { return { x: i, y: v }; }),
                                        backgroundColor: '#2d6a4f', pointRadius: 10, pointHoverRadius: 13 },
                                    { label: '推荐模式点', data: modeVec.map(function(v, i) { return { x: i, y: v }; }),
                                        backgroundColor: '#d97c4a', pointRadius: 10, pointHoverRadius: 13, pointStyle: 'triangle' }
                                ]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    x: {
                                        min: -0.5,
                                        max: 3.5,
                                        ticks: {
                                            stepSize: 1,
                                            callback: function(value) {
                                                const labels = ['文化', '生态', '休闲', '医疗'];
                                                return labels[value] || '';
                                            }
                                        },
                                        title: { display: true, text: '兴趣维度', color: '#2d4a2c', font: { size: 13 } },
                                        grid: { color: 'rgba(0,0,0,0.06)' }
                                    },
                                    y: {
                                        beginAtZero: true,
                                        max: 10,
                                        title: { display: true, text: '兴趣值', color: '#2d4a2c', font: { size: 13 } },
                                        grid: { color: 'rgba(0,0,0,0.06)' }
                                    }
                                },
                                plugins: {
                                    legend: { position: 'top', labels: { font: { size: 13 } } },
                                    tooltip: {
                                        callbacks: {
                                            label: function(context) {
                                                const dimLabels = ['文化', '生态', '休闲', '医疗'];
                                                return context.dataset.label + ' - ' + dimLabels[context.parsed.x] + ': ' + context.parsed.y;
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        document.getElementById('chartExplanation').innerHTML =
                            `<strong>⚪ 散点图解读：</strong>绿色圆点为您，橙色三角为推荐模式，位置越接近匹配越佳。`;
                    }
                }

                const summaryEl = document.getElementById('recommendSummaryBox');
                if (summaryEl) {
                    summaryEl.innerHTML =
                        `<strong>⚠ 最终推荐：${modeNames[bestModeIdx]}</strong><br><em>适合人群：${detail.who}</em><br><strong>推荐理由：</strong>${detail.reason}<br><strong>${detail.activities}</strong>`;
                    summaryEl.innerHTML += `<br><br><strong>💵 消费档次推荐：</strong>`;
                    summaryEl.innerHTML += renderPriceTiers(detail.priceTiers);

                    summaryEl.setAttribute('data-recommend-text',
                        `最终推荐${modeNames[bestModeIdx]}。适合人群：${detail.who}。${detail.reason} ${detail.activities}`
                        );
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
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'zh-CN';
                utterance.rate = 0.9;
                utterance.pitch = 1.05;
                utterance.volume = 1;
                const zhVoice = getZhVoice();
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
                const btn = document.getElementById('aiSpeakLastBtn');
                if (btn) {
                    if (speaking) {
                        btn.textContent = '⏹';
                        btn.title = '停止朗读';
                        btn.classList.add('speaking');
                    } else {
                        btn.textContent = '🔊';
                        btn.title = '朗读最后一条回复';
                        btn.classList.remove('speaking');
                    }
                }
            }

            function speakLastRecommendation() {

                let textToSpeak = '';
                const summaryEl = document.getElementById('recommendSummaryBox');
                const calcDisplay = document.getElementById('calcDisplay');
                if (summaryEl && summaryEl.getAttribute('data-recommend-text')) {
                    textToSpeak = summaryEl.getAttribute('data-recommend-text');
                } else if (calcDisplay && calcDisplay.getAttribute('data-recommend-text')) {
                    textToSpeak = calcDisplay.getAttribute('data-recommend-text');
                } else if (bestIdx !== null) {
                    const detail = modeDetail[bestIdx];
                    textToSpeak =
                        `为您推荐${modeNames[bestIdx]}。适合人群：${detail.who}。${detail.reason} ${detail.activities}`;
                } else {
                    textToSpeak = '暂无推荐结果，请先完成数据化选择。';
                }
                speakText(textToSpeak);
            }

            function addChatMessage(type, text) {
                const msgDiv = document.createElement('div');
                msgDiv.className = `ai-msg ${type}`;
                msgDiv.innerHTML = text;
                aiChatBody.appendChild(msgDiv);
                aiChatBody.scrollTop = aiChatBody.scrollHeight;
                if (type === 'assistant') {
                    lastAiMsg = text.replace(/<[^>]*>/g, ''); // 去除HTML标签
                }
            }

            function processAIQuery(query) {
                const q = query.trim().toLowerCase();
                let response = '';

                if (q.includes('介绍') && (q.includes('模式') || q.includes('文化') || q.includes('生态') || q.includes(
                        '休闲') || q.includes('医疗'))) {
                    response = `
                <strong>📖 四种康养模式简介：</strong><br>
                📚 <b>文化+健康养生</b>：以文化浸润+身心养生为核心，融合历史文化、民俗风情、传统技艺与禅修静养。<br>
                🌱 <b>生态+健康养生</b>：以生态资源+身心修复为核心，依托森林、湿地、海滨、温泉等自然环境。<br>
                🛋 <b>休闲+健康养生</b>：以舒适度假、放松身心为核心，主打轻松舒适的轻度假形态。<br>
                🏥 <b>医疗+健康养生</b>：以专业医疗+健康管理为核心，提供健康体检、中医理疗等服务。<br>
                💡 想要了解某个模式的详细信息和消费档次，请点击主页的"🌿 养生方式"查看哦！
              `;
                } else if (q.includes('怎么') && (q.includes('用') || q.includes('使用') || q.includes('操作'))) {
                    response = `
                <strong>❓ 平台使用指南：</strong><br>
                1. 点击主页 <b>"📊 康养模式数据化选择"</b> 进入计算页面。<br>
                2. 输入您对文化、生态、休闲、医疗四方面的兴趣值（0-10分）。<br>
                3. 点击 <b>"🧮 快速计算"</b>，系统将智能匹配最适合您的康养模式。<br>
                4. 点击 <b>"⚪ 进入可视化分析"</b> 查看图表对比。<br>
                5. 在可视化页面选择折线图、饼状图或散点图查看详细对比。<br>
                💡 也可以点击主页的 <b>"🌿 养生方式"</b> 浏览四种模式的图文介绍和消费档次！
              `;
                } else if (q.includes('导航') || q.includes('找到') || q.includes('界面') || q.includes('去哪')) {
                    response = `
                <strong>🧲 快速导航：</strong><br>
                🏠 <b>主页</b> - 点击左上角返回按钮或"返回主页"<br>
                📊 <b>数据化选择</b> - 点击主页绿色卡片"康养模式数据化选择"<br>
                📈 <b>可视化分析</b> - 点击主页橙色卡片"可视化呈现图分析"<br>
                🌿 <b>养生方式详情</b> - 点击主页顶部"🌿 养生方式"按钮<br>
                📖 <b>研究背景</b> - 点击主页顶部"📖 研究背景"按钮<br>
                🧲 <b>模式简介</b> - 点击主页顶部"🧲 模式简介"按钮<br>
                💬 需要我直接带你跳转吗？告诉我你想去哪个页面！
              `;
                } else if (q.includes('结果') || q.includes('推荐') || q.includes('数据')) {
                    if (bestIdx !== null && simScores) {
                        const detail = modeDetail[bestIdx];
                        response = `
                  <strong>📊 当前计算结果：</strong><br>
                  ${modeNames.map(function(name, i) { return name + '：' + simScores[i].toFixed(4); }).join('<br>')}<br>
                  <br>🌟 <b>推荐模式：${modeNames[bestIdx]}</b> (匹配度 ${simScores[bestIdx].toFixed(4)})<br>
                  <br><strong>⚠ 推荐理由：</strong>${detail.reason}<br>
                  <strong>⚠ ${detail.activities}</strong><br>
                  <br><strong>💵 消费档次：</strong><br>
                  ${detail.priceTiers.map(function(t) { return '<b>' + t.label + '</b>：' + t.price + ' - ' + t.detail; }).join('<br>')}
                `;
                    } else {
                        response =
                            '⚠ 暂无计算结果。请先前往 <b>"📊 康养模式数据化选择"</b> 输入您的兴趣值并点击计算。需要我带你去吗？';
                    }
                } else if (q.includes('朗读') || q.includes('读出') || q.includes('语音') || q.includes('扬声器')) {
                    if (speaking) {
                        stopSpeaking();
                        response = '⏹ 已停止语音朗读。再次点击"朗读推荐"可重新朗读。';
                    } else {
                        if (bestIdx === null) {
                            response = '⚠ 暂无推荐结果，请先完成数据化选择后再使用朗读功能。';
                        } else {
                            speakLastRecommendation();
                            response = '🔊 正在朗读推荐内容！<br>>> 点击聊天框下方的 <b>⏹</b> 按钮可停止朗读。<br>>> 再次点击"朗读推荐"也可停止。<br>💡 朗读适配说明：<br>1. 优先使用浏览器内置语音（Chrome/Edge/Safari）<br>2. 如内置语音不可用，自动切换在线语音<br>3. 如在线语音也不可用，内容将复制到剪贴板<br>4. 请确保设备音量已开启';
                        }
                    }
                } else if (q.includes('放大') || q.includes('缩小') || q.includes('字体') || q.includes('页面缩放')) {
                    response =
                        '🔍 您可以使用聊天面板中的 <b>"放大+"</b> 和 <b>"缩小-"</b> 按钮来调整页面字体大小，也可以点击 <b>"重置"</b> 恢复默认。试试看吧！';
                } else if (q.includes('消费') || q.includes('价格') || q.includes('费用') || q.includes('档次') || q.includes(
                        '经济')) {
                    if (bestIdx !== null) {
                        const detail = modeDetail[bestIdx];
                        response =
                            `<strong>💵 ${modeNames[bestIdx]} 消费档次：</strong><br>` +
                            detail.priceTiers.map(function(t) { return '<b>' + t.label + '</b>：' + t.price + '<br>→ ' + t.detail; }).join('<br>');
                    } else {
                        response =
                            '💵 四种模式都有ABCD四个消费档次，涵盖经济型到高端型。请先在养生方式中查看各模式详情，或完成数据化选择后查看推荐模式的消费档次。';
                    }
                } else if (q.includes('你好') || q.includes('嗨') || q.includes('hello') || q === '') {
                    response =
                        '👋 你好呀！我是小旅，你的康养旅游智能助手！有什么我可以帮你的吗？试试点击上方的快捷按钮吧～';
                } else {
                    response = `
                ✎️ 小旅收到了你的问题！我可以帮你：<br>
                📖 <b>介绍模式</b> - 了解四种康养模式<br>
                ❓ <b>怎么使用</b> - 学习平台操作<br>
                🧲 <b>帮我导航</b> - 快速找到页面<br>
                📊 <b>查看结果</b> - 呈现数据推荐<br>
                🔊 <b>朗读推荐</b> - 语音播报结果<br>
                💵 <b>消费档次</b> - 查看ABCD档价格<br>
                🔍 <b>页面缩放</b> - 调整字体大小<br>
                请点击上方快捷按钮或输入关键词，小旅随时为你服务！
              `;
                }
                return response;
            }

            function handleAIQuery(query) {
                if (!query.trim()) return;
                addChatMessage('user', query);
                const response = processAIQuery(query);
                setTimeout(function() {
                    addChatMessage('assistant', response);
                }, 400);
                aiChatInput.value = '';
            }

            function toggleAIChat() {
                const isOpen = aiChatPanel.classList.contains('open');
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
                const body = document.body;
                const currentZoom = parseFloat(body.style.fontSize || '1') || 1;
                const newZoom = Math.max(0.7, Math.min(1.6, currentZoom + factor));
                body.style.fontSize = newZoom + 'rem';
            }

            function resetZoom() {
                document.body.style.fontSize = '1rem';
            }

            aiAvatarBtn.addEventListener('click', toggleAIChat);
            aiChatClose.addEventListener('click', function() {
                aiChatPanel.classList.remove('open');
                aiBubble.style.display = 'block';
            });
            aiSendBtn.addEventListener('click', function() { handleAIQuery(aiChatInput.value); })
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
                    const q = e.target.getAttribute('data-q');
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

            document.getElementById('btnResearchBg').addEventListener('click', function() {
                navStack = ['research'];
                showDetail('📖 研究背景',
                    `当前，全球人口老龄化进程不断加快，中国作为人口大国，老龄化态势尤为突出，已正式步入中度老龄化社会。截至近年，我国60岁及以上老年人口突破3亿，占总人口比例超五分之一，且老年人口规模持续扩大，高龄化、空巢化、失能化趋势日益明显，传统家庭养老与公共养老服务体系面临严峻压力，养老供需矛盾逐渐凸显。与此同时，国家将积极应对人口老龄化上升为国家战略，陆续出台多项政策扶持银发经济发展，从顶层设计为产业发展指明方向，推动养老服务、健康医疗、适老用品、老年文旅等领域规范化、规模化发展。随着社会经济发展，老年群体消费观念逐步转变，从基础的生存型消费，向健康养生、精神文化、智慧养老等品质型、多元化消费升级，消费潜力持续释放。银发经济不仅是破解养老难题、保障老年群体福祉的重要抓手，更成为新时代扩大内需、培育经济发展新动能的关键领域，蕴含巨大市场空间。在此背景下，深入研究银发经济的发展现状、产业痛点与未来趋势，具有极强的现实意义与实践价值。`,
                    true, 'research');
            });

            document.getElementById('btnModeIntro').addEventListener('click', function() {
                navStack = ['modeIntro'];
                showDetail('🧲 模式简介',
                    `本文构建文化+、生态+、休闲+、医疗+四类康养旅游模式，并运用K均值聚类+余弦相似度实现用户画像与旅游模式精准匹配。K均值聚类算法以文化体验、自然疗愈、休闲享乐、健康需求为维度，对样本数据迭代聚类，将老年游客划分为自然热衷者、都市逃离者、文化探寻者、活力养护者四类用户画像，实现需求群体精准细分。余弦相似度算法用于量化匹配度，先将用户特征与模式特征转化为四维向量，再通过向量夹角计算相似度，取值范围为[-1,1]，数值越接近1表示匹配度越高。基于算法计算，自然热衷者匹配生态+模式，都市逃离者匹配休闲+模式，文化探寻者匹配文化+模式，活力养护者匹配医疗+模式。该方法以数据驱动实现供需精准对接，有效解决康养旅游同质化、供需错配问题，为老年康养旅游精准服务提供科学支撑。`,
                    true, 'modeIntro');
            });

            document.getElementById('btnHealthStyle').addEventListener('click', function() {
                navStack = ['healthStyle'];
                const html = `
            <div class="mode-cards">
              <div class="mode-card" data-mode-index="0">
                <span class="card-title">📚 文化体验旅游模式</span>
                <div class="card-desc">文化体验康养旅游以文化浸润+身心养生为核心，融合历史文化、民俗风情、传统技艺与禅修静养等内容，依托文化古迹、传统村落、非遗资源打造沉浸式体验场景。</div>
                <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
              </div>
              <div class="mode-card" data-mode-index="1">
                <span class="card-title">🌱 自然疗愈旅游模式</span>
                <div class="card-desc">自然疗愈康养旅游以生态资源+身心修复为核心，依托森林、湿地、海滨、温泉等自然生态环境，突出自然环境的疗愈功效与生态互动体验。</div>
                <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
              </div>
              <div class="mode-card" data-mode-index="2">
                <span class="card-title">🛋 休闲享乐旅游模式</span>
                <div class="card-desc">休闲享乐康养旅游以舒适度假、放松身心为核心，面向追求高品质旅居体验的老年群体，主打轻松舒适的轻度假形态。</div>
                <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
              </div>
              <div class="mode-card" data-mode-index="3">
                <span class="card-title">🏥 健康需求旅游模式</span>
                <div class="card-desc">健康需求康养旅游以专业医疗+健康管理为核心，面向存在健康维护、康复疗养或亚健康调理需求的老年群体，提供健康体检、中医理疗等服务。</div>
                <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
              </div>
            </div>
          `;
                showDetail('🌿 养生方式总览', html, true, 'healthStyle');

                setTimeout(function() {
                    document.querySelectorAll('.mode-card[data-mode-index]').forEach(function(card) {
                        card.addEventListener('click', function() {
                            const modeIdx = parseInt(this.getAttribute('data-mode-index'));
                            const detail = modeDetail[modeIdx];
                            const stackKey = 'healthStyleDetail_' + modeIdx;
                            let imgHtml = renderImageGallery(detail.images);
                            let tiersHtml = renderPriceTiers(detail.priceTiers);
                            const contentHtml = `
                      <h3 style="color:#2d4a2c; margin-bottom:10px;">${modeNames[modeIdx]}</h3>
                      <p style="color:#3a5535; line-height:1.7;">${detail.reason}</p>
                      <p style="color:#3a5535; line-height:1.7;"><strong>${detail.activities}</strong></p>
                      <h4 style="color:#4a6b3a; margin-top:18px;">🖼 图片展示</h4>
                      ${imgHtml}
                      <p style="font-size:0.8rem; color:#999; margin-top:4px;">
                        ⚠ 图片为本地jpg文件，请根据代码注释将图片放置到对应路径。若图片未加载，将显示占位提示。
                      </p>
                      <h4 style="color:#4a6b3a; margin-top:18px;">💵 消费档次推荐</h4>
                      ${tiersHtml}
                    `;
                            showDetail('🌿 ' + modeNames[modeIdx] + ' · 详情', contentHtml,
                                true, stackKey);
                        });
                    });
                }, 150);
            });

            backFromDetail.addEventListener('click', function() {
                const prevKey = popDetailStack();
                if (prevKey === 'healthStyle') {

                    navStack = ['healthStyle'];
                    const html = `
                <div class="mode-cards">
                  <div class="mode-card" data-mode-index="0">
                    <span class="card-title">📚 文化体验旅游模式</span>
                    <div class="card-desc">文化体验康养旅游以文化浸润+身心养生为核心，融合历史文化、民俗风情、传统技艺与禅修静养等内容。</div>
                    <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
                  </div>
                  <div class="mode-card" data-mode-index="1">
                    <span class="card-title">🌱 自然疗愈旅游模式</span>
                    <div class="card-desc">自然疗愈康养旅游以生态资源+身心修复为核心，依托森林、湿地、海滨、温泉等自然生态环境。</div>
                    <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
                  </div>
                  <div class="mode-card" data-mode-index="2">
                    <span class="card-title">🛋 休闲享乐旅游模式</span>
                    <div class="card-desc">休闲享乐康养旅游以舒适度假、放松身心为核心，主打轻松舒适的轻度假形态。</div>
                    <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
                  </div>
                  <div class="mode-card" data-mode-index="3">
                    <span class="card-title">🏥 健康需求旅游模式</span>
                    <div class="card-desc">健康需求康养旅游以专业医疗+健康管理为核心，提供健康体检、中医理疗等服务。</div>
                    <div class="card-hint">>> 点击查看图片展示 & 消费档次</div>
                  </div>
                </div>
              `;
                    detailContent.innerHTML =
                        `<div class="detail-title">🌿 养生方式总览</div><div class="detail-text">${html}</div>`;
                    updateBackButtonVisibility();

                    setTimeout(function() {
                        document.querySelectorAll('.mode-card[data-mode-index]').forEach(function(card) {
                            card.addEventListener('click', function() {
                                const modeIdx = parseInt(this.getAttribute(
                                    'data-mode-index'));
                                const detail = modeDetail[modeIdx];
                                const stackKey = 'healthStyleDetail_' + modeIdx;
                                let imgHtml = renderImageGallery(detail.images);
                                let tiersHtml = renderPriceTiers(detail
                                    .priceTiers);
                                const contentHtml = `
                          <h3 style="color:#2d4a2c; margin-bottom:10px;">${modeNames[modeIdx]}</h3>
                          <p style="color:#3a5535; line-height:1.7;">${detail.reason}</p>
                          <p style="color:#3a5535; line-height:1.7;"><strong>${detail.activities}</strong></p>
                          <h4 style="color:#4a6b3a; margin-top:18px;">🖼 图片展示</h4>
                          ${imgHtml}
                          <p style="font-size:0.8rem; color:#999; margin-top:4px;">⚠ 图片为本地jpg文件，请根据代码注释将图片放置到对应路径。</p>
                          <h4 style="color:#4a6b3a; margin-top:18px;">💵 消费档次推荐</h4>
                          ${tiersHtml}
                        `;
                                showDetail('🌿 ' + modeNames[modeIdx] +
                                    ' · 详情', contentHtml, true, stackKey);
                            });
                        });
                    }, 150);
                } else if (navStack.length === 0 || !prevKey) {

                    navStack = [];
                    showPage('homePage');
                }

                if (navStack.length <= 1 && navStack[0] !== 'healthStyle') {
                    navStack = [];
                    showPage('homePage');
                }
            });

            document.getElementById('entryA').addEventListener('click', function() {
                navStack = [];
                showPage('analysisPage');
                viewA.style.display = 'block';
                viewB.style.display = 'none';
                resetToChartSelection();
            });
            document.getElementById('entryB').addEventListener('click', function() {
                if (!usrVec || bestIdx === null) {
                    alert('请先通过"康养模式数据化选择"完成计算。');
                    navStack = [];
                    showPage('analysisPage');
                    viewA.style.display = 'block';
                    viewB.style.display = 'none';
                    return;
                }
                navStack = [];
                showPage('analysisPage');
                viewA.style.display = 'none';
                viewB.style.display = 'block';
                resetToChartSelection();
            });

            document.getElementById('quickCalcBtn').addEventListener('click', function() {
                const r = performCalculation();
                if (r) {
                    usrVec = r.userVec;
                    bestIdx = r.bestIdx;
                    simScores = r.sims;
                    displayResult(r);
                }
            });

            gotoVisualBtn.addEventListener('click', function() {
                viewA.style.display = 'none';
                viewB.style.display = 'block';
                resetToChartSelection();
            });

            document.getElementById('backFromA').addEventListener('click', function() {
                navStack = [];
                showPage('homePage');
            });

            chartSelArea.addEventListener('click', function(e) {
                if (e.target.classList.contains('chart-type-btn')) {
                    renderChart(e.target.getAttribute('data-chart'));
                }
            });

            chartShowArea.addEventListener('click', function(e) {
                if (e.target.id === 'backToChartSelection') resetToChartSelection();
                if (e.target.id === 'backToHomeFromB') {
                    resetToChartSelection();
                    navStack = [];
                    showPage('homePage');
                }
                if (e.target.id === 'exportExcelChart') exportSimsToExcel();
                if (e.target.id === 'exportWordChart') exportChartToWord();
            });

            setTimeout(function() {

            }, 8000);

        })();