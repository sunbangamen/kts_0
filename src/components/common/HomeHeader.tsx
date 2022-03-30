import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

// 로그인 레이아웃 템플릿의 헤더영역 표시
function HomeHeader() {
  return (
    <div className={styles.align_center}>
      <Link to="/">홈</Link>
    </div>
  );
}

export default HomeHeader;
