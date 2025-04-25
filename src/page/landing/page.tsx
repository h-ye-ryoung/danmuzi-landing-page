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
        <motion.h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          단무지
        </motion.h1>
        <motion.p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto mb-6">
          AI가 단체사진 구도를 잡아주고, 지인들과 쉽게 공유할 수 있는 스마트한
          사진 앱!
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
        whileInView={{ opacity: 1, y: 0 }}
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
