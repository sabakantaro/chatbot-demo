const defaultDataset = {
  init: {
    answers: [
      { content: "パーソナルトレーニングを依頼したい", nextId: "job_offer" },
      {
        content: "笑いのキャリアについて相談したい",
        nextId: "consultant",
      },
      { content: "学習コミュニティについて知りたい", nextId: "community" },
      { content: "結婚したい", nextId: "dating" },
    ],
    question: "こんにちは！💪きんにくんへのご用件はなんでしょうか？",
  },
  job_offer: {
    answers: [
      { content: "暑い胸板を制作してほしい", nextId: "website" },
      { content: "筋トレアプリを開発してほしい", nextId: "webapp" },
      {
        content: "筋トレ自動化ツールを作ってほしい",
        nextId: "automation_tool",
      },
      { content: "その他", nextId: "other_jobs" },
    ],
    question: "どのようなメニューでしょうか？",
  },
  website: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "暑い胸板ですね。コチラからお問い合わせできます。",
  },
  webapp: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "筋トレアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  automation_tool: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "筋トレ自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  other_jobs: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "その他についてですね。コチラからお問い合わせできます。",
  },
  consultant: {
    answers: [
      {
        content: "YouTubeで動画を見る",
        nextId: "https://www.youtube.com/channel/UCOUu8YlbaPz0W2TyFTZHvjA",
      },
      { content: "学習コミュニティについて知りたい", nextId: "community" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "ようこそ、きんにくTVへ！パワー！",
  },
  community: {
    answers: [
      { content: "どんな活動をしているの？", nextId: "community_activity" },
      {
        content: "コミュニティに参加したい",
        nextId: "https://www.instagram.com/nakayama_kinnikun/?hl=ja",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "ボディビル本業、お笑い副業でやっております。",
  },
  community_activity: {
    answers: [
      {
        content: "さらに詳細を知りたい",
        nextId: "https://www.instagram.com/nakayama_kinnikun/?hl=ja",
      },
      {
        content: "コミュニティに参加したい",
        nextId: "https://www.instagram.com/nakayama_kinnikun/?hl=ja",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "筋トレ初心者から上級者まで役立つ筋トレ情報、そして笑いを届けております！\n詳細はYouTube動画で紹介しています。",
  },
  dating: {
    answers: [
      {
        content: "DMする",
        nextId: "https://www.instagram.com/nakayama_kinnikun/?hl=ja",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "結婚許すのか許さないのか、どっちなーんだい！？許ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーす！パワー！",
  },
};

export default defaultDataset;
