export function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">加納 英樹</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#works" className="hover:text-blue-600">Works</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-20">
        {/* About Section */}
        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* 顔写真 */}
            <div className="grid place-items-center min-w-48">
              <img
                src="profile.jpg"
                alt="profile"
                className="w-48 h-48 rounded-full object-cover shadow-md"
              />
            </div>
            {/* 自己紹介テキスト */}
            <p className="text-lg leading-relaxed">
            京都大学大学院修了後、2020年リクルートに新卒入社。
            本業はフロントエンドエンジニアとして新規開発、パフォーマンスチューニング、リプレイス案件のチームリーダーを行いつつ、
            副業先ではゲーミフィケーションを活用した社会課題解決に取り組んでいる。
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-4">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <li className="bg-white shadow rounded-lg p-4 text-center">JavaScript</li>
            <li className="bg-white shadow rounded-lg p-4 text-center">TypeScript</li>
            <li className="bg-white shadow rounded-lg p-4 text-center">React</li>
            <li className="bg-white shadow rounded-lg p-4 text-center">Next.js</li>
            <li className="bg-white shadow rounded-lg p-4 text-center">GraphQL</li>
            <li className="bg-white shadow rounded-lg p-4 text-center">Intel SGX</li>
            <li className="bg-white shadow rounded-lg p-4 text-center">CUDA</li>
          </ul>
        </section>

        {/* Works Section */}
        <section id="works" className="space-y-6">
          <h2 className="text-3xl font-semibold">Works</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="grid place-items-center text-3xl w-full h-[200px]">No Image</div>
              {/*
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project1"
                className="w-full h-40 object-cover"
              />
              */}
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">おおいもん勝ち~渋滞緩和ゲーム!!~</h3>
                <p className="text-sm text-gray-600">
                  道路渋滞という社会課題を、ゲーミフィケーションの仕組みを利用して
                  解決しようとしたアプリの制作。
                </p>
                <a
                  href="https://oimongachi.jimdofree.com/"
                  className="text-blue-600 hover:underline text-sm"
                >
                  説明ページ
                </a>
              </div>
            </div>
            {/*
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Project Title 2</h3>
                <p className="text-sm text-gray-600">
                  プロジェクトの概要説明。どんな課題を解決したかを簡潔に。
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm"
                >
                  GitHub / Demo
                </a>
              </div>
            </div>
            */}
          </div>
        </section>

        {/* article section */}
        <section id="article" className="space-y-6">
          <h2 className="text-3xl font-semibold">投稿記事</h2>
          <ul className="list-disc pl-4">
            <li>
              <a href="https://techblog.recruit.co.jp/article-1146/" className="text-blue-600 hover:underline">「SP版サロンボード」へのGraphQL導入と考察</a>
            </li>
            <li>
              <a href="https://techblog.recruit.co.jp/article-4677/" className="text-blue-600 hover:underline">Reactの再レンダリング抑制でINPを6倍早くした話</a>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p>Email: kano.hideki.b@gmail.com</p>
          <p>GitHub: <a href="https://github.com/anddev68" className="text-blue-600 hover:underline">anddev68</a></p>
          <p>Facebbok: <a href="https://www.facebook.com/hideki.kano.77" className="text-blue-600 hover:underline">hideki.kano</a></p>
          <p>Qiita: <a href="https://qiita.com/hkano2022" className="text-blue-600 hover:underline">hkano2022</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © 2025 Hideki Kano
      </footer>
    </div>
  );
}