import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Share2, Github } from "lucide-react";
import { motion } from "framer-motion";
import HorizontalGallery from "@/components/gallery";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 text-zinc-800">
      {/* Hero */}
      <motion.section
        className="text-center pt-16 pb-8 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h1 className="text-6xl sm:text-5xl font-extrabold tracking-tight mb-8">
          단무지
        </motion.h1>
        <motion.p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-12">
          AI와 함께하는 여행, <br />단체사진을 쉽고 즐겁게, 순간을 온전히 담다
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

      {/* Overview */}
      <motion.section
        className="py-16 px-4 bg-zinc-50 max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* 왼쪽: 제목 및 서브텍스트 (세로 가운데 정렬) */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start md:items-start text-left">
          <h2 className="text-5xl font-extrabold text-zinc-900 mb-2 pl-2 md:pl-0">Overview</h2>
          <span className="text-sm text-zinc-400 pl-2 md:pl-0">서비스 한눈에 보기</span>
        </div>
        {/* 오른쪽: 본문 내용 */}
        <div className="w-full md:w-2/3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
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
        className="py-16 px-4 bg-white max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <Sparkles className="mx-auto mb-4 w-10 h-10 text-indigo-500" />
              ),
              title: "AI 구도 추천",
              desc: "얼굴 간격과 배치를 분석해 최적의 단체사진 구도를 추천해요.",
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
              <Card className="shadow-sm">
                <CardContent className="py-8 text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Demo Section with Horizontal Gallery */}
      <motion.section
        className="py-20 px-4 bg-zinc-50 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">앱 미리보기</h2>
        <section className="bg-white py-12">
          <HorizontalGallery />
        </section>
      </motion.section>

      {/* 팀 소개 */}
      <motion.section
        className="px-6 md:px-24 py-16 bg-white text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Team. 단무지</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">김혜령</span>{" "}
            <span className="text-gray-500">[Backend, Design]</span>
          </div>
          <div>
            <span className="font-semibold">변우진</span>{" "}
            <span className="text-gray-500">[Front-End]</span>
          </div>
          <div>
            <span className="font-semibold">심재환</span>{" "}
            <span className="text-gray-500">[AI, Back-End]</span>
          </div>
        </div>
      </motion.section>

      {/* 푸터 */}
      <motion.footer
        className="text-center text-sm text-gray-500 py-10"
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
