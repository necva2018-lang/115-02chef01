import React from 'react';
import { FAQItem, FeatureItem, StepItem, PricingPlan } from './types';
import { 
  ChefHat, 
  Target, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  Flame,
  Utensils,
  ClipboardCheck
} from 'lucide-react';

export const HERO_TITLE = "中餐烹調丙級證照保證班";
export const HERO_SUBTITLE = "從零開始・業界認可・最後一定過";
export const HERO_DESC = "這不是一般的廚藝興趣班，這是為了「讓你拿證照」而生的戰略訓練。100% 考試導向，獨家 72 道菜全覆蓋，消除所有考試焦慮。";

export const FEATURES: FeatureItem[] = [
  {
    title: "72道指定菜全覆蓋",
    description: "不賭運氣，系統化練習全部 72 道指定菜。真正的風險是「抽到不熟的」，我們做到「準備到不用賭」。",
    icon: "BookOpen"
  },
  {
    title: "衛生高壓訓練",
    description: "衛生錯誤扣 41 分即出局。我們將洗切順序、消毒流程訓練成你的「本能」，避開所有隱形殺手。",
    icon: "ShieldCheck"
  },
  {
    title: "刀工與火候拆解",
    description: "從零教起，第一堂課即奠定刀工基礎。針對炸、滑炒、溜、燴等容易翻車的環節進行模組化訓練。",
    icon: "Utensils"
  },
  {
    title: "考前雙模擬考",
    description: "完整模擬學科與術科流程。讓你在正式考試前就已經「完整考過一次」，消除臨場心臟爆擊的壓力。",
    icon: "ClipboardCheck"
  }
];

export const TARGET_AUDIENCE: StepItem[] = [
  {
    number: "01",
    title: "完全零基礎者",
    description: "不用擔心連刀都不會拿。透過流程化教學與刀工分解，從最基礎開始穩紮穩打。"
  },
  {
    number: "02",
    title: "需補證照的餐飲從業者",
    description: "直接拆解評分點，強化容易被扣分的細節，解決您沒時間試錯的問題，快速拿證。"
  },
  {
    number: "03",
    title: "目標明確者",
    description: "透過高壓流程訓練降低不確定性，將通過考試從「賭運氣」轉化為「可複製的結果」。"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "這個課程與市面上的烹飪興趣班有何根本區別？",
    answer: "我們的核心定位是「考試導向」。市面課程多為創意或興趣教學，而我們專注於利用制度將學員送過關。每一道菜、每一個動作都是為了「得分」而存在，而非僅僅是為了好吃。"
  },
  {
    question: "我完全沒有餐飲背景，連刀都不太會拿，真的能學嗎？",
    answer: "絕對可以。我們採用「流程化教學」，第一堂課就專注於「刀工技法」，讓肉絲、肉丁、魚片等粗細一致，穩固基本分。老師不只教你怎麼做，更會教你「怎樣做才會得分」。"
  },
  {
    question: "術科考試採抽題制，如果抽到不熟悉的菜色怎麼辦？",
    answer: "真正的風險是「抽到不熟的」。我們的解決方案是「72道指定菜全覆蓋」，不賭題。課程排程完全依據考試題組設計，確保您面對任何考題都能從容應對。"
  },
  {
    question: "衛生和流程錯誤容易被扣分，如何避免？",
    answer: "術科考試中，衛生錯誤一次扣 41 分即不及格。我們進行「衛生與流程重點訓練」，強化洗切順序、器具消毒及防止交叉污染，將這些流程訓練成您的直覺反應。"
  },
  {
    question: "課程如何模擬正式考試？",
    answer: "課程後段安排「考前雙模擬考」，包含學科與術科完整流程及時間控管。這能讓您在考前就經歷過一次完整的考試壓力測試，進場時就像在「重播」。"
  },
  {
    question: "課程排程是否能配合我的考試計畫？",
    answer: "我們的排程直接對齊考試年度節奏（1月、4月、8月檢定）。課程內容就是題組式訓練，上完課後即可無縫銜接考試。"
  }
];

export const PRICING: PricingPlan = {
  title: "全方位保證班",
  price: "NT$ 19,500",
  note: "可選擇 6 期無息分期付款",
  features: [
    "72道指定菜色全實作",
    "刀工與火候模組化特訓",
    "衛生流程高壓除錯",
    "兩次完整模擬考 (學科+術科)",
    "協助報名與行政流程",
    "提供專業講義與考試攻略"
  ]
};

// Helper to get icon component
export const getIcon = (name: string) => {
  switch (name) {
    case 'BookOpen': return <BookOpen className="w-8 h-8 text-primary" />;
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-primary" />;
    case 'Utensils': return <Utensils className="w-8 h-8 text-primary" />;
    case 'ClipboardCheck': return <ClipboardCheck className="w-8 h-8 text-primary" />;
    default: return <ChefHat className="w-8 h-8 text-primary" />;
  }
};