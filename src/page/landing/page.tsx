import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Share2, Github } from "lucide-react";
import { motion } from "framer-motion";
import HorizontalGallery from "@/components/gallery";

export default function LandingPage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #666666 0%, #000000 100%)"
      }}
      className="min-h-screen text-white"
    >
      {/* Hero */}
      <motion.section
        className="text-center pt-24 pb-8 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-10 text-white">
          Dan Mu Zi
        </motion.h1>
        <motion.p className="text-base sm:text-md text-white max-w-2xl mx-auto mb-12">
          AI와 함께하는 여행 <br />단체사진을 쉽고 즐겁게, 순간을 온전히 담다
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="px-6 py-3 text-lg"
              variant="outline"
              onClick={() => {
                window.open("https://github.com/Dan-Mu-Zi-Project");
              }}
            >
              <Github className="mr-2 w-5 h-5" />
              Github
            </Button>
          </a>
        </div>
      </motion.section>

      {/* muzi.png 이미지 추가 */}
      <motion.section
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/image/muzi.png"
          alt="muzi 캐릭터"
          style={{ width: "100%", maxWidth: 1200, borderRadius: 24 }}
          className="my-24"
        />
      </motion.section>

      {/* Overview */}
      <motion.section
        className="py-32 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-20 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* 왼쪽: 제목 및 서브텍스트 (세로 가운데 정렬) */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start md:items-start text-left">
          <h2 className="text-6xl font-extrabold text-white mb-2 pl-2 md:pl-0">Overview</h2>
        </div>
        {/* 오른쪽: 본문 내용 */}
        <div className="w-full md:w-2/3 text-xs sm:text-sm text-white leading-relaxed">
          카메라는 늘 기록을 위한 도구로 여겨져 왔습니다. 그러나 우리는 묻습니다. <br />
          왜 카메라는 단순한 촬영 도구여야 할까? <br /><br />
          <b>단무지</b>는 그 질문에서 출발한 단체 여행 특화 앱입니다. 단무지는 단순히 사진을 잘 찍어주는 AI가 아니라, 사용자와 ‘함께 여행하는 존재’로 기획되었습니다. 사람의 얼굴을 인식하고, 적절한 구도를 제안하며, 대화를 통해 자연스러운 순간을 이끌어내는 단무지는, 마치 여행을 함께하는 친구처럼 사용자에게 반응합니다.<br /><br />
          단무지는 촬영 과정 그 자체를 하나의 인터랙티브한 경험으로 만들어, 여행의 순간마다 이야기와 몰입이 생겨나도록 설계되었습니다. 또한, 촬영 이후에는 AI가 사진을 자동 정리·선별해 사용자가 사진 관리에 시간을 들이지 않고, 여행에 더욱 집중할 수 있게 돕습니다.<br /><br />
          우리는 단무지를 통해 여행의 자유로움을 확장하며, <b>‘카메라와의 교감’</b>이라는 새로운 경험을 제안합니다. <br />
          사진은 더 이상 결과물이 아닌, 함께하는 순간에 더 깊이 몰입할 수 있는 이야기의 일부가 됩니다.
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="py-32 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* 타이틀 및 서브텍스트 추가 */}
        <div className="mb-16 mt-12 text-left leading-relaxed">
          <h2 className="text-5xl font-extrabold text-white leading-[1.0] mb-6">여행의 순간을</h2>
          <h2 className="text-5xl font-extrabold text-white leading-[1.0] mb-8">방해하지 않는 AI</h2>
          <span className="text-base text-gray-400 leading-[1.0] mb-2 block">사용자는 여행에만 집중하세요. 나머지는 무지가 알아서 할게요.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          {[
            {
              icon: (
                <Sparkles className="mx-auto mb-4 w-10 h-10 text-indigo-500" />
              ),
              title: "AI 기반 음성 피드백",
              desc: "최적의 구도와 촬영 상태를 실시간으로 안내해요",
            },
            {
              icon: <Users className="mx-auto mb-4 w-10 h-10 text-pink-500" />,
              title: "함께 기록",
              desc: "지인들과 함께 그룹을 만들고 사진을 관리해보세요.",
            },
            {
              icon: (
                <Share2 className="mx-auto mb-4 w-10 h-10 text-green-500" />
              ),
              title: "간편 공유",
              desc: "촬영된 사진은 SNS나 메시지로 바로 공유할 수 있어요.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-sm bg-[#222] border border-white/50">
                <CardContent className="py-8 text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Demo Section with Horizontal Gallery */}
      <motion.section
        className="py-20 px-4 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* 타이틀 및 서브텍스트 오른쪽 정렬로 변경 */}
        <div className="mb-16 mt-12 text-right leading-relaxed">
          <h2 className="text-5xl font-extrabold text-white leading-[1.0] mb-6">단무지와 함께하는</h2>
          <h2 className="text-5xl font-extrabold text-white leading-[1.0] mb-8">자유로운 여행의 흐름</h2>
          <span className="text-base text-gray-400 leading-[1.0] mb-4 block">손에 쥔 것은 카메라지만, 기억하는 것은 순간입니다.</span>
        </div>
        <section className="py-2">
          <HorizontalGallery />
        </section>
      </motion.section>

      {/* 팀 소개 */}
      <motion.section
        className="px-6 md:px-24 py-32 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl mb-20 font-extrabold mb-8 text-white">Team. 단무지</h2>
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <img src="/assets/profile/profile1.jpeg" alt="profile1" className="h-auto w-auto max-w-[20rem] max-h-[20rem]" />
            <span className="mt-4 text-lg font-semibold text-white">WooJin Byeon</span>
            <span className="mt-3 text-sm text-gray-400">bwj0721@soongsil.ac.kr</span>
            <span className="mt-1 text-sm text-gray-400">Soongsil GlobalMedia 21</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/profile/profile2.JPG" alt="profile2" className="h-auto w-auto max-w-[20rem] max-h-[20rem]" />
            <span className="mt-4 text-lg font-semibold text-white">HyeRyoung Kim</span>
            <span className="mt-3 text-sm text-gray-400">hyeryoung27@soongsil.ac.kr</span>
            <span className="mt-1 text-sm text-gray-400">Soongsil GlobalMedia 21</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/profile/profile3.JPG" alt="profile3" className="h-auto w-auto max-w-[20rem] max-h-[20rem]" />
            <span className="mt-4 text-lg font-semibold text-white">JaeHwan Shim</span>
            <span className="mt-3 text-sm text-gray-400">troyshim@soongsil.ac.kr</span>
            <span className="mt-1 text-sm text-gray-400">Soongsil GlobalMedia 21</span>
          </div>
        </div>
      </motion.section>

      {/* 푸터 */}
      <motion.footer
        className="text-center text-sm text-white py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        © 2025 Dan-Mu-Ji. All rights reserved.
      </motion.footer>
    </div>
  );
}
