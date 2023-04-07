import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>승귤은 누구인가?</h1>
      <Link to="/">홈으로</Link>
      <p>2022 업데이트 </p>
      <p>동경, 선릉, 부산, 판교 시즌 4 : 카카오엔터테인먼트에서 백엔드 개발자로 활동중</p>
      <p>무엇이든 물어보세요~! https://asked.kr/wapj2000</p>
      <p>파이썬강의 http://kko.to/andy-python</p>
    </main>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;
export default AboutPage;
