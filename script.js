// ============================================
// CONFIG: 백엔드 연동 설정
// ============================================
// TODO: 백엔드팀으로부터 받은 엔드포인트로 변경
//
// [중요] 중복 예약 처리 방법:
// ----------------------------------------
// 백엔드에서 RESERVATION_ENDPOINT로 POST 요청을 받으면,
// 전화번호를 확인하여 이미 예약된 번호인지 체크해주세요.
//
// 1. 중복인 경우 응답 예시:
//    {
//        "duplicate": true,           // 또는 "isDuplicate": true
//        "message": "이미 예약된 번호입니다"
//    }
//    → 화면에 "⚠️ 중복 예약" 모달이 표시됩니다
//
// 2. 정상 예약인 경우 응답 예시:
//    {
//        "duplicate": false,          // 또는 "isDuplicate": false
//        "totalReservations": 1234,   // 전체 예약자 수 (선택사항)
//        "message": "예약이 완료되었습니다"
//    }
//    → 화면에 "✅ 사전 예약 완료!" 모달이 표시됩니다
//
// 3. 요청 데이터 형식:
//    {
//        "name": "홍길동",
//        "phone": "010-1234-5678",
//        "childAge": 36,              // 개월 수 (24~72)
//        "agree": true
//    }
// ----------------------------------------
const API_CONFIG = {
    // 예약 정보 전송 API
    RESERVATION_ENDPOINT: '', // 예: 'https://api.quve.kr/reservations'

    // 페이지 URL
    RESEARCH_PAGE_URL: 'https://example.com/research', // 연구 결과 자세히 보기 페이지
    TESTIMONIAL_PAGE_URL: 'https://example.com/testimonials', // 후기 페이지
};

// ============================================
// LINK CONFIG: 링크 버튼 URL 설정
// ============================================
// TODO: 나중에 실제 URL로 변경
const LINK_CONFIG = {
    // 대체 액션 링크
    CONSULTATION_URL: '', // 💬 1:1 상담하기 URL
    NOTIFICATION_URL: '', // 🔔 출시 알림만 받기 URL
    
    // 서비스 링크
    SUPERVIE_URL: '', // 슈퍼브이 URL
    SUPERREADING_URL: '', // 슈퍼리딩 URL
    QUVE_URL: '', // 큐브 URL
    
    // 소셜 미디어 링크
    INSTAGRAM_URL: '', // 인스타그램 URL
    YOUTUBE_URL: '', // 유튜브 URL
    BLOG_URL: '', // 블로그 URL
};

// ============================================
// FAQ DATA: 자주 묻는 질문 데이터
// ============================================
// TODO: 나중에 FAQ를 추가할 때 이 배열에 객체만 추가하면 됩니다
const FAQ_DATA = [
    {
        question: "아이가 부끄러움이 많아서 대답을 잘 못 할 것 같은데 괜찮나요?",
        answer: "괜찮아요! 실제로 소리 내어 대답하지 않아도 아이의 이름이 불리고, 질문을 듣는 순간 아이의 뇌는 답변에 대해 생각하게 됩니다. 이 과정만으로도 뇌가 활발하게 자극받아 언어 발달과 사고력 향상에 도움이 됩니다."
    },
    {
        question: "태블릿이 꼭 필요한가요?",
        answer: "아이패드, 갤럭시탭 등 태블릿 또는 스마트폰에서 모두 사용 가능합니다. iOS와 Android 모두 지원합니다."
    },
    {
        question: "와이파이가 없어도 되나요?",
        answer: "콘텐츠를 다운로드한 후 오프라인에서 재생이 가능합니다. 외출 시에도 걱정 없이 사용하실 수 있어요."
    },
    {
        question: "무료 체험 후 자동 결제되나요?",
        answer: "아니요. 체험 종료 전에 안내 메시지를 보내드리며, 고객님의 동의 후에만 결제가 진행됩니다."
    },
    {
        question: "환불이 가능한가요?",
        answer: "7일 이내 100% 환불이 가능합니다. 고객님의 만족이 최우선입니다."
    }
    // 새로운 FAQ를 추가하려면 위 형식으로 객체를 추가하세요
    // 예:
    // {
    //     question: "새로운 질문",
    //     answer: "답변 내용"
    // }
];

// ============================================
// TESTIMONIAL DATA: 후기 데이터
// ============================================
// TODO: 나중에 후기를 추가할 때 이 배열에 객체만 추가하면 됩니다
const TESTIMONIAL_DATA = [
    {
        id: 1,
        title: "멍하게 보던 영상에서 생각하며 대답하는 경험으로!",
        image: "images/reviews/review_1.jpg",
        content: "일반 영상은 멍하니 보기만 했는데, 큐브는 질문에 답하며 스스로 생각하는 시간이 생겼어요. 반복 시청할수록 답변이 정확해지고 언어 표현도 좋아졌습니다.",
        author: "이** / 5세",
        pageUrl: null // null이면 기본 후기 페이지로 이동, 특정 URL이면 해당 페이지로 이동
    },
    {
        id: 2,
        title: "아이 말에 반응해주는 AI 이비, 실제 대화같았어요!",
        image: "images/reviews/review_2.jpg",
        content: "이비가 아이 말을 듣고 반응해주자 표정부터 달라졌어요. 단순 시청이 아니라 상호작용하며 질문에 대한 생각을 하는 과정이 집중도도 높이고 긍정적 자극을 주었다고 생각해요.",
        author: "이** / 5세",
        pageUrl: null
    },
    {
        id: 3,
        title: "책 읽기에 흥미 없던 아이가 재미를 느끼기 시작했어요!",
        image: "images/reviews/review_3.jpg",
        content: "평소 책 읽는데 큰 관심이 없었는데, 큐브를 통해 책 읽기 요소에 재미를 느끼며 긍정적이 반응을 보였어요. 상호작용 덕분에 내용을 생각하고 표현하려는 모습이 생겼습니다.",
        author: "박** / 7세",
        pageUrl: null
    },
    {
        id: 4,
        title: "가상의 책 읽기 선생님처럼, 거부감 없이 빠져들어요.",
        image: "images/reviews/review_4.jpg",
        content: "큐브는 아이 이름을 불러주며 마치 가상의 책 읽기 선생님과 대화하는 느낌이었어요. 거부감 없이 스며들 듯 집중했고, 아이가 책 읽기 자체를 즐겁게 받아들이는 변화를 직접 볼 수 있었습니다.",
        author: "김** / 5세",
        pageUrl: null
    },
    {
        id: 5,
        title: "자극적 영상 대신 교육적이고 집중도 높은 경험",
        image: "images/reviews/review_5.jpg",
        content: "추천 영상이 계속 이어지는 유**와 달리 큐브는 책 기반이라 안심됐어요. 아이가 끝까지 몰입하며 웃고 반응하는 모습이 새로웠습니다.",
        author: "채** / 7세",
        pageUrl: null
    },
    {
        id: 6,
        title: "일방적 시청이 아닌, 생각을 이끌어주는 상호작용",
        image: "images/reviews/review_6.jpg",
        content: "이비가 아이의 말을 이해하고 반응해주는 점이 가장 좋았어요. 발음이 부정확해도 다시 말하려는 의지가 생겨 언어 표현에 도움이 되었어요.",
        author: "조** / 5세",
        pageUrl: null
    },
    {
        id: 7,
        title: "다시 책에 관심을 갖게 된 계기",
        image: "images/reviews/review_7.jpg",
        content: "독서 흥미가 떨어졌었는데 큐브를 본 뒤 다시 책을 찾아 읽어달라고 했어요. 반복 시청하며 생각이 확장되는 느낌을 받았습니다.",
        author: "정** / 5세",
        pageUrl: null
    },
    {
        id: 8,
        title: "필수가 되 버린 태블릿 시대,피할 수 없다면 검증된 콘텐츠로!",
        image: "images/reviews/review_8.jpg",
        content: "가정에서 필수가 되어버린 태블릿 시대, 무엇을 보여 줄지가 중요해 졌어요. 큐브는 단순 영상이 아니라 질문하고 대답하며 상호작용하는 경험을 주니 아이의 미디어 시간이 훨씬 유익해 졌어요!",
        author: "이** / 6세",
        pageUrl: null
    },
    {
        id: 9,
        title: "책 읽어줄 시간이 부족한 워킹맘에게, 가장 현실적인 대안이었어요.",
        image: "images/reviews/review_9.jpg",
        content: "워킹맘에게 책 읽어주는 시간을 확보하기란 정말 쉽지 않은데.. 큐브는 그 시간을 자연스럽게 대신해줬어요. 아이의 이름을 불러주며 대화하니 거부감 없이 집중하는 모습이 좋았습니다.",
        author: "전** / 3세",
        pageUrl: null
    },
    {
        id: 10,
        title: "단순 시청에서 벗어나 내용 이해까지 이어져요.",
        image: "images/reviews/review_10.jpg",
        content: "상호작용하며 책 내용을 다시 생각하게 되고, 단순히 그림만 보는 게 아니라 상황을 설명하려는 변화가 보였어요. 집중해서 듣고, 내용을 제대로 이해하려는 태도가 뚜렷해 졌어요.",
        author: "김** / 5세",
        pageUrl: null
    },
    {
        id: 11,
        title: "언어가 폭팔적으로 증가하는 3세 유아에게 강력 추천",
        image: "images/reviews/review_11.png",
        content: "무분별한 영상 시청과 달리, 큐브는 아이가 직접 말하고 반응하는 과정이 있어 언어발달과 사고력에 긍정적인 영향을 주었어요. 특이 언어가 급격히 자라는 3세 시기에 잘 맞는 콘텐츠라고 생각합니다.",
        author: "흥** / 3세",
        pageUrl: null
    },
    {
        id: 12,
        title: "능동적으로 참여하며 집중력이 높아졌어요.",
        image: "images/reviews/review_12.jpeg",
        content: "아이가 직접 말하고 생각하는 과정이 포함되어 있어 언어력 향상에 큰 도움이 되었어요. 기존 한글 학습과 함께 활용하니 효과가 더 잘 드러났고, 이야기 속에서 상상하고 사고하는 능력도 확장 된 느낌입니다.",
        author: "흥** / 6세",
        pageUrl: null
    },
    {
        id: 13,
        title: "질문이 있으니 책 이해와 생각의 폭이 확 달라졌어요.",
        image: "images/reviews/review_13.jpg",
        content: "상호작용 덕분에 아이가 단순히 듣는 데서 끝나지 않고, 내용을 기억하고 스스로 말하려는 변화가 생겼어요. 반복 시청한 책은 응용까지 할 만큼 이해도가 높아져 놀랐어요.",
        author: "김** / 6세",
        pageUrl: null
    }
];

// 출시 날짜 설정 (2025년 12월 18일 00:00:00)
const launchDate = new Date('2025-12-18T00:00:00').getTime();

// 숫자를 두 자리 문자열로 포맷 (99 초과 시 99로 제한)
function formatTwoDigits(num) {
    const limited = Math.min(num, 99);
    return limited.toString().padStart(2, '0');
}

// 플립 카드 업데이트 함수
function updateFlipCard(id, value) {
    const digits = formatTwoDigits(value);
    const elem1 = document.getElementById(id + '1');
    const elem2 = document.getElementById(id + '2');
    if (elem1 && elem2) {
        elem1.textContent = digits[0];
        elem2.textContent = digits[1];
    }
}

// 카운트다운 업데이트 함수
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Hero 카운트다운 업데이트
        updateFlipCard('heroDays', days);
        updateFlipCard('heroHours', hours);
        updateFlipCard('heroMinutes', minutes);
        updateFlipCard('heroSeconds', seconds);

        // CTA 카운트다운 업데이트
        updateFlipCard('ctaDays', days);
        updateFlipCard('ctaHours', hours);
        updateFlipCard('ctaMinutes', minutes);
        updateFlipCard('ctaSeconds', seconds);

        // Urgency 타이머 (기존 텍스트 형식 유지)
        const urgencyTimer = document.getElementById('urgencyTimer');
        if (urgencyTimer) {
            // 99일 초과 시 간단한 메시지로 표시
            if (days > 99) {
                urgencyTimer.textContent = `${days}일 남음`;
            } else {
                urgencyTimer.textContent = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
            }
        }

        // Sticky 타이머 업데이트
        updateFlipCard('stickyDays', days);
        updateFlipCard('stickyHours', hours);
        updateFlipCard('stickyMinutes', minutes);
    } else {
        const expiredText = "출시되었습니다!";
        const urgencyTimer = document.getElementById('urgencyTimer');
        if (urgencyTimer) {
            urgencyTimer.textContent = expiredText;
        }
        updateFlipCard('stickyDays', 0);
        updateFlipCard('stickyHours', 0);
        updateFlipCard('stickyMinutes', 0);
        // 플립 카드들도 00으로 설정
        updateFlipCard('heroDays', 0);
        updateFlipCard('heroHours', 0);
        updateFlipCard('heroMinutes', 0);
        updateFlipCard('heroSeconds', 0);
        updateFlipCard('ctaDays', 0);
        updateFlipCard('ctaHours', 0);
        updateFlipCard('ctaMinutes', 0);
        updateFlipCard('ctaSeconds', 0);
    }
}

// 초기 실행 및 1초마다 업데이트
updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// 예약자 수 관리
// ============================================

/**
 * 예약자 수를 화면에 업데이트
 * @param {number} count - 예약자 수
 */
function updateReservationCount(count) {
    const countStr = count.toLocaleString('ko-KR');
    document.getElementById('heroReservationCount').textContent = countStr;
    document.getElementById('ctaReservationCount').textContent = countStr;
    document.getElementById('stickyReservationCount').textContent = countStr;
}

/**
 * 백엔드에서 현재 예약자 수를 가져오기
 * @returns {Promise<number>} 예약자 수
 */
async function fetchReservationCount() {
    // TODO: 백엔드팀에서 제공하는 API 엔드포인트로 변경
    const RESERVATION_COUNT_ENDPOINT = ''; // 예: 'https://api.quve.kr/reservations/count'

    if (!RESERVATION_COUNT_ENDPOINT) {
        console.warn('RESERVATION_COUNT_ENDPOINT가 설정되지 않았습니다. 데모 모드로 실행합니다.');
        return 0; // 데모 모드: 0 반환
    }

    try {
        const response = await fetch(RESERVATION_COUNT_ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // 백엔드 응답 형식에 따라 조정 필요
        // 예: { count: 123 } 또는 { totalReservations: 123 }
        return data.count || data.totalReservations || 0;
    } catch (error) {
        console.error('예약자 수 조회 실패:', error);
        return 0; // 오류 발생 시 0 반환
    }
}

/**
 * 예약자 수 초기화 및 주기적 업데이트
 */
async function initReservationCount() {
    // 초기 예약자 수 조회
    const count = await fetchReservationCount();
    updateReservationCount(count);

    // 30초마다 예약자 수 갱신 (선택사항)
    // setInterval(async () => {
    //     const count = await fetchReservationCount();
    //     updateReservationCount(count);
    // }, 30000); // 30초
}

// Sticky CTA 표시/숨김
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const stickyCta = document.getElementById('stickyCta');
    const ctaSection = document.getElementById('ctaSection');
    const bgGraySection = document.querySelector('.bg-gray.bg-image');

    // 필수 요소 존재 여부 확인
    if (!stickyCta || !ctaSection || !bgGraySection) {
        return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // bg-gray bg-image 섹션 위치 계산
    const bgGraySectionTop = bgGraySection.offsetTop;

    // CTA 섹션 위치 계산
    const ctaSectionTop = ctaSection.offsetTop;
    const ctaSectionBottom = ctaSectionTop + ctaSection.offsetHeight;

    // bg-gray bg-image 섹션이 화면에 보이기 시작할 때부터 표시
    // (섹션의 상단이 화면 하단에 도달했을 때)
    const isBgGrayVisible = scrollTop + window.innerHeight >= bgGraySectionTop;

    // CTA 섹션이 화면 안에 있는지 확인
    const isCtaVisible = scrollTop + window.innerHeight > ctaSectionTop &&
                         scrollTop < ctaSectionBottom;

    // CTA 섹션 아래로 스크롤했는지 확인
    const isBelowCta = scrollTop >= ctaSectionBottom;

    // bg-gray 섹션이 보이고, CTA 섹션이 화면에 보이지 않거나 그 위에 있을 때만 표시
    // (CTA 섹션 아래로 스크롤하면 숨김)
    if (isBgGrayVisible && !isCtaVisible && !isBelowCta) {
        stickyCta.classList.add('visible');
    } else {
        stickyCta.classList.remove('visible');
    }
});

// 자녀 연령 옵션 생성 (2024년생~2018년생)
const childAgeSelect = document.getElementById('childAge');
const currentYear = 2025;
for (let birthYear = 2024; birthYear >= 2018; birthYear--) {
    const age = currentYear - birthYear;
    const option = document.createElement('option');
    option.value = birthYear;
    option.textContent = `${birthYear}년생(${age}세)`;
    childAgeSelect.appendChild(option);
}

// ============================================
// FAQ 관련 함수
// ============================================

/**
 * FAQ 아이템 HTML 생성
 * @param {Object} faq - FAQ 데이터 객체
 * @returns {HTMLElement} 생성된 FAQ 아이템 요소
 */
function createFAQItem(faq) {
    const item = document.createElement('div');
    item.className = 'faq-item';

    // XSS 방지를 위해 textContent 사용
    const questionDiv = document.createElement('div');
    questionDiv.className = 'faq-question';

    const questionText = document.createElement('span');
    questionText.textContent = faq.question;

    const iconSpan = document.createElement('span');
    iconSpan.className = 'faq-icon';
    iconSpan.textContent = '▼';

    questionDiv.appendChild(questionText);
    questionDiv.appendChild(iconSpan);

    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';
    answerDiv.textContent = faq.answer;

    item.appendChild(questionDiv);
    item.appendChild(answerDiv);

    return item;
}

/**
 * FAQ 리스트 초기화
 */
function initFAQList() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;
    
    // 기존 내용 제거
    faqList.innerHTML = '';
    
    // FAQ 데이터가 없으면 종료
    if (!FAQ_DATA || FAQ_DATA.length === 0) {
        console.warn('FAQ 데이터가 없습니다.');
        return;
    }
    
    // FAQ 아이템 생성 및 추가
    FAQ_DATA.forEach(faq => {
        const item = createFAQItem(faq);
        faqList.appendChild(item);
    });
    
    // FAQ 토글 이벤트 리스너 추가
    faqList.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            // 클릭한 FAQ만 토글 (여러 개 동시 열기 가능)
            item.classList.toggle('active');
        });
    });
}

// 폼으로 스크롤
function scrollToForm() {
    const ctaSection = document.getElementById('ctaSection');
    if (ctaSection) {
        const heroStats = ctaSection.querySelector('.hero-stats');
        if (heroStats) {
            heroStats.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// ctaSection으로 부드럽게 스크롤
function smoothScrollToCta(event) {
    event.preventDefault();
    const ctaSection = document.getElementById('ctaSection');
    if (ctaSection) {
        const heroStats = ctaSection.querySelector('.hero-stats');
        if (heroStats) {
            heroStats.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            ctaSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// 전화번호 자동 포맷
document.getElementById('phone').addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');

    // 11자리로 제한
    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    // 포맷 적용
    if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
    e.target.value = value;
});

/**
 * 전화번호 유효성 검증
 * @param {string} phone - 전화번호 (하이픈 포함 가능)
 * @returns {boolean} 유효 여부
 */
function validatePhone(phone) {
    // 하이픈 제거
    const cleaned = phone.replace(/-/g, '');

    // 010, 011, 016, 017, 018, 019로 시작하는 10-11자리 숫자
    const phoneRegex = /^01[0-9]\d{7,8}$/;

    return phoneRegex.test(cleaned);
}

/**
 * 이름 유효성 검증
 * @param {string} name - 이름
 * @returns {boolean} 유효 여부
 */
function validateName(name) {
    // 2-20자, 한글/영문/공백만 허용
    const nameRegex = /^[가-힣a-zA-Z\s]{2,20}$/;

    return nameRegex.test(name.trim());
}

// ============================================
// API 호출 함수
// ============================================

/**
 * 예약 정보를 백엔드로 전송
 * @param {Object} reservationData - 예약 정보 객체
 * @returns {Promise} API 응답
 */
async function submitReservation(reservationData) {
    if (!API_CONFIG.RESERVATION_ENDPOINT) {
        console.warn('API_CONFIG.RESERVATION_ENDPOINT가 설정되지 않았습니다.');
        return Promise.reject(new Error('API 엔드포인트가 설정되지 않았습니다.'));
    }

    try {
        const response = await fetch(API_CONFIG.RESERVATION_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('예약 정보 전송 실패:', error);
        throw error;
    }
}

/**
 * 폼 데이터 수집
 * @returns {Object} 폼 데이터 객체
 */
function collectFormData() {
    return {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        childAge: parseInt(document.getElementById('childAge').value),
        agree: document.getElementById('agree').checked
    };
}

/**
 * 폼 제출 처리
 */
async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = collectFormData();

    // 기본 필수 항목 검사
    if (!formData.name || !formData.phone || !formData.childAge || !formData.agree) {
        alert('모든 필수 항목을 입력해주세요.');
        return;
    }

    // 이름 유효성 검사
    if (!validateName(formData.name)) {
        alert('이름은 2-20자의 한글 또는 영문으로 입력해주세요.');
        document.getElementById('name').focus();
        return;
    }

    // 전화번호 유효성 검사
    if (!validatePhone(formData.phone)) {
        alert('올바른 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)');
        document.getElementById('phone').focus();
        return;
    }

    // 로딩 상태 표시 (선택사항)
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '처리 중...';

    try {
        // API_CONFIG.RESERVATION_ENDPOINT가 설정되어 있으면 백엔드로 전송
        if (API_CONFIG.RESERVATION_ENDPOINT) {
            const response = await submitReservation(formData);
            console.log('예약 성공:', response);

            // ============================================
            // 중복 예약 체크 (백엔드 개발자 가이드)
            // ============================================
            // 백엔드에서 duplicate 또는 isDuplicate 플래그를 true로 반환하면 중복 모달 표시
            //
            // 예시 응답 1 - 중복 예약인 경우:
            // {
            //     "duplicate": true,
            //     "message": "이미 예약된 번호입니다"
            // }
            //
            // 예시 응답 2 - 중복 예약인 경우 (다른 키 사용):
            // {
            //     "isDuplicate": true,
            //     "message": "이미 예약된 번호입니다"
            // }
            //
            // 예시 응답 3 - 정상 예약인 경우:
            // {
            //     "duplicate": false,
            //     "totalReservations": 1234,
            //     "message": "예약이 완료되었습니다"
            // }
            // ============================================
            if (response.duplicate || response.isDuplicate) {
                document.getElementById('duplicateModal').classList.add('show');
                return;
            }

            // 성공 모달 표시
            document.getElementById('successName').textContent = formData.name;
            document.getElementById('successModal').classList.add('show');

            // 예약자 수 업데이트 (백엔드 응답에 포함된 경우)
            if (response.totalReservations) {
                updateReservationCount(response.totalReservations);
            }
        } else {
            // API 엔드포인트가 없으면 데모 모드
            console.log('예약 정보 (데모 모드):', formData);
            
            // 성공 모달 표시
            document.getElementById('successName').textContent = formData.name;
            document.getElementById('successModal').classList.add('show');

            // 예약자 수 증가 (데모용)
            const currentCount = parseInt(document.getElementById('heroReservationCount').textContent);
            updateReservationCount(currentCount + 1);
        }
    } catch (error) {
        console.error('예약 처리 중 오류 발생:', error);
        alert('예약 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        // 로딩 상태 해제
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

// 폼 제출 이벤트 리스너
document.getElementById('reservationForm').addEventListener('submit', handleFormSubmit);

// Exit Intent 감지
let exitIntentShown = false;
let exitIntentTimeout = null;

document.addEventListener('mouseleave', (e) => {
    // 상단으로 마우스가 나갔을 때만 (페이지 나가기 의도)
    if (e.clientY < 0 && !exitIntentShown) {
        // 성공 모달이 열려있으면 Exit Intent 모달을 띄우지 않음
        const successModal = document.getElementById('successModal');
        if (successModal && successModal.classList.contains('show')) {
            return;
        }

        exitIntentShown = true;
        const modal = document.getElementById('exitModal');
        if (modal) {
            modal.classList.add('show');

            // 5분 후 다시 표시 가능하도록 설정
            clearTimeout(exitIntentTimeout);
            exitIntentTimeout = setTimeout(() => {
                exitIntentShown = false;
            }, 5 * 60 * 1000); // 5분
        }
    }
});

// Exit 모달 닫기
function closeExitModal() {
    const modal = document.getElementById('exitModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// 페이지 나가기 확인
function confirmExit() {
    closeExitModal();
    // 모달을 닫고 30초 후 다시 표시 가능하게 설정
    clearTimeout(exitIntentTimeout);
    exitIntentTimeout = setTimeout(() => {
        exitIntentShown = false;
    }, 30 * 1000); // 30초
}

// 성공 모달 닫기
function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('show');
}

/**
 * 중복 예약 모달 닫기
 *
 * 이미 예약된 번호로 재예약 시도 시 표시되는 모달을 닫습니다.
 * HTML의 duplicateModal 요소에서 'show' 클래스를 제거하여 모달을 숨깁니다.
 */
function closeDuplicateModal() {
    document.getElementById('duplicateModal').classList.remove('show');
}

// 리퍼럴 공유
function shareReferral() {
    const name = document.getElementById('successName').textContent;
    // 실제 구현시 개인별 리퍼럴 링크 생성
    const referralUrl = `https://quve.kr/ref/${name}`;
    const shareText = `${name}님이 큐브를 추천합니다! 100만원 상당 혜택을 받아보세요.`;

    if (navigator.share) {
        navigator.share({
            title: '큐브 사전예약',
            text: shareText,
            url: referralUrl
        }).then(() => {
            alert('공유가 완료되었습니다!');
        }).catch((error) => {
            console.log('공유 취소 또는 실패:', error);
        });
    } else {
        // Web Share API를 지원하지 않는 경우
        const textarea = document.createElement('textarea');
        textarea.value = `${shareText}\n${referralUrl}`;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('링크가 복사되었습니다!');
    }
}

// ============================================
// 페이지 이동 함수
// ============================================

/**
 * 연구 결과 페이지로 이동
 */
function goToResearchPage() {
    if (API_CONFIG.RESEARCH_PAGE_URL) {
        window.open(API_CONFIG.RESEARCH_PAGE_URL, '_blank');
    } else {
        console.warn('RESEARCH_PAGE_URL이 설정되지 않았습니다.');
    }
}

/**
 * 후기 페이지로 이동
 * @param {number|string} testimonialId - 후기 ID 또는 페이지 URL
 * @param {string} customUrl - 커스텀 URL (선택사항)
 */
function goToTestimonialPage(testimonialId = null, customUrl = null) {
    // 커스텀 URL이 있으면 해당 URL로 이동
    if (customUrl) {
        window.open(customUrl, '_blank');
        return;
    }
    
    // 기본 후기 페이지 URL 사용
    let url = API_CONFIG.TESTIMONIAL_PAGE_URL;
    if (testimonialId) {
        url += `?id=${testimonialId}`;
    }
    
    if (url && url !== 'https://example.com/testimonials') {
        window.open(url, '_blank');
    } else {
        console.warn('TESTIMONIAL_PAGE_URL이 설정되지 않았습니다.');
    }
}

// ============================================
// 후기 카드 생성 함수
// ============================================

/**
 * 후기 카드 HTML 생성
 * @param {Object} testimonial - 후기 데이터 객체
 * @returns {HTMLElement} 생성된 카드 요소
 */
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.setAttribute('data-testimonial-id', testimonial.id);

    // XSS 방지를 위해 textContent 사용
    const title = document.createElement('h3');
    title.className = 'testimonial-title';
    title.textContent = testimonial.title;

    const imageDiv = document.createElement('div');
    imageDiv.className = 'testimonial-image';
    const img = document.createElement('img');
    img.src = testimonial.image;
    img.alt = '베타 테스터 후기';
    imageDiv.appendChild(img);

    const content = document.createElement('p');
    content.className = 'testimonial-content';
    content.textContent = testimonial.content;

    const author = document.createElement('p');
    author.className = 'testimonial-author';
    author.textContent = testimonial.author;

    card.appendChild(title);
    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(author);

    return card;
}

/**
 * 후기 슬라이더 초기화
 */
function initTestimonialSlider() {
    const slider = document.getElementById('testimonialSlider');
    if (!slider) return;
    
    // 기존 내용 제거
    slider.innerHTML = '';
    
    // 후기 데이터가 없으면 종료
    if (!TESTIMONIAL_DATA || TESTIMONIAL_DATA.length === 0) {
        console.warn('후기 데이터가 없습니다.');
        return;
    }
    
    // 후기 카드 생성 및 추가
    TESTIMONIAL_DATA.forEach(testimonial => {
        const card = createTestimonialCard(testimonial);
        slider.appendChild(card);
    });
    
    // 무한 슬라이드를 위해 처음 데이터를 복제해서 추가
    TESTIMONIAL_DATA.forEach(testimonial => {
        const card = createTestimonialCard(testimonial);
        slider.appendChild(card);
    });

    // 드래그 및 자동 슬라이드 기능
    let isDragging = false;
    let isHovering = false;
    let startX = 0;
    let currentTranslate = 0;
    let animationId = null;
    let autoSlideTimeout = null;

    // CSS 애니메이션 제거하고 JavaScript로 제어
    slider.style.animation = 'none';

    // 자동 슬라이드 애니메이션 (requestAnimationFrame 사용)
    function autoSlide() {
        if (isDragging || isHovering) return;

        // 속도 절반으로 감소 (0.75px씩 이동)
        currentTranslate -= 0.25;

        // 슬라이더 너비의 절반 지점을 넘으면 처음으로 리셋
        const sliderWidth = slider.scrollWidth / 2;
        if (Math.abs(currentTranslate) >= sliderWidth) {
            currentTranslate = 0;
        }

        slider.style.transform = `translateX(${currentTranslate}px)`;
        animationId = requestAnimationFrame(autoSlide);
    }

    function startDrag(clientX) {
        isDragging = true;
        startX = clientX;

        // 자동 슬라이드 중지
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        // 자동 재개 타이머 취소
        if (autoSlideTimeout) {
            clearTimeout(autoSlideTimeout);
            autoSlideTimeout = null;
        }

        slider.style.cursor = 'grabbing';
    }

    function endDrag() {
        isDragging = false;
        slider.style.cursor = 'grab';

        // 즉시 자동 슬라이드 재개
        animationId = requestAnimationFrame(autoSlide);
    }

    function drag(clientX) {
        if (!isDragging) return;
        const currentPosition = clientX;
        const diff = currentPosition - startX;
        currentTranslate += diff;
        startX = currentPosition;
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    // 마우스 드래그
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startDrag(e.clientX);
    });


    slider.addEventListener('mouseup', () => {
        if (isDragging) {
            endDrag();
        }
    });

    slider.addEventListener('mousemove', (e) => {
        drag(e.clientX);
    });

    // 호버 시 애니메이션 일시정지
    slider.addEventListener('mouseenter', () => {
        isHovering = true;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    });

    slider.addEventListener('mouseleave', () => {
        isHovering = false;
        if (!isDragging && !animationId) {
            animationId = requestAnimationFrame(autoSlide);
        }
        if (isDragging) {
            endDrag();
        }
    });

    // 터치 드래그 (모바일)
    slider.addEventListener('touchstart', (e) => {
        startDrag(e.touches[0].clientX);
    });

    slider.addEventListener('touchend', () => {
        if (isDragging) {
            endDrag();
        }
    });

    slider.addEventListener('touchmove', (e) => {
        drag(e.touches[0].clientX);
    });

    // 초기 설정
    slider.style.cursor = 'grab';
    currentTranslate = 0;

    // 자동 슬라이드 시작
    animationId = requestAnimationFrame(autoSlide);
}

// ============================================
// 버튼 이벤트 리스너 초기화
// ============================================

// ============================================
// 링크 초기화 함수
// ============================================

/**
 * 링크 버튼들 초기화
 */
function initLinks() {
    // 1:1 상담하기
    const consultationLink = document.getElementById('consultationLink');
    if (consultationLink) {
        consultationLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.CONSULTATION_URL) {
                window.open(LINK_CONFIG.CONSULTATION_URL, '_blank');
            } else {
                console.warn('CONSULTATION_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 출시 알림만 받기
    const notificationLink = document.getElementById('notificationLink');
    if (notificationLink) {
        notificationLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.NOTIFICATION_URL) {
                window.open(LINK_CONFIG.NOTIFICATION_URL, '_blank');
            } else {
                console.warn('NOTIFICATION_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 슈퍼브이
    const supervieLink = document.getElementById('supervieLink');
    if (supervieLink) {
        supervieLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.SUPERVIE_URL) {
                window.open(LINK_CONFIG.SUPERVIE_URL, '_blank');
            } else {
                console.warn('SUPERVIE_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 슈퍼리딩
    const superreadingLink = document.getElementById('superreadingLink');
    if (superreadingLink) {
        superreadingLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.SUPERREADING_URL) {
                window.open(LINK_CONFIG.SUPERREADING_URL, '_blank');
            } else {
                console.warn('SUPERREADING_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 큐브
    const quveLink = document.getElementById('quveLink');
    if (quveLink) {
        quveLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.QUVE_URL) {
                window.open(LINK_CONFIG.QUVE_URL, '_blank');
            } else {
                console.warn('QUVE_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 인스타그램
    const instagramLink = document.getElementById('instagramLink');
    if (instagramLink) {
        instagramLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.INSTAGRAM_URL) {
                window.open(LINK_CONFIG.INSTAGRAM_URL, '_blank');
            } else {
                console.warn('INSTAGRAM_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 유튜브
    const youtubeLink = document.getElementById('youtubeLink');
    if (youtubeLink) {
        youtubeLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.YOUTUBE_URL) {
                window.open(LINK_CONFIG.YOUTUBE_URL, '_blank');
            } else {
                console.warn('YOUTUBE_URL이 설정되지 않았습니다.');
            }
        });
    }

    // 블로그
    const blogLink = document.getElementById('blogLink');
    if (blogLink) {
        blogLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (LINK_CONFIG.BLOG_URL) {
                window.open(LINK_CONFIG.BLOG_URL, '_blank');
            } else {
                console.warn('BLOG_URL이 설정되지 않았습니다.');
            }
        });
    }
}

// DOM이 로드된 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 연구 결과 자세히 보기 버튼
    const researchLink = document.getElementById('researchLink');
    if (researchLink) {
        researchLink.addEventListener('click', (e) => {
            e.preventDefault();
            goToResearchPage();
        });
    }

    // 후기 슬라이더 초기화
    initTestimonialSlider();

    // FAQ 리스트 초기화
    initFAQList();

    // 링크 초기화
    initLinks();

    // 예약자 수 초기화
    initReservationCount();

    // Experience 버튼 이벤트 초기화
    initExperienceButton();
});

// Experience 버튼 초기화
function initExperienceButton() {
    const experienceButton = document.querySelector('.experience-button');
    const experienceImage = document.querySelector('.experience-image');
    
    if (!experienceButton || !experienceImage) return;

    // 모바일 감지
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const imagePrefix = isMobile ? 'experience_mo' : 'experience_web';
    
    // 초기 이미지 설정
    experienceImage.src = `images/${imagePrefix}_img.png`;

    let micPermissionGranted = false;
    let micPermissionRequested = false;
    let experienceStarted = false;
    let videoWatched = false;
    let isWatchingVideo = false;

    experienceButton.addEventListener('click', async () => {
        if (isWatchingVideo) {
            // 영상 시청 중에는 클릭 무시
            return;
        }

        if (videoWatched) {
            // 영상 시청 후 사전 무료체험 신청하기 버튼 클릭
            // TODO: 사전 무료체험 신청 로직 구현
            return;
        }

        if (experienceStarted) {
            // 이미 체험 시작된 경우
            return;
        }

        if (!micPermissionRequested) {
            // 첫 클릭: 마이크 권한 요청
            micPermissionRequested = true;
            experienceButton.style.display = 'none';
            experienceImage.src = `images/${imagePrefix}_mic.png`;

            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                // 마이크 허용 성공
                micPermissionGranted = true;
                experienceImage.src = `images/${imagePrefix}_mic_success.png`;
                experienceButton.textContent = '체험 시작하기';
                experienceButton.innerHTML = '<img src="images/reproduction.png" alt="" class="experience-button-icon" />체험 시작하기';
                experienceButton.style.display = 'flex';
                
                // 스트림 정리
                stream.getTracks().forEach(track => track.stop());
            } catch (error) {
                // 마이크 허용 거부 또는 마이크 없음
                experienceImage.src = `images/${imagePrefix}_mic_fail.png`;
                experienceButton.textContent = '아이 반응 영상 보기';
                experienceButton.innerHTML = '<img src="images/reproduction.png" alt="" class="experience-button-icon" />아이 반응 영상 보기';
                experienceButton.style.display = 'flex';
            }
        } else if (micPermissionGranted) {
            // 체험 시작하기 버튼 클릭 (마이크 허용된 경우)
            experienceStarted = true;
            experienceImage.src = `images/${imagePrefix}_frame.png`;
            experienceButton.style.display = 'none';
        } else {
            // 아이 반응 영상 보기 버튼 클릭 (마이크 거부된 경우)
            isWatchingVideo = true;
            experienceImage.src = `images/${imagePrefix}_frame.png`;
            experienceButton.style.display = 'none';
            
            // 영상 시뮬레이션: 이미지가 로드된 후 일정 시간 후 자동 전환
            const handleImageLoad = function() {
                // 영상 길이를 30초로 가정 (실제 영상 길이에 맞게 조정)
                setTimeout(() => {
                    videoWatched = true;
                    isWatchingVideo = false;
                    experienceImage.src = `images/${imagePrefix}_apply.png`;
                    experienceButton.textContent = '사전 무료체험 신청하기';
                    experienceButton.innerHTML = '<img src="images/reproduction.png" alt="" class="experience-button-icon" />사전 무료체험 신청하기';
                    experienceButton.style.display = 'flex';
                    experienceImage.removeEventListener('load', handleImageLoad);
                }, 30000); // 30초 후 자동 전환
            };
            
            if (experienceImage.complete) {
                handleImageLoad();
            } else {
                experienceImage.addEventListener('load', handleImageLoad);
            }
        }
    });
}

// 모달 외부 클릭시 닫기
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}
