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

// 폼 제출
document.getElementById('reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const childAge = document.getElementById('childAge').value;

    // 실제 구현시 서버로 데이터 전송
    console.log('예약 정보:', { name, phone, childAge });

    // 성공 모달 표시
    document.getElementById('successName').textContent = name;
    document.getElementById('successModal').classList.add('show');

    // 예약자 수 증가 (데모용)
    const currentCount = parseInt(document.getElementById('heroReservationCount').textContent);
    updateReservationCount(currentCount + 1);
});

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

// 모달 외부 클릭시 닫기
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}
