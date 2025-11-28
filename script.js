// ============================================
// CONFIG: 백엔드 연동 설정
// ============================================
// TODO: 백엔드팀으로부터 받은 엔드포인트로 변경
const API_CONFIG = {
    // 예약 정보 전송 API
    RESERVATION_ENDPOINT: '', // 예: 'https://api.quve.kr/reservations'
    
    // 페이지 URL
    RESEARCH_PAGE_URL: 'https://example.com/research', // 연구 결과 자세히 보기 페이지
    TESTIMONIAL_PAGE_URL: 'https://example.com/testimonials', // 후기 페이지
};

// ============================================
// TESTIMONIAL DATA: 후기 데이터
// ============================================
// TODO: 나중에 후기를 추가할 때 이 배열에 객체만 추가하면 됩니다
const TESTIMONIAL_DATA = [
    {
        id: 1,
        title: "유튜브만 찾던 아이가 먼저 '큐브 하자'고 졸라요!",
        image: "images/testimonial-1.png",
        content: "일방적인 영상만 보던 아이가, 캐릭터가 자기 말에 대답해주고 칭찬해주니 신나서 30분 내내 조잘거리네요.",
        author: "- 5세 자녀",
        pageUrl: null // null이면 기본 후기 페이지로 이동, 특정 URL이면 해당 페이지로 이동
    },
    {
        id: 2,
        title: "유튜브만 찾던 아이가 먼저 '큐브 하자'고 졸라요!",
        image: "images/testimonial-2.png",
        content: "일방적인 영상만 보던 아이가, 캐릭터가 자기 말에 대답해주고 칭찬해주니 신나서 30분 내내 조잘거리네요.",
        author: "- 5세 자녀",
        pageUrl: null
    },
    {
        id: 3,
        title: "유튜브만 찾던 아이가 먼저 '큐브 하자'고 졸라요!",
        image: "images/testimonial-3.png",
        content: "일방적인 영상만 보던 아이가, 캐릭터가 자기 말에 대답해주고 칭찬해주니 신나서 30분 내내 조잘거리네요.",
        author: "- 5세 자녀",
        pageUrl: null
    },
    {
        id: 4,
        title: "유튜브만 찾던 아이가 먼저 '큐브 하자'고 졸라요!",
        image: "images/testimonial-4.png",
        content: "일방적인 영상만 보던 아이가, 캐릭터가 자기 말에 대답해주고 칭찬해주니 신나서 30분 내내 조잘거리네요.",
        author: "- 5세 자녀",
        pageUrl: null
    },
    {
        id: 5,
        title: "유튜브만 찾던 아이가 먼저 '큐브 하자'고 졸라요!",
        image: "images/testimonial-5.png",
        content: "일방적인 영상만 보던 아이가, 캐릭터가 자기 말에 대답해주고 칭찬해주니 신나서 30분 내내 조잘거리네요.",
        author: "- 5세 자녀",
        pageUrl: null
    },
    {
        id: 6,
        title: "유튜브만 찾던 아이가 먼저 '큐브 하자'고 졸라요!",
        image: "images/testimonial-6.png",
        content: "일방적인 영상만 보던 아이가, 캐릭터가 자기 말에 대답해주고 칭찬해주니 신나서 30분 내내 조잘거리네요.",
        author: "- 5세 자녀",
        pageUrl: null
    }
    // 새로운 후기를 추가하려면 위 형식으로 객체를 추가하세요
    // 예:
    // {
    //     id: 7,
    //     title: "새로운 후기 제목",
    //     image: "images/testimonial-7.png",
    //     content: "후기 내용",
    //     author: "- 4세 자녀",
    //     pageUrl: "https://example.com/testimonial/7" // 특정 페이지가 있으면 URL 입력
    // }
];

// 출시 날짜 설정 (2025년 12월 18일 00:00:00)
const launchDate = new Date('2025-12-18T00:00:00').getTime();

// 숫자를 두 자리 문자열로 포맷
function formatTwoDigits(num) {
    return num.toString().padStart(2, '0');
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
        updateFlipCard('heroHours', hours);
        updateFlipCard('heroMinutes', minutes);
        updateFlipCard('heroSeconds', seconds);

        // CTA 카운트다운 업데이트
        updateFlipCard('ctaHours', hours);
        updateFlipCard('ctaMinutes', minutes);
        updateFlipCard('ctaSeconds', seconds);

        // Urgency 타이머 (기존 텍스트 형식 유지)
        const countdownText = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
        const urgencyTimer = document.getElementById('urgencyTimer');
        if (urgencyTimer) {
            urgencyTimer.textContent = countdownText;
        }
    } else {
        const expiredText = "출시되었습니다!";
        const urgencyTimer = document.getElementById('urgencyTimer');
        if (urgencyTimer) {
            urgencyTimer.textContent = expiredText;
        }
        // 플립 카드들도 00으로 설정
        updateFlipCard('heroHours', 0);
        updateFlipCard('heroMinutes', 0);
        updateFlipCard('heroSeconds', 0);
        updateFlipCard('ctaHours', 0);
        updateFlipCard('ctaMinutes', 0);
        updateFlipCard('ctaSeconds', 0);
    }
}

// 초기 실행 및 1초마다 업데이트
updateCountdown();
setInterval(updateCountdown, 1000);

// 예약자 수 업데이트 함수 (실제 구현시 서버에서 가져오기)
function updateReservationCount(count) {
    const countStr = count.toString().padStart(2, '0');
    document.getElementById('heroReservationCount').textContent = countStr;
    document.getElementById('ctaReservationCount').textContent = countStr;
    document.getElementById('stickyReservationCount').textContent = countStr;
}

// Sticky CTA 표시/숨김
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const stickyCta = document.getElementById('stickyCta');
    const ctaSection = document.getElementById('ctaSection');
    const bgGraySection = document.querySelector('.bg-gray.bg-image');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // bg-gray bg-image 섹션 위치 계산
    const bgGraySectionTop = bgGraySection.offsetTop;
    
    // CTA 섹션 위치 계산
    const ctaSectionTop = ctaSection.offsetTop;
    const ctaSectionBottom = ctaSectionTop + ctaSection.offsetHeight;

    // bg-gray bg-image 섹션이 화면에 보이기 시작할 때부터 표시
    // (섹션의 상단이 화면 하단에 도달했을 때)
    const isBgGrayVisible = scrollTop + window.innerHeight >= bgGraySectionTop;
    
    // bg-gray 섹션이 보이고, CTA 섹션이 화면에 보이지 않을 때만 표시
    if (isBgGrayVisible && (scrollTop < ctaSectionTop - window.innerHeight || scrollTop > ctaSectionBottom)) {
        stickyCta.classList.add('visible');
    } else {
        stickyCta.classList.remove('visible');
    }
});

// 자녀 연령 옵션 생성 (24개월~72개월)
const childAgeSelect = document.getElementById('childAge');
for (let i = 24; i <= 72; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${i}개월`;
    childAgeSelect.appendChild(option);
}

// FAQ 토글
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const wasActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        if (!wasActive) {
            item.classList.add('active');
        }
    });
});

// 폼으로 스크롤
function scrollToForm() {
    document.getElementById('ctaSection').scrollIntoView({ behavior: 'smooth' });
}

// ctaSection으로 부드럽게 스크롤
function smoothScrollToCta(event) {
    event.preventDefault();
    const ctaSection = document.getElementById('ctaSection');
    if (ctaSection) {
        ctaSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 전화번호 자동 포맷
document.getElementById('phone').addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
    e.target.value = value;
});

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
    
    // 유효성 검사
    if (!formData.name || !formData.phone || !formData.childAge || !formData.agree) {
        alert('모든 필수 항목을 입력해주세요.');
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
document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !exitIntentShown) {
        exitIntentShown = true;
        document.getElementById('exitModal').classList.add('show');
    }
});

// Exit 모달 닫기
function closeExitModal() {
    document.getElementById('exitModal').classList.remove('show');
}

// 페이지 나가기 확인
function confirmExit() {
    closeExitModal();
}

// 성공 모달 닫기
function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('show');
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
    
    card.innerHTML = `
        <h3 class="testimonial-title">${testimonial.title}</h3>
        <div class="testimonial-image">
            <img src="${testimonial.image}" alt="베타 테스터 후기" />
        </div>
        <p class="testimonial-content">${testimonial.content}</p>
        <p class="testimonial-author">${testimonial.author}</p>
        <button class="testimonial-button" data-testimonial-id="${testimonial.id}" data-page-url="${testimonial.pageUrl || ''}">자세히 보기</button>
    `;
    
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
    
    // 후기 버튼 이벤트 리스너 추가
    slider.querySelectorAll('.testimonial-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const testimonialId = button.getAttribute('data-testimonial-id');
            const pageUrl = button.getAttribute('data-page-url');
            
            // pageUrl이 있으면 해당 URL로, 없으면 기본 후기 페이지로
            if (pageUrl) {
                goToTestimonialPage(testimonialId, pageUrl);
            } else {
                goToTestimonialPage(testimonialId);
            }
        });
    });
}

// ============================================
// 버튼 이벤트 리스너 초기화
// ============================================

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
});

// 모달 외부 클릭시 닫기
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}
