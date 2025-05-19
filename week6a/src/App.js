/*import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    setError(null);
    setData(null);
    setLoading(true);

      const response = await axios.get("https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst", {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 10,
          pageNo: 1,
          dataType: "JSON",
          regId: "11B10101",
          tmFc: "202505131800"
        }
      });

      setData(response.data);
    } catch (e) {
      setError(e);
      console.error(e);
      console.log("API KEY:", process.env.REACT_APP_API_KEY);
      console.log("data:", data);
      console.log("item:", data?.response?.body?.items?.item);

    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data) return null;

  return (
    <div>
      <h1>중기예보 정보</h1>
      {data.response?.body?.items?.item?.length > 0 ? (
        <div>
          {data.response.body.items.item.map((item, index) => (
            <div key={index}>
              <p><strong>예보 시간:</strong> {item.tmFc}</p>
              <p><strong>지역 코드:</strong> {item.regId}</p>
              <p><strong>날씨 설명:</strong> {item.wfSv}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default App;*/

import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("fetchData 실행됨");
    try {
      setLoading(true);
      setError(null);
      setData(null);

      const response = await axios.get('http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst', {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 10,
          pageNo: 1,
          dataType: "JSON",
          regId: "11B10101",
          tmFc: "202505141800" 
        }
      });

      console.log("응답 데이터:", response.data);
      setData(response.data);
    } catch (e) {
      console.error("API 오류:", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: 데이터를 불러오지 못했습니다.</div>;
  if (!data) return null;

  return (
    <div>
      <h1>중기예보 정보</h1>
      {data.response?.body?.items?.item?.length > 0 ? (
        <div>
          {data.response.body.items.item.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem", padding: "10px", border: "1px solid #ccc" }}>
              <p><strong>예보 시간:</strong> {item.tmFc}</p>
              <p><strong>지역 코드:</strong> {item.regId}</p>
              <p><strong>날씨 설명:</strong> {item.wf8Am}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default App;




