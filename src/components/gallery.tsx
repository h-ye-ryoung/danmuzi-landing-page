import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const originalImages = [
  "/assets/screen_image/screen1.webp",
  "/assets/screen_image/screen2.webp",
  "/assets/screen_image/screen3.webp",
  "/assets/screen_image/screen4.webp",
  "/assets/screen_image/screen5.webp",
  "/assets/screen_image/screen6.webp",
  "/assets/screen_image/screen7.webp",
  "/assets/screen_image/screen8.webp",
  "/assets/screen_image/screen9.webp",
];

export default function HorizontalGallery() {
  const REPEAT = 3;
  const length = originalImages.length;
  const ITEM_WIDTH = 270;
  const GAP = 32;
  const PADDING = 16;

  // 1) 3배 반복된 배열
  const images = Array(REPEAT).fill(originalImages).flat();

  // 2) 상태
  const [currentIndex, setCurrentIndex] = useState(length);
  const containerRef = useRef<HTMLDivElement>(null);
  const [effectiveWidth, setEffectiveWidth] = useState(0);

  // 3) 중앙 정렬 오프셋 계산
  useLayoutEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setEffectiveWidth(w - PADDING * 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const xOffset = effectiveWidth / 2 - ITEM_WIDTH / 2;
  const calculateX = (idx = currentIndex) => xOffset - idx * (ITEM_WIDTH + GAP);

  // 4) 애니메이션 컨트롤러
  const controls = useAnimation();

  // 5) 자동 슬라이드 & 타이머 핸들러
  const autoTimer = useRef<NodeJS.Timeout | null>(null);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = () => {
    if (autoTimer.current) clearTimeout(autoTimer.current);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
  };

  const scheduleAuto = (delay = 3000) => {
    clearTimers();
    autoTimer.current = setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      scheduleAuto(3000);
    }, delay);
  };

  // 마운트 시 자동 시작
  useEffect(() => {
    scheduleAuto(3000);
    return clearTimers;
  }, [effectiveWidth]);

  // currentIndex 변경 시 tween 애니메이션
  useEffect(() => {
    controls.start(
      { x: calculateX() },
      { type: "tween", ease: "easeInOut", duration: 0.6 }
    );
  }, [currentIndex, effectiveWidth]);

  // 6) 수동 이전/다음: 클릭 시 5초 일시정지
  const onUserNavigate = (newIndex: number) => {
    clearTimers();
    setCurrentIndex(newIndex);
    // 5초 후 자동 재개
    pauseTimer.current = setTimeout(() => scheduleAuto(3000), 5000);
  };
  const handlePrev = () => onUserNavigate(currentIndex - 1);
  const handleNext = () => onUserNavigate(currentIndex + 1);

  // 7) 무한 루프 경계 처리
  const onAnimComplete = () => {
    if (currentIndex >= length * 2) {
      const resetIndex = length;
      controls.set({ x: calculateX(resetIndex) });
      setCurrentIndex(resetIndex);
    } else if (currentIndex < length) {
      const resetIndex = length * 2 - 1;
      controls.set({ x: calculateX(resetIndex) });
      setCurrentIndex(resetIndex);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden px-4">
      {/* 좌/우 클릭 영역 */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 z-10 cursor-pointer"
        onClick={handlePrev}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 z-10 cursor-pointer"
        onClick={handleNext}
      />

      <motion.div
        className="flex py-6"
        style={{ gap: GAP }}
        animate={controls}
        onAnimationComplete={onAnimComplete}
      >
        {images.map((src, idx) => {
          const isFocused = idx === currentIndex;
          const origIdx = idx % length;

          return (
            <motion.img
              key={`${idx}-${src}`}
              src={src}
              alt={`앱 화면 ${origIdx + 1}`}
              className="w-[270px] h-auto shrink-0 rounded-lg shadow-md object-cover"
              animate={{
                x: 0, // 이미지 자체는 x 애니메이션 없으므로 항상 0
                opacity: isFocused ? 1 : 0.5,
                scale: isFocused ? 1.1 : 1,
                borderRadius: isFocused ? "16px" : "8px",
              }}
              transition={{ type: "tween", duration: 0.3 }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
