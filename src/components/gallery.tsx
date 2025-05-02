const imageList = [
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
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 px-4 py-6 w-fit touch-auto">
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`앱 화면 ${index + 1}`}
            className="w-[270px] h-auto shrink-0 rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
}
