import React, { useState } from 'react'

const Test02 = () => {
    // 문제 1-1: 로딩 상태를 관리할 'loading' state를 선언하세요.
    // 초기값은 'true'로 설정하여 컴포넌트가 처음 보일 때 로딩 상태가 되도록 합니다.
    const [posts, setPosts] = useState([]);

    // 문제 2: axios를 사용하여 아래 API 주소에서 게시글 데이터를 가져오는 코드를 작성하세요.
    // `GET` 요청을 보내고, 응답(response) 데이터는 `response.data`에 담겨있습니다.
    // API 주소: 'https://test.com/posts'
    // 만약 error가 감지되면 'loading' state를 'false'로 변경하는 코드를 여기에 작성하세요.

    return (
        <div className="board-container">
            <h1 className="board-title">게시판</h1>
            <div className="post-list">
                {posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
        // loading state가 false면 p태그를 사용해 '로딩 중입니다...'라는 내용이 나오도록 하세요.
    )
}

export default Test02