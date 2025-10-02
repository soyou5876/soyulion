import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test03 = () => {
    // 문제 1-1: 로딩 상태를 관리할 'loading' state를 선언하세요.
    // 초기값은 'true'로 설정하여 컴포넌트가 처음 보일 때 로딩 상태가 되도록 합니다.
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 문제 2: axios를 사용하여 아래 API 주소에서 게시글 데이터를 가져오는 코드를 작성하세요.
    // `GET` 요청을 보내고, 응답(response) 데이터는 `response.data`에 담겨있습니다.
    // API 주소: 'https://test.com/posts'
    // 만약 error가 감지되면 'loading' state를 'false'로 변경하는 코드를 여기에 작성하세요.
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await axios.get('https://test.com/posts');
                setPosts(response.data);
            } catch(error){
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="board-container">
            <h1 className="board-title">게시판</h1>
            <div className="post-list">
                {/*
                    문제 3: `posts` 배열을 `map` 함수를 이용해 순회하면서 각 게시글을 렌더링하세요.
                    - 각 게시글(post)을 위한 최상위 태그는 `div`를 사용하고, `key` 속성으로 고유한 `post.id`를 지정해야 합니다.
                    - `div` 내부에 `h2` 태그로 `post.title` (제목)을 표시하세요.
                    - `h2` 태그 아래에 `p` 태그로 `post.body` (내용)를 표시하세요.
                */}
                {posts.map((post) => (
                    <div key={post.id}>
                       <h2>{post.title}</h2> 
                       <p>{post.body}</p>
                       </div>
                ))}
            </div>
             // loading state가 false면 p태그를 사용해 '로딩 중입니다...'라는 내용이 나오도록 하세요.
        {!loading && <p>로딩 중입니다...</p>}
        </div>
       
    )
}

export default Test03