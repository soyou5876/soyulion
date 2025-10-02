import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Test = () => {
    // 문제 1: 게시글 목록을 저장할 state와 에러 상태를 관리할 state를 선언하세요.

    // 문제 2: axios를 사용하여 아래 API 주소에서 게시글 데이터를 가져오는 코드를 작성하세요.
    // `GET` 요청을 보내고, 응답(response) 데이터는 `response.data`에 담겨있습니다.
    // API 주소: 'https://test.com/posts'

    return (
        <div className='Test_wrap'>
            <div className="board_container">
                <h1 className="board-title">게시판</h1>
                <div className="post-list">
                    {/*
                        문제 3: `posts` 배열을 `map` 함수를 이용해 순회하면서 각 게시글을 렌더링하세요.
                        - 각 게시글(post)을 위한 최상위 태그는 `div`를 사용하고, `key` 속성으로 고유한 `post.id`를 지정해야 합니다.
                        - `div` 내부에 `h2` 태그로 `post.title` (제목)을 표시하세요.
                        - `h2` 태그 아래에 `p` 태그로 `post.body` (내용)를 표시하세요.
                    */}
                </div>
            </div>
        </div>
    )
}

export default Test